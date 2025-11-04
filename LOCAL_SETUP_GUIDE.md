# Ontour Travels - Local Development Setup Guide

## 🚀 Quick Start (5 minutes)

### Prerequisites
- **Node.js 18+** or **Bun** (recommended)
- **Git**
- Code editor (VS Code recommended)

### Installation

1. **Clone the repository**:
```bash
git clone <your-repo-url>
cd ontour-travels
```

2. **Install dependencies**:
```bash
# Using npm
npm install

# OR using Bun (faster)
bun install
```

3. **Run development server**:
```bash
# Using npm
npm run dev

# OR using Bun
bun dev
```

4. **Open in browser**:
```
http://localhost:3000
```

That's it! The website should be running locally. 🎉

---

## 📁 Project Structure

```
ontour-travels/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── about/             # About page
│   │   ├── book/              # Flights & Hotels search
│   │   ├── contact/           # Contact page
│   │   ├── faq/               # FAQ page
│   │   ├── privacy/           # Privacy Policy
│   │   ├── terms/             # Terms & Conditions
│   │   ├── shortlets/         # Shortlets listing
│   │   │   └── [slug]/        # Individual shortlet pages
│   │   ├── tours/             # Tours listing
│   │   │   └── [slug]/        # Individual tour pages
│   │   ├── api/               # API routes
│   │   │   ├── tours/         # Tours API
│   │   │   ├── shortlets/     # Shortlets API
│   │   │   └── contact/       # Contact form API
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   └── ui/                # UI components (Chakra)
│   ├── lib/                   # Utilities & helpers
│   │   └── cms/               # CMS data (JSON files)
│   │       ├── tours.json     # Tours content
│   │       └── shortlets.json # Shortlets content
│   └── providers/             # React context providers
├── public/                    # Static assets
├── SERVICES_AND_ALTERNATIVES.md
├── CMS_MANAGEMENT_GUIDE.md
├── LOCAL_SETUP_GUIDE.md      # This file
├── DEPLOYMENT_GUIDE.md
├── package.json
└── next.config.ts
```

---

## 🛠️ Development Commands

```bash
# Start development server (with hot reload)
npm run dev           # http://localhost:3000

# Build for production
npm run build

# Start production server (after build)
npm start

# Type checking
npm run type-check

# Linting
npm run lint

# Format code
npm run format        # (if configured)
```

---

## 🗄️ Adding a Custom Backend (Node + Express)

The current setup uses Next.js API routes. If you want to use your own Node + Express backend:

### Option 1: Separate Backend Server (Recommended for Production)

#### 1. Create Express Backend

Create a new folder for your backend:

```bash
mkdir backend
cd backend
npm init -y
npm install express cors dotenv
npm install -D nodemon typescript @types/node @types/express
```

**backend/server.js**:
```javascript
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const toursRouter = require('./routes/tours');
const shortletsRouter = require('./routes/shortlets');
const contactRouter = require('./routes/contact');

// API routes
app.use('/api/tours', toursRouter);
app.use('/api/shortlets', shortletsRouter);
app.use('/api/contact', contactRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
```

**backend/routes/tours.js**:
```javascript
const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

// Get all tours
router.get('/', async (req, res) => {
  try {
    const data = await fs.readFile(
      path.join(__dirname, '../data/tours.json'),
      'utf8'
    );
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tours' });
  }
});

// Get single tour by slug
router.get('/:slug', async (req, res) => {
  try {
    const data = await fs.readFile(
      path.join(__dirname, '../data/tours.json'),
      'utf8'
    );
    const { tours } = JSON.parse(data);
    const tour = tours.find(t => t.slug === req.params.slug);
    
    if (!tour) {
      return res.status(404).json({ error: 'Tour not found' });
    }
    
    res.json(tour);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tour' });
  }
});

module.exports = router;
```

