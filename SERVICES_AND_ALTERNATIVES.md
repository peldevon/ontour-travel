# Ontour Travels - Services & Alternatives Documentation

## Overview
This document details all third-party services used in the Ontour Travels website, their purposes, and alternative options you can consider.

---

## 🎨 Frontend Framework & UI

### **Next.js 15 (App Router)**
- **Purpose**: React framework for server-side rendering, routing, and API routes
- **Why We Use It**: Modern, fast, SEO-friendly, built-in API routes, excellent developer experience
- **Cost**: Free (open source)
- **Alternatives**:
  1. **Remix** - Modern full-stack framework, similar to Next.js
  2. **Gatsby** - Static site generator, great for content-heavy sites
  3. **Create React App + React Router** - Simple SPA approach
  4. **Astro** - Fast, content-focused framework with partial hydration
  5. **SvelteKit** - Svelte-based framework, excellent performance

### **Chakra UI v3**
- **Purpose**: Component library for building the user interface
- **Why We Use It**: Accessible, themeable, comprehensive components, good documentation
- **Cost**: Free (open source)
- **Alternatives**:
  1. **shadcn/ui** - Unstyled, copy-paste components with Tailwind CSS
  2. **Material-UI (MUI)** - Material Design components, very popular
  3. **Ant Design** - Enterprise-grade UI components
  4. **Mantine** - Modern React component library
  5. **Radix UI + Tailwind** - Unstyled primitives + utility CSS
  6. **Headless UI** - Unstyled, accessible components from Tailwind team

### **Tailwind CSS**
- **Purpose**: Utility-first CSS framework for custom styling
- **Why We Use It**: Fast development, small bundle size, highly customizable
- **Cost**: Free (open source)
- **Alternatives**:
  1. **Plain CSS/SCSS** - Traditional approach, full control
  2. **Styled Components** - CSS-in-JS library
  3. **Emotion** - Performant CSS-in-JS
  4. **CSS Modules** - Scoped CSS files
  5. **Bootstrap** - Traditional component framework

### **Framer Motion**
- **Purpose**: Animation library for smooth scroll animations and transitions
- **Why We Use It**: Powerful, declarative, great performance, easy to use
- **Cost**: Free (open source)
- **Alternatives**:
  1. **React Spring** - Physics-based animations
  2. **GSAP (GreenSock)** - Professional animation library
  3. **Anime.js** - Lightweight animation library
  4. **React Transition Group** - Simple transition components
  5. **CSS Animations** - Native browser animations

---

## 🗄️ Content Management System (CMS)

### **Current: JSON Files** (Phase 1)
- **Purpose**: Simple, file-based content storage for tours and shortlets
- **Why We Use It**: No external dependencies, version controlled, fast, free
- **Cost**: Free
- **Location**: `src/lib/cms/tours.json`, `src/lib/cms/shortlets.json`

### **Recommended Headless CMS Alternatives** (Phase 2+)

#### 1. **Payload CMS** ⭐ RECOMMENDED
- **Type**: Self-hosted headless CMS
- **Why**: Built with TypeScript/React, very developer-friendly, free self-hosted
- **Pricing**: 
  - Self-hosted: FREE
  - Cloud: Starting at $0/month (generous free tier), scales to $99/month
- **Features**: 
  - Full TypeScript support
  - GraphQL & REST APIs
  - Local file storage or cloud (S3, Cloudinary)
  - Admin UI built-in
  - Access control & authentication
- **Setup**: 
  ```bash
  npx create-payload-app
  ```
- **Best For**: Developers who want full control, TypeScript projects

#### 2. **Strapi**
- **Type**: Self-hosted headless CMS
- **Why**: Popular, mature, extensive plugin ecosystem
- **Pricing**: 
  - Self-hosted: FREE
  - Cloud: Starting at $29/month
- **Features**:
  - Visual content type builder
  - RESTful & GraphQL APIs
  - Media library
  - Role-based access control
- **Best For**: Teams, complex content structures

#### 3. **Sanity**
- **Type**: Cloud-based headless CMS
- **Why**: Real-time collaboration, excellent developer experience, powerful query language (GROQ)
- **Pricing**: 
  - Free tier: 3 users, 10GB bandwidth, 500GB assets
  - Growth: $99/month
- **Features**:
  - Real-time editing
  - Portable Text (structured content)
  - Sanity Studio (customizable editor)
  - Image optimization
- **Best For**: Content teams, real-time collaboration

#### 4. **Contentful**
- **Type**: Cloud-based headless CMS
- **Why**: Enterprise-grade, reliable, extensive integrations
- **Pricing**: 
  - Free tier: 5 users, 25,000 API calls/month
  - Team: Starting at $489/month
