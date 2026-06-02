import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Track Order",
  description: "Track your RahiQBakes order status.",
  path: "/track-order",
});

export default function TrackOrderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
