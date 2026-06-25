"use client";

import React, { useEffect } from "react";

const sections = [
  {
    icon: "↩️",
    title: "7-Day Return Policy",
    content: [
      "We offer a 7-day hassle-free return window from the date of purchase or delivery for eligible products.",
      "Items must be unused, unopened, and in their original packaging to qualify for a return or exchange.",
      "Perishable goods including fresh produce, dairy, bread, and frozen items are not eligible for return once delivered.",
      "To initiate a return, contact us within 7 days at +03085518210 or visit our store in Rawalpindi with your receipt.",
      "Refunds are processed within 3–5 business days via the original payment method or as store credit.",
      "Damaged or defective items received at delivery must be reported within 24 hours with photo evidence for a full replacement.",
    ],
  },
  {
    icon: "🚚",
    title: "Free Delivery Policy",
    content: [
      "ValueMax offers free home delivery on all orders above Rs. 5,000 within a 15 km radius of our Rawalpindi store.",
      "Orders below Rs. 5,000 are subject to a standard delivery fee calculated based on distance and order weight.",
      "Delivery is available 6 days a week, Sunday through Friday, between 10:00 AM and 7:00 PM.",
      "Same-day delivery is available for orders placed before 1:00 PM, subject to rider availability.",
      "Delivery timelines may vary during peak hours, public holidays, or extreme weather conditions.",
      "For locations beyond 15 km, please contact us directly at +03085518210 to discuss delivery arrangements and applicable charges.",
    ],
  },
  {
    icon: "📦",
    title: "Bulk Order Policy",
    content: [
      "ValueMax warmly welcomes bulk and wholesale orders from retailers, restaurants, institutions, and businesses of all sizes.",
      "Bulk orders of Rs. 20,000 or more qualify for exclusive wholesale pricing — contact our team for a custom quote.",
      "Advance notice of 24–48 hours is required for large bulk orders to ensure product availability and proper packing.",
      "Dedicated account managers are available for registered business clients to streamline repeat ordering.",
      "Flexible payment terms including partial advance and on-delivery payment are available for verified bulk buyers.",
      "For bulk order inquiries, call +03085518210 or email isaamir81@gmail.com with your product list and quantities.",
    ],
  },
  {
    icon: "⭐",
    title: "Product Quality Guarantee",
    content: [
      "Every product available at ValueMax is sourced directly from verified, trusted suppliers and authorized distributors.",
      "We perform regular quality checks on all incoming stock to ensure freshness, hygiene, and compliance with food safety standards.",
      "All products carry valid manufacturing and expiry dates — we strictly remove short-dated or expired items from our shelves.",
      "Our storage facilities maintain appropriate temperature and hygiene conditions to preserve product integrity.",
      "If you receive a product that does not meet quality expectations, we will replace or refund it — no questions asked.",
      "ValueMax is committed to delivering 100% genuine products. We do not stock counterfeit or substandard goods.",
    ],
  },
  {
    icon: "🔒",
    title: "Privacy & Data Policy",
    content: [
      "We collect only the information you voluntarily provide — name, phone number, address, and order details — solely to process and deliver your orders.",
      "Your personal data is never sold, rented, or shared with third parties beyond trusted delivery partners required to complete your order.",
      "All customer data is stored securely using industry-standard practices and protected against unauthorized access.",
      "Our website may use cookies and anonymous analytics tools to improve browsing performance and user experience.",
      "You may request deletion or correction of your personal data at any time by contacting us directly.",
      "For any privacy concerns, reach us at isaamir81@gmail.com or call +03085518210.",
    ],
  },
];

