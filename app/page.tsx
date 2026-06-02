import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { FeaturedSlider } from "@/components/home/FeaturedSlider";
import { ProductCard } from "@/components/shop/ProductCard";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { getFeaturedProducts, getBestsellerProducts } from "@/lib/products";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const bestsellers = getBestsellerProducts();

  return (
    <>
      <Hero />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="section-heading">Featured Products</h2>
            <p className="section-subheading">Handpicked favorites for your next celebration</p>
          </div>
          <div className="mt-10">
            <FeaturedSlider products={featured} />
          </div>
        </div>
      </section>

      <section className="bg-pink-soft/30 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <h2 className="section-heading">Best Sellers</h2>
              <p className="section-subheading">Most loved treats by our customers</p>
            </div>
            <Link href="/shop" className="btn-secondary">
              View All Products
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />
      <GalleryPreview />
      <AboutTeaser />
    </>
  );
}
