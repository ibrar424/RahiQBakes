import Link from "next/link";
import Image from "next/image";
import { buildWhatsAppUrl, generalOrderMessage } from "@/lib/whatsapp";

export function Hero() {
  const whatsappHref = buildWhatsAppUrl(generalOrderMessage());

  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-main.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-chocolate/85 via-chocolate/55 to-chocolate/20" />
      </div>

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-4 py-20 md:px-6">
        <p className="mb-4 inline-block w-fit rounded-full bg-gold/90 px-4 py-1 text-sm font-semibold text-chocolate">
          Premium Home Bakery · Pakistan
        </p>
        <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-cream md:text-5xl lg:text-6xl">
          Freshly Baked Happiness for Every Celebration
        </h1>
        <p className="mt-4 max-w-xl text-lg text-cream/90 md:text-xl">
          Custom Cakes, Cupcakes & Sweet Treats Delivered to Your Doorstep
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/shop" className="btn-primary">
            Order Now
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            WhatsApp Order
          </a>
        </div>
      </div>
    </section>
  );
}
