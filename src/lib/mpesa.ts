const DARAJA_BASE_URL = process.env.MPESA_ENV === "production"
  ? "https://api.safaricom.co.ke"
  : "https://sandbox.safaricom.co.ke";

// Get OAuth access token from Daraja
export async function getDarajaToken(): Promise<string> {
  const credentials = Buffer.from(
    `${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`
  ).toString("base64");

  const res = await fetch(
    `${DARAJA_BASE_URL}/oauth/v1/generate?grant_type=client_credentials`,
    {
      headers: { Authorization: `Basic ${credentials}` },
      cache: "no-store",
    }
  );

  const data = await res.json();
  return data.access_token;
}

// Generate Daraja password (base64 of shortcode+passkey+timestamp)
export function getDarajaPassword(timestamp: string): string {
  const raw = `${process.env.MPESA_SHORTCODE}${process.env.MPESA_PASSKEY}${timestamp}`;
  return Buffer.from(raw).toString("base64");
}

// Format timestamp as YYYYMMDDHHmmss
export function getTimestamp(): string {
  return new Date()
    .toISOString()
    .replace(/[-T:.Z]/g, "")
    .slice(0, 14);
}

// Trigger STK Push (sends payment prompt to user's phone)
export async function triggerSTKPush({
  phone,
  amount,
  orderRef,
}: {
  phone: string;
  amount: number;
  orderRef: string;
}) {
  const token = await getDarajaToken();
  const timestamp = getTimestamp();
  const password = getDarajaPassword(timestamp);

  // Normalise phone: 0712... → 254712...
  const normalised = phone.startsWith("0")
    ? `254${phone.slice(1)}`
    : phone.startsWith("+")
    ? phone.slice(1)
    : phone;

  const payload = {
    BusinessShortCode: process.env.MPESA_SHORTCODE,
    Password: password,
    Timestamp: timestamp,
    TransactionType: "CustomerPayBillOnline",
    Amount: Math.round(amount),
    PartyA: normalised,
    PartyB: process.env.MPESA_SHORTCODE,
    PhoneNumber: normalised,
    CallBackURL: `${process.env.NEXT_PUBLIC_APP_URL}/api/mpesa/callback`,
    AccountReference: orderRef,
    TransactionDesc: `Amazing Marketplace - ${orderRef}`,
  };

  const res = await fetch(
    `${DARAJA_BASE_URL}/mpesa/stkpush/v1/processrequest`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  return res.json();
}
