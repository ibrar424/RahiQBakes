export const siteConfig = {
  name: "RahiQBakes",
  tagline: "Freshly Baked Happiness for Every Celebration",
  description:
    "Custom cakes, cupcakes, brownies and sweet treats delivered to your doorstep in Pakistan.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "923239660617",
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "ibrarulhasan424@gmail.com",
  orderEmail:
    process.env.NEXT_PUBLIC_ORDER_EMAIL ||
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
    "ibrarulhasan424@gmail.com",
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
  instagram:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
    "https://www.instagram.com/rahiq_bakes",
  mapEmbed: process.env.NEXT_PUBLIC_MAP_EMBED_URL || "",
  bank: {
    name: process.env.NEXT_PUBLIC_BANK_NAME || "Your Bank Name",
    accountTitle: process.env.NEXT_PUBLIC_BANK_ACCOUNT_TITLE || "RahiQBakes",
    accountNumber: process.env.NEXT_PUBLIC_BANK_ACCOUNT_NUMBER || "0000000000",
    iban: process.env.NEXT_PUBLIC_BANK_IBAN || "PK00XXXX0000000000000000",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/custom-order", label: "Custom Order" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];
