import { Wallet } from "@coinbase/coinbase-sdk";
import initCoinbaseSdk from "./client";

const getWallet = async () => {
  initCoinbaseSdk();
  return await Wallet.create();
};

export default getWallet;
