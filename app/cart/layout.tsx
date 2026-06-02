import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Cart",
  description: "Review your cart and proceed to checkout.",
  path: "/cart",
});

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return children;
}
