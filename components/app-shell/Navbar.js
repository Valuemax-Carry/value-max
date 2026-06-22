"use client";

import { useState, useEffect } from "react";
import CartDrawer from "./Cart";
import Link from "next/link";
import { Search, Menu as LucideMenu, X as LucideX, ShoppingCart } from 'lucide-react'

const CART_ITEMS = [
  { id: 1, name: "Basmati Rice 5kg", price: 1250, qty: 2, img: "🌾" },
  { id: 2, name: "Cooking Oil 3L", price: 890, qty: 1, img: "🫙" },
  { id: 3, name: "Sugar 1kg", price: 180, qty: 3, img: "🍬" },
];

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Categories", path: "/categories" },
  { label: "Deals", path: "/deals" },
  { label: "Bulk Orders", path: "/bulk-orders" },
  { label: "Contact", path: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const totalItems = CART_ITEMS.reduce((s, i) => s + i.qty, 0);
  const totalPrice = CART_ITEMS.reduce((s, i) => s + i.price * i.qty, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`sticky top-0 z-[1000] bg-white border-b-[3px] border-[#E8001C] font-[Poppins] transition-shadow duration-300 ${scrolled ? "shadow-[0_4px_24px_rgba(232,0,28,0.13)]" : ""}`}>

        <div className="hidden md:flex bg-[#E8001C] justify-center gap-8 py-1.5 text-[11.5px] text-white/90 tracking-wide">
          <span>📦 Bulk Orders Welcome</span>
          <span>🚚 Free Delivery on Orders above Rs.2,000</span>
          <span>☎️ +966 55-617-9998</span>
        </div>

        <div className="max-w-[1280px] mx-auto px-5 h-[70px] flex items-center gap-5">

          <Link href="/" className="flex items-center gap-2.5 no-underline shrink-0 hover:scale-[1.03] transition-transform duration-200">
            <div className="w-11 h-11 bg-[#E8001C] rounded-[10px] flex items-center justify-center relative overflow-hidden shrink-0">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFD100" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" fill="#FFD100" stroke="#FFD100"/>
                <circle cx="20" cy="21" r="1" fill="#FFD100" stroke="#FFD100"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#FFD100] rounded-tl-[3px] opacity-25" />
            </div>
            <div className="leading-tight">
              <div className="text-[19px] font-extrabold text-gray-900 tracking-tight">
                Value<span className="text-[#E8001C]">-Max</span>
              </div>
              <div className="hidden md:block text-[9.5px] font-medium text-gray-400 uppercase tracking-[1.2px]">
                Cash &amp; Carry
              </div>
            </div>
          </Link>

          <div className="hidden md:flex flex-1 max-w-[520px] relative">
            <div className={`flex items-center w-full bg-gray-100 border-2 rounded-[10px] overflow-hidden transition-all duration-300 ${searchFocused ? "bg-white border-[#E8001C] shadow-[0_0_0_4px_rgba(232,0,28,0.08)]" : "border-transparent"}`}>
              <input
                type="text"
                className="flex-1 bg-transparent border-none outline-none px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400"
                placeholder="Search products, brands, categories…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => { setSearchFocused(true); setCartOpen(false); }}
                onBlur={() => setSearchFocused(false)}
              />
              <button className="bg-[#E8001C] hover:bg-[#c0001a] border-none px-4 h-11 flex items-center justify-center shrink-0 transition-colors duration-200 cursor-pointer">
                <Search size={18} color="white" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-1.5 ml-auto shrink-0">
            <button
              onClick={() => { setCartOpen(!cartOpen); setMenuOpen(false); }}
              className="p-2 rounded-lg border-none bg-transparent text-gray-600 hover:bg-red-50 hover:text-[#E8001C] hover:scale-[1.08] transition-all duration-150 cursor-pointer relative flex items-center justify-center"
              aria-label="Cart"
            >
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-[#E8001C] text-white text-[9px] font-bold min-w-[17px] h-[17px] rounded-full flex items-center justify-center border-2 border-white leading-none">
                  {totalItems}
                </span>
              )}
            </button>

            <button className="hidden md:block border-2 border-[#E8001C] text-[#E8001C] hover:bg-[#E8001C] hover:text-white hover:-translate-y-px bg-transparent text-[13px] font-semibold px-4 py-[7px] rounded-lg cursor-pointer transition-all duration-200 whitespace-nowrap">
              Sign In
            </button>

            <button
              onClick={() => { setMenuOpen(!menuOpen); setCartOpen(false); }}
              className="md:hidden flex items-center justify-center border border-gray-200 hover:border-[#E8001C] hover:text-[#E8001C] rounded-lg p-1.5 bg-transparent text-gray-700 cursor-pointer transition-colors duration-200"
              aria-label="Menu"
            >
              {menuOpen ? (
                <LucideX size={20} />
              ) : (
                <LucideMenu size={20} />
              )}
            </button>
          </div>
        </div>

        <div className="hidden md:block border-t border-gray-100">
          <div className="max-w-[1280px] mx-auto px-5 flex items-center h-12 gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative no-underline text-[13.5px] font-medium px-3.5 py-1.5 rounded-lg transition-colors duration-150 whitespace-nowrap group
                  ${link.label === "Home" ? "text-[#E8001C] font-semibold" : "text-gray-600 hover:text-[#E8001C] hover:bg-red-50"}`}
              >
                {link.label}
                {link.label === "Deals" && (
                  <span className="inline-flex items-center bg-[#FFD100] text-[#7a5800] text-[9px] font-bold px-1.5 py-px rounded ml-1 tracking-wide align-middle">
                    HOT
                  </span>
                )}
                <span className={`absolute bottom-0.5 left-3.5 right-3.5 h-0.5 bg-[#FFD100] rounded-sm origin-left transition-transform duration-200 ${link.label === "Home" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
              </Link>
            ))}
          </div>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="bg-white border-t border-gray-100 shadow-lg px-4 pt-3 pb-4 flex flex-col gap-1">
            <div className={`flex items-center bg-gray-100 border-2 rounded-[9px] overflow-hidden mb-2 transition-all duration-300 ${searchFocused ? "bg-white border-[#E8001C] shadow-[0_0_0_3px_rgba(232,0,28,0.08)]" : "border-transparent"}`}>
              <input
                type="text"
                className="flex-1 bg-transparent border-none outline-none px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400"
                placeholder="Search products…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => { setSearchFocused(true); setCartOpen(false); }}
                onBlur={() => setSearchFocused(false)}
              />
              <button className="bg-[#E8001C] hover:bg-[#c0001a] border-none px-4 h-10 flex items-center justify-center shrink-0 transition-colors duration-200 cursor-pointer">
                <Search size={16} color="white" />
              </button>
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => { setMenuOpen(false); setCartOpen(false); }}
                className={`relative no-underline text-sm font-medium px-3.5 py-2.5 rounded-lg w-full transition-colors duration-150
                  ${link.label === "Home" ? "text-[#E8001C] font-semibold bg-red-50" : "text-gray-700 hover:text-[#E8001C] hover:bg-red-50"}`}
              >
                {link.label}
                {link.label === "Deals" && (
                  <span className="inline-flex items-center bg-[#FFD100] text-[#7a5800] text-[9px] font-bold px-1.5 py-px rounded ml-1.5 tracking-wide align-middle">
                    HOT
                  </span>
                )}
              </Link>
            ))}

            <button className="mt-2 border-2 border-[#E8001C] text-[#E8001C] hover:bg-[#E8001C] hover:text-white bg-transparent text-sm font-semibold px-4 py-2 rounded-lg cursor-pointer transition-all duration-200">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      <CartDrawer
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartItems={CART_ITEMS}
        totalItems={totalItems}
        totalPrice={totalPrice}
      />
    </>
  );
}