export type ProductCategory =
  | "custom-cakes"
  | "cupcakes"
  | "brownies"
  | "cookies";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  currency: "PKR";
  description: string;
  images: string[];
  featured?: boolean;
  bestseller?: boolean;
}

export const categoryLabels: Record<ProductCategory, string> = {
  "custom-cakes": "Custom Cakes",
  cupcakes: "Cupcakes",
  brownies: "Brownies",
  cookies: "Cookies",
};

export const products: Product[] = [
  {
    id: "birthday-cake",
    slug: "birthday-cake",
    name: "Birthday Cake",
    category: "custom-cakes",
    price: 2500,
    currency: "PKR",
    description:
      "A beautifully decorated birthday cake made fresh to order. Perfect for celebrations of all ages with your choice of flavors and custom message on top.",
    images: ["/images/products/birthday-cake/birthday-cake-1.png"],
    featured: true,
    bestseller: true,
  },
  {
    id: "chocolate-fudge-cake",
    slug: "chocolate-fudge-cake",
    name: "Chocolate Fudge Cake",
    category: "custom-cakes",
    price: 3000,
    currency: "PKR",
    description:
      "Rich, moist chocolate layers with decadent fudge frosting. A chocolate lover's dream for any special occasion.",
    images: ["/images/products/chocolate-fudge-cake/chocolate-fudge-cake-1.png"],
    featured: true,
    bestseller: true,
  },
  {
    id: "red-velvet-cake",
    slug: "red-velvet-cake",
    name: "Red Velvet Cake",
    category: "custom-cakes",
    price: 3500,
    currency: "PKR",
    description:
      "Classic red velvet with cream cheese frosting. Elegant, velvety texture and timeless flavor for sophisticated celebrations.",
    images: ["/images/products/red-velvet-cake/red-velvet-cake-1.png"],
    featured: true,
    bestseller: false,
  },
  {
    id: "customized-theme-cake",
    slug: "customized-theme-cake",
    name: "Customized Theme Cake",
    category: "custom-cakes",
    price: 5000,
    currency: "PKR",
    description:
      "Fully customized theme cake tailored to your party theme — characters, colors, and designs crafted with premium ingredients.",
    images: ["/images/products/customized-theme-cake/customized-theme-cake-1.png"],
    featured: true,
    bestseller: true,
  },
  {
    id: "wedding-cake",
    slug: "wedding-cake",
    name: "Wedding Cake",
    category: "custom-cakes",
    price: 12000,
    currency: "PKR",
    description:
      "Elegant multi-tier wedding cake designed for your big day. Consultation included for flavors, tiers, and floral or gold accents.",
    images: ["/images/products/wedding-cake/wedding-cake-1.png"],
    featured: true,
    bestseller: false,
  },
  {
    id: "vanilla-cupcake-box-6",
    slug: "vanilla-cupcake-box-6",
    name: "Vanilla Cupcake Box (6)",
    category: "cupcakes",
    price: 900,
    currency: "PKR",
    description:
      "Six fluffy vanilla cupcakes with buttercream swirl. Ideal for small gatherings and gift boxes.",
    images: ["/images/products/vanilla-cupcake-box-6/vanilla-cupcake-box-6-1.jpg"],
    featured: false,
    bestseller: true,
  },
  {
    id: "chocolate-cupcake-box-6",
    slug: "chocolate-cupcake-box-6",
    name: "Chocolate Cupcake Box (6)",
    category: "cupcakes",
    price: 1000,
    currency: "PKR",
    description:
      "Six rich chocolate cupcakes topped with chocolate buttercream. A crowd favorite for parties.",
    images: ["/images/products/chocolate-cupcake-box-6/chocolate-cupcake-box-6-1.png"],
    featured: true,
    bestseller: true,
  },
  {
    id: "mixed-cupcake-box-12",
    slug: "mixed-cupcake-box-12",
    name: "Mixed Cupcake Box (12)",
    category: "cupcakes",
    price: 1800,
    currency: "PKR",
    description:
      "A dozen assorted vanilla and chocolate cupcakes — perfect variety for events and office treats.",
    images: ["/images/products/mixed-cupcake-box-12/mixed-cupcake-box-12-1.png"],
    featured: true,
    bestseller: false,
  },
  {
    id: "chocolate-brownie-box",
    slug: "chocolate-brownie-box",
    name: "Chocolate Brownie Box",
    category: "brownies",
    price: 1200,
    currency: "PKR",
    description:
      "Fudgy chocolate brownies with a crackly top. Baked in small batches for the perfect chewy bite.",
    images: ["/images/products/chocolate-brownie-box/chocolate-brownie-box-1.jpg"],
    featured: false,
    bestseller: true,
  },
  {
    id: "nut-brownie-box",
    slug: "nut-brownie-box",
    name: "Nut Brownie Box",
    category: "brownies",
    price: 1500,
    currency: "PKR",
    description:
      "Chocolate brownies loaded with premium nuts for extra crunch and flavor in every square.",
    images: ["/images/products/nut-brownie-box/nut-brownie-box-1.jpg"],
    featured: false,
    bestseller: false,
  },
  {
    id: "chocolate-chip-cookies",
    slug: "chocolate-chip-cookies",
    name: "Chocolate Chip Cookies",
    category: "cookies",
    price: 700,
    currency: "PKR",
    description:
      "Classic chewy cookies loaded with chocolate chips. Freshly baked and perfect with tea or coffee.",
    images: ["/images/products/chocolate-chip-cookies/chocolate-chip-cookies-1.jpg"],
    featured: false,
    bestseller: true,
  },
  {
    id: "butter-cookies",
    slug: "butter-cookies",
    name: "Butter Cookies",
    category: "cookies",
    price: 650,
    currency: "PKR",
    description:
      "Buttery, melt-in-your-mouth cookies with a delicate crumb. Elegant and delicious for gifting.",
    images: ["/images/products/butter-cookies/butter-cookies-1.jpg"],
    featured: false,
    bestseller: false,
  },
  {
    id: "customized-name-cookies",
    slug: "customized-name-cookies",
    name: "Customized Name Chocolate",
    category: "cookies",
    price: 1500,
    currency: "PKR",
    description:
      "Personalized name chocolates with custom lettering. Perfect for birthdays, baby showers, and corporate gifts.",
    images: ["/images/products/customized-name-cookies/customized-name-cookies-1.png"],
    featured: true,
    bestseller: false,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getBestsellerProducts(): Product[] {
  return products.filter((p) => p.bestseller);
}
