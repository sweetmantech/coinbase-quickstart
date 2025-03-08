import { Coinbase, Wallet } from "@coinbase/coinbase-sdk";

const apiKeyName = process.env.CDP_APP_KEY_ID;

const privateKey = process.env.CDP_SECRET;

if (!apiKeyName || !privateKey) {
  throw new Error("CDP_APP_KEY_NAME and CDP_SECRET must be set");
}

Coinbase.configure({
  apiKeyName: apiKeyName,
  privateKey: privateKey,
});

const wallet = await Wallet.create();

export default wallet;
