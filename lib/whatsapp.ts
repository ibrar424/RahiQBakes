import { formatPrice } from "./utils";
import type { SavedOrder } from "./orders";
import { orderStatusLabels } from "./orders";
import { siteConfig } from "./site";

function baseUrl(): string {
  return `https://wa.me/${siteConfig.whatsapp}`;
}

export function buildWhatsAppUrl(message: string): string {
  return `${baseUrl()}?text=${encodeURIComponent(message)}`;
}

export function generalOrderMessage(): string {
  return `Hello ${siteConfig.name}! I would like to place an order. Please share your menu and delivery details.`;
}

export function orderConfirmationMessage(order: SavedOrder): string {
  const lines = [
    `*New Order – ${siteConfig.name}*`,
    `Order ID: *${order.orderId}*`,
    "",
    "*Customer Details*",
    `Name: ${order.customerName}`,
    `Mobile: ${order.mobile}`,
    `Address: ${order.address}`,
    order.notes ? `Notes: ${order.notes}` : "",
    "",
    "*Items*",
    ...order.items.map(
      (item) =>
        `• ${item.name} x${item.quantity} – ${formatPrice(item.price * item.quantity)}`
    ),
    "",
    `Subtotal: ${formatPrice(order.subtotal)}`,
    order.discount > 0
      ? `Discount${order.couponCode ? ` (${order.couponCode})` : ""}: -${formatPrice(order.discount)}`
      : "",
    `*Total: ${formatPrice(order.total)}*`,
    "",
    `Payment: ${order.paymentMethod === "cod" ? "Cash on Delivery" : "Bank Transfer"}`,
    "",
    "Please confirm my order. Thank you!",
  ].filter(Boolean);

  return lines.join("\n");
}

export function trackOrderMessage(orderId: string): string {
  return `Hello ${siteConfig.name}! I would like an update on my order *${orderId}*. Current status shown: ${orderStatusLabels.pending}. Thank you!`;
}

export function customOrderMessage(data: {
  name: string;
  mobile: string;
  occasion: string;
  cakeSize: string;
  flavor: string;
  theme: string;
  date: string;
  budget: string;
  referenceUrl?: string;
  notes: string;
}): string {
  return [
    `*Custom Cake Request – ${siteConfig.name}*`,
    `Name: ${data.name}`,
    `Mobile: ${data.mobile}`,
    `Occasion: ${data.occasion}`,
    `Size: ${data.cakeSize}`,
    `Flavor: ${data.flavor}`,
    `Theme/Design: ${data.theme}`,
    `Required Date: ${data.date}`,
    `Budget: ${data.budget}`,
    data.referenceUrl ? `Reference: ${data.referenceUrl}` : "",
    data.notes ? `Notes: ${data.notes}` : "",
    "",
    "Please share a quote and availability. Thank you!",
  ]
    .filter(Boolean)
    .join("\n");
}
