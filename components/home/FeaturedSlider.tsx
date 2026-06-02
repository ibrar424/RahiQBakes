"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import type { Product } from "@/lib/products";
import { ProductCard } from "@/components/shop/ProductCard";

export function FeaturedSlider({ products }: { products: Product[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-3">
        <button
          type="button"
          onClick={scrollPrev}
          className="rounded-full border border-chocolate px-4 py-2 text-sm font-medium text-chocolate hover:bg-pink-soft"
          aria-label="Previous"
        >
          ← Prev
        </button>
        <button
          type="button"
          onClick={scrollNext}
          className="rounded-full border border-chocolate px-4 py-2 text-sm font-medium text-chocolate hover:bg-pink-soft"
          aria-label="Next"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
