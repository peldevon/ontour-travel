# Ontour Travels - Complete Travel Agency Website

A modern, full-featured travel agency website built with Next.js 15, featuring flight/hotel bookings, shortlet accommodations, and curated tour packages.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Chakra UI](https://img.shields.io/badge/Chakra%20UI-v3-teal)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 🌟 Features

### ✈️ Core Functionality
- **Flight & Hotel Search**: Real-time search widget powered by Amadeus API integration-ready
- **Shortlet Listings**: Browse and book short-term apartment rentals in Lagos
- **Tour Packages**: Curated local, regional, and international tour packages
- **Dynamic Detail Pages**: Individual pages for each tour and shortlet with full information
- **Contact & Enquiry Forms**: Multiple touchpoints for customer enquiries
- **WhatsApp Integration**: Direct chat links throughout the site

### 🎨 Design & UX
- **Modern UI**: Built with Chakra UI v3 components
- **Smooth Animations**: Framer Motion scroll animations and transitions
- **Mobile-First**: Fully responsive design for all devices
- **Accessible**: WCAG compliant with proper ARIA labels
- **SEO Optimized**: Server-side rendering with Next.js App Router

### 📄 Pages Included
- ✅ Homepage with search widget
- ✅ About Us page
- ✅ Flights & Hotels search/results
- ✅ Shortlets listing + individual pages
- ✅ Tours listing + individual pages
- ✅ Contact page with form
- ✅ FAQ page
- ✅ Terms & Conditions
- ✅ Privacy Policy

### 🛠️ Technical Features
- **JSON-Based CMS**: Easy content management without external dependencies
- **API Routes**: RESTful endpoints for tours, shortlets, and contact forms
- **TypeScript**: Full type safety throughout the codebase
- **Environment Ready**: Configured for development and production
- **Payment Ready**: Integration-ready for Paystack/Flutterwave

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Bun (recommended)
- Git

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd ontour-travels

# Install dependencies
npm install
# or
bun install

# Run development server
npm run dev
# or
bun dev

# Open in browser
http://localhost:3000
```

That's it! The website should be running locally. 🎉

---

## 📚 Documentation

### 🎯 For Content Managers
**[CMS Management Guide](./CMS_MANAGEMENT_GUIDE.md)**
- How to add/edit tours
- How to add/edit shortlets
- Managing images
- Publishing workflow

### 💻 For Developers
**[Local Setup Guide](./LOCAL_SETUP_GUIDE.md)**
- Development environment setup
- Adding your own Node + Express backend
- Database integration options
- Environment variables

### 🚀 For Deployment
**[Deployment Guide](./DEPLOYMENT_GUIDE.md)**
- Deploy to Vercel (recommended)
- Alternative hosting options (Railway, Netlify, Fly.io)
- Database hosting (Supabase, Neon, PlanetScale)
- Custom domain setup
- Payment integration (Paystack/Flutterwave)

### 🔧 For Service Selection
**[Services & Alternatives](./SERVICES_AND_ALTERNATIVES.md)**
- All services used in this project
- Alternative options for each service
- Cost comparisons
- Recommended stacks for different budgets

---

## 🗂️ Content Management (CMS)

The website uses a simple JSON-based CMS for easy content management.

### Adding a New Tour

1. Open `src/lib/cms/tours.json`
2. Add your tour object to the `tours` array
3. Save the file - the tour appears automatically!

See [CMS Management Guide](./CMS_MANAGEMENT_GUIDE.md) for detailed instructions.

### Adding a New Shortlet

1. Open `src/lib/cms/shortlets.json`
2. Add your property to the `shortlets` array
3. Save the file - it's now live!

---

## 🌐 API Routes

The website includes RESTful API routes:

- `GET /api/tours` - Get all tours
- `GET /api/tours/[slug]` - Get single tour
- `GET /api/shortlets` - Get all shortlets
- `GET /api/shortlets/[slug]` - Get single shortlet
- `POST /api/contact` - Submit contact form

---

## 🎨 Tech Stack

- **[Next.js 15](https://nextjs.org/)** - React framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Chakra UI v3](https://chakra-ui.com/)** - Components
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[Framer Motion](https://www.framer.com/motion/)** - Animations

---

## 💰 Cost Breakdown

### Free Tier (Perfect to Start)
- **Vercel Hosting**: $0
- **Domain**: ~₦400/month (~$0.50)
- **Total**: **~₦400/month**

See [Services & Alternatives](./SERVICES_AND_ALTERNATIVES.md) for more options.

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"
5. Done! 🎉

See [Deployment Guide](./DEPLOYMENT_GUIDE.md) for detailed instructions.

---

## 🎯 Next Steps

### Immediate
- [ ] Add your own content
- [ ] Update contact info
- [ ] Deploy to production
- [ ] Set up custom domain

### Short-term
- [ ] Integrate Amadeus API
- [ ] Set up payments (Paystack)
- [ ] Add email notifications
- [ ] Set up database

See documentation for implementation guides.

---

## 📞 Contact

**Ontour Travels**
- Email: info@ontourtravels.com.ng
- WhatsApp: +234 812 345 6789
- Location: Lagos, Nigeria

---

<div align="center">

**Built with ❤️ for Nigerian Travelers**

Made with Next.js 15 • TypeScript • Chakra UI

</div>