export default function PolicyPage() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;800&display=swap');
      .policy-root { font-family: 'Poppins', sans-serif; }
      .policy-display { font-family: 'Playfair Display', serif; }
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(28px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes shimmer {
        0% { background-position: -200% center; }
        100% { background-position: 200% center; }
      }
      @keyframes tickerScroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .policy-fade-1 { animation: fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.05s both; }
      .policy-fade-2 { animation: fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.18s both; }
      .policy-fade-3 { animation: fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.31s both; }
      .policy-shimmer {
        background: linear-gradient(90deg, #E8001C 0%, #FFD100 40%, #E8001C 60%, #FFD100 100%);
        background-size: 200% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: shimmer 3s linear infinite;
      }
      .policy-section-card {
        animation: fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both;
      }
      .policy-section-card:nth-child(1) { animation-delay: 0.15s; }
      .policy-section-card:nth-child(2) { animation-delay: 0.27s; }
      .policy-section-card:nth-child(3) { animation-delay: 0.39s; }
      .policy-section-card:nth-child(4) { animation-delay: 0.51s; }
      .policy-section-card:nth-child(5) { animation-delay: 0.63s; }
      .policy-ticker-track {
        display: flex;
        width: max-content;
        animation: tickerScroll 22s linear infinite;
      }
      .policy-ticker-track:hover { animation-play-state: paused; }
      .policy-dot::before {
        content: '';
        display: inline-block;
        width: 6px;
        height: 6px;
        background: #b60a01;
        border-radius: 50%;
        margin-right: 10px;
        flex-shrink: 0;
        margin-top: 7px;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="policy-root bg-white min-h-screen overflow-hidden">

      <div className="relative bg-white overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[45%] h-full bg-[#b60a01] hidden lg:block"
          style={{ clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 py-16 sm:py-24 lg:py-32 flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:items-center">
          <div className="relative z-10">
            <div className="policy-fade-1 inline-flex items-center gap-2 bg-red-50 border border-red-100 text-[#E8001C] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b60a01] animate-pulse inline-block" />
              Store Policies — ValueMax
            </div>

            <h1 className="policy-display text-[2.2rem] sm:text-[3.4rem] lg:text-[4rem] leading-[1.07] font-extrabold text-gray-900 mb-3 policy-fade-2">
              Our <span className="text-[#E8001C]">Commitment</span>
            </h1>
            <h1 className="policy-display text-[2.2rem] sm:text-[3.4rem] lg:text-[4rem] leading-[1.07] font-extrabold text-gray-900 mb-5 policy-fade-2">
              To You
            </h1>

            <p className="text-gray-500 text-sm sm:text-lg leading-relaxed max-w-[480px] mb-3 policy-fade-3">
              Transparent policies, fair prices, and genuine care — everything you need to shop with complete confidence at ValueMax.
            </p>

            <p className="text-[13px] text-gray-400 font-medium tracking-wide policy-fade-3">
              A project of{" "}
              <span className="text-gray-700 font-semibold">Ashraf &amp; Sons Traders</span>
              &nbsp;· Cash &amp; Carry, Rawalpindi
            </p>
          </div>

          <div className="relative z-10 hidden lg:flex flex-col items-end gap-4">
            <div className="grid grid-cols-2 gap-4 w-full max-w-[400px]">
              {[
                { value: "7 Days", label: "Easy Returns" },
                { value: "15 km", label: "Free Delivery Radius" },
                { value: "Rs. 5K", label: "Free Delivery Above" },
                { value: "100%", label: "Genuine Products" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  style={{ animation: `fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) ${0.3 + i * 0.12}s both` }}
                >
                  <div className="text-[#E8001C] text-2xl font-extrabold leading-tight">{s.value}</div>
                  <div className="text-gray-400 text-[11px] font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-full px-4 py-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[12px] text-gray-500 font-medium">Store Open — Visit Us in Rawalpindi</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#b60a01] py-3.5 overflow-hidden">
        <div className="flex overflow-hidden">
          <div className="policy-ticker-track">
            {[...Array(2)].map((_, r) => (
              <div key={r} className="flex items-center">
                {[
                  "↩️ 7-Day Returns",
                  "🚚 Free Delivery above Rs. 5,000",
                  "📍 Within 15 km of Rawalpindi",
                  "📦 Bulk Orders Welcome",
                  "⭐ 100% Genuine Products",
                  "💛 Ashraf & Sons Traders",
                  "🔒 Your Data is Safe",
                  "🤝 Trusted Since Day One",
                ].map((item, i) => (
                  <span key={i} className="text-white text-[13px] font-semibold whitespace-nowrap px-8 flex items-center gap-2">
                    {item}
                    <span className="text-[#FFD100] font-black mx-2">·</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#fffbea] border-y border-amber-100">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: "↩️", title: "7-Day Returns", desc: "Changed your mind? Return any eligible product within 7 days — no fuss, no stress." },
            { icon: "🚚", title: "Free Delivery", desc: "Orders above Rs. 5,000 delivered free within a 15 km radius of our Rawalpindi store." },
            { icon: "📦", title: "Bulk Welcome", desc: "From retailers to restaurants — wholesale pricing available for all verified bulk buyers." },
          ].map((f, i) => (
            <div
              key={i}
              className="flex gap-4 items-start p-5 bg-white rounded-2xl border border-amber-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              style={{ animation: `fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.15}s both` }}
            >
              <div className="text-3xl shrink-0 mt-0.5">{f.icon}</div>
              <div>
                <div className="text-[15px] font-bold text-gray-900 mb-1">{f.title}</div>
                <div className="text-[13px] text-gray-500 leading-relaxed">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <div className="text-[11px] uppercase tracking-[3px] text-[#E8001C] font-bold mb-2">Full Policy Details</div>
          <h2 className="policy-display text-3xl sm:text-4xl font-extrabold text-gray-900">Everything You Need to Know</h2>
          <p className="text-gray-400 text-sm mt-2 max-w-md mx-auto">Clear, honest, and straightforward — because you deserve to know exactly how we operate.</p>
        </div>

        <div className="space-y-6">
          {sections.map((sec, i) => (
            <div
              key={i}
              className="policy-section-card border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="bg-gradient-to-r from-[#b60a01] to-[#e8001c] px-6 sm:px-8 py-5 flex items-center gap-4">
                <span className="text-2xl">{sec.icon}</span>
                <h3 className="policy-display text-xl sm:text-2xl font-extrabold text-white">{sec.title}</h3>
              </div>

              <div className="bg-white px-6 sm:px-8 py-6">
                <ul className="space-y-3">
                  {sec.content.map((line, j) => (
                    <li key={j} className="policy-dot flex text-[13.5px] sm:text-sm text-gray-600 leading-relaxed">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-[#b60a01] rounded-2xl overflow-hidden relative">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative z-10 px-6 sm:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-[11px] uppercase tracking-[3px] text-[#FFD100] font-bold mb-2">Still Have Questions?</div>
              <h3 className="policy-display text-2xl sm:text-3xl font-extrabold text-white mb-1">We&apos;re Here to Help</h3>
              <p className="text-white/70 text-sm max-w-sm">Our team is available 6 days a week to answer any questions about orders, returns, or delivery.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="tel:+03085518210"
                className="inline-flex items-center justify-center gap-2 bg-[#FFD100] text-[#7a5800] font-bold text-sm px-6 py-3 rounded-xl hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 no-underline whitespace-nowrap"
              >
                ☎️ Call Us Now
              </a>
              <a
                href="mailto:valuemaxcc@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-200 no-underline whitespace-nowrap"
              >
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-[12px] text-gray-400 mt-8 font-medium">
          A project of{" "}
          <span className="text-gray-600 font-semibold">ASHRAF &amp; SONS TRADERS</span>
          {" "}&middot; (SMC-PVT) LTD.
        </p>
      </div>
    </div>
  );
}