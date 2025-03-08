import { NextResponse } from "next/server";
import wallet from "@/lib/coinbase/client";

export async function GET() {
  try {
    const publicKey = await wallet.getDefaultAddress();

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
