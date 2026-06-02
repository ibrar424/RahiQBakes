import Link from "next/link";
import { ProductImage } from "@/components/ui/ProductImage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Us",
  description: "Learn about RahiQBakes — premium home-based bakery in Pakistan.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <div className="text-center">
        <h1 className="section-heading">About RahiQBakes</h1>
        <p className="section-subheading">Elegant, premium, modern bakery — made with love at home</p>
      </div>

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-elevated">
          <ProductImage
            src="/images/gallery/wedding-1.jpg"
            alt="RahiQBakes wedding cake"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="space-y-4 text-chocolate-light leading-relaxed">
          <p>
            Welcome to <strong className="text-chocolate">RahiQBakes</strong> — a home-based bakery
            in Pakistan dedicated to crafting beautiful, delicious cakes and sweet treats for every
            celebration.
          </p>
          <p>
            What started as a passion for baking has grown into a trusted name for custom birthday
            cakes, elegant wedding tiers, themed celebration cakes, cupcakes, brownies, and cookies.
            Every order is baked fresh using quality ingredients and decorated with attention to
            detail.
          </p>
          <p>
            We believe your special moments deserve something extraordinary. Whether it&apos;s a
            child&apos;s birthday, an anniversary, or your wedding day, we work closely with you to
            bring your vision to life.
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {[
          {
            title: "Premium Quality",
            text: "Fine ingredients and careful preparation in every batch we bake.",
          },
          {
            title: "Custom Designs",
            text: "From simple elegance to elaborate themes — your cake, your way.",
          },
          {
            title: "Doorstep Delivery",
            text: "Fresh treats delivered across our service areas in Pakistan.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl bg-pink-soft/50 p-6 text-center">
            <h3 className="font-display text-xl font-semibold text-chocolate">{item.title}</h3>
            <p className="mt-2 text-sm text-chocolate-light">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link href="/shop" className="btn-primary">
          Browse Our Menu
        </Link>
        <Link href="/custom-order" className="btn-secondary ml-4 mt-4 sm:mt-0 sm:ml-4">
          Request Custom Cake
        </Link>
      </div>
    </div>
  );
}