**backend/routes/shortlets.js**:
```javascript
const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

// Get all shortlets
router.get('/', async (req, res) => {
  try {
    const data = await fs.readFile(
      path.join(__dirname, '../data/shortlets.json'),
      'utf8'
    );
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch shortlets' });
  }
});

// Get single shortlet by slug
router.get('/:slug', async (req, res) => {
  try {
    const data = await fs.readFile(
      path.join(__dirname, '../data/shortlets.json'),
      'utf8'
    );
    const { shortlets } = JSON.parse(data);
    const shortlet = shortlets.find(s => s.slug === req.params.slug);
    
    if (!shortlet) {
      return res.status(404).json({ error: 'Shortlet not found' });
    }
    
    res.json(shortlet);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch shortlet' });
  }
});

module.exports = router;
```

**backend/routes/contact.js**:
```javascript
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, serviceType, message } = req.body;
    
    // Validate
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Name, email, and message are required' 
      });
    }
    
    // Log enquiry (in production, send email or save to database)
    console.log('Contact form submission:', {
      name, email, phone, serviceType, message,
      timestamp: new Date().toISOString()
    });
    
    // TODO: Send email using Resend, SendGrid, or Nodemailer
    // TODO: Save to database
    
    res.json({ 
      success: true, 
      message: 'Enquiry received. We will contact you within 24 hours.' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Failed to submit enquiry' });
  }
});

module.exports = router;
```

**backend/package.json** (add scripts):
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

#### 2. Copy CMS Data
```bash
# Copy JSON files from frontend to backend
mkdir -p backend/data
cp src/lib/cms/tours.json backend/data/
cp src/lib/cms/shortlets.json backend/data/
```

#### 3. Run Backend
```bash
cd backend
npm run dev
# Backend runs on http://localhost:5000
```

#### 4. Update Frontend to Use Backend API

**Create environment variable** (.env.local in frontend root):
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

**Update API calls in frontend**:

Replace fetch calls in your components:
```typescript
// Before (Next.js API routes)
const response = await fetch('/api/tours');

// After (External backend)
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
const response = await fetch(`${API_URL}/api/tours`);
```

#### 5. Run Both Servers
```bash
# Terminal 1: Backend
cd backend
npm run dev

# Terminal 2: Frontend
cd ..  # (back to frontend root)
npm run dev
```

### Option 2: Next.js API Routes with External Database

If you want to keep Next.js API routes but connect to a database:

**Install database client**:
```bash
# PostgreSQL
npm install pg

# MySQL
npm install mysql2

# MongoDB
npm install mongodb
```

**Create database connection** (src/lib/db.ts):
```typescript
import { Pool } from 'pg';

// PostgreSQL example
export const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

// Test connection
export async function testConnection() {
  try {
    const client = await pool.connect();
    console.log('✅ Database connected');
    client.release();
  } catch (error) {
    console.error('❌ Database connection failed:', error);
  }
}
```

**Update API routes to use database**:

```typescript
// src/app/api/tours/route.ts
import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM tours WHERE status = $1', ['published']);
    return NextResponse.json({ tours: result.rows });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch tours' }, { status: 500 });
  }
}
```

