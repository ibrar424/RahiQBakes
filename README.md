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

This project is configured to build as a **standalone** node application, making it highly portable. You can deploy it to any hosting provider using one of the following methods:

### Method A: Static & Serverless Platforms (Vercel / Netlify)
1. Connect this repository to your account on [Vercel](https://vercel.com) or Netlify.
2. Configure the environment variables (see `.env.local.example`).
3. Deploy! Next.js will automatically detect and optimize the setup.

### Method B: Virtual Private Servers (VPS) with Node.js
Deploy using a process manager like **PM2** on any Ubuntu/Linux VPS:
```bash
# 1. Install dependencies and compile
npm install
npm run build

# 2. Run the compiled standalone server with PM2
pm2 start .next/standalone/server.js --name "rahiq-bakes" --env PORT=3000
```

### Method C: Universal Container Platforms (Docker)
Build and run the project anywhere utilizing the bundled multi-stage Docker configuration (e.g. AWS ECS, GCP Cloud Run, DigitalOcean, Render, Railway, custom VPS):
```bash
# Build the container image
docker build -t rahiq-bakes .

# Start the application container
docker run -p 3000:3000 --env-file .env.local rahiq-bakes
```

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
