"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

export function ProductImage({
  src,
  alt,
  className,
  fill,
  width,
  height,
  priority,
  sizes = "(max-width: 768px) 100vw, 33vw",
}: ProductImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={cn(
          "bg-gradient-to-br from-pink-soft to-cream",
          fill && "absolute inset-0",
          className
        )}
        role="img"
        aria-label={alt}
      />
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={cn("object-cover", className)}
        sizes={sizes}
        priority={priority}
        onError={() => setError(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 400}
      height={height ?? 400}
      className={cn("object-cover", className)}
      sizes={sizes}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}
