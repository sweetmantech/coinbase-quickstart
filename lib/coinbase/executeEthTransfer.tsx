import { Coinbase, Wallet } from "@coinbase/coinbase-sdk";
import { Address } from "viem";

const executeEthTransfer = async (wallet: Wallet, destination: Address) => {
  const transfer = await wallet.createTransfer({
    amount: 0.00001,
    assetId: Coinbase.assets.Eth,
    destination: destination,
  });

  await transfer.wait();

  return transfer;
};

export default executeEthTransfer;
