import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Terms & Conditions",
  description: "Terms and conditions for ordering from RahiQBakes.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <h1 className="section-heading">Terms & Conditions</h1>
      <p className="mt-4 text-chocolate-light text-sm">Last updated: June 2026</p>

      <div className="mt-8 space-y-6 text-chocolate-light leading-relaxed">
        <section>
          <h2 className="font-display text-xl font-semibold text-chocolate">Orders</h2>
          <p className="mt-2">
            By placing an order with {siteConfig.name}, you agree to provide accurate contact and
            delivery information. Orders are confirmed once we acknowledge them on WhatsApp.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-chocolate">Pricing & Payment</h2>
          <p className="mt-2">
            All prices are listed in Pakistani Rupees (Rs). We accept Cash on Delivery and bank
            transfer. For bank transfers, please send proof of payment via WhatsApp before your
            scheduled delivery where required.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-chocolate">Cancellations & Changes</h2>
          <p className="mt-2">
            Cancellations or changes must be requested as early as possible. Custom orders may not be
            cancellable within 48 hours of the required date. We will do our best to accommodate changes
            based on preparation status.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-chocolate">Delivery</h2>
          <p className="mt-2">
            Delivery times are estimates. We are not liable for delays caused by factors outside our
            control. Please ensure someone is available to receive COD orders.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-chocolate">Product Quality</h2>
          <p className="mt-2">
            We stand behind the quality of our baked goods. If there is an issue with your order,
            contact us within 24 hours of delivery with photos and your order ID.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-chocolate">Contact</h2>
          <p className="mt-2">
            For questions about these terms, contact{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-gold hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
