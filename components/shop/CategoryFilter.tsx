"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { categoryLabels, type ProductCategory } from "@/lib/products";
import { cn } from "@/lib/utils";

const categories: (ProductCategory | "all")[] = [
  "all",
  "custom-cakes",
  "cupcakes",
  "brownies",
  "cookies",
];

export function CategoryFilter() {
  const searchParams = useSearchParams();
  const active = searchParams.get("category") || "all";

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => {
        const href = cat === "all" ? "/shop" : `/shop?category=${cat}`;
        const label = cat === "all" ? "All" : categoryLabels[cat];
        const isActive = active === cat;

        return (
          <Link
            key={cat}
            href={href}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition",
              isActive
                ? "bg-chocolate text-cream"
                : "bg-pink-soft text-chocolate hover:bg-pink"
            )}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
