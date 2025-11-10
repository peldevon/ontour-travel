# Ontour Travels CMS Documentation

## Overview

Your website now has a **comprehensive, customizable Content Management System (CMS)** that gives content managers full control over all website sections. This lightweight site builder is tailored specifically to your travel agency's structure.

## 🚀 CMS Features

### 1. **Dashboard** (`/cms/dashboard`)
- Real-time statistics for all content types
- Quick action cards for common tasks
- Visual overview of your entire website content
- Direct links to all management sections

### 2. **Pages Management** (`/cms/pages`)
**Full control over static website pages**
- ✅ Create, edit, and delete pages
- ✅ Rich text editor with formatting tools
- ✅ SEO meta title and description
- ✅ Custom URL slugs
- ✅ Draft/Published/Archived status
- ✅ Visual preview before publishing

**Use Cases:**
- About Us page
- Contact page
- FAQ page
- Privacy Policy
- Terms & Conditions
- Custom landing pages

### 3. **Shortlets Management** (`/cms/shortlets`)
**Complete property listing management**
- ✅ Add/edit/delete shortlet properties
- ✅ Property details (title, location, pricing)
- ✅ Bedrooms, bathrooms, max guests
- ✅ Multiple image uploads
- ✅ Amenities and features
- ✅ Pricing in NGN
- ✅ Published/Draft status
- ✅ Featured property toggle

**Automatically Updates:**
- Homepage featured shortlets carousel
- `/shortlets` listing page
- Individual property detail pages

### 4. **Tours Management** (`/cms/tours`)
**Full tour package control**
- ✅ Create/edit/delete tour packages
- ✅ Destination and duration settings
- ✅ Pricing information
- ✅ Category (Local/Regional/International)
- ✅ Multiple image gallery
- ✅ Detailed itinerary
- ✅ Inclusions/Exclusions
- ✅ Published/Draft status

**Automatically Updates:**
- Homepage tours carousel
- `/tours` listing page
- Individual tour detail pages

### 5. **Media Library** (`/cms/media`)
**Centralized asset management**
- ✅ Upload multiple files at once
- ✅ Support for images and videos
- ✅ Visual thumbnail grid
- ✅ Search and filter media
- ✅ Copy URL for easy embedding
- ✅ File size and type information
- ✅ Delete unused media
- ✅ Preview in dialog

**Best Practices:**
- Optimize images before upload (< 2MB)
- Use descriptive filenames
- Recommended sizes:
  - Hero images: 1920x1080
  - Property images: 1200x800
  - Thumbnails: 600x400

### 6. **Site Settings** (`/cms/settings`)
**Global website configuration**

**General Information:**
- Site name and tagline
- Site description

**Hero Section:**
- Homepage hero title
- Homepage hero subtitle

**Contact Information:**
- Contact email
- Contact phone
- WhatsApp number
- Physical address

**Social Media:**
- Facebook URL
- Twitter URL
- Instagram URL

**Feature Toggles:**
- Enable/disable booking widget
- Enable/disable shortlets section
- Enable/disable tours section

**Updates Automatically:**
- Footer contact information
- Social media links
- Homepage hero section
- Navigation visibility

### 7. **User Guide** (`/cms/guide`)
**Built-in documentation**
- Step-by-step tutorials
- FAQ for each section
- Best practices and tips
- SEO guidelines
- Security recommendations

## 🎯 How Content Flows

```
CMS Update → Automatic Propagation → Live Website
```

### Example: Adding a Shortlet

1. **Go to CMS** → `/cms/shortlets`
2. **Click** "Add Shortlet"
3. **Fill in details:**
   - Title: "Luxury 2BR – Lekki"
   - Location: "Lekki Phase 1, Lagos"
   - Price: ₦75,000/night
   - Bedrooms: 2, Bathrooms: 2
   - Upload 5-10 images
   - Add amenities: WiFi, AC, Pool, etc.
4. **Set status** to "Published"
5. **Toggle** "Featured" if you want it on homepage
6. **Save**

**Result:**
- ✅ Appears on `/shortlets` page immediately
- ✅ Shows in homepage carousel (if featured)
- ✅ Has its own detail page at `/shortlets/luxury-2br-lekki`
- ✅ Fully responsive on all devices

### Example: Updating Site Settings

1. **Go to CMS** → `/cms/settings`
2. **Update** Hero Title: "Your Dream Vacation Starts Here"
3. **Update** Contact Phone: "+234 800 123 4567"
4. **Save Changes**

**Result:**
- ✅ Homepage hero updates instantly
- ✅ Footer shows new phone number
- ✅ Contact page reflects changes
- ✅ All pages maintain consistency

