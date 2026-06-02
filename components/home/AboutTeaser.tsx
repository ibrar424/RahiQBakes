import Link from "next/link";
import { ProductImage } from "@/components/ui/ProductImage";

export function AboutTeaser() {
  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-elevated">
          <ProductImage
            src="/images/gallery/decorating-1.jpg"
            alt="RahiQBakes cake decorating"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <h2 className="section-heading">About RahiQBakes</h2>
          <p className="mt-4 text-chocolate-light leading-relaxed">
            RahiQBakes is a premium home-based bakery in Pakistan, passionate about
            creating unforgettable cakes and sweet treats for every celebration.
            From elegant wedding tiers to fun birthday themes, every order is baked
            fresh with quality ingredients and decorated with love.
          </p>
          <p className="mt-4 text-chocolate-light leading-relaxed">
            We believe every celebration deserves something special — and we deliver
            that happiness right to your doorstep.
          </p>
          <Link href="/about" className="btn-primary mt-6 inline-flex">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
