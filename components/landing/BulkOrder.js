"use client"

import { useState } from "react";
import Link from "next/link";

export default function BulkOrder() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", product: "", quantity: "", message: "" });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const WHATSAPP = "03085518210";
  const EMAIL = "info@cashandcarry.pk";
  const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    const body = `Bulk order request%0AName: ${encodeURIComponent(form.name)}%0ACompany: ${encodeURIComponent(form.company)}%0AEmail: ${encodeURIComponent(form.email)}%0APhone: ${encodeURIComponent(form.phone)}%0AProduct: ${encodeURIComponent(form.product)}%0AQuantity: ${encodeURIComponent(form.quantity)}%0AMessage: ${encodeURIComponent(form.message)}`;
    const wa = `https://wa.me/${WHATSAPP}?text=${body}`;
    window.open(wa, "_blank");
    setSending(false);
    setDone(true);
    setForm({ name: "", company: "", email: "", phone: "", product: "", quantity: "", message: "" });
  };

  return (
    <section className="vm-hero bg-white py-12" id="bulk-order">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <div className="bg-[#fff8f8] border border-[#fde7e7] rounded-2xl p-6 sm:p-10 flex flex-col lg:flex-row items-stretch gap-6">
          <div className="flex-1">
            <h3 className="vm-display text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">Bulk Orders & Wholesale</h3>
            <p className="text-gray-600 mb-4">We welcome bulk purchases for businesses, institutions and large households. Competitive pricing, dedicated account support and fast dispatch.</p>
            <ul className="text-sm text-gray-700 space-y-2 mb-4">
              <li>Dedicated procurement support for large orders</li>
              <li>Special wholesale pricing and credit terms (on approval)</li>
              <li>Nationwide delivery &amp; priority handling</li>
            </ul>
            <div className="flex gap-3">
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="bg-[#25D366] text-white px-4 py-2 rounded-lg font-semibold">Contact via WhatsApp</a>
              <a href={`mailto:${EMAIL}?subject=Bulk%20Order%20Inquiry`} className="bg-[#b60a01] text-white px-4 py-2 rounded-lg font-semibold">Email Us</a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="w-full lg:w-[420px] bg-white rounded-xl p-4 sm:p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-3">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className="border border-gray-200 rounded-lg px-3 py-2 text-sm" />
              <input name="company" value={form.company} onChange={handleChange} placeholder="Company / Business" className="border border-gray-200 rounded-lg px-3 py-2 text-sm" />
              <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" className="border border-gray-200 rounded-lg px-3 py-2 text-sm" />
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="border border-gray-200 rounded-lg px-3 py-2 text-sm" />
              <input name="product" value={form.product} onChange={handleChange} placeholder="Product name / SKU" className="border border-gray-200 rounded-lg px-3 py-2 text-sm" />
              <input name="quantity" value={form.quantity} onChange={handleChange} placeholder="Estimated quantity" className="border border-gray-200 rounded-lg px-3 py-2 text-sm" />
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Additional details (delivery, packing, timeline)" rows={3} className="border border-gray-200 rounded-lg px-3 py-2 text-sm" />
              <button type="submit" disabled={sending} className="bg-[#b60a01] text-white font-semibold px-4 py-2 rounded-lg">{sending ? 'Sending...' : 'Request Bulk Quote'}</button>
              {done && <div className="text-sm text-green-600">Thanks — we'll get back to you shortly.</div>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
