# Ontour Travels - CMS Management Guide

## Overview
This guide explains how to manage content (tours, shortlets) on your Ontour Travels website using the JSON-based CMS.

---

## 📁 Current CMS Structure

The website uses a simple, file-based CMS with JSON files located in:
```
src/lib/cms/
├── tours.json       # All tour packages
└── shortlets.json   # All shortlet properties
```

---

## 🏖️ Managing Tours

### Tour File Location
`src/lib/cms/tours.json`

### Tour Structure
Each tour has the following properties:

```json
{
  "id": "unique-tour-id",
  "slug": "url-friendly-name",
  "title": "Tour Display Name",
  "category": "local|regional|international",
  "tags": ["luxury", "couple", "family", "visa-support"],
  "duration_days": 4,
  "duration_nights": 3,
  "price_from_ngn": 850000,
  "price_from_usd": 950,
  "short_description": "Brief tour description for cards",
  "highlights": [
    "Key benefit 1",
    "Key benefit 2"
  ],
  "inclusions": [
    "What's included in the price"
  ],
  "exclusions": [
    "What's NOT included"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Day 1 Title",
      "description": "What happens on day 1"
    }
  ],
  "accommodation_examples": [
    "Hotel Name 1",
    "Hotel Name 2"
  ],
  "seasonality": "Best time to visit",
  "visa_notes": "Visa requirements and support info",
  "add_ons": [
    "Optional upgrade: +₦50,000"
  ],
  "cancellation_terms": "Cancellation policy text",
  "gallery": [
    "https://image-url-1.jpg",
    "https://image-url-2.jpg"
  ],
  "whatsapp_prefill": "Hi Ontour, I'm interested in...",
  "status": "published|draft"
}
```

### Adding a New Tour

1. Open `src/lib/cms/tours.json`
2. Add a new tour object to the `tours` array:

```json
{
  "tours": [
    {
      "id": "cape-town-adventure",
      "slug": "cape-town-adventure",
      "title": "Cape Town Adventure",
      "category": "regional",
      "tags": ["adventure", "couple", "family"],
      "duration_days": 5,
      "duration_nights": 4,
      "price_from_ngn": 720000,
      "price_from_usd": 850,
      "short_description": "Explore the beauty of Cape Town: Table Mountain, beaches, and wine estates",
      "highlights": [
        "Table Mountain cable car",
        "Cape Point tour",
        "Wine tasting in Stellenbosch",
        "Penguin viewing at Boulders Beach",
        "V&A Waterfront shopping"
      ],
      "inclusions": [
        "Round-trip flights (LOS-CPT-LOS)",
        "4 nights accommodation (4-star hotel)",
        "Daily breakfast",
        "Airport transfers",
        "Cape Peninsula tour",
        "Table Mountain tickets",
        "Wine tasting tour"
      ],
      "exclusions": [
        "Travel insurance",
        "Lunches and dinners",
        "Optional activities",
        "Personal expenses",
        "Tips and gratuities"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival & City Orientation",
          "description": "Arrive in Cape Town. Transfer to hotel. Evening at leisure to explore the V&A Waterfront with its restaurants, shops, and ocean views."
        },
        {
          "day": 2,
          "title": "Table Mountain & City Tour",
          "description": "Morning cable car ride up Table Mountain (weather permitting). Afternoon city tour including Bo-Kaap, Company's Garden, and Signal Hill viewpoint."
        },
        {
          "day": 3,
          "title": "Cape Peninsula Full Day",
          "description": "Full-day tour to Cape Point, Chapman's Peak Drive, Boulders Beach penguin colony, and scenic coastal villages. Lunch in Simon's Town."
        },
        {
          "day": 4,
          "title": "Winelands Experience",
          "description": "Day trip to Stellenbosch and Franschhoek wine regions. Visit 3 wine estates for tastings. Lunch at a vineyard restaurant. Return to Cape Town."
        },
        {
          "day": 5,
          "title": "Departure",
          "description": "Leisurely breakfast. Last-minute shopping or beach time. Transfer to airport for your flight back to Lagos."
        }
      ],
      "accommodation_examples": [
        "The PortsWood Hotel (Green Point)",
        "SunSquare Cape Town City Bowl",
        "Park Inn by Radisson (Foreshore)"
      ],
      "seasonality": "Best time: November - March (summer), September - May (avoid winter)",
      "visa_notes": "South African visa required for Nigerian passport holders. We provide full visa support including document checklist, form assistance, and application tracking. Processing time: 10-15 working days. Ensure passport has 2 blank pages and 6 months validity.",
      "add_ons": [
        "Cage diving with great white sharks: +₦120,000",
        "Hot air balloon over winelands: +₦95,000",
        "Robben Island tour: +₦25,000",
        "Travel insurance: +₦25,000"
      ],
      "cancellation_terms": "50% deposit to secure booking. Balance due 21 days before departure. Cancellations 30+ days before: 50% refund. 15-30 days: 25% refund. Less than 15 days: non-refundable. Flight tickets non-refundable once issued.",
      "gallery": [
        "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1200&q=80",
        "https://images.unsplash.com/photo-1563656155673-74b9e76ade00?w=1200&q=80",
        "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1200&q=80",
        "https://images.unsplash.com/photo-1591808216660-7d75f9f6f6ca?w=1200&q=80"
      ],
      "whatsapp_prefill": "Hi Ontour, I'm interested in the Cape Town Adventure package (5D/4N). Please send me more details and available dates.",
      "status": "published"
    }
  ]
}
```

