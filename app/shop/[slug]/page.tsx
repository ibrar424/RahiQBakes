import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, products } from "@/lib/products";
import { ProductDetail } from "@/components/shop/ProductDetail";
import { createMetadata, productJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return createMetadata({
    title: product.name,
    description: product.description,
    path: `/shop/${product.slug}`,
  });
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const jsonLd = productJsonLd(product);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="mb-8 text-sm text-chocolate-light">
        <Link href="/shop" className="hover:text-gold">
          Shop
        </Link>
        <span className="mx-2">/</span>
        <span className="text-chocolate">{product.name}</span>
      </nav>
      <ProductDetail product={product} />
    </div>
  );
}
