# Ontour Travels - Visual CMS Complete Guide

## 🎯 Overview

This guide covers the complete Visual CMS (Content Management System) for Ontour Travels. The CMS allows non-technical staff to manage tours, shortlets, and media through an intuitive web interface.

---

## 🔐 Access & Authentication

### Admin Login

**URL**: `https://yourdomain.com/admin/login`

**Default Credentials:**
- **Email**: `admin@ontourtravels.com.ng`
- **Password**: `admin123`

⚠️ **IMPORTANT**: Change these credentials immediately in production!

### How to Change Admin Password

1. Open `src/app/api/admin/login/route.ts`
2. Update the `ADMIN_CREDENTIALS` object
3. For production, use proper password hashing (bcrypt)

---

## 📊 Dashboard Overview

After logging in, you'll see the main dashboard with:

1. **Statistics Cards**: Quick overview of total tours, shortlets, and media files
2. **Quick Actions**: Shortcuts to create new content
3. **Management Links**: Access to all content sections

---

## 🗺️ Managing Tours

### Creating a New Tour

1. Click **"Create New Tour"** from the dashboard
2. Fill in the tour details:
   - **Title**: Tour name (e.g., "Weekend in Dubai")
   - **Category**: Local, Regional, or International
   - **Duration**: Number of days and nights
   - **Pricing**: Set NGN and USD prices
   - **Description**: Full tour description
   - **Highlights**: Key selling points (3-6 items)
   - **Inclusions**: What's included in the package
   - **Exclusions**: What's NOT included
   - **Itinerary**: Day-by-day breakdown
   - **Gallery**: Upload tour images
   - **Status**: Draft or Published

3. Click **"Save Tour"** or **"Publish"**

### Editing Existing Tours

1. Go to **"Manage Tours"** from dashboard
2. Click on the tour you want to edit
3. Make your changes
4. Click **"Update Tour"**

### Deleting Tours

1. Go to **"Manage Tours"**
2. Find the tour to delete
3. Click the trash icon
4. Confirm deletion

---

## 🏠 Managing Shortlets

### Creating a New Shortlet

1. Click **"Create New Shortlet"** from the dashboard
2. Fill in the property details:
   - **Title**: Property name (e.g., "1BR Apartment – Lekki Phase 1")
   - **Location**: Area/neighborhood
   - **Property Type**: Apartment, Studio, House, or Penthouse
   - **Bedrooms**: Number of bedrooms
   - **Bathrooms**: Number of bathrooms
   - **Max Guests**: Maximum occupancy
   - **Pricing**: Nightly rate in NGN and USD
   - **Description**: Full property description
   - **Amenities**: Select available amenities (Wi-Fi, AC, Pool, etc.)
   - **Features**: Additional property features
   - **Policies**:
     - Check-in/Check-out times
     - Minimum stay requirement
     - Security deposit amount
     - Cancellation policy
     - House rules
   - **Gallery**: Upload property images
   - **Status**: Available, Booked, or Maintenance

3. Click **"Save Shortlet"** or **"Publish"**

### Editing Existing Shortlets

1. Go to **"Manage Shortlets"** from dashboard
2. Click on the property you want to edit
3. Make your changes
4. Click **"Update Shortlet"**

### Deleting Shortlets

1. Go to **"Manage Shortlets"**
2. Find the property to delete
3. Click the trash icon
4. Confirm deletion

---

## 🖼️ Media Management

### Uploading Images

1. Go to **"Media Library"** from dashboard
2. Click **"Upload New"**
3. Select images from your computer
4. Add titles and descriptions
5. Click **"Upload"**

**Supported Formats**: JPG, PNG, WebP  
**Max File Size**: 5MB per image  
**Recommended Size**: 1920x1080px for best quality

### Using Images in Content

1. When editing a tour or shortlet, find the **"Gallery"** section
2. Click **"Add Images"**
3. Select from **Media Library** or **Upload New**
4. Images will be added to the gallery

### Deleting Media

1. Go to **"Media Library"**
2. Click on the image to delete
3. Click the trash icon
4. Confirm deletion

⚠️ **Warning**: Deleting media will remove it from all tours/shortlets using it!

---

## ✏️ Using the WYSIWYG Editor

The Visual Editor (What You See Is What You Get) makes formatting text easy:

### Text Formatting

- **Bold**: Select text → Click **B** button
- **Italic**: Select text → Click **I** button
- **Headings**: Click **H** dropdown → Select heading level
- **Lists**: Click bullet or numbered list icon

### Adding Links

1. Select text to link
2. Click the link icon
3. Enter the URL
4. Click **"Insert"**

### Adding Images

1. Click where you want the image
2. Click the image icon
3. Upload or select from media library
4. Set alt text for accessibility
5. Click **"Insert"**

