export interface Coupon {
  code: string;
  type: "percent" | "fixed";
  value: number;
  minOrder?: number;
  description: string;
}

export const coupons: Record<string, Coupon> = {
  WELCOME10: {
    code: "WELCOME10",
    type: "percent",
    value: 10,
    minOrder: 1000,
    description: "10% off your first order (min Rs 1,000)",
  },
  SWEET500: {
    code: "SWEET500",
    type: "fixed",
    value: 500,
    minOrder: 3000,
    description: "Rs 500 off orders above Rs 3,000",
  },
  CELEBRATE15: {
    code: "CELEBRATE15",
    type: "percent",
    value: 15,
    minOrder: 5000,
    description: "15% off celebration orders (min Rs 5,000)",
  },
};

export function validateCoupon(
  code: string,
  subtotal: number
): { valid: true; coupon: Coupon; discount: number } | { valid: false; error: string } {
  const normalized = code.trim().toUpperCase();
  const coupon = coupons[normalized];

  if (!coupon) {
    return { valid: false, error: "Invalid coupon code" };
  }

  if (coupon.minOrder && subtotal < coupon.minOrder) {
    return {
      valid: false,
      error: `Minimum order of Rs ${coupon.minOrder.toLocaleString("en-PK")} required`,
    };
  }

  let discount = 0;
  if (coupon.type === "percent") {
    discount = Math.round((subtotal * coupon.value) / 100);
  } else {
    discount = coupon.value;
  }

  discount = Math.min(discount, subtotal);

  return { valid: true, coupon, discount };
}