3. Save the file
4. The tour will automatically appear on the website!

### Editing an Existing Tour

1. Open `src/lib/cms/tours.json`
2. Find the tour you want to edit by its `slug` or `title`
3. Modify the fields you want to change
4. Save the file

**Common Edits:**
- Update prices: Change `price_from_ngn` and `price_from_usd`
- Add/remove tour dates: Modify `seasonality`
- Update itinerary: Edit the `itinerary` array
- Change availability: Set `status` to `"draft"` to hide from public

### Tour Categories

- **`local`**: Tours within Nigeria (Obudu, Abuja, Calabar, etc.)
- **`regional`**: African destinations (Zanzibar, Cape Town, Ghana, Kenya, etc.)
- **`international`**: Global destinations (Dubai, London, Bali, etc.)

### Tour Tags

Common tags to use:
- `luxury`, `budget`, `mid-range`
- `couple`, `family`, `solo`, `group`
- `adventure`, `relaxation`, `beach`, `culture`
- `visa-support`, `visa-free`
- `honeymoon`, `romantic`

---

## 🏠 Managing Shortlets

### Shortlet File Location
`src/lib/cms/shortlets.json`

### Shortlet Structure

```json
{
  "id": "unique-shortlet-id",
  "slug": "url-friendly-name",
  "title": "Property Display Name",
  "location": "Area, Lagos",
  "location_details": {
    "area": "Lekki Phase 1",
    "city": "Lagos",
    "state": "Lagos",
    "nearby": "Description of nearby attractions"
  },
  "property_type": "Apartment|Studio|House|Penthouse",
  "price_per_night_ngn": 45000,
  "price_per_night_usd": 55,
  "bedrooms": 1,
  "bathrooms": 1,
  "max_guests": 2,
  "description": "Full property description",
  "amenities": [
    "Wi-Fi",
    "Air Conditioning",
    "Smart TV"
  ],
  "features": [
    "Self check-in",
    "Quiet neighborhood"
  ],
  "policies": {
    "check_in": "2:00 PM",
    "check_out": "12:00 PM",
    "minimum_stay": "2 nights",
    "cancellation": "Cancellation policy text",
    "deposit": "₦50,000 refundable security deposit",
    "house_rules": [
      "No smoking inside",
      "No parties"
    ]
  },
  "gallery": [
    "https://image-url.jpg"
  ],
  "rating": 4.8,
  "reviews_count": 24,
  "host_name": "Ontour Travels",
  "host_response_time": "Within 1 hour",
  "whatsapp_prefill": "Hi Ontour, I'm interested in...",
  "status": "available|booked|maintenance",
  "featured": true
}
```

