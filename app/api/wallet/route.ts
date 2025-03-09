import { NextResponse } from "next/server";
import { createSmartWallet } from "@coinbase/coinbase-sdk";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";
import initCoinbaseSdk from "@/lib/coinbase/client";

export async function GET() {
  try {
    initCoinbaseSdk();
    const privateKey = generatePrivateKey();
    const owner = privateKeyToAccount(privateKey);
    const smartWallet = await createSmartWallet({
      signer: owner,
    });
    // Get the smart wallet address
    const smartWalletAddress = smartWallet.address;

    return NextResponse.json({
      success: true,
      smartWalletAddress,
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
