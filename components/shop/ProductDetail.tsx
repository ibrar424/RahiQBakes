"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/lib/cart-store";
import { ProductImage } from "@/components/ui/ProductImage";
import { QuantitySelector } from "./QuantitySelector";

export function ProductDetail({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);
  const router = useRouter();

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addItem(product, quantity);
    router.push("/checkout");
  };

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="relative aspect-square overflow-hidden rounded-2xl shadow-card">
        <ProductImage
          src={product.images[0]}
          alt={product.name}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-gold">
          {product.category.replace("-", " ")}
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-chocolate md:text-4xl">
          {product.name}
        </h1>
        <p className="mt-4 text-2xl font-semibold text-gold">
          {formatPrice(product.price)}
        </p>
        <p className="mt-6 leading-relaxed text-chocolate-light">
          {product.description}
        </p>
        <div className="mt-8">
          <p className="mb-2 text-sm font-medium text-chocolate">Quantity</p>
          <QuantitySelector quantity={quantity} onChange={setQuantity} />
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <button type="button" onClick={handleAddToCart} className="btn-primary">
            {added ? "Added to Cart ✓" : "Add to Cart"}
          </button>
          <button type="button" onClick={handleBuyNow} className="btn-secondary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
