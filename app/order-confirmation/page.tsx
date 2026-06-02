"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { getOrderById, type SavedOrder } from "@/lib/orders";
import { formatPrice } from "@/lib/utils";
import { buildWhatsAppUrl, orderConfirmationMessage } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const emailSent = searchParams.get("emailSent");
  const [order, setOrder] = useState<SavedOrder | null>(null);
  const [copied, setCopied] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [isRedirecting, setIsRedirecting] = useState(true);

  useEffect(() => {
    if (orderId) {
      setOrder(getOrderById(orderId) ?? null);
    }
  }, [orderId]);

  const whatsappUrl = order ? buildWhatsAppUrl(orderConfirmationMessage(order)) : "";

  useEffect(() => {
    if (!order || !whatsappUrl) return;

    if (isRedirecting) {
      if (countdown > 0) {
        const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        return () => clearTimeout(timer);
      } else {
        window.location.href = whatsappUrl;
      }
    }
  }, [countdown, isRedirecting, order, whatsappUrl]);

  if (!orderId) {
    return (
      <div className="text-center py-12">
        <p className="text-chocolate-light">No order found.</p>
        <Link href="/shop" className="btn-primary mt-4 inline-flex">
          Shop Now
        </Link>
      </div>
    );
  }

  if (!order) {
    return <p className="text-center py-12 text-chocolate-light">Loading order...</p>;
  }

  const copyOrderId = () => {
    navigator.clipboard.writeText(order.orderId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pink-soft">
        <span className="text-3xl">✓</span>
      </div>
      <h1 className="mt-6 font-display text-3xl font-semibold text-chocolate">
        Order Placed!
      </h1>
      <p className="mt-2 text-chocolate-light">
        Your order ID: <strong className="text-chocolate">{order.orderId}</strong>
      </p>
      <button
        type="button"
        onClick={copyOrderId}
        className="mt-2 text-sm text-gold underline hover:text-gold-dark"
      >
        {copied ? "Copied!" : "Copy Order ID"}
      </button>

      {isRedirecting && (
        <div className="mt-6 rounded-2xl bg-pink-soft/30 border border-pink-soft/80 p-4 text-sm text-chocolate flex flex-col items-center gap-2">
          <p className="font-medium animate-pulse">
            Redirecting to WhatsApp to confirm your order in {countdown} seconds...
          </p>
          <button
            type="button"
            onClick={() => setIsRedirecting(false)}
            className="text-xs text-gold font-semibold underline hover:text-gold-dark"
          >
            Cancel automatic redirect
          </button>
        </div>
      )}

      <div className="mt-8 rounded-2xl bg-white p-6 text-left shadow-card">
        <h2 className="font-semibold text-chocolate">Order Summary</h2>
        <ul className="mt-4 space-y-2 text-sm">
          {order.items.map((item) => (
            <li key={item.productId} className="flex justify-between">
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>{formatPrice(item.price * item.quantity)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 border-t border-pink-soft pt-4 flex justify-between font-semibold">
          <span>Total</span>
          <span className="text-gold">{formatPrice(order.total)}</span>
        </div>
      </div>

      {emailSent === "1" && (
        <p className="mt-4 rounded-xl bg-pink-soft/60 p-3 text-sm text-chocolate">
          Delivery details emailed to <strong>{siteConfig.orderEmail}</strong>
        </p>
      )}
      {emailSent === "0" && (
        <p className="mt-4 rounded-xl border border-gold/40 bg-cream p-3 text-sm text-chocolate-light">
          Email notification could not be sent. Please confirm on WhatsApp below. Check your inbox
          for a FormSubmit activation link if this is your first order.
        </p>
      )}

      <p className="mt-6 text-sm text-chocolate-light">
        Please confirm your order on WhatsApp so we can start baking!
      </p>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp mt-6 w-full sm:w-auto"
      >
        Confirm on WhatsApp
      </a>

      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Link href={`/track-order?orderId=${order.orderId}`} className="btn-secondary">
          Track Order
        </Link>
        <Link href="/shop" className="text-sm text-chocolate-light underline hover:text-gold">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <Suspense fallback={<p className="text-center py-12">Loading...</p>}>
        <ConfirmationContent />
      </Suspense>
    </div>
  );
}
