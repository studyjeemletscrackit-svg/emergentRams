# Ram's Audio Visual Services - Professional Website

A modern, SEO-optimized website built with Next.js 14 for Ram's Audio Visual Services - India's premier audio-visual equipment rental company.

## Features

- **Modern React/Next.js Architecture**: Built with Next.js 14 App Router for optimal performance
- **Static Site Generation (SSG)**: Pre-rendered pages for lightning-fast loading
- **Full SEO Optimization**: Complete implementation of SEO best practices
  - Unique meta tags and descriptions for each page
  - Open Graph tags for social sharing
  - Structured data (Schema.org) markup
  - XML sitemap and robots.txt
  - Semantic HTML5 structure
- **Mobile-First Responsive Design**: Perfect display on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **TypeScript**: Type-safe code for better development experience
- **Performance Optimized**: Fast loading times and optimized assets

## Pages

1. **Home Page** (`/`) - Hero section with branches and services
2. **Equipment Page** (`/equipment/`) - Dynamic equipment catalog with filtering
3. **About Page** (`/about/`) - Company information and process
4. **Contact Page** (`/contact/`) - Branch contact details
5. **Privacy Policy** (`/privacy/`) - Privacy policy page

## SEO Implementation

### Meta Tags
- Unique title and description for each page
- Keywords optimization
- Viewport meta tag for mobile responsiveness
- Canonical URLs
- Open Graph tags for social media

### Schema Markup
- Organization schema
- LocalBusiness schema
- BreadcrumbList schema
- Structured data for better search engine understanding

### Technical SEO
- XML sitemap (`/sitemap.xml`)
- Robots.txt file
- Clean, semantic HTML5
- Proper heading hierarchy (h1-h6)
- Fast loading times
- Mobile-friendly design

## Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Development Mode**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Export Static Site**
   ```bash
   npm run build
   ```
   This will create an `out` folder with static files ready for deployment

## Deployment

### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel will automatically deploy

### Option 2: Static Hosting
1. Run `npm run build`
2. Upload contents of `out` folder to your hosting
3. Configure server to support clean URLs

### Option 3: Traditional Hosting (cPanel, etc.)
1. Run `npm run build`
2. Upload `out` folder contents via FTP
3. Ensure `.htaccess` is uploaded for clean URLs

## Configuration

### Update Company Information
- Edit branch details in respective page files
- Update contact information in `components/Footer.tsx`
- Modify equipment data in `lib/equipment-data.ts`

### Update Domain
Replace `ramsavservices.com` with your actual domain in:
- `app/layout.tsx` (metadataBase)
- `app/sitemap.ts`
- `public/robots.txt`

### Analytics
Google Analytics and Google Tag Manager are already integrated:
- GTM ID: GTM-NV95DF7K
- Google Ads ID: AW-17785983412

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with global metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # Dynamic sitemap generation
│   ├── about/page.tsx      # About page
│   ├── contact/page.tsx    # Contact page
│   ├── equipment/page.tsx  # Equipment catalog page
│   └── privacy/page.tsx    # Privacy policy page
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer component
│   └── Schema.tsx          # Schema markup component
├── lib/
│   └── equipment-data.ts   # Equipment catalog data
├── public/
│   ├── robots.txt          # Robots file for SEO
│   ├── .htaccess           # Apache configuration
│   └── images/             # Image assets
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Image Assets

The project expects the following images in the `public/images/` folder:
- `apple-touch-icon.png` (180x180)
- `favicon-32x32.png` (32x32)
- `favicon-16x16.png` (16x16)
- `logo.png` (Company logo)
- Branch images (optional): `mum.webp`, `hyd.jpg`, `blr.webp`, `chenn.jpg`
- Equipment images: `led_1.jpeg`, `led_2.jpg`, `speaker_1.webp`, `speaker_2.webp`, `projector_1.jpeg`, `projector_2.webp`

For production, replace these with actual high-quality images.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse Score: 90+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Mobile-friendly: Yes
- Core Web Vitals: Optimized

## Support

For technical support or questions, contact:
- Email: ramsprojector987@gmail.com
- Phone: +91 9700033342

## License

Copyright © 2024 Ram's Audio Visual Services. All rights reserved.
