import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Order Confirmation",
  description: "Your order has been placed.",
  path: "/order-confirmation",
});

export default function OrderConfirmationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