### Adding a New Shortlet

1. Open `src/lib/cms/shortlets.json`
2. Add a new property to the `shortlets` array:

```json
{
  "id": "ikoyi-3br-penthouse",
  "slug": "ikoyi-3br-penthouse",
  "title": "Luxury 3BR Penthouse – Ikoyi",
  "location": "Ikoyi, Lagos",
  "location_details": {
    "area": "Banana Island, Ikoyi",
    "city": "Lagos",
    "state": "Lagos",
    "nearby": "Ikoyi Golf Club (2 mins), Civic Centre (5 mins), Fine dining restaurants within walking distance"
  },
  "property_type": "Penthouse",
  "price_per_night_ngn": 150000,
  "price_per_night_usd": 180,
  "bedrooms": 3,
  "bathrooms": 3,
  "max_guests": 6,
  "description": "Stunning penthouse apartment on Banana Island featuring panoramic Lagos Lagoon views. This ultra-luxury space combines modern elegance with comfort, perfect for executives, families, or groups seeking the ultimate Lagos experience. Floor-to-ceiling windows, designer furniture, and top-tier amenities throughout.",
  "amenities": [
    "High-Speed Wi-Fi (100Mbps)",
    "Air Conditioning (All Rooms)",
    "65\" Smart TVs (Living + Master)",
    "Gourmet Kitchen (Sub-Zero appliances)",
    "Wine Cooler",
    "Washer & Dryer",
    "Home Office with Ergonomic Setup",
    "Free Parking (3 Spaces)",
    "24/7 Concierge & Security",
    "Backup Generator",
    "Infinity Pool (Building)",
    "State-of-the-Art Gym",
    "Sauna & Steam Room",
    "Tennis Court",
    "Private Elevator Access",
    "Balcony with Lagoon View"
  ],
  "features": [
    "Contactless check-in",
    "Premium location (Banana Island)",
    "Business-ready workspace",
    "Suitable for corporate stays",
    "Family-friendly",
    "Pet-friendly (small, house-trained pets - ₦10,000/night fee)",
    "Daily housekeeping available (+₦15,000/day)",
    "Private chef service available (on request)"
  ],
  "policies": {
    "check_in": "3:00 PM (early check-in available by arrangement)",
    "check_out": "12:00 PM (late check-out +₦20,000)",
    "minimum_stay": "3 nights (7 nights during peak season)",
    "cancellation": "Free cancellation 14 days before check-in. 50% refund if cancelled 7-14 days before. No refund within 7 days of check-in.",
    "deposit": "₦200,000 refundable security deposit required",
    "house_rules": [
      "Strictly no smoking indoors (balcony smoking permitted)",
      "No loud parties after 10 PM",
      "Maximum 6 guests",
      "Events require prior approval (additional fee applies)",
      "Visitors must register with security",
      "Keep common areas tidy",
      "Respect neighbors and building rules"
    ]
  },
  "gallery": [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200&q=80",
    "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=1200&q=80"
  ],
  "rating": 5.0,
  "reviews_count": 12,
  "host_name": "Ontour Travels",
  "host_response_time": "Within 15 minutes",
  "whatsapp_prefill": "Hi Ontour, I'd like to inquire about the Luxury 3BR Penthouse on Banana Island. Is it available for my dates?",
  "status": "available",
  "featured": true
}
```

3. Save the file
4. The property will appear on the website immediately!

### Editing an Existing Shortlet

1. Open `src/lib/cms/shortlets.json`
2. Find the property by `slug` or `title`
3. Update the fields
4. Save the file

**Common Edits:**
- Update prices: Change `price_per_night_ngn` and `price_per_night_usd`
- Mark as booked: Set `status` to `"booked"`
- Update availability: Change `status` between `"available"`, `"booked"`, `"maintenance"`
- Add new amenities: Add to the `amenities` array
- Update photos: Replace URLs in `gallery` array

