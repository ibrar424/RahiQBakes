import type { CartItem } from "./cart-store";

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "baking"
  | "out-for-delivery"
  | "delivered";

export const orderStatusLabels: Record<OrderStatus, string> = {
  pending: "Pending",
  confirmed: "Confirmed",
  baking: "Baking",
  "out-for-delivery": "Out for Delivery",
  delivered: "Delivered",
};

export const orderStatusSteps: OrderStatus[] = [
  "pending",
  "confirmed",
  "baking",
  "out-for-delivery",
  "delivered",
];

export type PaymentMethod = "cod" | "bank-transfer";

export interface SavedOrder {
  orderId: string;
  createdAt: string;
  customerName: string;
  mobile: string;
  address: string;
  notes: string;
  paymentMethod: PaymentMethod;
  items: CartItem[];
  subtotal: number;
  discount: number;
  total: number;
  couponCode?: string;
  status: OrderStatus;
}

const STORAGE_KEY = "rahiqbakes-orders";

function generateOrderId(): string {
  const date = new Date();
  const dateStr = date.toISOString().slice(0, 10).replace(/-/g, "");
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `RB-${dateStr}-${random}`;
}

export function createOrder(
  data: Omit<SavedOrder, "orderId" | "createdAt" | "status">
): SavedOrder {
  const order: SavedOrder = {
    ...data,
    orderId: generateOrderId(),
    createdAt: new Date().toISOString(),
    status: "pending",
  };

  if (typeof window !== "undefined") {
    const existing = getOrders();
    existing.unshift(order);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  }

  return order;
}

export function getOrders(): SavedOrder[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as SavedOrder[]) : [];
  } catch {
    return [];
  }
}

export function getOrderById(orderId: string): SavedOrder | undefined {
  return getOrders().find(
    (o) => o.orderId.toUpperCase() === orderId.trim().toUpperCase()
  );
}

export function getStatusIndex(status: OrderStatus): number {
  return orderStatusSteps.indexOf(status);
}
