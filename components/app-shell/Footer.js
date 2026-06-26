"use client";

import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, MessageCircle, Clock, ChevronRight, Star, PhoneCall } from 'lucide-react'

const WHATSAPP_NUMBER = "03085518210"
const EMAIL = "valuemaxcc@gmail.com"
const INSTAGRAM = "https://instagram.com/valuemax_cashandcarry"
const MAPS_LINK = "https://maps.app.goo.gl/2FuBRsf7LCJKKZ1C8"
const LOCATION = "Islam Plaza, Main Bazar, Chak Beli Khan, Postal Code 47600, Tehsil & District Rawalpindi"
const PHONE = "+051-4947279"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "#categories" },
  { label: "Deals", href: "#deals" },
  { label: "Lucky Draw", href: "#deals" },
  { label: "Loyalty Card", href: "#deals" },
  { label: "Contact", href: "#contact" },
]

const CATEGORIES = [
  { label: "Cooking Oil & Ghee", href: "/products/oil-ghee" },
  { label: "Rice & Flour", href: "/products/rice" },
  { label: "Tea & Coffee", href: "/products/tea-coffee" },
  { label: "Snacks & Biscuits", href: "/products/snacks" },
  { label: "Dairy Products", href: "/products/dairy" },
  { label: "Household Items", href: "/products/detergents" },
]

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;800&display=swap');

        .ft-root { font-family: 'Poppins', sans-serif; }
        .ft-display { font-family: 'Playfair Display', serif; }

        .ft-root {
          background: linear-gradient(175deg, #0d0000 0%, #1a0000 40%, #2a0000 100%);
          position: relative;
          overflow: hidden;
        }
        .ft-root::before {
          content: '';
          position: absolute;
          top: -160px; right: -160px;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: rgba(182,10,1,0.07);
          pointer-events: none;
        }
        .ft-root::after {
          content: '';
          position: absolute;
          bottom: -120px; left: -80px;
          width: 380px; height: 380px;
          border-radius: 50%;
          background: rgba(255,209,0,0.03);
          pointer-events: none;
        }

        .ft-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,209,0,0.25), rgba(182,10,1,0.4), rgba(255,209,0,0.25), transparent);
        }

        .ft-link {
          color: rgba(255,255,255,0.55);
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s ease, transform 0.2s ease;
          padding: 3px 0;
        }
        .ft-link:hover {
          color: #FFD100;
          transform: translateX(3px);
        }
        .ft-link svg {
          opacity: 0;
          transition: opacity 0.2s ease;
          flex-shrink: 0;
        }
        .ft-link:hover svg { opacity: 1; }

        .ft-contact-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: border-color 0.2s ease;
        }
        .ft-contact-row:last-child { border-bottom: none; }
        .ft-contact-row:hover { border-color: rgba(255,209,0,0.15); }

        .ft-icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(182,10,1,0.15);
          border: 1px solid rgba(182,10,1,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .ft-contact-row:hover .ft-icon-wrap {
          background: rgba(182,10,1,0.3);
          border-color: rgba(182,10,1,0.5);
        }

        .ft-social-btn {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          flex-shrink: 0;
        }
        .ft-social-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.4);
        }

        .ft-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(255,209,0,0.08);
          border: 1px solid rgba(255,209,0,0.2);
          color: #FFD100;
          font-size: 10px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .ft-map-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(182,10,1,0.12);
          border: 1px solid rgba(182,10,1,0.3);
          color: rgba(255,255,255,0.7);
          font-size: 12px;
          font-weight: 600;
          padding: 9px 16px;
          border-radius: 10px;
          text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
          font-family: 'Poppins', sans-serif;
        }
        .ft-map-btn:hover {
          background: #b60a01;
          border-color: #b60a01;
          color: #fff;
        }

        .ft-wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #25D366;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          padding: 9px 16px;
          border-radius: 10px;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease;
          font-family: 'Poppins', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .ft-wa-btn:hover {
          background: #1ebe5d;
          transform: translateY(-2px);
        }

        .ft-bottom {
          background: rgba(0,0,0,0.3);
          border-top: 1px solid rgba(255,255,255,0.05);
        }
      `}</style>

      <footer className="ft-root">

        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 pt-16 pb-10 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

            <div className="lg:col-span-4">
              <div className="mb-6">
                <div className="ft-badge mb-4">
                  <Star size={10} fill="#FFD100" />
                  Est. 2025 — Rawalpindi
                </div>
                <h2 className="ft-display text-[1.9rem] font-extrabold text-white leading-tight mb-1">
                  Value <span className="text-[#b60a01]">Max</span> 
                </h2>
                <p className="text-[#FFD100]/70 text-xs font-semibold uppercase tracking-[3px]">Wholesale & Retail</p>
              </div>

              <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-[320px]">
                Rawalpindi's trusted grocery destination since 2025. Quality products, honest prices, and a loyalty program that rewards every visit.
              </p>

              <div className="flex items-center gap-3 mb-8">
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ft-social-btn"
                  style={{background:'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)'}}
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="5" stroke="white" strokeWidth="1.2" />
                    <circle cx="12" cy="11" r="3" fill="white" />
                    <circle cx="17" cy="7" r="0.9" fill="white" />
                  </svg>
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ft-social-btn"
                  style={{background:'#25D366'}}
                  aria-label="WhatsApp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.05 2C6.495 2 2 6.495 2 12.05c0 1.978.548 3.868 1.544 5.5L2 22l4.573-1.526A10.02 10.02 0 0 0 12.05 22C17.605 22 22 17.505 22 11.95 22 6.495 17.605 2 12.05 2zm0 18.15a8.121 8.121 0 0 1-4.149-1.137l-.297-.177-3.08 1.027 1.04-3.002-.196-.308A8.149 8.149 0 0 1 3.9 11.95c0-4.493 3.658-8.15 8.15-8.15 4.493 0 8.15 3.657 8.15 8.15 0 4.492-3.657 8.15-8.15 8.15z"/></svg>
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="ft-social-btn"
                  style={{background:'rgba(182,10,1,0.8)'}}
                  aria-label="Email"
                >
                  <Mail size={18} color="#fff" />
                </a>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I have an inquiry about Cash & Carry.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ft-wa-btn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.05 2C6.495 2 2 6.495 2 12.05c0 1.978.548 3.868 1.544 5.5L2 22l4.573-1.526A10.02 10.02 0 0 0 12.05 22C17.605 22 22 17.505 22 11.95 22 6.495 17.605 2 12.05 2zm0 18.15a8.121 8.121 0 0 1-4.149-1.137l-.297-.177-3.08 1.027 1.04-3.002-.196-.308A8.149 8.149 0 0 1 3.9 11.95c0-4.493 3.658-8.15 8.15-8.15 4.493 0 8.15 3.657 8.15 8.15 0 4.492-3.657 8.15-8.15 8.15z"/></svg>
                Chat with Us
              </a>
            </div>

            <div className="lg:col-span-2">
              <p className="text-white text-[11px] uppercase tracking-[3px] font-bold mb-5 flex items-center gap-2">
                <span className="w-4 h-px bg-[#b60a01] inline-block" />
                Quick Links
              </p>
              <ul className="space-y-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="ft-link">
                      <ChevronRight size={12} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <p className="text-white text-[11px] uppercase tracking-[3px] font-bold mb-5 flex items-center gap-2">
                <span className="w-4 h-px bg-[#b60a01] inline-block" />
                Categories
              </p>
              <ul className="space-y-1">
                {CATEGORIES.map((cat) => (
                  <li key={cat.label}>
                    <Link href={cat.href} className="ft-link">
                      <ChevronRight size={12} />
                      {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4">
              <p className="text-white text-[11px] uppercase tracking-[3px] font-bold mb-5 flex items-center gap-2">
                <span className="w-4 h-px bg-[#b60a01] inline-block" />
                Contact & Location
              </p>

              <div className="space-y-0 mb-6">
                <a href={`tel:${PHONE.replace(/\s/g,'')}`} className="ft-contact-row group" style={{textDecoration:'none'}}>
                  <div className="ft-icon-wrap">
                    <Phone size={15} color="#FFD100" />
                  </div>
                  <div>
                    <p className="text-white/35 text-[10px] uppercase tracking-widest font-semibold mb-0.5">Phone</p>
                    <p className="text-white/80 text-sm font-semibold">{PHONE}</p>
                  </div>
                </a>

                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="ft-contact-row group" style={{textDecoration:'none'}}>
                  <div className="ft-icon-wrap">
                    <MessageCircle size={15} color="#25D366" />
                  </div>
                  <div>
                    <p className="text-white/35 text-[10px] uppercase tracking-widest font-semibold mb-0.5">WhatsApp</p>
                    <p className="text-white/80 text-sm font-semibold">{PHONE}</p>
                  </div>
                </a>

                <a href={`mailto:${EMAIL}`} className="ft-contact-row group" style={{textDecoration:'none'}}>
                  <div className="ft-icon-wrap">
                    <Mail size={15} color="#FFD100" />
                  </div>
                  <div>
                    <p className="text-white/35 text-[10px] uppercase tracking-widest font-semibold mb-0.5">Email</p>
                    <p className="text-white/80 text-sm font-semibold">{EMAIL}</p>
                  </div>
                </a>

                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="ft-contact-row group" style={{textDecoration:'none'}}>
                  <div className="ft-icon-wrap">
                    <PhoneCall size={15} color="#f09433" />
                  </div>
                  <div>
                    <p className="text-white/35 text-[10px] uppercase tracking-widest font-semibold mb-0.5">Instagram</p>
                    <p className="text-white/80 text-sm font-semibold">@cashandcarry.pk</p>
                  </div>
                </a>

                <div className="ft-contact-row">
                  <div className="ft-icon-wrap">
                    <Clock size={15} color="#FFD100" />
                  </div>
                  <div>
                    <p className="text-white/35 text-[10px] uppercase tracking-widest font-semibold mb-0.5">Store Hours</p>
                    <p className="text-white/80 text-sm font-semibold">All Week Timings: 7am – 10pm</p>
                  </div>
                </div>

                <div className="ft-contact-row">
                  <div className="ft-icon-wrap">
                    <MapPin size={15} color="#b60a01" />
                  </div>
                  <div>
                    <p className="text-white/35 text-[10px] uppercase tracking-widest font-semibold mb-0.5">Location</p>
                    <p className="text-white/80 text-sm font-semibold leading-snug">{LOCATION}</p>
                  </div>
                </div>
              </div>

              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="ft-map-btn">
                <MapPin size={14} color="#b60a01" />
                Get Directions on Maps
              </a>
            </div>

          </div>

          <div className="ft-divider my-10" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs text-center sm:text-left">
              © {CURRENT_YEAR} ValueMax Cash & Carry Rawalpindi. All rights reserved.
            </p>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b60a01] animate-pulse inline-block" />
              <p className="text-white/30 text-xs">Serving Rawalpindi since 2025</p>
            </div>
          </div>

        </div>

      </footer>
    </>
  )
}