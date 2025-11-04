# Ontour Travels - Deployment Guide

## 🚀 Overview

This guide covers deploying the Ontour Travels website using **free tier** services. We'll walk through multiple deployment options so you can choose what works best for you.

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure:
- ✅ All code is committed to Git
- ✅ Environment variables are documented
- ✅ Build succeeds locally (`npm run build`)
- ✅ No console errors in production build
- ✅ Images are optimized
- ✅ API routes are tested

---

## 🌟 Recommended: Vercel (Easiest & Best for Next.js)

### Why Vercel?
- **Free tier**: Perfect for side projects and startups
- **Zero configuration**: Deploy in 2 minutes
- **Automatic HTTPS**: SSL certificates included
- **Global CDN**: Fast worldwide
- **Preview deployments**: Every Git push gets a preview URL
- **Built by Next.js creators**: Optimized for Next.js

### Free Tier Limits:
- ✅ Unlimited sites
- ✅ 100GB bandwidth/month
- ✅ Serverless functions
- ✅ Automatic HTTPS
- ✅ Custom domains

### Deployment Steps:

#### Option 1: Deploy via GitHub (Recommended)

1. **Push code to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/ontour-travels.git
git push -u origin main
```

2. **Sign up for Vercel**:
   - Go to https://vercel.com/signup
   - Sign up with GitHub account
   - Authorize Vercel to access your repositories

3. **Import Project**:
   - Click "Add New" → "Project"
   - Select your `ontour-travels` repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

4. **Done!** 🎉
   - Your site is live at: `https://ontour-travels.vercel.app`
   - Every Git push automatically deploys

#### Option 2: Deploy via CLI

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Login**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel
# Follow prompts, select options:
# - Link to existing project? No
# - Project name: ontour-travels
# - Directory: ./
# - Auto-detected Next.js? Yes
# - Override settings? No
```

4. **Deploy to production**:
```bash
vercel --prod
```

### Adding Environment Variables

1. Go to your project on Vercel dashboard
2. Settings → Environment Variables
3. Add your variables:
   - `NEXT_PUBLIC_API_URL` = `https://your-domain.vercel.app`
   - `RESEND_API_KEY` = `re_xxxxx` (when ready)
   - `PAYSTACK_SECRET_KEY` = `sk_test_xxxxx` (when ready)
4. Redeploy for changes to take effect

### Custom Domain

1. Go to Project Settings → Domains
2. Add your domain (e.g., `ontourtravels.com.ng`)
3. Follow DNS instructions (add A/CNAME records)
4. SSL certificate is automatically provisioned

**DNS Records for Custom Domain**:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 🚂 Alternative: Railway (Good for Full-Stack)

### Why Railway?
- **Free tier**: $5 credit/month (enough for small apps)
- **Supports backends**: Can deploy Node/Express + PostgreSQL
- **Simple setup**: Similar to Heroku
- **Database included**: Free PostgreSQL in free tier

### Free Tier Limits:
- $5 usage credit/month (auto-renews)
- Suitable for ~500 hours/month of compute
- 1GB RAM per service
- PostgreSQL included

### Deployment Steps:

1. **Sign up**:
   - Go to https://railway.app
   - Sign up with GitHub

2. **Create New Project**:
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Configure**:
   - Railway auto-detects Next.js
   - Click "Deploy Now"

4. **Add Domain**:
   - Settings → Domains → Generate Domain
   - Get free `.railway.app` domain
   - Or add custom domain

5. **Environment Variables**:
   - Variables tab → Add your env vars
   - Redeploy after adding variables

### Adding PostgreSQL:

1. **Add Database Service**:
   - Click "New" → "Database" → "PostgreSQL"
   - Railway provisions database automatically

2. **Get Connection String**:
   - Click PostgreSQL service → Connect
   - Copy `DATABASE_URL`

3. **Add to Environment**:
   - Go to your app service
   - Variables → Add `DATABASE_URL`
   - Value: (paste connection string)

4. **Run Migrations**:
```bash
# Locally with Railway CLI
railway run npm run migrate

# Or connect directly
psql $DATABASE_URL < schema.sql
```

---

## 🌊 Alternative: Netlify

### Why Netlify?
- **Free tier**: 100GB bandwidth/month
- **Form handling**: Built-in form submissions
- **Functions**: Serverless functions support
- **Continuous deployment**: Auto-deploy on Git push

