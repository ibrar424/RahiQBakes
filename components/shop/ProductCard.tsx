import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { ProductImage } from "@/components/ui/ProductImage";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group overflow-hidden rounded-2xl bg-white shadow-card transition hover:shadow-elevated"
    >
      <div className="relative aspect-square overflow-hidden">
        <ProductImage
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, 25vw"
          className="transition duration-300 group-hover:scale-105"
        />
        {product.bestseller && (
          <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-chocolate">
            Bestseller
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-chocolate group-hover:text-gold">
          {product.name}
        </h3>
        <p className="mt-1 font-semibold text-gold">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
