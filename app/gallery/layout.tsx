import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Gallery",
  description: "Browse our cake gallery — birthday, wedding, drip cakes and more.",
  path: "/gallery",
});

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
