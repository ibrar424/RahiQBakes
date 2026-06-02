"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "./products";
import { validateCoupon } from "./coupons";

export interface CartItem {
  productId: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  couponCode: string | null;
  discount: number;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  applyCoupon: (code: string) => { success: boolean; error?: string };
  removeCoupon: () => void;
  getSubtotal: () => number;
  getTotal: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      couponCode: null,
      discount: 0,

      addItem: (product, quantity = 1) => {
        set((state) => {
          const existing = state.items.find((i) => i.productId === product.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.productId === product.id
                  ? { ...i, quantity: i.quantity + quantity }
                  : i
              ),
            };
          }
          return {
            items: [
              ...state.items,
              {
                productId: product.id,
                slug: product.slug,
                name: product.name,
                price: product.price,
                image: product.images[0],
                quantity,
              },
            ],
          };
        });
        const subtotal = get().getSubtotal();
        if (get().couponCode) {
          const result = validateCoupon(get().couponCode!, subtotal);
          if (result.valid) {
            set({ discount: result.discount });
          } else {
            set({ couponCode: null, discount: 0 });
          }
        }
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((i) => i.productId !== productId),
        }));
        const subtotal = get().getSubtotal();
        if (get().couponCode) {
          const result = validateCoupon(get().couponCode!, subtotal);
          if (result.valid) {
            set({ discount: result.discount });
          } else {
            set({ couponCode: null, discount: 0 });
          }
        }
      },

      updateQuantity: (productId, quantity) => {
        if (quantity < 1) {
          get().removeItem(productId);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.productId === productId ? { ...i, quantity } : i
          ),
        }));
        const subtotal = get().getSubtotal();
        if (get().couponCode) {
          const result = validateCoupon(get().couponCode!, subtotal);
          if (result.valid) {
            set({ discount: result.discount });
          } else {
            set({ couponCode: null, discount: 0 });
          }
        }
      },

      clearCart: () => set({ items: [], couponCode: null, discount: 0 }),

      applyCoupon: (code) => {
        const subtotal = get().getSubtotal();
        const result = validateCoupon(code, subtotal);
        if (!result.valid) {
          return { success: false, error: result.error };
        }
        set({
          couponCode: result.coupon.code,
          discount: result.discount,
        });
        return { success: true };
      },

      removeCoupon: () => set({ couponCode: null, discount: 0 }),

      getSubtotal: () =>
        get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),

      getTotal: () => Math.max(0, get().getSubtotal() - get().discount),

      getItemCount: () =>
        get().items.reduce((sum, i) => sum + i.quantity, 0),
    }),
    { name: "rahiqbakes-cart" }
  )
);