### Free Tier Limits:
- 100GB bandwidth/month
- 300 build minutes/month
- Serverless functions (125k requests/month)

### Deployment Steps:

1. **Sign up**: https://app.netlify.com/signup
   - Connect GitHub account

2. **New Site from Git**:
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub, select repository

3. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Framework: Next.js

4. **Deploy**: Click "Deploy site"

5. **Environment Variables**:
   - Site settings → Environment variables
   - Add your variables

**Note**: Netlify has some limitations with Next.js App Router features. Vercel is recommended for Next.js projects.

---

## 🐳 Alternative: Docker + DigitalOcean/Fly.io

### Option 1: DigitalOcean App Platform

**Why DigitalOcean?**
- Reliable infrastructure
- $5/month for smallest tier (not free, but affordable)
- Easy scaling
- Database add-ons available

**Steps**:
1. Create Dockerfile (see LOCAL_SETUP_GUIDE.md)
2. Push to GitHub
3. Create DigitalOcean account
4. App Platform → Create App → Select repo
5. Configure build & deploy
6. Add environment variables
7. Deploy

### Option 2: Fly.io (Free Tier Available)

**Why Fly.io?**
- Generous free tier
- Deploy anywhere globally
- Full Docker support
- Free PostgreSQL

**Free Tier**:
- 3 VMs with 256MB RAM
- 3GB persistent storage
- 160GB bandwidth

**Steps**:

1. **Install flyctl**:
```bash
curl -L https://fly.io/install.sh | sh
```

2. **Login**:
```bash
fly auth login
```

3. **Launch app**:
```bash
fly launch
# Follow prompts
```

4. **Deploy**:
```bash
fly deploy
```

5. **Add PostgreSQL**:
```bash
fly postgres create
fly postgres attach <postgres-app-name>
```

---

## 🗄️ Database Hosting (Free Tiers)

### 1. Supabase (Recommended for PostgreSQL)

**Free Tier**:
- 500MB database
- 1GB file storage
- 2GB bandwidth/month
- Unlimited API requests

**Setup**:
1. Sign up: https://supabase.com
2. Create new project
3. Get connection string from Settings → Database
4. Add to environment variables:
   ```env
   DATABASE_URL=postgresql://postgres:[PASSWORD]@db.[PROJECT_REF].supabase.co:5432/postgres
   ```
5. Run migrations

**Bonus**: Supabase includes Auth, Storage, and Realtime features!

### 2. Neon (Serverless PostgreSQL)

**Free Tier**:
- 0.5GB storage
- Reasonable compute
- Instant branching (like Git for databases)

**Setup**:
1. Sign up: https://neon.tech
2. Create project
3. Copy connection string
4. Add to environment variables

### 3. PlanetScale (MySQL)

**Free Tier**:
- 5GB storage
- 1 billion reads/month
- 10 million writes/month

**Setup**:
1. Sign up: https://planetscale.com
2. Create database
3. Get connection string
4. Add to environment variables

### 4. MongoDB Atlas

**Free Tier**:
- 512MB storage
- Shared cluster
- Unlimited connections

**Setup**:
1. Sign up: https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Whitelist your IP (or allow 0.0.0.0/0 for serverless)
4. Create database user
5. Get connection string
6. Add to environment variables

---

## 📧 Email Service Setup (for Contact Forms)

### Recommended: Resend

**Free Tier**: 3,000 emails/month

**Setup**:

1. **Sign up**: https://resend.com
2. **Get API Key**: Dashboard → API Keys → Create
3. **Add to environment**:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```

4. **Install package**:
```bash
npm install resend
```

5. **Create email API route** (src/app/api/send-email/route.ts):
```typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const data = await resend.emails.send({
      from: 'Ontour Travels <noreply@ontourtravels.com.ng>',
      to: 'info@ontourtravels.com.ng',
      subject: `New contact form submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, id: data.id });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
```

6. **Verify domain** (for production):
   - Add TXT, MX records to your domain DNS
   - Resend dashboard provides exact records

### Alternative: SendGrid

**Free Tier**: 100 emails/day (3,000/month)

**Setup**:
1. Sign up: https://sendgrid.com
2. Create API key
3. Verify sender email
4. Use `@sendgrid/mail` package

---

## 💳 Payment Integration

### Paystack Setup

1. **Sign up**: https://paystack.com
2. **Get API keys**:
   - Settings → API Keys
   - Copy Test keys for development
   - Copy Live keys for production

3. **Add to environment**:
```env
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_xxxxx
PAYSTACK_SECRET_KEY=sk_test_xxxxx
```

4. **Implement checkout**:
```typescript
import { PaystackButton } from 'react-paystack';

const config = {
  reference: new Date().getTime().toString(),
  email: userEmail,
  amount: amountInKobo, // Amount in kobo (₦1 = 100 kobo)
  publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
};

const onSuccess = (reference: any) => {
  // Verify payment on backend
  // Update booking status
};

const onClose = () => {
  // Handle popup close
};

<PaystackButton {...config} onSuccess={onSuccess} onClose={onClose} />
```

5. **Verify payment** (backend):
```typescript
// src/app/api/verify-payment/route.ts
export async function POST(request: Request) {
  const { reference } = await request.json();
  
  const response = await fetch(
    `https://api.paystack.co/transaction/verify/${reference}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    }
  );
  
  const data = await response.json();
  
  if (data.data.status === 'success') {
    // Payment verified, update database
    return NextResponse.json({ success: true });
  }
  
  return NextResponse.json({ success: false }, { status: 400 });
}
```

### Flutterwave Setup

Similar process:
1. Sign up: https://flutterwave.com
2. Get API keys
3. Use Flutterwave React library
4. Verify payments on backend

---

## 🖼️ Image Storage Setup

### Recommended: Cloudinary

**Free Tier**: 25GB storage, 25GB bandwidth/month

**Setup**:

1. **Sign up**: https://cloudinary.com
2. **Get credentials**: Dashboard → Account Details
   - Cloud name
   - API Key
   - API Secret

3. **Add to environment**:
```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

4. **Upload images**:
```bash
# Install
npm install cloudinary

# Upload
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const result = await cloudinary.uploader.upload(imagePath, {
  folder: 'ontour-travels',
});

console.log(result.secure_url); // Use this URL in JSON files
```

5. **Use in JSON**:
```json
{
  "gallery": [
    "https://res.cloudinary.com/your-cloud/image/upload/v1234567890/ontour-travels/tour-1.jpg"
  ]
}
```

### Alternative: Vercel Blob Storage

**Pricing**: $0.15/GB storage, $0.10/GB bandwidth

**Setup**:
```bash
npm install @vercel/blob
```

```typescript
import { put } from '@vercel/blob';

const blob = await put('avatar.jpg', file, {
  access: 'public',
});

console.log(blob.url); // Use this URL
```

---

## 🌐 Custom Domain Setup

### Buying a .com.ng Domain

**Registrars**:
- **Whogohost**: https://whogohost.com (Nigerian)
- **Web4Africa**: https://web4africa.com (Nigerian)
- **Namecheap**: https://namecheap.com (International)
- **Qservers**: https://qservers.net (Nigerian)

**Cost**: ~₦3,000-5,000/year for .com.ng

### Connecting to Vercel

1. **Buy domain** from registrar above
2. **Add to Vercel**:
   - Vercel Dashboard → Your Project → Settings → Domains
   - Add `ontourtravels.com.ng` and `www.ontourtravels.com.ng`

3. **Update DNS** at your registrar:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

4. **Wait for propagation** (5 minutes - 24 hours)
5. **SSL Certificate**: Automatically provisioned by Vercel

---

## 🚦 Complete Deployment Workflow

### Full-Stack Deployment (Frontend + Backend + Database)

**Recommended Stack** (All Free):
- **Frontend**: Vercel
- **Backend**: Railway or Vercel API Routes
- **Database**: Supabase (PostgreSQL)
- **Email**: Resend
- **Images**: Cloudinary
- **Payments**: Paystack

**Steps**:

1. **Deploy Frontend** (Vercel):
```bash
vercel --prod
```

2. **Setup Database** (Supabase):
   - Create project
   - Run migrations
   - Copy connection string

3. **Deploy Backend** (if separate):
   - Railway: Push to GitHub, connect repo
   - Or use Vercel API routes (already deployed)

4. **Configure Environment Variables**:
```env
# Frontend (Vercel)
NEXT_PUBLIC_API_URL=https://ontour-travels.vercel.app
DATABASE_URL=postgresql://...supabase...
RESEND_API_KEY=re_xxxxx
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_live_xxxxx
PAYSTACK_SECRET_KEY=sk_live_xxxxx
CLOUDINARY_CLOUD_NAME=your_cloud
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
```