- **Features**:
  - Content modeling
  - Webhooks
  - Image API
  - Localization
- **Best For**: Enterprise projects, multi-language sites

#### 5. **Directus**
- **Type**: Self-hosted headless CMS
- **Why**: Database-first approach, wraps any SQL database, open source
- **Pricing**: 
  - Self-hosted: FREE
  - Cloud: Starting at $15/month
- **Features**:
  - Wraps existing databases
  - RESTful & GraphQL APIs
  - File storage
  - No-code data modeling
- **Best For**: Existing database projects, SQL-first teams

#### 6. **Ghost**
- **Type**: Content platform (blog-focused)
- **Why**: Great for blogs and content sites, membership features
- **Pricing**: 
  - Self-hosted: FREE
  - Managed: Starting at $9/month
- **Features**:
  - Built-in SEO
  - Newsletter management
  - Membership & subscriptions
  - Modern editor
- **Best For**: Blogs, content marketing, newsletters

#### 7. **Prismic**
- **Type**: Cloud-based headless CMS
- **Why**: Easy to use, visual editor, good for marketing sites
- **Pricing**: 
  - Free tier: 1 user
  - Medium: $7/user/month
- **Features**:
  - Slice-based content modeling
  - Preview deployments
  - Scheduling
- **Best For**: Marketing sites, landing pages

#### 8. **TinaCMS**
- **Type**: Git-based CMS
- **Why**: Content stored in Git, visual editing, open source
- **Pricing**: 
  - Free tier: 2 users
  - Starter: $29/month
- **Features**:
  - Git-backed content
  - Real-time visual editing
  - MDX support
  - Self-hosted option
- **Best For**: Developer-first teams, Git workflows

---

## 💳 Payment Processing

### **Current: Paystack & Flutterwave**
- **Purpose**: Nigerian payment gateway for accepting local and international cards
- **Why We Use It**: Nigeria-focused, supports NGN, good local bank integration
- **Pricing**: 
  - Paystack: 1.5% + ₦100 per transaction
  - Flutterwave: 1.4% per transaction
- **Features**:
  - Naira payments
  - International cards
  - Mobile money
  - Bank transfers
  - Subscriptions

### **Alternatives**:

#### 1. **Stripe** ⭐ INTERNATIONAL STANDARD
- **Why**: Global leader, excellent docs, supports 135+ currencies
- **Pricing**: 2.9% + $0.30 per transaction (international), 3.9% + ₦100 (Nigeria)
- **Best For**: International customers, complex payment flows
- **Note**: Requires business registration in supported countries

#### 2. **Razorpay**
- **Why**: Popular in India/Africa, good features
- **Pricing**: 2% per transaction
- **Best For**: African markets

#### 3. **PayPal**
- **Why**: Globally recognized, trusted by consumers
- **Pricing**: 3.9% + fixed fee
- **Best For**: International customers, marketplaces

#### 4. **Interswitch**
- **Why**: Nigerian, established, wide acceptance
- **Pricing**: Negotiable based on volume
- **Best For**: Enterprise, high-volume Nigerian businesses

#### 5. **Remita**
- **Why**: Nigerian, supports direct bank debits
- **Pricing**: Varies by transaction type
- **Best For**: Government payments, bill payments

---

## ✈️ Travel Booking APIs

### **Current: Amadeus Travel API** (Intended)
- **Purpose**: Real-time flight search, hotel bookings, destination content
- **Why**: Industry standard, comprehensive data, IATA-accredited
- **Pricing**: 
  - Self-Service: FREE for testing (limited calls)
  - Production: Pay-as-you-go or monthly plans
- **Features**:
  - Flight search & booking
  - Hotel search
  - Car rental
  - Airport info
  - Flight status

### **Alternatives**:

#### 1. **Skyscanner API**
- **Why**: Popular flight search, good coverage
- **Pricing**: Free tier available, commercial licensing required
- **Best For**: Flight comparison sites

#### 2. **Sabre Red APIs**
- **Why**: Enterprise-grade, used by major travel agencies
- **Pricing**: Contact for pricing (typically enterprise-level)
- **Best For**: Large travel agencies

#### 3. **Travelport**
- **Why**: Comprehensive travel content, GDS access
- **Pricing**: Enterprise pricing
- **Best For**: Established travel agencies

#### 4. **Kiwi.com API**
- **Why**: Unique flight combinations, good prices
- **Pricing**: Free trial, paid plans
- **Best For**: Budget travel, multi-city trips

#### 5. **TravelPayouts** (Aviasales)
- **Why**: Affiliate-friendly, easy integration
- **Pricing**: Commission-based (free to use, earn commission)
- **Best For**: Affiliate travel sites

---

