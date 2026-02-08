# GradKeys Website Deployment Checklist

## Pre-Launch Checklist

### 1. Content Updates ✓
- [ ] Update email address: Replace `info@gradkeys.org` in all HTML files
- [ ] Update phone number: Replace `(123) 456-7890` in all HTML files
- [ ] Add your Google Form ID in `contact.html` (line with YOUR_GOOGLE_FORM_ID)
- [ ] Review and customize team information in `about.html`
- [ ] Verify pricing information in `services.html`
- [ ] Update success stories with real testimonials (or remove if not ready)
- [ ] Review all content for accuracy

### 2. Google Form Setup ✓
- [ ] Create form at https://forms.google.com
- [ ] Add fields: Name, Email, Phone, Grade Level, Package Interest, Message
- [ ] Get embed code (Send → Embed HTML)
- [ ] Replace iframe src in `contact.html`
- [ ] Test form submission

### 3. Domain Setup ✓
- [ ] Purchase gradkeys.org domain (if not done)
- [ ] Choose hosting method (see options below)

### 4. File Preparation ✓
All files are ready:
- index.html
- about.html
- services.html
- success-stories.html
- resources.html
- contact.html
- styles.css
- pages.css
- script.js

---

## Deployment Options (Choose One)

### OPTION 1: Netlify (Recommended - Easiest) ⭐

**Pros**: Free, automatic HTTPS, easy updates, no coding needed
**Time**: 10 minutes

Steps:
1. Go to https://netlify.com
2. Sign up for free account
3. Click "Add new site" → "Deploy manually"
4. Drag all 9 files into the upload area
5. Wait for deployment (1-2 minutes)
6. Click "Domain settings" → "Add custom domain"
7. Enter: gradkeys.org
8. Follow DNS instructions:
   - Go to your domain registrar (where you bought the domain)
   - Add the DNS records Netlify provides
   - Wait 24-48 hours for DNS propagation
9. Done! Netlify will auto-enable HTTPS

**To Update Site Later**:
- Drag updated files to Netlify dashboard
- Changes go live instantly

---

### OPTION 2: GitHub Pages (Free, Developer-Friendly)

**Pros**: Free, version control, great for tech-savvy users
**Time**: 20 minutes

Steps:
1. Create GitHub account at https://github.com
2. Click "New repository"
3. Name it: gradkeys-website
4. Make it public
5. Upload all files to the repository
6. Go to Settings → Pages
7. Source: Deploy from main branch
8. Site will be at: yourusername.github.io/gradkeys-website
9. To use custom domain:
   - Add file named "CNAME" with content: gradkeys.org
   - In your domain registrar, add these DNS records:
     ```
     Type: A, Host: @, Value: 185.199.108.153
     Type: A, Host: @, Value: 185.199.109.153
     Type: A, Host: @, Value: 185.199.110.153
     Type: A, Host: @, Value: 185.199.111.153
     Type: CNAME, Host: www, Value: yourusername.github.io
     ```

---

### OPTION 3: Vercel (Free, Similar to Netlify)

**Pros**: Free, fast, automatic HTTPS
**Time**: 10 minutes

Steps:
1. Go to https://vercel.com
2. Sign up for free
3. Click "Add New" → "Project"
4. Upload files or connect GitHub repo
5. Deploy
6. Add custom domain: gradkeys.org
7. Update DNS as instructed

---

### OPTION 4: Traditional Web Hosting

**Pros**: Full control, can add backend later
**Cons**: Costs money ($5-15/month)
**Time**: 30 minutes

Recommended Hosts:
- Bluehost ($3-10/month)
- SiteGround ($4-15/month)
- Namecheap ($2-5/month)

Steps:
1. Purchase hosting package
2. Most include free domain registration
3. Use File Manager or FTP to upload files
4. Upload all files to public_html or www folder
5. Enable SSL certificate in hosting control panel
6. Done!

---

## Post-Launch Checklist

### Testing ✓
- [ ] Visit gradkeys.org in browser
- [ ] Test all navigation links
- [ ] Submit contact form (test mode)
- [ ] Check on mobile device
- [ ] Check in different browsers (Chrome, Firefox, Safari)
- [ ] Verify all pages load correctly
- [ ] Check that HTTPS is working (padlock icon)

### SEO & Analytics (Optional) ✓
- [ ] Submit to Google Search Console
- [ ] Add Google Analytics tracking code
- [ ] Create Google Business Profile
- [ ] Submit sitemap to search engines

### Ongoing Maintenance ✓
- [ ] Monitor contact form submissions
- [ ] Respond to inquiries within 24 hours
- [ ] Update success stories quarterly
- [ ] Add new resources/articles monthly
- [ ] Keep pricing current
- [ ] Check website works after browser updates

---

## Quick Tips

**For Non-Technical Users**: Use Netlify (Option 1)
**For Developers**: Use GitHub Pages (Option 2)
**For Full Control**: Use Traditional Hosting (Option 4)

**Need Help?**
- Netlify docs: https://docs.netlify.com
- GitHub Pages guide: https://pages.github.com
- Domain DNS help: Contact your domain registrar support

---

## Contact Form Alternatives

If you don't want to use Google Forms:

1. **Formspree** (formspree.io)
   - Add their endpoint to form action
   - Free for 50 submissions/month

2. **Netlify Forms** (if using Netlify)
   - Add `data-netlify="true"` to form
   - Automatic form handling

3. **EmailJS** (emailjs.com)
   - Send form data directly to email
   - No backend needed

---

## Estimated Timeline

- Content updates: 1-2 hours
- Google Form setup: 15 minutes
- Domain purchase: 10 minutes
- Deployment: 10-30 minutes (depending on method)
- DNS propagation: 24-48 hours
- Testing: 1 hour

**Total**: 2-4 hours of work + 1-2 days waiting for DNS

Good luck with your launch! 🚀
