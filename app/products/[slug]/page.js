"use client";

import { useState, useEffect } from "react";
import { getProductsBySlug } from "../../../data/categories";

export default function Page({ params }) {
  const [slug, setSlug] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [buyProduct, setBuyProduct] = useState(null);

  const WHATSAPP_NUMBER = "03085518210";
  const EMAIL = "isaamir81@gmail.com";
  const LOCATION = "Islam Plaza, Main Bazar, Chak Beli Khan, Postal Code 47600, Tehsil & District Rawalpindi";
    const MAPS_LINK = "https://maps.google.com/?q=123+Main+Bazaar+Lahore+Pakistan";


  useEffect(() => {
    async function init() {
      const { slug: rawSlug } = await params;
      const s = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug ?? "";
      setSlug(s);
      setProducts(s ? getProductsBySlug(s) : []);
      setMounted(true);
    }
    init();
  }, [params]);

  const companies = ["All", ...Array.from(new Set(products.map((p) => p.company).filter(Boolean)))];

  let filtered = selectedCompany === "All" ? products : products.filter((p) => p.company === selectedCompany);

  if (sortOrder === "az") {
    filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOrder === "za") {
    filtered = [...filtered].sort((a, b) => b.name.localeCompare(a.name));
  }

  const title = slug ? slug.replace(/-/g, " ") : "All Products";

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#b60a01] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Playfair+Display:wght@700;800&display=swap');
        .vm-font { font-family: 'Poppins', sans-serif; }
        .vm-display { font-family: 'Playfair Display', serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes popupIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .fade-up { animation: fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) both; }
        .fade-in { animation: fadeIn 0.4s ease both; }
        .card-in { animation: cardIn 0.45s cubic-bezier(0.22,1,0.36,1) both; }
        .vm-card { transition: transform 0.22s cubic-bezier(0.22,1,0.36,1), box-shadow 0.22s ease, border-color 0.18s ease; border: 2px solid transparent; }
        .vm-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(182,10,1,0.1); border-color: #b60a01; }
        .vm-card:active { border-color: #b60a01; }
        .vm-company-btn { transition: all 0.18s cubic-bezier(0.22,1,0.36,1); }
        .vm-overlay { animation: fadeIn 0.2s ease both; }
        .vm-sidebar { transition: transform 0.3s cubic-bezier(0.22,1,0.36,1); }
        .vm-popup { animation: popupIn 0.3s cubic-bezier(0.22,1,0.36,1) both; }
        .vm-sort-btn { transition: all 0.18s ease; }
        .vm-sort-btn.active { background: #b60a01; color: #fff; }
        .vm-sort-btn:not(.active) { background: #fff; color: #374151; border: 1.5px solid #e5e7eb; }
        .vm-sort-btn:not(.active):hover { border-color: #b60a01; color: #b60a01; }
      `}</style>

      <div className="vm-font min-h-screen bg-[#fafafa]">

        <div className="bg-white border-b border-gray-100 sticky top-0 z-30 shadow-sm">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-4 flex items-center justify-between gap-4">
            <div className="fade-up">
              <p className="text-[11px] uppercase tracking-[2px] text-[#b60a01] font-bold mb-0.5">ValueMax Cash & Carry</p>
              <h1 className="vm-display text-xl sm:text-2xl font-extrabold text-gray-900 capitalize leading-tight">{title}</h1>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[12px] text-gray-400 font-medium hidden sm:block">
                {filtered.length} product{filtered.length !== 1 ? "s" : ""}
                {selectedCompany !== "All" && <span className="text-[#b60a01] font-semibold"> · {selectedCompany}</span>}
              </span>
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden flex items-center gap-2 bg-[#b60a01] text-white text-xs font-semibold px-4 py-2.5 rounded-xl"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="16" y2="12"/><line x1="3" y1="18" x2="11" y2="18"/></svg>
                Filter
              </button>
            </div>
          </div>
        </div>

        {sidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="vm-overlay absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
            <div className="vm-sidebar absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl flex flex-col">
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <span className="font-bold text-gray-900 text-sm">Filter & Sort</span>
                <button onClick={() => setSidebarOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <p className="text-[11px] uppercase tracking-[2px] text-[#b60a01] font-bold mb-2 px-1">Sort</p>
                <div className="space-y-1.5 mb-5">
                  {[["default","Default"],["az","A → Z"],["za","Z → A"]].map(([val,label]) => (
                    <button
                      key={val}
                      onClick={() => setSortOrder(val)}
                      className={`vm-company-btn w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium ${sortOrder === val ? "bg-[#b60a01] text-white shadow-sm" : "text-gray-600 hover:bg-red-50 hover:text-[#b60a01]"}`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] uppercase tracking-[2px] text-[#b60a01] font-bold mb-2 px-1">Brand</p>
                <div className="space-y-1.5">
                  {companies.map((c) => (
                    <button
                      key={c}
                      onClick={() => { setSelectedCompany(c); setSidebarOpen(false); }}
                      className={`vm-company-btn w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium ${selectedCompany === c ? "bg-[#b60a01] text-white shadow-sm" : "text-gray-600 hover:bg-red-50 hover:text-[#b60a01]"}`}
                    >
                      {c}
                      <span className={`ml-2 text-[11px] font-semibold ${selectedCompany === c ? "text-red-200" : "text-gray-400"}`}>
                        {c === "All" ? products.length : products.filter((p) => p.company === c).length}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-8 flex gap-8">

          <aside className="hidden lg:flex flex-col w-56 shrink-0">
            <div className="sticky top-24 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-4 py-3.5 border-b border-gray-100 bg-[#fff8f8]">
                <p className="text-[11px] uppercase tracking-[2px] text-[#b60a01] font-bold">Sort</p>
              </div>
              <div className="p-3 space-y-1 border-b border-gray-100">
                {[["default","Default"],["az","A → Z"],["za","Z → A"]].map(([val,label]) => (
                  <button
                    key={val}
                    onClick={() => setSortOrder(val)}
                    className={`vm-company-btn w-full text-left px-3.5 py-2.5 rounded-xl text-[13px] font-medium ${sortOrder === val ? "bg-[#b60a01] text-white" : "text-gray-600 hover:bg-red-50 hover:text-[#b60a01]"}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="px-4 py-3.5 border-b border-gray-100 bg-[#fff8f8]">
                <p className="text-[11px] uppercase tracking-[2px] text-[#b60a01] font-bold">Filter by Brand</p>
              </div>
              <div className="p-3 space-y-1">
                {companies.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedCompany(c)}
                    className={`vm-company-btn w-full text-left px-3.5 py-2.5 rounded-xl text-[13px] font-medium flex items-center justify-between ${selectedCompany === c ? "bg-[#b60a01] text-white" : "text-gray-600 hover:bg-red-50 hover:text-[#b60a01]"}`}
                  >
                    <span className="truncate">{c}</span>
                    <span className={`text-[11px] font-bold ml-2 shrink-0 ${selectedCompany === c ? "text-red-200" : "text-gray-300"}`}>
                      {c === "All" ? products.length : products.filter((p) => p.company === c).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <main className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="fade-in flex flex-col items-center justify-center py-24 text-center">
                <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b60a01" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <p className="text-gray-800 font-semibold text-base mb-1">No products found</p>
                <p className="text-gray-400 text-sm">Try a different brand or check back later.</p>
                <button onClick={() => setSelectedCompany("All")} className="mt-4 text-[#b60a01] text-sm font-semibold hover:underline">Clear filter</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((p, i) => (
                  <div
                    key={p.id}
                    className="vm-card card-in bg-white rounded-2xl overflow-hidden shadow-sm cursor-pointer"
                    style={{ animationDelay: `${i * 0.04}s` }}
                  >
                    <div className="relative w-full h-44 bg-gray-50 overflow-hidden">
                      {p.img ? (
                        <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                        </div>
                      )}
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 backdrop-blur-sm text-[#b60a01] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide shadow-sm">
                          {p.company}
                        </span>
                      </div>
                    </div>
                    <div className="px-4 py-4">
                      <p className="font-semibold text-gray-900 text-[14px] leading-snug mb-3 line-clamp-2">{p.name}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-[#b60a01] font-extrabold text-base">Rs. {p.price?.toLocaleString()}</span>
                        <button
                          onClick={() => setBuyProduct(p)}
                          className="bg-[#b60a01] hover:bg-[#9a0800] text-white text-[11px] font-bold px-3.5 py-1.5 rounded-lg transition-colors duration-150"
                        >
                          Buy
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {buyProduct && (
        <div className="fixed inset-0 z-50 pt-20 mt-15 flex items-center justify-center px-4">
          <div className="vm-overlay absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setBuyProduct(null)} />
          <div className="vm-popup relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="bg-[#b60a01] px-6 py-4 flex items-start justify-between gap-3">
              <div>
                <p className="text-red-200 text-[11px] uppercase tracking-[2px] font-bold mb-0.5">Purchase Inquiry</p>
                <h2 className="text-white font-extrabold text-base leading-snug line-clamp-2" style={{fontFamily:"'Playfair Display',serif"}}>{buyProduct.name}</h2>
              </div>
              <button
                onClick={() => setBuyProduct(null)}
                className="shrink-0 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors mt-0.5"
                aria-label="Close"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>

            <div className="px-6 py-5">
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-gray-100">
                <span className="text-gray-500 text-sm font-medium">Price</span>
                <span className="text-[#b60a01] font-extrabold text-xl">Rs. {buyProduct.price?.toLocaleString()}</span>
              </div>

              <p className="text-[12px] uppercase tracking-[2px] text-gray-400 font-bold mb-3">Contact Us To Order</p>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi! I want to buy: ${buyProduct.name} (Rs. ${buyProduct.price?.toLocaleString()})`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm px-4 py-3 rounded-xl transition-colors duration-150"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.05 2C6.495 2 2 6.495 2 12.05c0 1.978.548 3.868 1.544 5.5L2 22l4.573-1.526A10.02 10.02 0 0 0 12.05 22C17.605 22 22 17.505 22 11.95 22 6.495 17.605 2 12.05 2zm0 18.15a8.121 8.121 0 0 1-4.149-1.137l-.297-.177-3.08 1.027 1.04-3.002-.196-.308A8.149 8.149 0 0 1 3.9 11.95c0-4.493 3.658-8.15 8.15-8.15 4.493 0 8.15 3.657 8.15 8.15 0 4.492-3.657 8.15-8.15 8.15z"/></svg>
                  Call on WhatsApp
                </a>

                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent(`Buy: ${buyProduct.name}`)}&body=${encodeURIComponent(`Hi,\n\nI'd like to purchase: ${buyProduct.name}\nPrice: Rs. ${buyProduct.price?.toLocaleString()}\n\nPlease confirm availability.`)}`}
                  className="flex items-center gap-3 w-full bg-[#fff8f8] hover:bg-red-50 text-[#b60a01] border border-[#f5c6c6] font-bold text-sm px-4 py-3 rounded-xl transition-colors duration-150"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  {EMAIL}
                </a>

                  <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 font-medium text-sm px-4 py-3 rounded-xl transition-colors duration-150"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b60a01" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  {LOCATION}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}