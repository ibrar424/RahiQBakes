import type { SavedOrder } from "./orders";
import { formatPrice } from "./utils";
import { siteConfig } from "./site";

export function formatOrderEmailBody(order: SavedOrder): string {
  const itemsList = order.items
    .map(
      (item) =>
        `  - ${item.name} x${item.quantity} — ${formatPrice(item.price * item.quantity)}`
    )
    .join("\n");

  return [
    `New order received on ${siteConfig.name}`,
    "",
    `ORDER ID: ${order.orderId}`,
    `Placed: ${new Date(order.createdAt).toLocaleString("en-PK")}`,
    "",
    "=== DELIVERY DETAILS ===",
    `Customer Name: ${order.customerName}`,
    `Mobile: ${order.mobile}`,
    `Delivery Address: ${order.address}`,
    order.notes ? `Order Notes: ${order.notes}` : "",
    "",
    "=== ITEMS ===",
    itemsList,
    "",
    `Subtotal: ${formatPrice(order.subtotal)}`,
    order.discount > 0
      ? `Discount${order.couponCode ? ` (${order.couponCode})` : ""}: -${formatPrice(order.discount)}`
      : "",
    `TOTAL: ${formatPrice(order.total)}`,
    "",
    `Payment: ${order.paymentMethod === "cod" ? "Cash on Delivery" : "Bank Transfer"}`,
    "",
    "—",
    "Confirm this order with the customer on WhatsApp.",
  ]
    .filter(Boolean)
    .join("\n");
}
