"use client";

import { useState } from "react";
import { buildWhatsAppUrl, customOrderMessage } from "@/lib/whatsapp";
export default function CustomOrderPage() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    occasion: "",
    cakeSize: "",
    flavor: "",
    theme: "",
    date: "",
    budget: "",
    referenceUrl: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppUrl(customOrderMessage(form));
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <div className="text-center">
        <h1 className="section-heading">Custom Order</h1>
        <p className="section-subheading">
          Tell us about your dream cake — we&apos;ll reply on WhatsApp with a quote
        </p>
      </div>

      {submitted ? (
        <div className="mt-10 rounded-2xl bg-pink-soft/50 p-8 text-center">
          <p className="text-chocolate">
            Your request was opened in WhatsApp. If it didn&apos;t open, check your popup blocker.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="btn-secondary mt-4"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-10 space-y-4 rounded-2xl bg-white p-6 shadow-card md:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-chocolate">Your Name *</label>
              <input
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-pink-soft px-4 py-2 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-chocolate">Mobile *</label>
              <input
                name="mobile"
                type="tel"
                required
                placeholder="03001234567"
                value={form.mobile}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-pink-soft px-4 py-2 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-chocolate">Occasion *</label>
            <input
              name="occasion"
              required
              placeholder="Birthday, Wedding, Baby Shower..."
              value={form.occasion}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-pink-soft px-4 py-2 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-chocolate">Cake Size *</label>
              <select
                name="cakeSize"
                required
                value={form.cakeSize}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-pink-soft px-4 py-2 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              >
                <option value="">Select size</option>
                <option value="1 lb">1 lb</option>
                <option value="2 lb">2 lb</option>
                <option value="3 lb">3 lb</option>
                <option value="5 lb+">5 lb+</option>
                <option value="Multi-tier">Multi-tier</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-chocolate">Flavor *</label>
              <input
                name="flavor"
                required
                placeholder="Chocolate, Red Velvet..."
                value={form.flavor}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-pink-soft px-4 py-2 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-chocolate">Theme / Design *</label>
            <textarea
              name="theme"
              required
              rows={2}
              value={form.theme}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-pink-soft px-4 py-2 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-chocolate">Required Date *</label>
              <input
                name="date"
                type="date"
                required
                value={form.date}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-pink-soft px-4 py-2 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-chocolate">Budget (Rs) *</label>
              <input
                name="budget"
                required
                placeholder="e.g. 5000"
                value={form.budget}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-pink-soft px-4 py-2 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-chocolate">Reference Image URL</label>
            <input
              name="referenceUrl"
              type="url"
              placeholder="Link to inspiration photo (optional)"
              value={form.referenceUrl}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-pink-soft px-4 py-2 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-chocolate">Additional Notes</label>
            <textarea
              name="notes"
              rows={3}
              value={form.notes}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-pink-soft px-4 py-2 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>
          <button type="submit" className="btn-whatsapp w-full">
            Send Request via WhatsApp
          </button>
        </form>
      )}
    </div>
  );
}
