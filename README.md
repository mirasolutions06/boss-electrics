# Boss Electrics - Premium Electrician Landing Page

A high-converting, premium-feel landing page for Boss Electrics, a UK-based electrical services company. Built with React, TypeScript, Tailwind CSS, and Vite.

## 🚀 Features

- **Premium Design**: Modern, clean aesthetic with electric blue and deep navy color palette
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and Twitter cards
- **Form Validation**: Contact form with react-hook-form and zod validation
- **Smooth Animations**: Subtle micro-interactions and hover effects
- **Accessibility**: Proper heading hierarchy, ARIA labels, and keyboard navigation

## 📋 Page Sections

1. **Sticky Header** - Logo, navigation, and CTAs
2. **Hero Section** - Main headline with dual CTAs
3. **Trust Bar** - 6 trust badges (insurance, certifications, etc.)
4. **Services Grid** - 9 electrical services with icons
5. **Why Choose Us** - 5 value propositions
6. **Process** - 4-step workflow visualization
7. **Testimonials** - 6 customer reviews with star ratings
8. **FAQ** - 8 common questions with accordion
9. **Contact Form** - Full quote request form with validation
10. **Service Areas** - Geographic coverage
11. **Footer** - Sitemap, contact info, legal links

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Vite** - Build tool and dev server
- **react-hook-form** - Form state management
- **zod** - Schema validation
- **lucide-react** - Icon library

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### Update Contact Information

Replace placeholder contact details in:
- `/components/Navbar.tsx` - Phone number in header
- `/components/Hero.tsx` - Call Now button
- `/components/ContactCTA.tsx` - Phone, email, hours
- `/components/Footer.tsx` - Contact details

**Placeholders to replace:**
- Phone: `020 1234 5678` → Your actual number
- Email: `info@bosselectrics.co.uk` → Your actual email

### Update Copy & Branding

- **Hero headline**: `/components/Hero.tsx` line 21-28
- **Services**: `/components/Services.tsx` line 13-62
- **About/Why Choose**: `/components/About.tsx` line 6-31
- **Testimonials**: `/components/Testimonials.tsx` line 5-48 (currently placeholders)
- **FAQ**: `/components/Faq.tsx` line 4-35

### Customize Colors

Edit `/tailwind.config.js`:

```js
colors: {
  brand: {
    500: '#0ea5e9', // Primary electric blue
    600: '#0284c7', // Darker blue
    // ... adjust as needed
  },
  navy: {
    900: '#0f172a', // Deep navy
    950: '#020617', // Darker navy
  }
}
```

### Update SEO Meta Tags

Edit `/index.html` lines 6-24:
- Title tag
- Meta description
- OG tags (update URL and image path when deployed)
- Twitter cards

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Next Steps

### Backend Integration

The contact form currently shows a success message without sending data. To integrate:

1. **Email Service** (e.g., SendGrid, Mailgun, Resend)
   - Update `/components/ContactForm.tsx` `onSubmit` function
   - Add API endpoint to send emails

2. **CRM Integration** (e.g., HubSpot, Salesforce)
   - Send form data to your CRM API
   - Track leads and conversions

3. **Database Storage**
   - Store quote requests in a database
   - Build admin panel to manage inquiries

### Example Email Integration

```tsx
// In ContactForm.tsx
const onSubmit = async (data: ContactFormData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    if (response.ok) {
      setIsSubmitted(true);
    }
  } catch (error) {
    // Handle error
  }
};
```

### Booking System

Consider integrating:
- **Calendly** - Embedded scheduling
- **Acuity Scheduling** - Advanced booking
- **Custom solution** - Build your own with calendar API

### Analytics

Add tracking:
- **Google Analytics 4** - Page views, conversions
- **Meta Pixel** - Facebook/Instagram ads tracking
- **Hotjar** - Heatmaps and session recordings

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build command
npm run build

# Publish directory
dist
```

### Traditional Hosting

```bash
# Build the project
npm run build

# Upload the /dist folder to your web server
```

## 📄 File Structure

```
boss-electrics/
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── TrustBar.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── Process.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Faq.tsx
│   │   ├── ContactCTA.tsx
│   │   ├── ServiceArea.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Accordion.tsx
│   │   └── Logo.tsx
│   └── ContactForm.tsx
├── App.tsx
├── index.tsx
├── index.html
├── index.css
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## 🐛 Troubleshooting

### Tailwind styles not loading

Make sure `index.css` is imported in `index.tsx` and contains:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Form validation not working

Ensure `react-hook-form` and `zod` are installed:
```bash
npm install react-hook-form zod @hookform/resolvers
```

### Icons not showing

Verify `lucide-react` is installed:
```bash
npm install lucide-react
```

## 📞 Support

For questions or issues with this template:
- Check the code comments in each component
- Review Tailwind CSS documentation: https://tailwindcss.com
- React Hook Form docs: https://react-hook-form.com

## 📝 License

This project is provided as-is for Boss Electrics. Customize as needed for your business.

---

**Built with ⚡ by the Boss Electrics team**