---

## 📸 Image Management

### Current Approach (Unsplash)
The website currently uses Unsplash placeholder images. These are free but have limitations.

### Recommended: Use Your Own Images

1. **Upload to Cloudinary** (Recommended):
   - Sign up at https://cloudinary.com (free tier: 25GB)
   - Upload your property/tour photos
   - Copy the Cloudinary URLs
   - Replace image URLs in JSON files

2. **Use Vercel Blob Storage**:
   - Integrated with Vercel hosting
   - Simple API
   - Pay only for what you use

3. **Use Public Folder** (Simple but not ideal):
   - Place images in `public/images/`
   - Reference as `/images/your-photo.jpg`
   - Note: Not optimized, increases repository size

### Image Best Practices

- **Size**: 1200x800px or 1600x1067px
- **Format**: Use WebP or AVIF for best compression
- **Naming**: Use descriptive names (`lekki-1br-living-room.jpg`)
- **Alt Text**: Describe the image for accessibility
- **Gallery Order**: Put best/hero image first

---

## 🚀 Publishing Workflow

### Making Content Live

1. **Edit JSON file** in your code editor
2. **Test locally** (optional): Run `npm run dev` and check the website
3. **Commit changes**:
   ```bash
   git add src/lib/cms/
   git commit -m "Add new Cape Town tour package"
   git push
   ```
4. **Deploy**: If using Vercel, changes deploy automatically!

### Draft vs Published

- Set `"status": "draft"` to hide content
- Set `"status": "published"` (tours) or `"available"` (shortlets) to show

---

## 🎯 Pro Tips

### 1. **Consistent Formatting**
- Keep prices consistent (always include NGN and USD)
- Use similar language patterns across tours/shortlets
- Maintain consistent image dimensions

### 2. **SEO-Friendly Content**
- Use descriptive `title` and `short_description`
- Include location keywords (Lagos, Lekki, Victoria Island)
- Make `slug` readable (e.g., `zanzibar-beach-escape`, not `tour-123`)

### 3. **Pricing Strategy**
- Price in NGN first (primary market)
- USD pricing for international customers
- Consider seasonal pricing (edit JSON when rates change)

### 4. **Update Regularly**
- Refresh tour dates and seasonality quarterly
- Update availability for shortlets
- Keep cancellation policies current

### 5. **WhatsApp Prefills**
- Make prefill text specific to the package/property
- Include key details (dates, number of guests)
- Keep it conversational

---

## 🔄 Future: Migrating to a Headless CMS

When your content volume grows, consider migrating to **Payload CMS** or **Sanity**:

**Benefits:**
- Visual admin panel (no code editing needed)
- Role-based access (let team members add content)
- Image uploads with automatic optimization
- Content scheduling
- Version history

**Migration Path:**
1. Set up Payload/Sanity
2. Import existing JSON data
3. Update API routes to fetch from CMS
4. Train team on admin panel

See `SERVICES_AND_ALTERNATIVES.md` for CMS recommendations.

---

## ❓ Common Questions

**Q: How do I temporarily hide a tour/shortlet?**
A: Change `"status"` to `"draft"` or `"maintenance"`

**Q: Can I add more than 3 shortlets/tours?**
A: Yes! Just add more objects to the arrays. No limits.

**Q: How do I change the homepage featured tours/shortlets?**
A: Edit the homepage component (`src/app/page.tsx`) or mark items as `"featured": true` in JSON

**Q: Do I need to restart the dev server after editing JSON?**
A: For local development: Yes, restart `npm run dev`. For production: Just push to Git and Vercel redeploys automatically.

**Q: How do I bulk-update prices?**
A: Use a code editor with find/replace across files. Or use a JSON editor tool.

---

## 📞 Need Help?

If you're stuck or need assistance updating content, you can:
1. Check this guide again
2. Look at existing tours/shortlets as examples
3. Test changes locally before pushing live
4. Keep backups before major edits

Happy content managing! 🎉
