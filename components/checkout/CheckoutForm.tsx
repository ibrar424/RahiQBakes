"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/lib/cart-store";
import { createOrder, type PaymentMethod } from "@/lib/orders";
import { siteConfig } from "@/lib/site";
import { CartSummary } from "@/components/cart/CartSummary";

export function CheckoutForm() {
  const router = useRouter();
  const items = useCartStore((s) => s.items);
  const subtotal = useCartStore((s) => s.getSubtotal());
  const discount = useCartStore((s) => s.discount);
  const total = useCartStore((s) => s.getTotal());
  const couponCode = useCartStore((s) => s.couponCode);
  const clearCart = useCartStore((s) => s.clearCart);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [payment, setPayment] = useState<PaymentMethod>("cod");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Name is required";
    if (!mobile.trim()) next.mobile = "Mobile number is required";
    else if (!/^03\d{9}$/.test(mobile.replace(/\s/g, ""))) {
      next.mobile = "Enter a valid Pakistani mobile (e.g. 03001234567)";
    }
    if (!address.trim()) next.address = "Delivery address is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    if (!validate()) return;

    setSubmitting(true);
    const order = createOrder({
      customerName: name.trim(),
      mobile: mobile.trim(),
      address: address.trim(),
      notes: notes.trim(),
      paymentMethod: payment,
      items: [...items],
      subtotal,
      discount,
      total,
      couponCode: couponCode || undefined,
    });

    let emailSent = false;
    try {
      const res = await fetch("/api/send-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });
      const data = await res.json();
      emailSent = Boolean(data.success);
    } catch {
      emailSent = false;
    }

    clearCart();
    router.push(
      `/order-confirmation?orderId=${order.orderId}&emailSent=${emailSent ? "1" : "0"}`
    );
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-chocolate-light">Your cart is empty.</p>
        <a href="/shop" className="btn-primary mt-4 inline-flex">
          Browse Shop
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-10 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="rounded-2xl bg-white p-6 shadow-card">
          <h2 className="font-display text-xl font-semibold text-chocolate">
            Delivery Details
          </h2>
          <div className="mt-4 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-chocolate">
                Customer Name *
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-xl border border-pink-soft px-4 py-2 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-chocolate">
                Mobile Number *
              </label>
              <input
                id="mobile"
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="03001234567"
                className="mt-1 w-full rounded-xl border border-pink-soft px-4 py-2 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
              {errors.mobile && <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>}
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-chocolate">
                Delivery Address *
              </label>
              <textarea
                id="address"
                rows={3}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1 w-full rounded-xl border border-pink-soft px-4 py-2 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
              {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
            </div>
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-chocolate">
                Order Notes
              </label>
              <textarea
                id="notes"
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Delivery instructions, cake message, etc."
                className="mt-1 w-full rounded-xl border border-pink-soft px-4 py-2 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-card">
          <h2 className="font-display text-xl font-semibold text-chocolate">
            Payment Method
          </h2>
          <div className="mt-4 space-y-3">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-pink-soft p-4 has-[:checked]:border-gold has-[:checked]:bg-pink-soft/30">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={payment === "cod"}
                onChange={() => setPayment("cod")}
                className="mt-1"
              />
              <div>
                <span className="font-medium text-chocolate">Cash on Delivery (COD)</span>
                <p className="text-sm text-chocolate-light">Pay when your order arrives</p>
              </div>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-pink-soft p-4 has-[:checked]:border-gold has-[:checked]:bg-pink-soft/30">
              <input
                type="radio"
                name="payment"
                value="bank-transfer"
                checked={payment === "bank-transfer"}
                onChange={() => setPayment("bank-transfer")}
                className="mt-1"
              />
              <div>
                <span className="font-medium text-chocolate">Bank Transfer</span>
                <p className="text-sm text-chocolate-light">
                  Transfer before delivery; share screenshot on WhatsApp
                </p>
              </div>
            </label>
          </div>
          {payment === "bank-transfer" && (
            <div className="mt-4 rounded-xl bg-pink-soft/50 p-4 text-sm text-chocolate">
              <p className="font-semibold">Bank Details</p>
              <p className="mt-2">Bank: {siteConfig.bank.name}</p>
              <p>Account Title: {siteConfig.bank.accountTitle}</p>
              <p>Account Number: {siteConfig.bank.accountNumber}</p>
              <p>IBAN: {siteConfig.bank.iban}</p>
            </div>
          )}
        </div>

        <button type="submit" disabled={submitting} className="btn-primary w-full">
          {submitting ? "Placing Order..." : "Place Order"}
        </button>
      </div>

      <div>
        <CartSummary showCheckoutButton={false} />
        <ul className="mt-4 space-y-2 text-sm text-chocolate-light">
          {items.map((item) => (
            <li key={item.productId}>
              {item.name} × {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
}
