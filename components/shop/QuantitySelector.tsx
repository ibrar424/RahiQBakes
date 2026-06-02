"use client";

interface QuantitySelectorProps {
  quantity: number;
  onChange: (qty: number) => void;
  min?: number;
  max?: number;
}

export function QuantitySelector({
  quantity,
  onChange,
  min = 1,
  max = 99,
}: QuantitySelectorProps) {
  return (
    <div className="inline-flex items-center rounded-full border border-pink-soft bg-white">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, quantity - 1))}
        className="flex h-10 w-10 items-center justify-center rounded-l-full text-chocolate transition hover:bg-pink-soft"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="min-w-[2.5rem] text-center font-semibold text-chocolate">
        {quantity}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, quantity + 1))}
        className="flex h-10 w-10 items-center justify-center rounded-r-full text-chocolate transition hover:bg-pink-soft"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
