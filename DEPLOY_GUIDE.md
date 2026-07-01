# 🚀 DEPLOY GUIDE — newamazingminds.org
Complete step-by-step guide to go live on Vercel.

---

## BEFORE YOU START — Checklist
Make sure all phases (1–8) are integrated and `npm run dev` runs without errors locally.

---

## STEP 1 — Push your project to GitHub

Open Windsurf terminal and run:

```bash
cd newamazingminds
git init
git add .
git commit -m "Initial commit — Amazing Minds Africa complete build"
```

Create a new repository at github.com:
- Go to github.com → New Repository
- Name it: newamazingminds
- Set to Private
- Do NOT initialise with README

Then connect and push:
```bash
git remote add origin https://github.com/YOURUSERNAME/newamazingminds.git
git branch -M main
git push -u origin main
```

---

## STEP 2 — Create a Supabase Production Project

1. Go to supabase.com → New Project
2. Name it: newamazingminds-prod
3. Choose a region close to Kenya: eu-west-2 (London) or me-south-1 (Bahrain)
4. Save your password securely
5. Go to Settings → API → copy:
   - Project URL
   - anon public key
   - service_role key (keep secret!)
6. Run ALL SQL schemas from phases 4–8 in the SQL Editor of this prod project

---

## STEP 3 — Deploy to Vercel

1. Go to vercel.com → Sign up with GitHub
2. Click "Add New Project"
3. Import your newamazingminds repository
4. Framework: Next.js (auto-detected)
5. Root directory: leave as default
6. Click "Environment Variables" and add ALL variables from .env.production.example
7. Click "Deploy"

Wait ~2 minutes. Vercel will build and deploy automatically.
You'll get a free URL like: newamazingminds.vercel.app

---

## STEP 4 — Buy and connect your domain

### Buy the domain
Go to namecheap.com (recommended — cheapest .org prices):
- Search for: newamazingminds.org
- Add to cart and purchase (~$10–13/year)

### Connect to Vercel
1. In Vercel → your project → Settings → Domains
2. Click "Add Domain"
3. Type: newamazingminds.org
4. Vercel shows you DNS records to add

### Add DNS records in Namecheap
1. Go to Namecheap → Domain List → Manage → Advanced DNS
2. Add these records from Vercel:
   - Type: A | Host: @ | Value: 76.76.21.21
   - Type: CNAME | Host: www | Value: cname.vercel-dns.com
3. Save changes
4. Wait 5–30 minutes for DNS to propagate

SSL certificate is automatic — Vercel handles it for free.

---

## STEP 5 — Update Supabase Auth redirect URLs

1. Go to Supabase prod project → Authentication → URL Configuration
2. Add these to "Redirect URLs":
   - https://newamazingminds.org/auth/callback
   - https://www.newamazingminds.org/auth/callback
3. Set Site URL to: https://newamazingminds.org
4. Save

---

## STEP 6 — Switch M-Pesa to Production

1. Go to developer.safaricom.co.ke
2. Go to your app → Go Live
3. Fill in the Go-Live form (business details, paybill/till number)
4. Safaricom reviews within 1–3 business days
5. Once approved, get your production keys
6. Update in Vercel env vars:
   - MPESA_CONSUMER_KEY → production key
   - MPESA_CONSUMER_SECRET → production secret
   - MPESA_SHORTCODE → your registered shortcode
   - MPESA_PASSKEY → production passkey
   - MPESA_ENV → production
7. Redeploy in Vercel → Deployments → Redeploy

NOTE: While waiting for M-Pesa Go-Live, the site works fully
except real payments. Sandbox still works for testing.

---

## STEP 7 — Verify everything is live

Visit https://newamazingminds.org and check:

- [ ] Homepage loads with all sections
- [ ] Navbar links all work
- [ ] /chat — Amazing AI responds
- [ ] /marketplace — products load, cart works
- [ ] /entertainment — videos play
- [ ] /auth/signup — can create account
- [ ] /auth/signin — can sign in
- [ ] /admin — redirects to sign in if not logged in
- [ ] SSL padlock shows in browser
- [ ] Site loads on mobile

---

## STEP 8 — Set up auto-deployments (already done!)

Every time you push to GitHub main branch, Vercel auto-deploys.
No manual steps needed for future updates:

```bash
git add .
git commit -m "Update: description of change"
git push
```

Vercel deploys in ~60 seconds automatically.

---

## OPTIONAL — Performance tips

### Enable Supabase connection pooling
Supabase → Settings → Database → Connection Pooling → enable

### Add Cloudinary auto-optimisation
In your image URLs, add f_auto,q_auto for automatic format and quality:
https://res.cloudinary.com/yourcloud/image/upload/f_auto,q_auto/...

### Google Analytics (free)
1. Create a GA4 property at analytics.google.com
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to your layout.tsx using next/script

---

## 🎉 YOU'RE LIVE!

newamazingminds.org is now a fully deployed web application with:
- Amazing AI chat (Gemini — free)
- Marketplace with M-Pesa payments
- Entertainment streaming
- Admin dashboard
- Auth (sign up / sign in)
- SEO optimised
- SSL secured
- Auto-deploys from GitHub

Total monthly cost at launch: ~$0
(Domain: ~$1/month averaged annually)
