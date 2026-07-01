import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  // Verify user is authenticated
  const cookieStore = cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll(); },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {}
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slot } = await req.json();
  const timestamp = Math.round(Date.now() / 1000);
  const folder = "newamazingminds/hero";
  const apiSecret = process.env.CLOUDINARY_API_SECRET!;

  // Generate Cloudinary signature
  const params = `folder=${folder}&public_id=${slot}&timestamp=${timestamp}`;
  const signature = crypto
    .createHash("sha256")
    .update(params + apiSecret)
    .digest("hex");

  return NextResponse.json({
    signature,
    timestamp: String(timestamp),
    apiKey: process.env.CLOUDINARY_API_KEY,
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    folder,
  });
}
