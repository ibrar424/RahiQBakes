"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getOrderById } from "@/lib/orders";
import { OrderStatusTimeline } from "@/components/orders/OrderStatusTimeline";
import { buildWhatsAppUrl, trackOrderMessage } from "@/lib/whatsapp";
import { formatPrice } from "@/lib/utils";

function TrackOrderContent() {
  const searchParams = useSearchParams();
  const initialId = searchParams.get("orderId") || "";
  const [orderId, setOrderId] = useState(initialId);
  const [searched, setSearched] = useState(!!initialId);

  const order = searched && orderId ? getOrderById(orderId) : undefined;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
  };

  return (
    <div className="mx-auto max-w-2xl">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={orderId}
          onChange={(e) => {
            setOrderId(e.target.value);
            setSearched(false);
          }}
          placeholder="Enter your order ID (e.g. RB-20250602-A3F2)"
          className="flex-1 rounded-xl border border-pink-soft px-4 py-3 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
        <button type="submit" className="btn-primary shrink-0">
          Track
        </button>
      </form>

      <p className="mt-4 text-sm text-chocolate-light">
        Orders are saved in this browser. For live updates, message us on WhatsApp with your order ID.
      </p>

      {searched && !order && (
        <p className="mt-8 rounded-xl bg-pink-soft/50 p-4 text-center text-chocolate">
          Order not found. Check your order ID or place a new order.
        </p>
      )}

      {order && (
        <div className="mt-10 space-y-8">
          <div className="rounded-2xl bg-white p-6 shadow-card">
            <p className="text-sm text-chocolate-light">Order ID</p>
            <p className="font-display text-xl font-semibold text-chocolate">{order.orderId}</p>
            <p className="mt-2 text-gold font-semibold">{formatPrice(order.total)}</p>
            <p className="mt-1 text-sm text-chocolate-light">
              Placed on {new Date(order.createdAt).toLocaleDateString("en-PK", {
                dateStyle: "long",
              })}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-card">
            <h2 className="font-display text-lg font-semibold text-chocolate">Order Status</h2>
            <div className="mt-6">
              <OrderStatusTimeline status={order.status} />
            </div>
          </div>

          <a
            href={buildWhatsAppUrl(trackOrderMessage(order.orderId))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full"
          >
            Get Update on WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}

export default function TrackOrderPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <h1 className="section-heading text-center">Track Your Order</h1>
      <p className="section-subheading text-center">
        Pending → Confirmed → Baking → Out for Delivery → Delivered
      </p>
      <div className="mt-10">
        <Suspense fallback={<p className="text-center">Loading...</p>}>
          <TrackOrderContent />
        </Suspense>
      </div>
    </div>
  );
}
