import { config } from "dotenv";
import { Ops } from "../types/workflow.type"
import { PubSub } from "@google-cloud/pubsub";

config()

const topicName = process.env.TOPIC_NAME;

export const createGmailWatch = async (webhook: string, accessToken: string, ops: Ops) => {

    console.log("inside create gmail watch");

    const watchRequest = {
        topicName: topicName,
        labelIds: ['INBOX'],
    };

    const url = `https://gmail.googleapis.com/gmail/v1/users/me/watch`;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(watchRequest),
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error("Gmail Watch API Error:", errorText);
        throw new Error("Failed to set up Gmail watch: " + errorText);
    }

    const data = await response.json();
    console.log(`Gmail Watch set successfully. Expiration: ${new Date(data.expiration)}`);

    return data;

}

const pubsub = new PubSub({
    projectId: process.env.GCP_PROJECT_ID,
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS, // Path to service account JSON
});

export const createPubSubSubscription = async (nodeId: string) => {
    console.log("inside pub sub creation")
    const topicName = process.env.TOPIC_NAME!;
    const subscriptionName = `gmail-sub-${nodeId}`; // unique per workflow node
    const pushEndpoint = `${process.env.BACKEND_URL}/api/v1/trigger/get/gmail/${nodeId}`;
  
    const topic = pubsub.topic(topicName);
  
    try {
      const [subscription] = await topic.createSubscription(subscriptionName, { 
        pushConfig: {
          pushEndpoint,
        },
        ackDeadlineSeconds: 10,
      });
  
      console.log(`✅ Created Pub/Sub subscription ${subscriptionName} → ${pushEndpoint}`);
      return subscription;
    } catch (error: any) {
      if (error.code === 6) {
        console.log(`ℹ️ Subscription ${subscriptionName} already exists.`);
        return;
      }
      console.error("Error creating Pub/Sub subscription:", error);
      throw error;
    }
  };

  import { google } from "googleapis";

export async function sendEmail( to: string, subject: string, message: string, accessToken: string, refreshToken: string ) {
    const oAuth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI // e.g. "https://yourapp.com/oauth2callback"
    );
  
    oAuth2Client.setCredentials({
      access_token: accessToken,
      refresh_token: refreshToken,
    });
  
    const gmail = google.gmail({ version: "v1", auth: oAuth2Client });
  
    // Create raw email (RFC 2822 format)
    const rawMessage = [
      `To: ${to}`,
      'Content-Type: text/html; charset=UTF-8',
      `Subject: ${subject}`,
      '',
      message,
    ].join('\n');
  
    // Gmail expects base64url encoding
    const encodedMessage = Buffer.from(rawMessage)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  
    // Send the email
    const res = await gmail.users.messages.send({
      userId: 'me',
      requestBody: { raw: encodedMessage },
    });
  
    return res.data;
  }
  