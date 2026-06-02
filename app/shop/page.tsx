import { Suspense } from "react";
import { products, categoryLabels, type ProductCategory } from "@/lib/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { CategoryFilter } from "@/components/shop/CategoryFilter";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Shop",
  description: "Browse custom cakes, cupcakes, brownies and cookies. Prices in Pakistani Rupees.",
  path: "/shop",
});

function ShopContent({ category }: { category?: string }) {
  const filtered =
    category && category !== "all" && category in categoryLabels
      ? products.filter((p) => p.category === (category as ProductCategory))
      : products;

  return (
    <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
      {filtered.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {filtered.length === 0 && (
        <p className="col-span-full text-center text-chocolate-light">No products in this category.</p>
      )}
    </div>
  );
}

export default function ShopPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const category = searchParams.category;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <div className="text-center">
        <h1 className="section-heading">Shop Our Bakery</h1>
        <p className="section-subheading">
          Premium cakes and sweet treats — all prices in Pakistani Rupees (Rs)
        </p>
      </div>
      <div className="mt-10">
        <Suspense fallback={<div className="h-10 animate-pulse rounded-full bg-pink-soft" />}>
          <CategoryFilter />
        </Suspense>
        <ShopContent category={category} />
      </div>
    </div>
  );
}