---

## 🔄 Publishing Workflow

### Draft vs Published

- **Draft**: Only visible in CMS, not on public website
- **Published**: Live on the website for visitors

### Publishing Content

1. Create/edit your content
2. Set status to **"Published"**
3. Click **"Save"** or **"Update"**
4. Content appears on website immediately

### Unpublishing Content

1. Edit the content
2. Change status to **"Draft"**
3. Click **"Update"**
4. Content is hidden from website but saved in CMS

---

## 🎨 Best Practices

### Images

✅ **DO**:
- Use high-quality images (at least 1200px wide)
- Compress images before uploading (use TinyPNG.com)
- Add descriptive filenames (e.g., `dubai-burj-khalifa.jpg`)
- Write alt text for accessibility

❌ **DON'T**:
- Upload images larger than 5MB
- Use low-resolution or blurry images
- Leave alt text empty

### Writing Content

✅ **DO**:
- Write clear, concise descriptions
- Highlight key benefits and features
- Include specific details (dates, prices, inclusions)
- Proofread before publishing
- Use short paragraphs (2-3 sentences)

❌ **DON'T**:
- Use all caps or excessive punctuation!!!
- Copy content from competitors
- Leave required fields empty
- Publish without reviewing

### Pricing

✅ **DO**:
- Update prices regularly
- Include currency clearly (NGN/USD)
- State what's included vs. additional costs
- Offer seasonal discounts when applicable

❌ **DON'T**:
- Leave old/outdated prices
- Forget to update both NGN and USD prices
- Hide important fees in fine print

---

## 🆘 Troubleshooting

### Can't Login

**Problem**: "Invalid credentials" error  
**Solution**:
1. Double-check email and password
2. Ensure caps lock is off
3. Contact technical admin to reset password

### Images Not Uploading

**Problem**: Upload fails or shows error  
**Solution**:
1. Check file size (must be under 5MB)
2. Ensure format is JPG, PNG, or WebP
3. Try compressing the image first
4. Check internet connection

### Changes Not Showing on Website

**Problem**: Updates don't appear on live site  
**Solution**:
1. Ensure status is set to "Published"
2. Clear browser cache (Ctrl+F5)
3. Wait 1-2 minutes for changes to propagate
4. Check if you saved/updated the content

### Content Looks Different on Mobile

**Problem**: Layout issues on phone/tablet  
**Solution**:
- This is normal! The CMS uses responsive design
- Test on multiple devices before publishing
- Keep content concise for better mobile experience

---

## 📞 Support

### Need Help?

- **Technical Issues**: Contact your web developer
- **Content Questions**: Refer to this guide
- **Emergency**: Use WhatsApp support channel

### Requesting New Features

If you need functionality not covered in the CMS:
1. Document what you need
2. Explain why it's needed
3. Provide examples if possible
4. Contact your development team

---

## 🔐 Security Best Practices

1. **Change default password immediately**
2. **Never share login credentials**
3. **Log out when finished editing**
4. **Use strong passwords** (12+ characters, mixed case, numbers, symbols)
5. **Enable two-factor authentication** (if available)
6. **Only grant access to trusted staff members**

---

## 📋 Quick Reference

| Task | Steps |
|------|-------|
| Create Tour | Dashboard → Create New Tour → Fill form → Publish |
| Edit Tour | Dashboard → Manage Tours → Select tour → Edit → Update |
| Create Shortlet | Dashboard → Create New Shortlet → Fill form → Publish |
| Upload Image | Media Library → Upload New → Select file → Upload |
| Change Password | Contact technical admin |
| Publish Content | Edit content → Set status: Published → Save |
| Unpublish Content | Edit content → Set status: Draft → Update |

---

## 🎓 Training Checklist

For new CMS users, complete these tasks:

- [ ] Successfully log in to CMS
- [ ] Navigate the dashboard
- [ ] Create a draft tour
- [ ] Upload an image to media library
- [ ] Edit an existing tour
- [ ] Publish a tour (make it live)
- [ ] Unpublish a tour (take it offline)
- [ ] Create a draft shortlet
- [ ] Add images to a shortlet
- [ ] Preview content before publishing

---

## 📅 Maintenance Schedule

**Daily**:
- Review new bookings/inquiries
- Update availability status for shortlets

**Weekly**:
- Check for outdated tour information
- Review and update pricing
- Upload new property/tour images

**Monthly**:
- Archive old/expired tours
- Update seasonal content
- Review analytics and popular content

---

## 🎉 You're Ready!

You now have everything you need to manage the Ontour Travels CMS effectively. Remember:

1. **Start with drafts** when learning
2. **Preview before publishing**
3. **Keep content up-to-date**
4. **Ask for help** when needed
5. **Back up important content** regularly

Happy content creating! 🚀
