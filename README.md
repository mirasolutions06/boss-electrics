# Boss Electrics

High-converting landing page for Boss Electrics — a UK-based electrical services company. Built for lead generation with a premium, professional design.

## Services Featured

- Emergency callouts
- Full & partial rewires
- EV charger installation
- EICR certificates
- Consumer unit upgrades
- Commercial electrical work

## Tech Stack

- **React 19** + **TypeScript**
- **Tailwind CSS** — utility-first styling
- **Vite** — build tool and dev server
- **react-hook-form** + **zod** — form validation
- **lucide-react** — icons

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Page Sections

1. Sticky header with phone CTA
2. Hero with dual CTAs
3. Trust bar (insurance, certifications)
4. Services grid (9 services)
5. Why Choose Us
6. 4-step process
7. Testimonials
8. FAQ accordion
9. Quote request form
10. Service areas
11. Footer

## Customisation

Update contact details across:
- `components/Navbar.tsx` — phone number
- `components/Hero.tsx` — call now button
- `components/ContactCTA.tsx` — phone, email, hours
- `components/Footer.tsx` — contact details

## Deployment

```bash
# Vercel
npx vercel

# Netlify / traditional hosting — upload the /dist folder
npm run build
```

## Links

- Website: [bosselectrics.co.uk](https://bosselectrics.co.uk)
