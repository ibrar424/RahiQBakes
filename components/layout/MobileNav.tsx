"use client";

import Link from "next/link";
import { navLinks } from "@/lib/site";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-chocolate/40" onClick={onClose} aria-hidden />
      <nav className="absolute right-0 top-0 flex h-full w-72 flex-col bg-cream p-6 shadow-elevated">
        <div className="mb-8 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-chocolate"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" width={24} height={24} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="block text-lg font-medium text-chocolate hover:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <Link href="/shop" onClick={onClose} className="btn-primary w-full">
              Order Now
            </Link>
          </li>
          <li>
            <Link href="/track-order" onClick={onClose} className="btn-secondary w-full">
              Track Order
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
