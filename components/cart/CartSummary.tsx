"use client";

import Link from "next/link";
import { useCartStore } from "@/lib/cart-store";
import { formatPrice } from "@/lib/utils";
import { CouponInput } from "./CouponInput";

export function CartSummary({ showCheckoutButton = true }: { showCheckoutButton?: boolean }) {
  const subtotal = useCartStore((s) => s.getSubtotal());
  const discount = useCartStore((s) => s.discount);
  const total = useCartStore((s) => s.getTotal());

  return (
    <div className="rounded-2xl bg-white p-6 shadow-card">
      <h2 className="font-display text-xl font-semibold text-chocolate">Order Summary</h2>
      <div className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-chocolate-light">Subtotal</span>
          <span className="font-medium">{formatPrice(subtotal)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-green-700">
            <span>Discount</span>
            <span>-{formatPrice(discount)}</span>
          </div>
        )}
        <div className="flex justify-between border-t border-pink-soft pt-2 text-lg font-semibold">
          <span>Total</span>
          <span className="text-gold">{formatPrice(total)}</span>
        </div>
      </div>
      <div className="mt-6">
        <CouponInput />
      </div>
      {showCheckoutButton && (
        <Link href="/checkout" className="btn-primary mt-6 w-full">
          Proceed to Checkout
        </Link>
      )}
    </div>
  );
}
