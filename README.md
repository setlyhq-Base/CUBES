# CUBES - Real food. Zero prep. Infinite freshness.

A modern, production-ready marketing website for CUBES - frozen portion-controlled cubes made from fresh vegetables, fruits, and herbs.

![CUBES](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat&logo=tailwind-css)

## 🌟 Features

- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **SEO Optimized**: Built-in metadata and semantic HTML for search engines
- **Fast Performance**: Next.js 14 with App Router for optimal loading speeds
- **Modern Design**: Clean, fresh aesthetic with CUBES brand colors
- **Type-Safe**: Built with TypeScript for reliability and maintainability
- **Reusable Components**: Modular architecture for easy expansion

## 📦 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (React)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/) (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd CUBES
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📁 Project Structure

```
CUBES/
├── app/                      # Next.js App Router pages
│   ├── brand/               # Brand story page
│   ├── contact/             # Contact page
│   ├── how-it-works/        # How it works page
│   ├── products/            # Products listing & detail pages
│   │   └── [slug]/          # Dynamic product routes
│   ├── why-cubes/           # Why CUBES page (for partners)
│   ├── layout.tsx           # Root layout with Navbar & Footer
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # Reusable React components
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── IconBulletList.tsx
│   ├── Navbar.tsx
│   ├── ProductCard.tsx
│   └── SectionTitle.tsx
├── lib/                     # Utility functions & data
│   └── products.ts          # Product data & helpers
├── types/                   # TypeScript type definitions
│   └── index.ts
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.mjs          # Next.js configuration
└── package.json             # Dependencies
```

## 🎨 Brand Colors

The website uses the following color palette:

- **Fresh Green** (Primary): `#22c55e`
- **Deep Green / Forest** (Headings): `#15803d`
- **Off-White / Cream** (Backgrounds): `#faf7f0`
- **Neutral Dark Gray** (Body text): `#404040`

These colors are configured in `tailwind.config.ts` and can be customized as needed.

## 📄 Pages

### Home (`/`)
- Hero section with call-to-action
- Problem statement
- Solution overview
- Key benefits
- Product preview grid
- How it works teaser
- Social proof
- Email waitlist capture

### Products (`/products`)
- Grid of all product SKUs
- Product cards with descriptions
- Links to individual product pages

### Product Detail (`/products/[slug]`)
- Product hero with image
- Ingredients list
- How to use instructions
- Storage information
- Benefits
- Suggested recipes

### Brand Story (`/brand`)
- Mission statement
- Vision
- Problems we solve
- Brand values
- Founder story (Kiran's journey)

### How It Works (`/how-it-works`)
- 4-step process visualization
- Flash freezing explanation
- Quality promise

### Why CUBES (`/why-cubes`)
- Market opportunity
- Target audience
- Competitive advantages
- Long-term vision
- Partnership CTA

### Contact (`/contact`)
- Contact form
- Email and location info
- Special inquiries (retailers, investors)

## 🛠️ Customization

### Adding New Products

Edit `/lib/products.ts` to add or modify products:

```typescript
{
  id: '8',
  name: 'New Product',
  slug: 'new-product',
  description: 'Brief description',
  longDescription: 'Detailed description',
  ingredients: ['Ingredient 1', 'Ingredient 2'],
  howToUse: ['Step 1', 'Step 2'],
  storage: 'Storage instructions',
  benefits: ['Benefit 1', 'Benefit 2'],
  suggestedRecipes: ['Recipe 1', 'Recipe 2']
}
```

### Modifying Brand Content

Content from your Brand Story document can be edited in:
- `/app/brand/page.tsx` - Brand story page
- `/app/page.tsx` - Home page content

### Styling Changes

Global styles: `/app/globals.css`
Tailwind config: `/tailwind.config.ts`
Component-specific: Individual component files

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

### Build for Production

```bash
npm run build
npm run start
```

The optimized production build will be in the `.next` folder.

## 🔮 Future Enhancements

The project is structured to easily add:

- **E-commerce**: Shopping cart, checkout, payment integration
- **User Accounts**: Authentication and user profiles
- **Subscription Plans**: Recurring orders
- **Delivery Zones**: Location-based availability
- **Blog/Recipes**: Content marketing pages
- **Admin Dashboard**: Inventory and order management

## 📧 Contact

For questions or support:
- Email: cubeshq@gmail.com
- Website: [Coming Soon]

## 📝 License

© 2025 CUBES. All rights reserved.

---

Built with ❤️ by the CUBES team
