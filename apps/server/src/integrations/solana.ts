import { config } from "dotenv";

config()

const HELIUS_API_KEY = process.env.HELIUS_API_KEY!;

import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

export async function getBalances(address: string, mode: 'devnet' | 'mainnet') {
  const rpcUrl = `https://${mode}.helius-rpc.com/?api-key=${HELIUS_API_KEY}`;
  const connection = new Connection(rpcUrl, 'confirmed');
  const accountPubKey = new PublicKey(address);

  try {
    const lamports = await connection.getBalance(accountPubKey);
    const sol = lamports / LAMPORTS_PER_SOL;

    console.log(`Account PubKey: ${accountPubKey.toBase58()}`);
    console.log(`Balance (Lamports): ${lamports}`);
    console.log(`Balance (SOL): ${sol}`);

    return sol;

  } catch (error) {
    console.error('Error fetching balance:', error);
  }
}

export async function getNFTs(address: string) {
  const res = await fetch(
    `https://api.helius.xyz/v0/addresses/${address}/nfts?api-key=${HELIUS_API_KEY}`
  );
  const data = await res.json();
  return data.nfts.map((nft: any) => ({
    name: nft.name,
    mint: nft.mint,
    image: nft.image,
    collection: nft.collection,
  }));
}

export async function getRecentTransactions(address: string, limit = 10) {
  const res = await fetch(
    `https://api.helius.xyz/v0/addresses/${address}/transactions?api-key=${HELIUS_API_KEY}&limit=${limit}`
  );
  const data = await res.json();
  return data.map((tx: any) => ({
    signature: tx.signature,
    type: tx.type,
    timestamp: tx.timestamp,
    fee: tx.fee / 1e9,
  }));
}

