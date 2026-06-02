import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { buildWhatsAppUrl, generalOrderMessage } from "@/lib/whatsapp";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Us",
  description: "Get in touch with RahiQBakes via WhatsApp, email, or social media.",
  path: "/contact",
});

export default function ContactPage() {
  const whatsappHref = buildWhatsAppUrl(generalOrderMessage());

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <div className="text-center">
        <h1 className="section-heading">Contact Us</h1>
        <p className="section-subheading">We&apos;d love to hear from you</p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full sm:w-auto">
            Chat on WhatsApp
          </a>

          <div className="rounded-2xl bg-white p-6 shadow-card space-y-4">
            <p>
              <span className="font-semibold text-chocolate">Email: </span>
              <a href={`mailto:${siteConfig.email}`} className="text-gold hover:underline">
                {siteConfig.email}
              </a>
            </p>
            {siteConfig.facebook && (
              <p>
                <span className="font-semibold text-chocolate">Facebook: </span>
                <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                  Follow us
                </a>
              </p>
            )}
            {siteConfig.instagram && (
              <p>
                <span className="font-semibold text-chocolate">Instagram: </span>
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                  Follow us
                </a>
              </p>
            )}
            {!siteConfig.facebook && !siteConfig.instagram && (
              <p className="text-sm text-chocolate-light">
                Add your Facebook and Instagram URLs in <code>.env.local</code>
              </p>
            )}
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-card">
            <h2 className="font-display text-lg font-semibold text-chocolate">Send a Message</h2>
            <p className="mt-2 text-sm text-chocolate-light">
              Email us directly or configure Web3Forms in .env.local for an on-site form.
            </p>
            <a
              href={`mailto:${siteConfig.email}?subject=RahiQBakes%20Inquiry`}
              className="btn-primary mt-4 inline-flex"
            >
              Email {siteConfig.email}
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-chocolate">Our Location</h2>
          {siteConfig.mapEmbed ? (
            <div className="mt-4 aspect-video overflow-hidden rounded-2xl shadow-card">
              <iframe
                src={siteConfig.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RahiQBakes location"
              />
            </div>
          ) : (
            <div className="mt-4 rounded-2xl bg-pink-soft/50 p-8 text-center text-chocolate-light">
              <p>Add your Google Maps embed URL to</p>
              <code className="text-sm">NEXT_PUBLIC_MAP_EMBED_URL</code>
              <p className="mt-4">
                <Link href={whatsappHref} className="text-gold underline">
                  Ask for directions on WhatsApp
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
