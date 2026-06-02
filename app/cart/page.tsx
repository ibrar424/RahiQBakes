"use client";

import Link from "next/link";
import { useCartStore } from "@/lib/cart-store";
import { formatPrice } from "@/lib/utils";
import { ProductImage } from "@/components/ui/ProductImage";
import { CartSummary } from "@/components/cart/CartSummary";
import { QuantitySelector } from "@/components/shop/QuantitySelector";
export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <h1 className="section-heading">Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="mt-12 text-center">
          <p className="text-chocolate-light">Your cart is empty.</p>
          <Link href="/shop" className="btn-primary mt-6 inline-flex">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.productId}
                className="flex gap-4 rounded-2xl bg-white p-4 shadow-card"
              >
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
                  <ProductImage src={item.image} alt={item.name} fill sizes="96px" />
                </div>
                <div className="flex flex-1 flex-col justify-between sm:flex-row sm:items-center">
                  <div>
                    <Link
                      href={`/shop/${item.slug}`}
                      className="font-display font-semibold text-chocolate hover:text-gold"
                    >
                      {item.name}
                    </Link>
                    <p className="text-gold font-medium">{formatPrice(item.price)}</p>
                  </div>
                  <div className="mt-2 flex items-center gap-4 sm:mt-0">
                    <QuantitySelector
                      quantity={item.quantity}
                      onChange={(q) => updateQuantity(item.productId, q)}
                    />
                    <button
                      type="button"
                      onClick={() => removeItem(item.productId)}
                      className="text-sm text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                  <p className="font-semibold text-chocolate sm:text-right">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <CartSummary />
            <Link href="/shop" className="mt-4 block text-center text-sm text-chocolate-light hover:text-gold">
              ← Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
