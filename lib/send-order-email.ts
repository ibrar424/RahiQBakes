import type { SavedOrder } from "./orders";
import { formatOrderEmailBody } from "./order-email";
import { siteConfig } from "./site";

function getWeb3FormsKey(): string | undefined {
  return (
    process.env.WEB3FORMS_ACCESS_KEY?.trim() ||
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ||
    undefined
  );
}

async function sendViaWeb3Forms(order: SavedOrder, message: string): Promise<boolean> {
  const accessKey = getWeb3FormsKey();
  if (!accessKey) return false;

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Referer": siteConfig.url,
        "Origin": siteConfig.url,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New Order ${order.orderId} – ${siteConfig.name}`,
        from_name: `${order.customerName} (${order.mobile})`,
        name: order.customerName,
        email: siteConfig.orderEmail,
        phone: order.mobile,
        message,
      }),
    });

    if (!res.ok) {
      console.error(`Web3Forms responded with status: ${res.status}`);
      return false;
    }

    const data = await res.json();
    return Boolean(data.success);
  } catch (error) {
    console.error("Error sending order via Web3Forms:", error);
    return false;
  }
}

async function sendViaFormSubmit(order: SavedOrder, message: string): Promise<boolean> {
  const res = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.orderEmail)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Referer": siteConfig.url,
        "Origin": siteConfig.url,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      },
      body: JSON.stringify({
        _subject: `New Order ${order.orderId} – ${siteConfig.name}`,
        _template: "table",
        _captcha: "false",
        order_id: order.orderId,
        customer_name: order.customerName,
        mobile: order.mobile,
        delivery_address: order.address,
        order_notes: order.notes || "—",
        payment_method: order.paymentMethod === "cod" ? "Cash on Delivery" : "Bank Transfer",
        total: `Rs ${order.total.toLocaleString("en-PK")}`,
        order_details: message,
      }),
    }
  );

  if (!res.ok) return false;

  try {
    const data = await res.json();
    return data.success === "true" || data.success === true;
  } catch {
    return res.ok;
  }
}

export async function sendOrderNotificationEmail(
  order: SavedOrder
): Promise<{ success: boolean; method?: string; error?: string }> {
  const message = formatOrderEmailBody(order);

  if (getWeb3FormsKey()) {
    const ok = await sendViaWeb3Forms(order, message);
    if (ok) return { success: true, method: "web3forms" };
  }

  try {
    const ok = await sendViaFormSubmit(order, message);
    if (ok) return { success: true, method: "formsubmit" };
    return {
      success: false,
      error:
        `Email could not be sent. If this is your first order, check ${siteConfig.orderEmail} for a FormSubmit activation link and click it.`,
    };
  } catch {
    return {
      success: false,
      error: "Could not reach email service. Please confirm orders on WhatsApp.",
    };
  }
}
