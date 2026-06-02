import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "FAQ",
  description: "Frequently asked questions about ordering, delivery, and custom cakes.",
  path: "/faq",
});

const faqs = [
  {
    q: "How do I place an order?",
    a: "Browse our shop, add items to your cart, and complete checkout. Confirm your order on WhatsApp so we can start preparing it. You can also order directly via WhatsApp or our Custom Order form.",
  },
  {
    q: "What areas do you deliver to?",
    a: "We deliver within our local service area in Pakistan. Message us on WhatsApp with your address to confirm availability and delivery charges.",
  },
  {
    q: "How much advance notice do you need?",
    a: "Standard items: 24–48 hours. Custom cakes and wedding cakes: please book 5–14 days in advance depending on complexity.",
  },
  {
    q: "Do you offer Cash on Delivery?",
    a: "Yes! Cash on Delivery (COD) is available. We also accept bank transfer — details are shown at checkout.",
  },
  {
    q: "Can I customize my cake?",
    a: "Absolutely. Use our Custom Order page or WhatsApp us with your theme, flavors, size, and reference images for a personalized quote.",
  },
  {
    q: "Do you accommodate allergies?",
    a: "We bake in a home kitchen that may handle nuts, gluten, and dairy. Please mention any allergies in your order notes and we will discuss options with you.",
  },
  {
    q: "How do I track my order?",
    a: "Use the Track Order page with your order ID. Live status updates are shared via WhatsApp as your order moves from confirmed to delivered.",
  },
  {
    q: "What coupon codes are available?",
    a: "Try WELCOME10 (10% off first order over Rs 1,000), SWEET500 (Rs 500 off over Rs 3,000), or CELEBRATE15 (15% off over Rs 5,000).",
  },
];

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <div className="text-center">
        <h1 className="section-heading">Frequently Asked Questions</h1>
        <p className="section-subheading">Everything you need to know about ordering from RahiQBakes</p>
      </div>

      <div className="mt-10 space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.q}
            className="group rounded-2xl bg-white shadow-card open:shadow-elevated"
          >
            <summary className="cursor-pointer list-none px-6 py-4 font-semibold text-chocolate marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-4">
                {faq.q}
                <span className="text-gold transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="border-t border-pink-soft px-6 pb-4 pt-2 text-chocolate-light leading-relaxed">
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
