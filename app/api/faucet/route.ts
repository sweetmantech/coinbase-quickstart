import { NextResponse } from "next/server";
import getWallet from "@/lib/coinbase/getWallet";

export async function GET() {
  try {
    // Use the Coinbase SDK to request funds from the faucet for the provided address
    const wallet = await getWallet();
    const faucetTransaction = await wallet.faucet();

    // Wait for the transaction to be confirmed
    await faucetTransaction.wait();

    return NextResponse.json({
      success: true,
      transactionHash: faucetTransaction.getTransactionHash(),
      message: "Wallet funded successfully",
    });
  } catch (error) {
    console.error("Error funding wallet:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fund wallet",
      },
      { status: 500 }
    );
  }
}
