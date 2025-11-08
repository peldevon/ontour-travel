# Ontour Travels - User Flow Documentation

## Table of Contents
1. [Regular User Flows](#regular-user-flows)
2. [Admin Panel Flows](#admin-panel-flows)
3. [Feature Inventory](#feature-inventory)

---

## Regular User Flows

### 1. **Homepage Visit Flow**
```
User lands on homepage → Views hero section with CTA
  ↓
Option A: Click "View Our Packages" → Navigate to Tours page
Option B: Click "Explore Tours" → Navigate to Tours page  
Option C: Click "Book Now" → Navigate to /book page
Option D: Click WhatsApp button → Opens WhatsApp chat with pre-filled message
Option E: Browse sections (Popular Destinations, Why Choose Us, Testimonials)
  ↓
Navigate via header menu to:
  - Home (/)
  - Flights & Hotels (/book)
  - Tours (/tours)
  - Shortlets (/shortlets)
  - About (/about)
  - Contact (/contact)
```

**Available Actions:**
- ✅ Click logo → Returns to homepage
- ✅ Navigate between pages via header menu
- ✅ WhatsApp contact button (opens WhatsApp with pre-filled message)
- ✅ View popular destinations cards
- ✅ Read "Why Choose Us" features
- ✅ View testimonials
- ✅ Access footer links (Quick Links, Support, Contact)

---

### 2. **Tours Page Flow**
```
User visits /tours page
  ↓
Views hero section with tour categories
  ↓
Filter tours by category:
  - All Tours
  - Local Tours
  - Regional Tours
  - International Tours
  ↓
Browse tour cards displaying:
  - Tour image
  - Tour title
  - Destination
  - Duration
  - Price from
  - Rating & reviews
  ↓
Click "View Details" button on a tour
  ↓
Navigate to /tours/[slug] detail page
  ↓
View full tour information:
  - Image gallery
  - Complete description
  - Highlights
  - What's included/excluded
  - Pricing
  - Booking form
  ↓
Actions available:
  - Fill booking form (name, email, phone, dates, guests)
  - Click "Book This Tour" → WhatsApp message with tour details
  - Click "Get a Quote" → WhatsApp inquiry
  - Navigate back to tours list
```

**Available Actions:**
- ✅ Filter tours by category (All/Local/Regional/International)
- ✅ View tour cards with images and details
- ✅ Click "View Details" → Navigate to tour detail page
- ✅ View full tour details on slug page
- ✅ Fill booking form
- ✅ Contact via WhatsApp for booking/inquiries

---

### 3. **Shortlets Page Flow**
```
User visits /shortlets page
  ↓
Views hero section with search bar
  ↓
Enter search criteria (optional):
  - Location
  - Check-in date
  - Check-out date
  - Number of guests
  ↓
Apply filters (sidebar on desktop):
  ☐ Location (Lekki, Victoria Island, Ikoyi, Ikeja)
  ☐ Property Type (1BR, 2BR, 3BR, Studio)
  ☐ Amenities (WiFi, AC, Pool, Parking, Gym, Security)
  ☐ Price Range (₦20,000 - ₦100,000/night)
  ↓
Browse shortlet property cards with:
  - Image carousel (multiple images with navigation arrows)
  - Property title
  - Location
  - Rating & reviews
  - Amenities tags
  - Price per night
  ↓
Interact with image carousel:
  - Click left/right arrows to view more images
  - Click indicator dots to jump to specific image
  - Hover to pause on current image
  ↓
Click "View Details" button
  ↓
Navigate to /shortlets/[slug] detail page
  ↓
View complete property information:
  - Full image gallery
  - Detailed description
  - Complete amenities list
  - Pricing information
  - Booking calendar
  - House rules
  ↓
Actions available:
  - Select dates on calendar
  - View total price calculation
  - Click "Book Now" → WhatsApp with property details
  - Click "Chat on WhatsApp" → Direct inquiry
```

**Available Actions:**
- ✅ Search by location, dates, guests
- ✅ Filter by location, property type, amenities, price
- ✅ Navigate image carousel (arrows + indicator dots)
- ✅ View property cards with details
- ✅ Click "View Details" → Navigate to property detail page
- ✅ View full property details on slug page
- ✅ Contact via WhatsApp for booking/inquiries
- ✅ "Need help?" CTA → WhatsApp for personalized recommendations

---

### 4. **Flights & Hotels Booking Flow**
```
User visits /book page
  ↓
Views booking interface with tabs:
  - Flights tab
  - Hotels tab
  ↓
Flights Tab:
  Fill form:
  - From (departure city)
  - To (destination city)  
  - Departure date
  - Return date (optional for one-way)
  - Passengers
  - Class (Economy/Business/First)
  ↓
  Click "Search Flights" → WhatsApp message with flight search details
  
Hotels Tab:
  Fill form:
  - Destination
  - Check-in date
  - Check-out date
  - Guests
  - Rooms
  ↓
  Click "Search Hotels" → WhatsApp message with hotel search details
```

**Available Actions:**
- ✅ Toggle between Flights and Hotels tabs
- ✅ Fill flight search form
- ✅ Fill hotel search form
- ✅ Submit search → WhatsApp inquiry with details

---

### 5. **About Page Flow**
```
User visits /about page
  ↓
Views company information:
  - Company story
  - Mission & vision
  - Team members
  - Why choose us
  ↓
Actions available:
  - Read about company
  - View team profiles
  - Navigate to contact page
  - Click WhatsApp CTA
```

**Available Actions:**
- ✅ Read company information
- ✅ View team section
- ✅ Navigate to other pages via header/footer

---

### 6. **Contact Page Flow**
```
User visits /contact page
  ↓
Views contact information:
  - Phone numbers
  - Email addresses
  - Office address
  - Business hours
  ↓
Fill contact form:
  - Name
  - Email
  - Phone
  - Message
  ↓
Click "Send Message" → Form submission (API call to /api/contact)
  ↓
Receive confirmation toast notification
  
Alternative:
  Click WhatsApp button → Direct WhatsApp chat
```

**Available Actions:**
- ✅ View contact information
- ✅ Fill and submit contact form
- ✅ Contact via WhatsApp
- ✅ View office location (if map integrated)

---

## Admin Panel Flows

### 1. **Admin Login Flow**
```
Admin visits /cms/login
  ↓
Views login page with credentials info
  ↓
Enter credentials:
  - Email: admin@ontourtravels.com.ng
  - Password: admin123
  ↓
Click "Sign In" button
  ↓
System validates credentials
  ↓
Success → Redirect to /cms/dashboard
Failure → Show error message, stay on login page
```

**Available Actions:**
- ✅ Enter email and password
- ✅ Click "Sign In" to authenticate
- ✅ View credential hints on page

---

### 2. **Admin Dashboard Flow**
```
Admin successfully logs in
  ↓
Lands on /cms/dashboard
  ↓
Views dashboard overview:
  - Total pages count
  - Total tours count
  - Total shortlets count
  - Total users count
  ↓
Quick action cards:
  - Pages: "Manage pages" → /cms/pages
  - Tours: "Manage tours" → /cms/tours
  - Shortlets: "Manage shortlets" → /cms/shortlets
  ↓
Sidebar navigation:
  - Dashboard (active)
  - Pages
  - Tours
  - Shortlets
  - Logout
```

**Available Actions:**
- ✅ View real-time statistics
- ✅ Navigate to management pages via quick action cards
- ✅ Use sidebar navigation
- ✅ Logout from system

---

### 3. **CMS Pages Management Flow**
```
Admin navigates to /cms/pages
  ↓
Views list of all pages in grid layout
  ↓
Each page card shows:
  - Page title
  - Slug
  - Status (published/draft)
  - Last updated date
  ↓
Available actions per page:
  Option A: Click "Edit" button → Open edit form
  Option B: Click "Delete" button → Confirm and delete page
  
Option C: Click "Add Page" button (top right)
  ↓
Opens create form with fields:
  - Title *
  - Slug *
  - Description
  - Content (rich text)
  - Meta title
  - Meta description
  - Status (published/draft)
  ↓
Fill all required fields (marked with *)
  ↓
Click "Save Page" → Creates new page, shows success toast
  OR
  Click "Cancel" → Returns to pages list
  
Edit Flow:
  Click "Edit" on existing page
  ↓
  Form pre-fills with current page data
  ↓
  Modify fields as needed
  ↓
  Click "Save Page" → Updates page, shows success toast
  OR
  Click "Cancel" → Returns to pages list without saving
  
Delete Flow:
  Click delete icon (trash) on page card
  ↓
  Confirm deletion in browser dialog
  ↓
  Page deleted → Success toast shown
  ↓
  Pages list refreshes
```

**Available Actions:**
- ✅ View all pages in grid
- ✅ Click "Add Page" → Create new page
- ✅ Click "Edit" on page → Edit existing page
- ✅ Click delete icon → Delete page (with confirmation)
- ✅ Save or cancel form actions
- ✅ View page status badges (published/draft)

---

### 4. **CMS Tours Management Flow**
```
Admin navigates to /cms/tours
  ↓
Views list of all tours in grid layout
  ↓
Each tour card shows:
  - Tour title
  - Destination
  - Category badge (International/Regional/Local)
  - Duration
  - Price from
  - Status badge (active/inactive)
  ↓
Available actions per tour:
  Option A: Click "Edit" button → Open edit form
  Option B: Click delete icon (trash) → Confirm and delete tour
  
Option C: Click "Add Tour" button (top right)
  ↓
Opens create form with fields:
  - Title *
  - Slug *
  - Destination *
  - Duration *
  - Price From (₦) *
  - Category * (dropdown: International/Regional/Local)
  - Description *
  - Highlights (comma-separated)
  - What's Included (comma-separated)
  - What's Excluded (comma-separated)
  - Image URLs (comma-separated)
  - Rating (0-5)
  - Reviews Count
  - Status * (dropdown: Active/Inactive)
  ↓
Fill all required fields (marked with *)
  ↓
Click "Save Tour" → Creates new tour, shows success toast
  OR
  Click "Cancel" → Returns to tours list
  
Edit Flow:
  Click "Edit" on existing tour
  ↓
  Form pre-fills with current tour data
  ↓
  Modify fields as needed (images as comma-separated URLs)
  ↓
  Click "Save Tour" → Updates tour, shows success toast
  OR
  Click "Cancel" → Returns to tours list without saving
  
Delete Flow:
  Click delete icon on tour card
  ↓
  Confirm deletion in browser dialog
  ↓
  Tour deleted → Success toast shown
  ↓
  Tours list refreshes
```

**Available Actions:**
- ✅ View all tours in grid
- ✅ Filter/view by category badge
- ✅ Click "Add Tour" → Create new tour
- ✅ Click "Edit" → Edit existing tour
- ✅ Click delete icon → Delete tour (with confirmation)
- ✅ Select category from dropdown (International/Regional/Local)
- ✅ Select status from dropdown (Active/Inactive)
- ✅ Save or cancel form actions
- ✅ Input image URLs as comma-separated list

**Image Handling:**
- ⚠️ Currently uses URL input (not file upload)
- Format: Comma-separated URLs
- Example: `https://example.com/image1.jpg, https://example.com/image2.jpg`

---

### 5. **CMS Shortlets Management Flow**
```
Admin navigates to /cms/shortlets
  ↓
Views list of all shortlets in grid layout
  ↓
Each shortlet card shows:
  - Property title
  - Location
  - Price per night
  - Number of bedrooms
  - Status badge (active/inactive)
  ↓
Available actions per shortlet:
  Option A: Click "Edit" button → Open edit form
  Option B: Click delete icon (trash) → Confirm and delete shortlet
  
Option C: Click "Add Shortlet" button (top right)
  ↓
Opens create form with fields:
  - Title *
  - Slug *
  - Location *
  - Price Per Night (₦) *
  - Bedrooms *
  - Status * (dropdown: Active/Inactive)
  - Description *
  - Amenities (comma-separated)
  - Image URLs (comma-separated)
  - Rating (0-5)
  - Reviews Count
  ↓
Fill all required fields (marked with *)
  ↓
Click "Save Shortlet" → Creates new shortlet, shows success toast
  OR
  Click "Cancel" → Returns to shortlets list
  
Edit Flow:
  Click "Edit" on existing shortlet
  ↓
  Form pre-fills with current shortlet data
  ↓
  Modify fields as needed (images as comma-separated URLs)
  ↓
  Click "Save Shortlet" → Updates shortlet, shows success toast
  OR
  Click "Cancel" → Returns to shortlets list without saving
  
Delete Flow:
  Click delete icon on shortlet card
  ↓
  Confirm deletion in browser dialog
  ↓
  Shortlet deleted → Success toast shown
  ↓
  Shortlets list refreshes
```

**Available Actions:**
- ✅ View all shortlets in grid
- ✅ Click "Add Shortlet" → Create new shortlet
- ✅ Click "Edit" → Edit existing shortlet
- ✅ Click delete icon → Delete shortlet (with confirmation)
- ✅ Select status from dropdown (Active/Inactive)
- ✅ Save or cancel form actions
- ✅ Input image URLs as comma-separated list
- ✅ Input amenities as comma-separated list

**Image Handling:**
- ⚠️ Currently uses URL input (not file upload)
- Format: Comma-separated URLs
- Example: `https://example.com/image1.jpg, https://example.com/image2.jpg`

---

### 6. **Admin Logout Flow**
```
Admin clicks "Logout" in sidebar
  ↓
System clears authentication session
  ↓
Redirect to /cms/login
  ↓
User must log in again to access admin panel
```

**Available Actions:**
- ✅ Click "Logout" button in sidebar
- ✅ Session cleared and redirected to login

---

## Feature Inventory

### **Regular User Features**
| Feature | Status | Location |
|---------|--------|----------|
| Homepage hero section | ✅ Working | / |
| Popular destinations display | ✅ Working | / |
| Why choose us section | ✅ Working | / |
| Testimonials carousel | ✅ Working | / |
| Tours listing with filters | ✅ Working | /tours |
| Tour detail pages | ✅ Working | /tours/[slug] |
| Shortlets listing with filters | ✅ Working | /shortlets |
| Shortlets image carousel | ✅ Working | /shortlets |
| Shortlet detail pages | ✅ Working | /shortlets/[slug] |
| Flights & hotels booking | ✅ Working | /book |
| About page | ✅ Working | /about |
| Contact form | ✅ Working | /contact |
| WhatsApp integration | ✅ Working | All pages |
| Responsive navigation | ✅ Working | All pages |
| Footer links | ✅ Working | All pages |

### **Admin Panel Features**
| Feature | Status | Location |
|---------|--------|----------|
| Admin login | ✅ Working | /cms/login |
| Dashboard with stats | ✅ Working | /cms/dashboard |
| Pages management (CRUD) | ✅ Working | /cms/pages |
| Tours management (CRUD) | ✅ Working | /cms/tours |
| Shortlets management (CRUD) | ✅ Working | /cms/shortlets |
| Sidebar navigation | ✅ Working | All CMS pages |
| Logout functionality | ✅ Working | CMS sidebar |
| Form validation | ✅ Working | All forms |
| Toast notifications | ✅ Working | All operations |
| Image upload (drag & drop) | ❌ Not Implemented | - |
| File upload system | ❌ Not Implemented | - |

### **Known Limitations**
1. **Image Upload**: Currently uses URL input instead of file upload
   - Requires manual image hosting
   - No drag-and-drop functionality
   - No image preview before save

2. **Search Functionality**: Search bars are UI-only
   - Tours page category filter works
   - Shortlets search/filters are UI-only (not functional)
   - Need backend search implementation

3. **Booking System**: Currently redirects to WhatsApp
   - No integrated payment system
   - No booking calendar with availability
   - Manual booking confirmation process

---

## Technical Notes

### **API Endpoints Used**
- `GET /api/tours` - Fetch all tours
- `GET /api/tours/[slug]` - Fetch single tour
- `GET /api/shortlets` - Fetch all shortlets
- `GET /api/shortlets/[slug]` - Fetch single shortlet
- `POST /api/contact` - Submit contact form
- `GET /api/cms/tours` - Fetch tours for admin
- `POST /api/cms/tours` - Create new tour
- `PUT /api/cms/tours/[id]` - Update tour
- `DELETE /api/cms/tours/[id]` - Delete tour
- `GET /api/cms/shortlets` - Fetch shortlets for admin
- `POST /api/cms/shortlets` - Create new shortlet
- `PUT /api/cms/shortlets/[id]` - Update shortlet
- `DELETE /api/cms/shortlets/[id]` - Delete shortlet
- `GET /api/cms/pages` - Fetch pages for admin
- `POST /api/cms/pages` - Create new page
- `PUT /api/cms/pages/[id]` - Update page
- `DELETE /api/cms/pages/[id]` - Delete page

### **Authentication**
- Admin login credentials stored in CMS system
- Default admin: `admin@ontourtravels.com.ng` / `admin123`
- Session-based authentication
- Protected routes via middleware

### **Data Storage**
- Tours data: `/public/data/tours.json`
- Shortlets data: `/public/data/shortlets.json`
- Database: Turso (LibSQL)
- Image storage: External URLs (not managed by system)

---

## Recommendations for Improvement

### High Priority
1. **✅ Fix Select component errors** (COMPLETED)
2. **Implement file upload system**
   - Add Supabase Storage or similar
   - Create drag-and-drop UI component
   - Generate thumbnails
   - Multiple image upload support

3. **Make search/filters functional**
   - Backend search implementation
   - Filter API endpoints
   - Real-time search results

### Medium Priority
4. **Booking system enhancements**
   - Integrated payment gateway
   - Calendar with availability
   - Booking confirmation emails
   - Booking management dashboard

5. **Image management**
   - Image gallery management in CMS
   - Image optimization
   - CDN integration

### Low Priority
6. **Additional CMS features**
   - Rich text editor for descriptions
   - Bulk operations
   - Export/import data
   - Analytics dashboard

---

*Last Updated: 2024*
*Version: 1.0*
