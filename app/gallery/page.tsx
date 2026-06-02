"use client";

import { useState } from "react";
import {
  galleryImages,
  galleryCategoryLabels,
  type GalleryCategory,
} from "@/lib/gallery";
import { ProductImage } from "@/components/ui/ProductImage";
import { cn } from "@/lib/utils";
const categories: (GalleryCategory | "all")[] = [
  "all",
  "birthday",
  "drip",
  "wedding",
  "cupcakes",
  "brownies",
  "cookies",
  "decorating",
  "delivery",
];

export default function GalleryPage() {
  const [active, setActive] = useState<GalleryCategory | "all">("all");

  const filtered =
    active === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === active);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <div className="text-center">
        <h1 className="section-heading">Gallery</h1>
        <p className="section-subheading">
          Our creations — cakes, cupcakes, brownies, cookies & happy deliveries
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition",
              active === cat
                ? "bg-chocolate text-cream"
                : "bg-pink-soft text-chocolate hover:bg-pink"
            )}
          >
            {cat === "all" ? "All" : galleryCategoryLabels[cat]}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-2 gap-4 md:columns-3 lg:columns-4">
        {filtered.map((img) => (
          <div
            key={img.id}
            className="mb-4 break-inside-avoid overflow-hidden rounded-xl"
          >
            <div className="relative aspect-[4/5]">
              <ProductImage src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
            <p className="mt-2 px-1 text-xs text-chocolate-light">{img.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
