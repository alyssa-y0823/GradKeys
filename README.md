# GradKeys Website

A professional, modern website for a college counseling company.

## Features

- **Responsive Design** - Works beautifully on desktop, tablet, and mobile
- **Professional Aesthetic** - Trustworthy design using Crimson Pro and DM Sans fonts
- **Complete Pages**:
  - Home (landing page with hero, services preview, testimonials)
  - About Us (team info, company values)
  - Services & Pricing (3 pricing tiers, detailed service descriptions)
  - Success Stories (student testimonials)
  - Resources (articles and advice)
  - Contact (Google Form integration)
- **SEO Optimized** - Meta tags, semantic HTML
- **Smooth Animations** - Subtle scroll animations and transitions
- **Mobile Menu** - Hamburger navigation for mobile devices

## Files Included

- `index.html` - Home page
- `about.html` - About Us page
- `services.html` - Services & Pricing page
- `success-stories.html` - Success Stories page
- `resources.html` - Resources & Articles page
- `contact.html` - Contact page with form
- `styles.css` - Main stylesheet
- `pages.css` - Additional styles for inner pages
- `script.js` - JavaScript for interactivity
- `README.md` - This file

## Setup Instructions

### 1. Customize Your Content

Before deploying, update these items:

**Contact Information** (in all HTML files):
- Replace `info@gradkeys.org` with your email
- Replace `(123) 456-7890` with your phone number

**Google Form Integration** (in contact.html):
1. Create a Google Form at https://forms.google.com
2. Click "Send" → "Embed HTML" → Copy the iframe code
3. Replace `YOUR_GOOGLE_FORM_ID` in contact.html with your actual form ID

**Optional Customizations**:
- Update team member information in `about.html`
- Modify pricing in `services.html`
- Add real testimonials in `success-stories.html`
- Link actual article pages in `resources.html`

### 2. Deploy to Your Domain (gradkeys.org)

#### Option A: Using GitHub Pages (Free)

1. Create a GitHub account at https://github.com
2. Create a new repository named "gradkeys-website"
3. Upload all website files to the repository
4. Go to Settings → Pages
5. Select main branch as source
6. Your site will be at `https://yourusername.github.io/gradkeys-website`
7. Point your domain (gradkeys.org) to GitHub Pages:
   - In your domain registrar (where you bought gradkeys.org)
   - Add these DNS records:
     ```
     A Record: 185.199.108.153
     A Record: 185.199.109.153
     A Record: 185.199.110.153
     A Record: 185.199.111.153
     CNAME: www → yourusername.github.io
     ```
   - Add a CNAME file to your repo with content: `gradkeys.org`

#### Option B: Using Netlify (Free, Easier)

1. Create account at https://netlify.com
2. Drag and drop all website files to Netlify
3. Your site will be live at a netlify.app URL
4. Add your custom domain (gradkeys.org):
   - Go to Domain Settings → Add custom domain
   - Follow instructions to update DNS at your domain registrar
   - Netlify provides automatic HTTPS

#### Option C: Using Traditional Web Hosting

1. Purchase hosting from providers like:
   - Bluehost, SiteGround, HostGator, GoDaddy
2. Upload files via FTP or hosting control panel
3. Point your domain to the hosting nameservers
4. Install SSL certificate for HTTPS

### 3. Domain Purchase

If you haven't bought gradkeys.org yet:

1. Go to domain registrars:
   - Namecheap (recommended)
   - Google Domains
   - GoDaddy
2. Search for "gradkeys.org"
3. Purchase the domain (usually $10-15/year)
4. Follow deployment steps above to point it to your hosting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization Tips

### Colors
The color scheme is defined in CSS variables in `styles.css`:
```css
:root {
    --primary: #1a4d7a;        /* Main blue */
    --accent: #d4a574;         /* Gold accent */
    --text-dark: #1a1a1a;      /* Main text */
}
```

### Fonts
Currently using:
- Crimson Pro (serif, for headings)
- DM Sans (sans-serif, for body text)

To change fonts, update the Google Fonts link and CSS variables.

### Adding New Pages
1. Copy an existing HTML file
2. Update the content
3. Add links to navigation in all pages
4. Update footer links if needed

## Support

For technical questions about the website:
- Check browser console for errors (F12)
- Ensure all files are uploaded to the same directory
- Verify file paths are correct (case-sensitive on some servers)

## Future Enhancements

Consider adding:
- Blog section with CMS integration
- Online booking system
- Live chat widget
- Email newsletter signup
- Client portal/login area
- Video testimonials
- Interactive college search tool

## Credits

Website built with:
- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts (Crimson Pro, DM Sans)