import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const callback = body?.Body?.stkCallback;

    if (!callback) {
      return NextResponse.json({ error: "Invalid callback" }, { status: 400 });
    }

    const {
      MerchantRequestID,
      CheckoutRequestID,
      ResultCode,
      ResultDesc,
      CallbackMetadata,
    } = callback;

    // ResultCode 0 = success
    const success = ResultCode === 0;

    // Extract metadata items if payment succeeded
    let amount = 0;
    let mpesaRef = "";
    let phone = "";

    if (success && CallbackMetadata?.Item) {
      for (const item of CallbackMetadata.Item) {
        if (item.Name === "Amount") amount = item.Value;
        if (item.Name === "MpesaReceiptNumber") mpesaRef = item.Value;
        if (item.Name === "PhoneNumber") phone = String(item.Value);
      }
    }

    // Save transaction to Supabase
    const supabase = createClient();
    await supabase.from("mpesa_transactions").insert({
      merchant_request_id: MerchantRequestID,
      checkout_request_id: CheckoutRequestID,
      result_code: ResultCode,
      result_desc: ResultDesc,
      amount,
      mpesa_ref: mpesaRef,
      phone,
      success,
    });

    return NextResponse.json({ ResultCode: 0, ResultDesc: "Success" });
  } catch (error) {
    console.error("M-Pesa callback error:", error);
    return NextResponse.json({ ResultCode: 1, ResultDesc: "Failed" });
  }
}
