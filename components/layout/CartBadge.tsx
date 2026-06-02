"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/lib/cart-store";

export function CartBadge() {
  const getItemCount = useCartStore((s) => s.getItemCount);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(getItemCount());
    const unsub = useCartStore.subscribe(() => {
      setCount(useCartStore.getState().getItemCount());
    });
    return unsub;
  }, [getItemCount]);

  if (count === 0) return null;

  return (
    <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-xs font-bold text-chocolate">
      {count > 9 ? "9+" : count}
    </span>
  );
}
