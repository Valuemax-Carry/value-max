"use client";

import React from "react";

export default function BuyModal({ buyProduct, onClose, WHATSAPP_NUMBER, EMAIL, LOCATION, MAPS_LINK }) {
  if (!buyProduct) return null;

  return (
    <div className="fixed inset-0 z-50 pt-20 mt-15 flex items-center justify-center px-4">
      <div className="vm-overlay absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="vm-popup relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        <div className="bg-[#b60a01] px-6 py-4 flex items-start justify-between gap-3">
          <div>
            <p className="text-red-200 text-[11px] uppercase tracking-[2px] font-bold mb-0.5">Purchase Inquiry</p>
            <h2 className="text-white font-extrabold text-base leading-snug line-clamp-2" style={{ fontFamily: "'Playfair Display',serif" }}>{buyProduct.name}</h2>
          </div>
          <button onClick={onClose} className="shrink-0 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors mt-0.5" aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div className="px-6 py-5">

          <p className="text-[12px] uppercase tracking-[2px] text-gray-400 font-bold mb-3">Contact Us To Order</p>

          <div className="space-y-3">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi! I want to buy: ${buyProduct.name}`)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm px-4 py-3 rounded-xl transition-colors duration-150">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.05 2C6.495 2 2 6.495 2 12.05c0 1.978.548 3.868 1.544 5.5L2 22l4.573-1.526A10.02 10.02 0 0 0 12.05 22C17.605 22 22 17.505 22 11.95 22 6.495 17.605 2 12.05 2zm0 18.15a8.121 8.121 0 0 1-4.149-1.137l-.297-.177-3.08 1.027 1.04-3.002-.196-.308A8.149 8.149 0 0 1 3.9 11.95c0-4.493 3.658-8.15 8.15-8.15 4.493 0 8.15 3.657 8.15 8.15 0 4.492-3.657 8.15-8.15 8.15z"/></svg>
              Call on WhatsApp
            </a>

            <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(`Buy: ${buyProduct.name}`)}&body=${encodeURIComponent(`Hi,\n\nI'd like to purchase: ${buyProduct.name}\nPrice: Rs. ${buyProduct.price?.toLocaleString()}\n\nPlease confirm availability.`)}`} className="flex items-center gap-3 w-full bg-[#fff8f8] hover:bg-red-50 text-[#b60a01] border border-[#f5c6c6] font-bold text-sm px-4 py-3 rounded-xl transition-colors duration-150">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              {EMAIL}
            </a>

            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 w-full bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 font-medium text-sm px-4 py-3 rounded-xl transition-colors duration-150">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b60a01" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {LOCATION}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
