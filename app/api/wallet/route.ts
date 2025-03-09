import { NextResponse } from "next/server";
import { createSmartWallet } from "@coinbase/coinbase-sdk";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";
import initCoinbaseSdk from "@/lib/coinbase/client";
import executeFaucet from "@/lib/coinbase/executeFaucet";
import executeEthTransfer from "@/lib/coinbase/executeEthTransfer";
import getWallet from "@/lib/coinbase/getWallet";

export async function GET() {
  try {
    initCoinbaseSdk();
    const privateKey = generatePrivateKey();
    const owner = privateKeyToAccount(privateKey);
    const smartWallet = await createSmartWallet({
      signer: owner,
    });
    const wallet = await getWallet();
    const faucetTransaction = await executeFaucet(wallet);
    const smartWalletAddress = smartWallet.address;
    const transfer = await executeEthTransfer(wallet, smartWalletAddress);
    return NextResponse.json({
      success: true,
      smartWalletAddress,
      faucetTransactionHash: faucetTransaction.getTransactionHash(),
      transferHash: transfer.getTransactionHash(),
    });
  } catch (error) {
    console.error("Error fetching wallet public key:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to retrieve wallet public key",
      },
      { status: 500 }
    );
  }
}
