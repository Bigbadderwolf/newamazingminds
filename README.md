# New Amazing Minds Africa 🌍
**newamazingminds.org** — Mental Health · Art · Talent · Youth

## Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
```bash
cp .env.local.example .env.local
```
Fill in your values in `.env.local`:
- **Supabase**: supabase.com → New Project → Settings → API
- **Gemini (FREE)**: aistudio.google.com → Get API Key
- **Cloudinary (FREE)**: cloudinary.com → Dashboard
- **M-Pesa Daraja**: developer.safaricom.co.ke (sandbox keys included in example)

### 3. Run Supabase SQL schema
Go to Supabase → SQL Editor → paste `SUPABASE_ALL_SCHEMAS.sql` → Run

### 4. Add Supabase Auth redirect URL
Supabase → Authentication → URL Configuration → Add:
`http://localhost:3000/auth/callback`

### 5. Run the dev server
```bash
npm run dev
```
Open http://localhost:3000

### 6. Deploy
See `DEPLOY_GUIDE.md` for full Vercel + domain setup.

---

## Tech Stack
| Tool | Purpose | Cost |
|------|---------|------|
| Next.js 14 | Frontend + Backend | Free |
| Supabase | Database + Auth | Free |
| Google Gemini 1.5 Flash | Amazing AI | Free |
| Cloudinary | Image uploads | Free |
| M-Pesa Daraja | Payments | Free (% per txn) |
| Vercel | Hosting | Free |
| Domain | newamazingminds.org | ~$12/year |

## Key URLs
- `/` — Homepage
- `/chat` — Amazing AI (mental health assistant)
- `/marketplace` — Buy/sell art via M-Pesa
- `/entertainment` — Stream African content
- `/circles` — Peer support groups
- `/clubs` — Local community clubs
- `/admin` — Admin dashboard (requires sign in)