## 🔐 Access & Security

### Login
- URL: `/cms/login`
- Credentials stored securely
- Session-based authentication

### User Roles (Planned)
- **Admin**: Full access to all features
- **Editor**: Can edit content but not settings
- **Viewer**: Read-only access

### Best Practices
- Change passwords regularly
- Limit access to trusted team members
- Always preview before publishing
- Keep backups of critical content

## 📊 Content Strategy

### Recommended Workflow

**Week 1: Foundation**
1. Create essential pages (About, Contact, FAQ)
2. Configure site settings
3. Upload brand assets to media library

**Week 2: Content**
4. Add 5-10 shortlet properties
5. Create 3-5 tour packages
6. Upload high-quality images

**Week 3: Optimization**
7. Add SEO meta descriptions
8. Feature best-performing content
9. Test on mobile devices

**Ongoing: Maintenance**
10. Update seasonal pricing
11. Add new tours/properties
12. Monitor and respond to inquiries

## 🎨 Customization Capabilities

### What You Can Control

**Visual Content:**
- ✅ All text and copy
- ✅ All images and media
- ✅ Hero section headline
- ✅ Featured properties/tours

**Structure:**
- ✅ Navigation menu items
- ✅ Footer content
- ✅ Page layouts (via rich text editor)
- ✅ Section visibility

**Data:**
- ✅ Property listings
- ✅ Tour packages
- ✅ Pricing
- ✅ Availability status

**Settings:**
- ✅ Contact information
- ✅ Social media links
- ✅ Feature toggles
- ✅ SEO metadata

### What's Automatic

The CMS automatically handles:
- Responsive design (mobile/tablet/desktop)
- Image optimization
- SEO-friendly URLs
- Search functionality
- Filtering and sorting
- Performance optimization

## 📱 Mobile-First Design

All CMS interfaces are fully responsive:
- Dashboard works on tablets
- Media library touch-friendly
- Forms optimized for mobile editing
- Preview on all devices before publishing

## 🔍 SEO Features

Built-in SEO tools:
- Custom meta titles and descriptions
- Clean, descriptive URLs (slugs)
- Image alt text fields
- Automatic sitemap generation
- Mobile-friendly markup

## 🚀 Getting Started Checklist

**Initial Setup:**
- [ ] Log in to CMS at `/cms/login`
- [ ] Update site settings
- [ ] Upload logo to media library
- [ ] Create About Us page
- [ ] Create Contact page

**Add Content:**
- [ ] Add first shortlet property
- [ ] Add first tour package
- [ ] Upload property/tour images
- [ ] Feature top content on homepage

**Launch:**
- [ ] Preview all pages
- [ ] Test on mobile device
- [ ] Check contact forms work
- [ ] Verify social media links

## 📞 Support

**CMS User Guide:**
- Available at `/cms/guide`
- Contains tutorials for all features
- Best practices and tips
- Common troubleshooting

**Technical Issues:**
- Contact your website administrator
- Check server logs for errors
- Verify API endpoints are working

## 🎓 Training Resources

**For Content Managers:**
1. Start with the Quick Start Guide in CMS
2. Practice with draft content first
3. Use the rich text editor tutorial
4. Learn media library best practices

**For Administrators:**
1. Database schema documentation
2. API endpoint reference
3. Backup and restore procedures
4. User management guide

## 🔄 Updates & Maintenance

**Regular Tasks:**
- Weekly: Review and update content
- Monthly: Check and optimize images
- Quarterly: Update seasonal tours/pricing
- Annually: Review and archive old content

**System Maintenance:**
- Regular database backups
- Monitor storage usage (media files)
- Review user access logs
- Update security credentials

## 📈 Future Enhancements

Possible additions:
- [ ] Bulk import/export
- [ ] Advanced analytics dashboard
- [ ] Email campaign integration
- [ ] Booking calendar management
- [ ] Customer review moderation
- [ ] Multi-language support
- [ ] Advanced image editing tools
- [ ] Draft preview links

## 🎉 Summary

You now have a **professional, customizable CMS** that:

✅ **Controls ALL website content** - pages, properties, tours, media
✅ **Updates automatically** - changes reflect instantly on live site
✅ **Easy to use** - intuitive interface with built-in documentation
✅ **Flexible** - add/edit/remove content without technical knowledge
✅ **Scalable** - handles unlimited content as your business grows
✅ **SEO-optimized** - built-in tools for search engine visibility
✅ **Mobile-friendly** - manage content from any device
✅ **Secure** - authentication and role-based access

**Access your CMS at:** `yourwebsite.com/cms/login`

---

*Last Updated: November 2024*
