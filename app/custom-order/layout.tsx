import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Custom Order",
  description: "Request a custom cake design for your celebration. Quote via WhatsApp.",
  path: "/custom-order",
});

export default function CustomOrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