**.env.local**:
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=ontour_travels
DB_USER=postgres
DB_PASSWORD=your_password
```

---

## 🗄️ Database Options for Local Development

### 1. **PostgreSQL** (Recommended)

**Install**:
- Mac: `brew install postgresql@16`
- Windows: Download from https://www.postgresql.org/download/
- Ubuntu: `sudo apt install postgresql`

**Start**:
```bash
brew services start postgresql@16  # Mac
sudo service postgresql start      # Ubuntu
```

**Create database**:
```bash
psql postgres
CREATE DATABASE ontour_travels;
\q
```

**Create tables**:
```sql
-- tours table
CREATE TABLE tours (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(50) NOT NULL,
  price_from_ngn INTEGER NOT NULL,
  price_from_usd INTEGER NOT NULL,
  data JSONB NOT NULL,  -- Store full tour data as JSON
  status VARCHAR(20) DEFAULT 'published',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- shortlets table
CREATE TABLE shortlets (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  price_per_night_ngn INTEGER NOT NULL,
  price_per_night_usd INTEGER NOT NULL,
  data JSONB NOT NULL,  -- Store full shortlet data as JSON
  status VARCHAR(20) DEFAULT 'available',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- contact_submissions table
CREATE TABLE contact_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  service_type VARCHAR(100),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 2. **MySQL**

**Install**:
- Mac: `brew install mysql`
- Windows: Download from https://dev.mysql.com/downloads/
- Ubuntu: `sudo apt install mysql-server`

**Start**:
```bash
brew services start mysql  # Mac
sudo service mysql start   # Ubuntu
```

**Create database**:
```bash
mysql -u root -p
CREATE DATABASE ontour_travels;
USE ontour_travels;
```

### 3. **SQLite** (Simplest for local dev)

No installation needed! Just use:
```bash
npm install better-sqlite3
```

**Create database**:
```javascript
const Database = require('better-sqlite3');
const db = new Database('ontour.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS tours (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    data TEXT NOT NULL,
    status TEXT DEFAULT 'published'
  )
`);
```

### 4. **MongoDB**

**Install**:
```bash
brew install mongodb-community  # Mac
# Or use Docker: docker run -d -p 27017:27017 mongo
```

**Connect**:
```javascript
const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');
await client.connect();
const db = client.db('ontour_travels');
```

---

## 🌐 Environment Variables

Create `.env.local` in project root:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000  # If using separate backend

# Database (choose one)
DATABASE_URL=postgresql://user:password@localhost:5432/ontour_travels
# OR
DATABASE_URL=mysql://user:password@localhost:3306/ontour_travels

# Email Service (Resend)
RESEND_API_KEY=re_xxxxx

# Payment (Paystack)
PAYSTACK_PUBLIC_KEY=pk_test_xxxxx
PAYSTACK_SECRET_KEY=sk_test_xxxxx

# Payment (Flutterwave)
FLW_PUBLIC_KEY=FLWPUBK_TEST-xxxxx
FLW_SECRET_KEY=FLWSECK_TEST-xxxxx

# Amadeus API (when ready)
AMADEUS_CLIENT_ID=your_client_id
AMADEUS_CLIENT_SECRET=your_client_secret

# WhatsApp Business
WHATSAPP_PHONE_NUMBER=2348123456789
```

---

## 🧪 Testing APIs Locally

### Using curl:
```bash
# Test tours API
curl http://localhost:3000/api/tours

# Test single tour
curl http://localhost:3000/api/tours/weekend-in-dubai

# Test contact form
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Test message"
  }'
```

### Using browser:
- Tours: http://localhost:3000/api/tours
- Shortlets: http://localhost:3000/api/shortlets
- Single tour: http://localhost:3000/api/tours/weekend-in-dubai

---

## 🔥 Common Issues & Solutions

### Issue: "Module not found" errors
**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Port 3000 already in use
**Solution**:
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm run dev
```

### Issue: Hot reload not working
**Solution**:
- Check if you're editing the right file
- Restart dev server
- Clear `.next` folder: `rm -rf .next`

### Issue: API routes returning 404
**Solution**:
- Check file location: `src/app/api/[route]/route.ts`
- Check HTTP method (GET, POST, etc.) matches
- Restart dev server

### Issue: Images not loading
**Solution**:
- Check image URLs are valid
- For local images, place in `public/` folder
- Reference as `/images/photo.jpg` (not `./public/images/`)

---

## 📦 Optional: Using Docker

**Dockerfile**:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

**docker-compose.yml**:
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - postgres

  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: ontour_travels
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

**Run**:
```bash
docker-compose up
```

---

## 🎯 Next Steps

1. ✅ Get local dev running
2. Add your own tour/shortlet content
3. Set up a database (PostgreSQL recommended)
4. Integrate payment gateway (Paystack/Flutterwave)
5. Set up email service (Resend)
6. Connect Amadeus API for live flight data
7. Deploy to production (see DEPLOYMENT_GUIDE.md)

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Chakra UI Docs](https://chakra-ui.com/)
- [PostgreSQL Tutorial](https://www.postgresql.org/docs/)
- [Express.js Guide](https://expressjs.com/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

Happy coding! 🚀
