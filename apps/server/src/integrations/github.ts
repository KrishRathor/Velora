import fetch from "node-fetch";
import { Octokit } from "octokit";

export async function createPRTrigger(repoFullName: string, callbackUrl: string, accessToken: string) {
  console.log("heree");

  console.log(accessToken);

  const octokit = new Octokit({
    auth: accessToken
  })
  const [owner, repo] = repoFullName.split("/");

  const res = await octokit.request(`POST /repos/${owner}/${repo}/hooks`, {
    owner: owner,
    repo: repo,
    name: 'web',
    active: true,
    events: [
      'push',
      'pull_request'
    ],
    config: {
      url: callbackUrl,
      content_type: 'json',
      insecure_ssl: '0'
    },
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  console.log(res);

  return res.data;
}

export async function createIssueTrigger(repoFullName: string, callbackUrl: string, accessToken: string) {
  const res = await fetch(`https://api.github.com/repos/${repoFullName}/hooks`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "web",
      active: true,
      events: ["issues"],
      config: {
        url: callbackUrl,
        content_type: "json",
      },
    }),
  });
  return res.json();
}

export async function getPRDetails(repoFullName: string, prNumber: number, accessToken: string) {
  const res = await fetch(`https://api.github.com/repos/${repoFullName}/pulls/${prNumber}`, {
    headers: { Authorization: `Bearer ${accessToken}`, Accept: "application/vnd.github.v3+json" },
  });
  return res.json();
}

export async function addCommentToPR(repoFullName: string, prNumber: number, comment: string, accessToken: string) {
  const res = await fetch(`https://api.github.com/repos/${repoFullName}/issues/${prNumber}/comments`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ body: comment }),
  });
  return res.json();
}

export async function mergePR(repoFullName: string, prNumber: number, accessToken: string) {
  const res = await fetch(`https://api.github.com/repos/${repoFullName}/pulls/${prNumber}/merge`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

export async function createIssue(repoFullName: string, title: string, body: string, accessToken: string) {
  const res = await fetch(`https://api.github.com/repos/${repoFullName}/issues`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  });
  return res.json();
}

export async function listUserRepos(accessToken: string) {
  const res = await fetch(`https://api.github.com/user/repos`, {
    headers: { Authorization: `Bearer ${accessToken}`, Accept: "application/vnd.github.v3+json" },
  });
  return res.json();
}

