"use client";

import { useState } from "react";
import { useCartStore } from "@/lib/cart-store";

export function CouponInput() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const couponCode = useCartStore((s) => s.couponCode);
  const applyCoupon = useCartStore((s) => s.applyCoupon);
  const removeCoupon = useCartStore((s) => s.removeCoupon);

  const handleApply = () => {
    setError("");
    const result = applyCoupon(code);
    if (!result.success) {
      setError(result.error || "Invalid coupon");
    } else {
      setCode("");
    }
  };

  if (couponCode) {
    return (
      <div className="flex items-center justify-between rounded-xl bg-pink-soft/50 p-4">
        <span className="text-sm font-medium text-chocolate">
          Coupon applied: <strong>{couponCode}</strong>
        </span>
        <button
          type="button"
          onClick={removeCoupon}
          className="text-sm text-chocolate-light underline hover:text-chocolate"
        >
          Remove
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex gap-2">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          placeholder="Coupon code (e.g. WELCOME10)"
          className="flex-1 rounded-xl border border-pink-soft bg-white px-4 py-2 text-sm text-chocolate focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
        <button type="button" onClick={handleApply} className="btn-secondary shrink-0 py-2">
          Apply
        </button>
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      <p className="mt-2 text-xs text-chocolate-light">
        Try WELCOME10, SWEET500, or CELEBRATE15
      </p>
    </div>
  );
}
