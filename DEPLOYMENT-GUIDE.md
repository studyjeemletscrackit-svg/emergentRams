# Deployment Guide - Ram's Audio Visual Services Website

## Quick Start

Your website is now ready for deployment! The build has been completed successfully and all static files are ready.

## Pre-Deployment Checklist

Before deploying, ensure you:

- [ ] Replace placeholder images in `public/images/` with actual company images
- [ ] Update the domain name from `ramsavservices.com` to your actual domain in:
  - `app/layout.tsx` (metadataBase)
  - `app/sitemap.ts`
  - `public/robots.txt`
- [ ] Verify all contact information is correct
- [ ] Test the site locally with `npm run dev`

## Deployment Options

### Option 1: Vercel (Easiest & Recommended)

Vercel is the creator of Next.js and provides free hosting with automatic deployments.

1. **Create Vercel Account**: Go to [vercel.com](https://vercel.com) and sign up
2. **Connect GitHub**: Push your code to a GitHub repository
3. **Import Project**: Click "New Project" in Vercel dashboard
4. **Deploy**: Vercel will automatically detect Next.js and deploy
5. **Custom Domain**: Add your custom domain in project settings

**Advantages:**
- Free tier available
- Automatic deployments on git push
- Built-in CDN and edge network
- Zero configuration needed
- Automatic HTTPS

### Option 2: Netlify

Similar to Vercel, Netlify offers free hosting with great features.

1. **Create Account**: Sign up at [netlify.com](https://netlify.com)
2. **Connect Repository**: Link your GitHub/GitLab repository
3. **Configure Build**:
   - Build command: `npm run build`
   - Publish directory: `out`
4. **Deploy**: Click deploy and wait for build to complete
5. **Add Domain**: Configure custom domain in site settings

**Advantages:**
- Free tier with generous limits
- Easy DNS management
- Form handling
- Automatic HTTPS

### Option 3: Static Hosting (Shared Hosting, cPanel)

For traditional web hosting services like Bluehost, HostGator, etc.

1. **Build the Static Site**:
   ```bash
   npm run build
   ```

2. **Locate Output**: Find the `out` folder in your project directory

3. **Upload Files**:
   - Via FTP: Upload all contents of `out` folder to `public_html` or `www` folder
   - Via cPanel: Use File Manager to upload files

4. **Configure .htaccess**: Ensure `.htaccess` file is uploaded for clean URLs

5. **Test**: Visit your domain to verify the site is working

**Advantages:**
- Use existing hosting
- No third-party dependencies
- Full control over server

### Option 4: AWS S3 + CloudFront

For enterprise-level hosting with maximum control.

1. **Build Static Site**: Run `npm run build`
2. **Create S3 Bucket**: Set up bucket for static website hosting
3. **Upload Files**: Upload `out` folder contents to S3
4. **Configure CloudFront**: Set up CDN distribution
5. **Add Custom Domain**: Configure Route 53 or your DNS provider

**Advantages:**
- Enterprise-grade reliability
- Global CDN
- Scalable
- Pay-as-you-go pricing

## Post-Deployment Tasks

### 1. Submit Sitemap to Search Engines

**Google Search Console:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your website
3. Verify ownership
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

**Bing Webmaster Tools:**
1. Go to [bing.com/webmasters](https://bing.com/webmasters)
2. Add your site
3. Verify ownership
4. Submit sitemap

### 2. Set Up Analytics Tracking

The site already includes:
- Google Tag Manager (GTM-NV95DF7K)
- Google Ads tracking (AW-17785983412)

To view data:
1. Log in to [analytics.google.com](https://analytics.google.com)
2. Add property for your domain
3. Verify data is being received

### 3. Test Website

Use these tools to verify everything works:
- [PageSpeed Insights](https://pagespeed.web.dev/) - Performance testing
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) - Mobile optimization
- [Schema Markup Validator](https://validator.schema.org/) - Structured data
- [SSL Checker](https://www.sslshopper.com/ssl-checker.html) - HTTPS verification

### 4. Monitor Website

Set up monitoring for:
- Uptime monitoring (UptimeRobot, Pingdom)
- Performance monitoring (Google PageSpeed Insights)
- Search Console for SEO issues
- Analytics for traffic patterns

## Updating Content

### To Update Equipment:
Edit `lib/equipment-data.ts` and add/modify equipment items

### To Update Branch Information:
Edit respective page files:
- Home page: `app/page.tsx`
- Contact page: `app/contact/page.tsx`

### To Add New Pages:
1. Create new folder in `app/` directory
2. Add `page.tsx` file
3. Include proper metadata and SEO tags
4. Update navigation in `components/Header.tsx`
5. Add to sitemap in `app/sitemap.ts`

## Maintenance Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Type checking
npx tsc --noEmit

# Check for updates
npm outdated

# Update dependencies
npm update
```

## Troubleshooting

### Build Fails
- Check Node.js version (requires 18+)
- Delete `node_modules` and `.next` folders
- Run `npm install` again
- Run `npm run build`

### Images Not Loading
- Ensure images are in `public/images/` folder
- Check image file names match references in code
- Verify image formats (jpg, png, webp)

### 404 Errors on Deployment
- Ensure trailing slashes in URLs
- Check `.htaccess` configuration for redirects
- Verify all pages are built successfully

## Support

If you need help with deployment:
- Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel support: [vercel.com/support](https://vercel.com/support)
- Contact developer support

## Performance Optimization

### Image Optimization
Replace placeholder images with:
- WebP format for better compression
- Properly sized images (no larger than needed)
- Compressed images (use TinyPNG or similar)

### Additional Optimizations
- Enable Gzip compression on server
- Use a CDN for assets
- Enable browser caching
- Monitor Core Web Vitals

## Security

The site includes security headers in `.htaccess`:
- XSS Protection
- Clickjacking protection
- MIME type sniffing protection
- Referrer policy

Additional security measures:
- Always use HTTPS
- Keep dependencies updated
- Regular security audits
- Monitor for suspicious activity

---

Your website is now ready to go live! Choose the deployment option that best fits your needs and follow the steps above. Good luck!
