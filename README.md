# RahiQBakes – Premium Bakery eCommerce Website

Modern, mobile-friendly bakery storefront for **RahiQBakes** (Pakistan). Browse products in PKR, cart & checkout with COD/bank transfer, and confirm orders via WhatsApp.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Zustand (cart persistence)
- Embla Carousel (featured products)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
copy .env.local.example .env.local
```

Edit `.env.local` with your WhatsApp number, social links, bank details, and Web3Forms key for order emails.

### Order email notifications

When a customer places an order, delivery details are emailed to **ibrarulhasan424@gmail.com** automatically.

**First-time setup (one click):** On the first test order, check **ibrarulhasan424@gmail.com** (and spam) for an email from **FormSubmit** asking you to activate. Click the link once — after that, every order email will arrive.

**Optional — Web3Forms (more reliable):**

1. Sign up at [web3forms.com](https://web3forms.com) using **ibrarulhasan424@gmail.com**
2. Add to `.env.local`: `WEB3FORMS_ACCESS_KEY=your-key-here`
3. Restart `npm run dev`

3. Add your images — see [IMAGES.md](./IMAGES.md).

4. Run development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
npm start
```

Deploy to [Vercel](https://vercel.com): connect the repo, set environment variables from `.env.local.example`, and deploy.

## Features

- Homepage: hero, featured slider, bestsellers, reviews, gallery preview, about teaser
- Shop with category filters and product detail pages
- Shopping cart with coupon codes (WELCOME10, SWEET500, CELEBRATE15)
- Checkout: name, mobile, address, notes, COD / bank transfer
- WhatsApp order confirmation
- Track order (localStorage + status timeline)
- Custom order form → WhatsApp
- Gallery, About, Contact, FAQ, Privacy, Terms
- SEO: metadata, sitemap, robots, JSON-LD

## Coupon Codes

| Code | Discount |
|------|----------|
| WELCOME10 | 10% off (min Rs 1,000) |
| SWEET500 | Rs 500 off (min Rs 3,000) |
| CELEBRATE15 | 15% off (min Rs 5,000) |

## License

Private – RahiQBakes © 2026
