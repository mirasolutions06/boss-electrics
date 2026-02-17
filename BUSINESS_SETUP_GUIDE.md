# Boss Electrics - Business Setup & Operations Guide

This guide covers everything you need to set up and run your electrical services business online.

---

## 📍 1. Google Business Profile Setup

### Why It Matters
Google Business Profile (formerly Google My Business) is **critical** for local businesses. It helps you appear in Google Maps and local search results when customers search for "electrician near me."

### Setup Steps

#### Step 1: Create Your Profile
1. Go to [business.google.com](https://business.google.com)
2. Click **"Manage now"** or **"Add your business"**
3. Enter your business name: **"Boss Electrics"**
4. Choose business category: **"Electrician"** (primary category)
   - Add secondary categories: "Electrical Installation Service", "Electrical Repair Service"

#### Step 2: Add Your Service Area
1. Choose **"I deliver goods and services to my customers"** (since you travel to clients)
2. Enter your service areas:
   - Bexley
   - Bromley
   - Greenwich
   - Lewisham
   - Dartford
   - Other areas you cover
3. You can hide your business address if you don't have a physical storefront

#### Step 3: Add Contact Information
1. **Phone number**: Your business phone (this will be publicly visible)
2. **Website**: Your website URL (once hosted - see Section 2)
3. **WhatsApp**: Add your WhatsApp number in the messaging section

#### Step 4: Verify Your Business
Google will verify your business via:
- **Postcard** (most common): Sent to your address with a verification code
- **Phone call** (sometimes available)
- **Email** (for some businesses)
- **Video verification** (newer option)

**Timeline**: Postcard takes 5-14 days to arrive

#### Step 5: Complete Your Profile
1. **Business hours**: Set your availability
2. **Business description**: 
   ```
   Boss Electrics provides professional electrical services across South East London. 
   From emergency repairs to complete rewiring, our qualified electricians deliver 
   safe, reliable solutions for homes and businesses. Available 24/7 for emergencies. 
   Fully insured and certified.
   ```
3. **Photos**: Add at least 10 photos
   - Your logo
   - Team photos
   - Completed work examples
   - Van/vehicle with branding
   - Certificates and qualifications
4. **Services**: List specific services
   - Emergency Electrical Repairs
   - Rewiring & Installation
   - Fuse Box Upgrades
   - EV Charger Installation
   - Safety Inspections
   - Lighting Installation
   - Socket & Switch Installation
   - Fault Finding

#### Step 6: Optimize for Local SEO
1. **Posts**: Share weekly updates about your work, tips, or special offers
2. **Reviews**: Ask satisfied customers to leave Google reviews
   - Send them this link: `https://g.page/r/YOUR_PROFILE_ID/review`
3. **Q&A**: Monitor and answer questions customers ask
4. **Booking button**: Enable the "Book" button if using a booking system

### Ongoing Management
- **Respond to reviews** within 24-48 hours (both positive and negative)
- **Post weekly** to keep your profile active
- **Update photos** monthly with recent work
- **Monitor insights** to see how customers find you

---

## 🌐 2. Website Hosting

### Recommended Hosting Options

#### Option A: Netlify (Recommended - FREE)
**Best for**: Simple deployment, automatic updates from GitHub

**Setup Steps**:
1. **Create a GitHub account** (if you don't have one)
   - Go to [github.com](https://github.com)
   - Sign up for free

2. **Create a repository**
   - Click "New repository"
   - Name it: `boss-electrics-website`
   - Make it public or private
   - Don't initialize with README (you already have files)

3. **Push your code to GitHub**
   ```bash
   cd /Users/mj/Downloads/boss-electrics
   git init
   git add .
   git commit -m "Initial commit - Boss Electrics website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/boss-electrics-website.git
   git push -u origin main
   ```

4. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with your GitHub account
   - Click **"Add new site"** → **"Import an existing project"**
   - Choose **GitHub** and select your `boss-electrics-website` repository
   - Build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Click **"Deploy site"**

5. **Custom Domain** (Optional but recommended)
   - Buy a domain from [Namecheap](https://namecheap.com) or [Google Domains](https://domains.google)
     - Suggested: `bosselectrics.co.uk` or `bosselectrics.london`
     - Cost: £8-15/year
   - In Netlify, go to **Domain settings** → **Add custom domain**
   - Follow instructions to update DNS settings

**Advantages**:
- ✅ FREE hosting
- ✅ Automatic HTTPS/SSL
- ✅ Auto-deploys when you push to GitHub
- ✅ Fast global CDN
- ✅ Easy rollbacks

#### Option B: Vercel (Alternative - FREE)
Similar to Netlify, optimized for React/Vite projects

**Setup Steps**:
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Deploy (automatic configuration for Vite)

#### Option C: Traditional Hosting (Paid)
**Best for**: If you want cPanel and traditional hosting

Options:
- **SiteGround** (£3-10/month) - Good UK support
- **Hostinger** (£2-8/month) - Budget-friendly
- **Krystal Hosting** (£5-15/month) - UK-based, eco-friendly

**Setup**:
1. Purchase hosting plan
2. Build your site locally: `npm run build`
3. Upload the `dist` folder contents via FTP or cPanel File Manager
4. Point your domain to the hosting

### Recommended Approach
**Start with Netlify** (free) → Add custom domain later when business grows

---

## 📅 3. Simple CRM for Bookings & Customer Management

### Option A: Google Sheets (FREE - Recommended for Starting)

**Setup**:
1. Create a Google Sheet called **"Boss Electrics - Customer Bookings"**
2. Create these tabs:

#### Tab 1: Leads & Enquiries
| Date | Name | Phone | Email | Service Needed | Area | Source | Status | Notes |
|------|------|-------|-------|----------------|------|--------|--------|-------|
| 10/02/26 | John Smith | 07XXX | john@email.com | Rewiring | Bexley | Google | Quoted | £2,500 quote sent |

**Columns**:
- **Date**: When they contacted you
- **Name**: Customer name
- **Phone**: Contact number
- **Email**: Email address
- **Service Needed**: What they want
- **Area**: Location
- **Source**: How they found you (Google, Facebook, Referral, etc.)
- **Status**: New, Contacted, Quoted, Booked, Completed, Lost
- **Notes**: Any additional info

#### Tab 2: Scheduled Jobs
| Date | Time | Customer | Phone | Address | Service | Status | Payment | Notes |
|------|------|----------|-------|---------|---------|--------|---------|-------|
| 15/02/26 | 10:00 | John Smith | 07XXX | 123 High St, Bexley | Rewiring | Confirmed | Deposit paid | Day 1 of 3 |

#### Tab 3: Completed Jobs
Move jobs here when finished, track:
- Completion date
- Final payment received
- Follow-up date (for review request)
- Warranty expiry

#### Tab 4: Revenue Tracking
| Month | Jobs Completed | Revenue | Expenses | Profit | Notes |
|-------|----------------|---------|----------|--------|-------|
| Feb 2026 | 12 | £8,500 | £1,200 | £7,300 | Good month |

**Automation Tips**:
- Use **Google Forms** to collect enquiries from your website
- Forms automatically populate your Google Sheet
- Set up email notifications when new enquiries come in

### Option B: Free CRM Tools

#### HubSpot CRM (FREE)
- **Website**: [hubspot.com/products/crm](https://hubspot.com/products/crm)
- **Features**:
  - Contact management
  - Deal pipeline
  - Email tracking
  - Meeting scheduler
  - Mobile app
- **Best for**: Growing businesses, professional appearance

#### Zoho CRM (FREE for 3 users)
- **Website**: [zoho.com/crm](https://zoho.com/crm)
- **Features**:
  - Lead management
  - Sales pipeline
  - Email integration
  - Workflow automation

#### Notion (FREE)
- **Website**: [notion.so](https://notion.so)
- **Features**:
  - Customizable databases
  - Calendar views
  - Task management
  - Client notes
- **Best for**: Visual thinkers, all-in-one workspace

### Option C: Booking-Specific Tools

#### Calendly (FREE tier available)
- **Website**: [calendly.com](https://calendly.com)
- **Use**: Let customers book time slots directly
- **Integrate**: Add booking link to your website

#### Acuity Scheduling (£12-40/month)
- **Website**: [acuityscheduling.com](https://acuityscheduling.com)
- **Features**: Online booking, payments, reminders

### Recommended Workflow
1. **Start**: Google Sheets (free, simple, you control everything)
2. **Grow**: Move to HubSpot CRM when you have 20+ customers/month
3. **Scale**: Add Calendly for online booking when you're too busy to answer calls

---

## 📞 4. Customer Communication Setup

### WhatsApp Business (FREE - Essential)
1. Download **WhatsApp Business** app
2. Set up with your business number
3. Create:
   - **Business profile** with hours, location, description
   - **Catalog** of your services with prices
   - **Quick replies** for common questions
   - **Away messages** for after-hours
   - **Greeting message** for new contacts

**Example Quick Replies**:
- `/pricing` → "Our standard call-out is £X. Hourly rate is £X. Emergency call-out is £X."
- `/areas` → "We cover Bexley, Bromley, Greenwich, Lewisham, and Dartford."
- `/emergency` → "For emergencies, call us directly at [PHONE]. We're available 24/7."

### Email Setup
**Option 1: Google Workspace** (£4.60/user/month)
- Professional email: `info@bosselectrics.co.uk`
- Includes Gmail, Calendar, Drive
- **Setup**: [workspace.google.com](https://workspace.google.com)

**Option 2: Free Email Forwarding**
- Use your domain registrar's email forwarding
- Forward `info@yourdomain.com` → your personal Gmail
- Reply from Gmail (less professional but free)

### Phone System
**Consider**: Get a dedicated business number
- **Google Voice** (US only, unfortunately)
- **Separate mobile**: £10-20/month SIM-only deal
- **VoIP service**: [Vonage](https://vonage.com), [RingCentral](https://ringcentral.com)

---

## 💳 5. Payment Processing

### Online Payments
**Stripe** (2.9% + 20p per transaction)
- **Website**: [stripe.com](https://stripe.com)
- **Features**: Accept cards, Google Pay, Apple Pay
- **Integration**: Add payment links to quotes/invoices

**PayPal** (2.9% + 30p per transaction)
- **Website**: [paypal.com/business](https://paypal.com/business)
- **Features**: Send invoices, accept payments

### In-Person Payments
**SumUp** (1.69% per transaction)
- **Website**: [sumup.co.uk](https://sumup.co.uk)
- **Hardware**: Card reader (£29-99 one-time cost)
- **Features**: Contactless, chip & PIN, mobile app

**Zettle by PayPal** (1.75% per transaction)
- **Website**: [zettle.com](https://zettle.com)
- **Hardware**: Card reader (£29-79)

### Bank Transfers
- Provide bank details on invoices
- Use **Wise** or **Revolut Business** for easy tracking

---

## 📄 6. Invoicing & Quotes

### Free Tools
**Wave** (FREE)
- **Website**: [waveapps.com](https://waveapps.com)
- **Features**: Invoices, quotes, receipt scanning, accounting
- **Best for**: Small businesses, completely free

**Invoice Ninja** (FREE tier)
- **Website**: [invoiceninja.com](https://invoiceninja.com)
- **Features**: Invoices, quotes, time tracking, client portal

**Zoho Invoice** (FREE for 5 customers)
- **Website**: [zoho.com/invoice](https://zoho.com/invoice)

### Paid Options
**QuickBooks** (£10-35/month)
- Full accounting software
- VAT returns (when you register)
- Expense tracking

**Xero** (£12-37/month)
- Popular with UK accountants
- Bank feed integration

### Invoice Template (If doing manually)
Create a Word/Google Doc template with:
- Your business name, logo, contact info
- Invoice number (sequential: INV-001, INV-002)
- Date
- Customer details
- Itemized services
- Subtotal, VAT (when registered), Total
- Payment terms (e.g., "Due within 14 days")
- Bank details or payment link

---

## 📊 7. Business Essentials Checklist

### Legal & Compliance
- [ ] **Public Liability Insurance** (£1-2 million cover) - Essential
- [ ] **Professional Indemnity Insurance** - Recommended
- [ ] **Electrical qualifications** - Keep certificates accessible
- [ ] **Register as self-employed** with HMRC
  - Deadline: By 5 October after the end of the tax year you started
  - Website: [gov.uk/register-for-self-assessment](https://gov.uk/register-for-self-assessment)
- [ ] **VAT registration** (when turnover exceeds £85,000/year)
- [ ] **Electrical safety certificates** - Issue to customers after jobs
- [ ] **Part P Building Regulations** compliance
- [ ] **NICEIC or NAPIT registration** (if applicable)

### Marketing Materials
- [ ] **Business cards** (Vistaprint, Moo, Instantprint)
- [ ] **Van signage** with logo, phone, website
- [ ] **Uniform/branded clothing** (polo shirts with logo)
- [ ] **Flyers** for letterbox drops in service areas
- [ ] **Social media accounts**:
  - Instagram: @bosselectrics
  - Facebook Business Page
  - Post before/after photos, tips, completed jobs

### Tools & Software
- [ ] **Accounting software** (Wave, QuickBooks, or spreadsheet)
- [ ] **Mileage tracker** (MileIQ, Driversnote) - for tax deductions
- [ ] **Receipt scanner** (Expensify, Dext) - track expenses
- [ ] **Cloud storage** (Google Drive, Dropbox) - for certificates, photos
- [ ] **Password manager** (1Password, Bitwarden) - secure business accounts

### Customer Service
- [ ] **Review request system** - Ask happy customers for Google reviews
- [ ] **Follow-up process** - Check in after jobs completed
- [ ] **Warranty/guarantee policy** - Define what you guarantee
- [ ] **Complaints procedure** - Have a clear process
- [ ] **Emergency response plan** - Define 24/7 availability

---

## 🚀 8. Launch Checklist

### Week 1: Online Presence
- [ ] Set up Google Business Profile (start verification)
- [ ] Deploy website to Netlify
- [ ] Set up WhatsApp Business
- [ ] Create business email
- [ ] Set up social media accounts

### Week 2: Operations
- [ ] Create Google Sheets CRM or set up HubSpot
- [ ] Set up invoicing system (Wave recommended)
- [ ] Create invoice/quote templates
- [ ] Set up payment methods (Stripe, SumUp)
- [ ] Create service price list

### Week 3: Marketing
- [ ] Complete Google Business Profile (photos, services, posts)
- [ ] Order business cards
- [ ] Order van signage
- [ ] Create first social media posts
- [ ] Set up Google Ads (optional, £10-20/day budget to start)

### Week 4: Systems
- [ ] Test booking process end-to-end
- [ ] Set up automated email responses
- [ ] Create customer onboarding checklist
- [ ] Set up review request workflow
- [ ] Test payment processing

---

## 📈 9. Growth Strategies

### Get Your First Customers
1. **Local Facebook Groups** - Join community groups, offer advice (not spam)
2. **Nextdoor** - Create business profile, respond to requests
3. **Checkatrade/Rated People** - List your services (commission-based)
4. **Word of mouth** - Ask friends/family to refer you
5. **Leaflet drops** - Target local areas with flyers
6. **Partner with estate agents** - Offer services for landlords

### Build Reviews
- Ask every happy customer for a Google review
- Make it easy: Send them a direct link
- Respond to all reviews (thank positive, address negative professionally)
- Target: 20+ reviews in first 3 months

### Track What Works
In your Google Sheet, track:
- Where each customer came from
- Which services are most profitable
- Which areas generate most business
- Best times/days for bookings

### Scale Up
When you're consistently busy:
- Raise prices (you're in demand!)
- Hire an apprentice or subcontractor
- Invest in Google Ads
- Upgrade to professional CRM
- Consider business premises/office

---

## 🆘 10. Support & Resources

### Business Support
- **UK Government Business Support**: [gov.uk/business-support-helpline](https://gov.uk/business-support-helpline)
- **Small Business Britain**: [smallbusinessbritain.uk](https://smallbusinessbritain.uk)
- **Federation of Small Businesses**: [fsb.org.uk](https://fsb.org.uk)

### Electrical Industry
- **NICEIC**: [niceic.com](https://niceic.com)
- **NAPIT**: [napit.org.uk](https://napit.org.uk)
- **Electrical Safety First**: [electricalsafetyfirst.org.uk](https://electricalsafetyfirst.org.uk)

### Marketing Help
- **Google Digital Garage**: Free online marketing courses
- **Facebook Blueprint**: Free social media marketing courses
- **YouTube**: Endless tutorials on SEO, Google Ads, etc.

### Accounting & Tax
- **HMRC Self Assessment**: [gov.uk/self-assessment-tax-returns](https://gov.uk/self-assessment-tax-returns)
- **Find an accountant**: [icaew.com/find-a-chartered-accountant](https://icaew.com/find-a-chartered-accountant)

---

## 📞 Quick Reference

### Your Business Stack (Recommended FREE Setup)
- **Website Hosting**: Netlify
- **CRM**: Google Sheets → HubSpot (when growing)
- **Invoicing**: Wave
- **Payments**: Stripe (online) + SumUp (in-person)
- **Communication**: WhatsApp Business
- **Email**: Google Workspace (£4.60/month - worth it)
- **Accounting**: Wave or spreadsheet
- **Booking**: Calendly (add later)

### Monthly Costs (Minimal Setup)
- Domain name: £1/month (£12/year)
- Google Workspace: £4.60/month
- **Total: ~£6/month to start**

### Time Investment
- **Initial setup**: 2-3 days
- **Weekly maintenance**: 2-3 hours (responding to enquiries, updating CRM, posting on social media)
- **Monthly tasks**: 2-4 hours (accounting, review management, marketing)

---

## ✅ Next Steps

1. **Today**: Set up Google Business Profile (start verification process)
2. **This Week**: Deploy website to Netlify, set up WhatsApp Business
3. **This Month**: Complete all Week 1-4 launch checklist items
4. **Ongoing**: Focus on getting your first 10 customers and 20 reviews

---

**Remember**: Start simple, improve as you grow. You don't need everything perfect on day one. Focus on:
1. Being findable (Google Business Profile)
2. Looking professional (website)
3. Staying organized (simple CRM)
4. Getting paid (invoicing + payments)

Everything else can be added as your business grows!

**Good luck with Boss Electrics! ⚡**
