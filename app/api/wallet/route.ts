import { NextResponse } from "next/server";
import wallet from "@/lib/coinbase/client";

export async function GET() {
  try {
    // Get the wallet's public key
    const publicKey = await wallet.getDefaultAddress();

    // Return the public key in the response
    return NextResponse.json({
      success: true,
      publicKey,
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
