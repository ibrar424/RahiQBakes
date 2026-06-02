import { NextResponse } from "next/server";
import type { SavedOrder } from "@/lib/orders";
import { sendOrderNotificationEmail } from "@/lib/send-order-email";

export async function POST(request: Request) {
  let order: SavedOrder;
  try {
    order = (await request.json()) as SavedOrder;
  } catch {
    return NextResponse.json({ success: false, error: "Invalid order data" }, { status: 400 });
  }

  if (!order?.orderId || !order?.customerName || !order?.mobile) {
    return NextResponse.json({ success: false, error: "Missing order fields" }, { status: 400 });
  }

  const result = await sendOrderNotificationEmail(order);

  if (!result.success) {
    return NextResponse.json(
      { success: false, error: result.error || "Failed to send email" },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true, method: result.method });
}
