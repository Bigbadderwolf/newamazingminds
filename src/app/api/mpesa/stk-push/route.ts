import { NextRequest, NextResponse } from "next/server";
import { triggerSTKPush } from "@/lib/mpesa";

export async function POST(req: NextRequest) {
  try {
    const { phone, amount, orderRef } = await req.json();

    if (!phone || !amount || !orderRef) {
      return NextResponse.json(
        { error: "Missing required fields: phone, amount, orderRef" },
        { status: 400 }
      );
    }

    if (amount < 1) {
      return NextResponse.json(
        { error: "Amount must be at least KES 1" },
        { status: 400 }
      );
    }

    const result = await triggerSTKPush({ phone, amount, orderRef });

    // Daraja returns ResponseCode "0" for success
    if (result.ResponseCode === "0") {
      return NextResponse.json({ success: true, data: result });
    }

    return NextResponse.json(
      { success: false, errorMessage: result.errorMessage || "STK Push failed" },
      { status: 400 }
    );
  } catch (error) {
    console.error("STK Push error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