## 📧 Email & Communication

### **Recommended: Resend** ⭐ MODERN CHOICE
- **Purpose**: Transactional emails (booking confirmations, receipts)
- **Pricing**: 
  - Free: 3,000 emails/month
  - Pro: $20/month (50,000 emails)
- **Why**: Developer-friendly, great deliverability, React Email support
- **Alternative to**: SendGrid, Mailgun, AWS SES

### **WhatsApp Business API**
- **Purpose**: Customer support, booking confirmations
- **Pricing**: FREE (standard WhatsApp Business app), Cloud API (pay per conversation)
- **Why**: Ubiquitous in Nigeria, instant communication
- **Alternatives**:
  - Telegram Bot API (free)
  - Facebook Messenger (free)
  - Intercom (paid, starting $39/month)
  - Zendesk Chat (paid)

---

## 🖼️ Image Storage & Optimization

### **Current: Unsplash/External URLs** (Phase 1)
- **Purpose**: Placeholder images for development
- **Cost**: Free

### **Recommended for Production**:

#### 1. **Cloudinary** ⭐ RECOMMENDED
- **Why**: Automatic optimization, transformations, CDN, generous free tier
- **Pricing**: 
  - Free: 25GB storage, 25GB bandwidth/month
  - Plus: $89/month (starts)
- **Best For**: Image-heavy sites, automatic optimization

#### 2. **Vercel Blob Storage**
- **Why**: Integrated with Vercel deployment, simple API
- **Pricing**: 
  - Hobby: $0.15/GB storage, $0.10/GB bandwidth
  - Pro: Included quota then pay-as-you-go
- **Best For**: Vercel-hosted projects

#### 3. **AWS S3 + CloudFront**
- **Why**: Scalable, reliable, industry standard
- **Pricing**: Pay-as-you-go (very affordable at scale)
- **Best For**: Large-scale projects, full control

#### 4. **Supabase Storage**
- **Why**: Free tier, integrated with Supabase, simple API
- **Pricing**: 
  - Free: 1GB storage
  - Pro: $25/month (100GB)
- **Best For**: Supabase users, simple needs

#### 5. **ImageKit**
- **Why**: Real-time image optimization, CDN
- **Pricing**: 
  - Free: 20GB bandwidth/month
  - Starter: $49/month
- **Best For**: E-commerce, media sites

---

## 🚀 Hosting & Deployment

### **Frontend Hosting**:

#### 1. **Vercel** ⭐ RECOMMENDED FOR NEXT.JS
- **Why**: Made by Next.js creators, zero-config, excellent DX
- **Pricing**: 
  - Hobby: FREE (perfect for side projects)
  - Pro: $20/month per user
- **Features**: 
  - Automatic HTTPS
  - Global CDN
  - Serverless functions
  - Preview deployments
- **Best For**: Next.js projects, solo developers, startups

#### 2. **Netlify**
- **Why**: Easy deployment, great free tier, serverless functions
- **Pricing**: 
  - Free: 100GB bandwidth/month
  - Pro: $19/month
- **Best For**: Static sites, JAMstack

#### 3. **Railway** ⭐ GOOD FOR FULLSTACK
- **Why**: Easy deployment, supports backends, generous free tier
- **Pricing**: 
  - Free: $5 credit/month (enough for small apps)
  - Developer: $10/month + usage
- **Best For**: Full-stack apps, APIs, databases

#### 4. **Render**
- **Why**: Simple, supports static sites + backends, free tier
- **Pricing**: 
  - Free: Static sites free, services spin down after inactivity
  - Starter: $7/month (always-on services)
- **Best For**: Full-stack projects, PostgreSQL hosting

#### 5. **Fly.io**
- **Why**: Deploy anywhere globally, edge computing
- **Pricing**: 
  - Free: Generous resources included
  - Pay-as-you-go after free tier
- **Best For**: Global apps, edge computing

---

## 🗄️ Database (If You Add Backend)

### **Recommended Options**:

#### 1. **Supabase** ⭐ RECOMMENDED
- **Why**: PostgreSQL, realtime, auth included, generous free tier
- **Pricing**: 
  - Free: 500MB database, 1GB file storage, 2GB bandwidth
  - Pro: $25/month (8GB database, 100GB storage, 50GB bandwidth)
- **Features**: 
  - PostgreSQL database
  - Realtime subscriptions
  - Authentication
  - Storage
  - RESTful API
  - Edge Functions
- **Best For**: Modern apps, real-time features

#### 2. **PlanetScale** ⭐ FOR MYSQL
- **Why**: MySQL, serverless, branching (like Git), excellent DX
- **Pricing**: 
  - Hobby: FREE (1 database, 5GB storage, 1 billion reads/month)
  - Scaler: $29/month
