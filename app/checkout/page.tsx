import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Checkout",
  description: "Secure checkout with Cash on Delivery and Bank Transfer options.",
  path: "/checkout",
});

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <h1 className="section-heading">Checkout</h1>
      <p className="section-subheading">Complete your order details for delivery</p>
      <div className="mt-10">
        <CheckoutForm />
      </div>
    </div>
  );
}
