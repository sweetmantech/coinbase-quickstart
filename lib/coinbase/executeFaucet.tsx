import { Wallet } from "@coinbase/coinbase-sdk";

const executeFaucet = async (wallet: Wallet) => {
  const faucetTransaction = await wallet.faucet();
  await faucetTransaction.wait();
  return faucetTransaction;
};

export default executeFaucet;