- **Best For**: MySQL users, serverless architecture

#### 3. **Neon** ⭐ FOR POSTGRESQL
- **Why**: Serverless PostgreSQL, generous free tier, instant branching
- **Pricing**: 
  - Free: 0.5GB storage, reasonable compute
  - Pro: $19/month
- **Best For**: PostgreSQL, serverless, development workflows

#### 4. **MongoDB Atlas**
- **Why**: Document database, globally distributed, great free tier
- **Pricing**: 
  - Free: 512MB storage, shared cluster
  - Serverless: Pay-as-you-go (starts low)
- **Best For**: Document-based data, flexible schemas

#### 5. **Turso** (LibSQL)
- **Why**: Edge database, SQLite-compatible, incredibly fast
- **Pricing**: 
  - Free: Generous starter tier
  - Pro: $29/month
- **Best For**: Edge computing, low-latency needs

---

## 📊 Analytics

### **Recommended**:

#### 1. **Plausible** ⭐ PRIVACY-FRIENDLY
- **Why**: Privacy-focused, GDPR compliant, lightweight
- **Pricing**: $9/month (10K pageviews)
- **Best For**: Privacy-conscious sites

#### 2. **Google Analytics 4**
- **Why**: Free, comprehensive, industry standard
- **Pricing**: FREE
- **Best For**: Most websites, detailed tracking

#### 3. **Umami**
- **Why**: Self-hosted, privacy-focused, open source
- **Pricing**: FREE (self-hosted) or $9/month (cloud)
- **Best For**: Self-hosted projects, privacy

#### 4. **Fathom**
- **Why**: Simple, privacy-focused, beautiful UI
- **Pricing**: $14/month (100K pageviews)
- **Best For**: Simple analytics needs

---

## 🔒 Authentication (If Needed)

### **Recommended**:

#### 1. **Clerk**
- **Why**: Modern, beautiful UI, comprehensive features
- **Pricing**: FREE (up to 5,000 MAU), then $25/month
- **Best For**: SaaS apps, modern projects

#### 2. **Supabase Auth**
- **Why**: Included with Supabase, multiple providers, open source
- **Pricing**: Included in Supabase plans
- **Best For**: Supabase users

#### 3. **NextAuth.js**
- **Why**: Open source, flexible, built for Next.js
- **Pricing**: FREE
- **Best For**: Custom implementations, full control

#### 4. **Auth0**
- **Why**: Enterprise-grade, many integrations
- **Pricing**: FREE (up to 7,000 MAU), then $35/month
- **Best For**: Enterprise, complex auth needs

---

## 📝 Summary: Recommended Stack for Different Budgets

### **Free Tier Stack** ($0/month)
- Frontend: Vercel (Hobby)
- Database: Supabase Free / Neon Free
- CMS: JSON files or TinaCMS Free
- Email: Resend Free (3K emails)
- Analytics: Google Analytics 4
- Images: Cloudinary Free (25GB)

### **Starter Stack** (~$50/month)
- Frontend: Vercel Pro ($20)
- Database: Supabase Pro ($25)
- CMS: Payload Cloud Starter ($0-29)
- Email: Resend Pro ($20)
- Analytics: Plausible ($9)
- Images: Cloudinary Plus ($89) or continue free tier

### **Growth Stack** (~$200/month)
- Frontend: Vercel Team ($20/user)
- Database: Supabase Pro ($25) + add-ons
- CMS: Sanity Growth ($99) or Strapi Cloud ($29)
- Email: Resend Pro ($20)
- Analytics: Google Analytics 4 (free) + Custom dashboard
- Images: Cloudinary Plus ($89)
- CDN: Cloudflare Pro ($20)

---

## 🎯 Recommendations for Ontour Travels

**Phase 1 (Current)**: 
- ✅ JSON files for content (working great!)
- ✅ Vercel for hosting
- ✅ Amadeus API for travel data

**Phase 2 (Next 3-6 months)**:
- Migrate to **Payload CMS** (self-hosted) for easier content management
- Add **Supabase** for user accounts, bookings database
- Implement **Resend** for transactional emails
- Set up **Cloudinary** for image hosting/optimization
- Integrate **Paystack/Flutterwave** fully

**Phase 3 (6-12 months)**:
- Scale database with **Supabase Pro**
- Add advanced analytics
- Implement user reviews and ratings
- Consider **Sanity** if content team grows

---

## Questions or Need Help?

This document should guide your technology decisions. Each service has been carefully selected based on:
- Cost-effectiveness for travel agency use case
- Developer experience and documentation
- Scalability for future growth
- Nigerian/African market suitability

Feel free to mix and match based on your specific needs and budget!