5. **Test Everything**:
   - Visit production URL
   - Test all pages
   - Submit contact form
   - Try booking flow
   - Check API responses

6. **Go Live**:
   - Switch payment keys to live mode
   - Update WhatsApp links with real number
   - Enable production error logging

---

## 📊 Monitoring & Analytics

### Google Analytics 4 (Free)

1. Create account: https://analytics.google.com
2. Create property
3. Get Measurement ID (G-XXXXXXXXXX)
4. Install next/script:

```tsx
// src/app/layout.tsx
import Script from 'next/script';

<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### Vercel Analytics (Paid but useful)

- Go to Vercel Dashboard → Analytics
- Enable for $10/month
- Get real-time performance metrics

---

## 🔒 Security Best Practices

1. **Environment Variables**:
   - Never commit `.env` files
   - Use Vercel/Railway environment variables
   - Separate test/live API keys

2. **API Routes**:
   - Validate all inputs
   - Rate limit requests
   - Use CORS properly

3. **Database**:
   - Use connection pooling
   - Whitelist IP addresses
   - Regular backups

4. **Payments**:
   - Always verify on backend
   - Never trust frontend data
   - Log all transactions

---

## 🎯 Production Checklist

Before going live:

- [ ] All features work in production build
- [ ] Environment variables configured
- [ ] Database migrations run
- [ ] Custom domain connected
- [ ] SSL certificate active
- [ ] Payment gateway tested (live mode)
- [ ] Contact form working
- [ ] Email notifications working
- [ ] Analytics configured
- [ ] Error monitoring set up
- [ ] Backup strategy in place
- [ ] WhatsApp number updated
- [ ] Terms & Privacy Policy reviewed
- [ ] Social media links working
- [ ] Sitemap generated
- [ ] robots.txt configured

---

## 💰 Cost Summary (Monthly)

### Free Tier Stack:
- Vercel: **$0** (Hobby)
- Supabase: **$0** (Free tier)
- Resend: **$0** (3K emails)
- Cloudinary: **$0** (25GB)
- Domain: **~₦400/month** (~$0.50)
- **Total: ₦400/month (~$0.50)**

### Starter Stack (~$50/month):
- Vercel Pro: **$20**
- Supabase Pro: **$25**
- Domain: **~$0.50**
- Resend Pro: **$20** (optional)
- **Total: ~$45-65/month**

### Growth Stack (~$150/month):
- Vercel Team: **$20/user**
- Supabase Pro + add-ons: **$40**
- Resend Pro: **$20**
- Cloudinary Plus: **$89** (or continue free)
- CDN (Cloudflare Pro): **$20** (optional)
- **Total: ~$150-200/month**

---

## 🆘 Troubleshooting Deployments

### Build Fails on Vercel

**Check**:
1. Build succeeds locally: `npm run build`
2. Environment variables set correctly
3. Check build logs for specific errors
4. Ensure Node version matches local (package.json: `"engines"`)

### API Routes 404 in Production

**Fix**:
- Ensure files are in `src/app/api/` folder
- Check `route.ts` naming (not `route.js`)
- Verify HTTP methods match (GET, POST)
- Check Vercel logs for errors

### Database Connection Fails

**Fix**:
- Whitelist Vercel IP ranges (or allow all: 0.0.0.0/0)
- Check connection string format
- Verify SSL settings (add `?sslmode=require`)
- Test connection locally first

### Images Not Loading

**Fix**:
- Check image URLs are public
- Update `next.config.ts` with allowed domains:
```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'res.cloudinary.com',
    },
  ],
},
```

---

## 🎓 Next Steps After Deployment

1. ✅ Monitor first 48 hours closely
2. Set up error tracking (Sentry)
3. Configure backups
4. Plan Phase 2 features
5. Gather user feedback
6. Optimize performance
7. Scale as needed

---

## 📞 Support Resources

- **Vercel**: https://vercel.com/support
- **Railway**: https://railway.app/help
- **Supabase**: https://supabase.com/support
- **Next.js**: https://nextjs.org/docs

---

Congratulations! Your travel agency website is now live! 🎉🚀

Remember: Start with free tiers, monitor usage, and scale up as your business grows.
