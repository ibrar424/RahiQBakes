import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "RahiQBakes privacy policy for customer data and orders.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 prose prose-chocolate">
      <h1 className="section-heading">Privacy Policy</h1>
      <p className="mt-4 text-chocolate-light text-sm">Last updated: June 2026</p>

      <div className="mt-8 space-y-6 text-chocolate-light leading-relaxed">
        <section>
          <h2 className="font-display text-xl font-semibold text-chocolate">Introduction</h2>
          <p className="mt-2">
            {siteConfig.name} (&quot;we&quot;, &quot;our&quot;) respects your privacy. This policy
            explains how we collect and use information when you visit our website or place an order.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-chocolate">Information We Collect</h2>
          <p className="mt-2">
            When you place an order, we collect your name, mobile number, delivery address, and order
            details. Contact form submissions may include your name, email, and message. Order data may
            be stored locally in your browser and shared with us via WhatsApp when you confirm your order.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-chocolate">How We Use Information</h2>
          <p className="mt-2">
            We use your information to process orders, communicate about your order, improve our
            services, and respond to inquiries. We do not sell your personal data to third parties.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-chocolate">Data Security</h2>
          <p className="mt-2">
            We take reasonable steps to protect your information. Payment for COD orders is collected
            on delivery. Bank transfer details are provided only for your convenience at checkout.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-chocolate">Contact</h2>
          <p className="mt-2">
            Questions about this policy? Email us at{" "}
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
