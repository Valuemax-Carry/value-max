"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu as LucideMenu, X as LucideX, Tag } from 'lucide-react'
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { CATEGORIES } from "../landing/Categories";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Categories", path: "/#categories" },
  { label: "Deals", path: "/#deals" },
  { label: "Bulk Orders", path: "/#bulk-order" },
  { label: "Policy", path: "/policy" },
  { label: "Contact", path: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (link) => link.path === pathname;

  const matched = searchQuery.trim()
    ? CATEGORIES.filter(c =>
        c.title.toLowerCase().startsWith(searchQuery.trim().toLowerCase())
      )
    : [];

  const showDropdown = searchFocused && searchQuery.trim().length > 0;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSelect = (slug) => {
    setSearchQuery("");
    setSearchFocused(false);
    setMenuOpen(false);
    setActiveIndex(-1);
    router.push(`/products/${slug}`);
  };

  const handleKeyDown = (e) => {
    if (!showDropdown) return;
    const items = matched.slice(0, 6);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex(i => Math.min(i + 1, items.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex(i => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      handleSelect(items[activeIndex].slug);
    } else if (e.key === "Escape") {
      setSearchFocused(false);
      setActiveIndex(-1);
    }
  };

  return (
    <>
      <nav className={`sticky top-0 z-[1000] bg-white border-b-[3px] border-[#b60a01] font-[Poppins] transition-shadow duration-300 ${scrolled ? "shadow-[0_4px_24px_rgba(232,0,28,0.13)]" : ""}`}>

        <div className="hidden md:flex bg-[#b60a01] justify-center gap-8 py-1.5 text-[11.5px] text-white/90 tracking-wide">
          <span>📦 Bulk Orders Welcome</span>
          <span>🚚 Free Delivery on Orders above Rs.5,000</span>
          <span>☎️ +03085518210</span>
        </div>

        {/* Desktop main row */}
        <div className="max-w-[1280px] mx-auto px-5 h-[78px] hidden md:flex items-center gap-5">

          {/* Logo — bigger on desktop */}
          <Link href="/" className="flex items-center gap-3 no-underline shrink-0 hover:scale-[1.03] transition-transform duration-200">
            <div className="w-16 h-16 bg-[#b60a01] rounded-[12px] flex items-center justify-center relative overflow-hidden shrink-0">
              <Image
                src={"/favicon.png"}
                alt="Logo"
                width={64}
                height={64}
              />
            </div>
            <div className="leading-tight flex gap-2 items-center">
              <div className="text-[23px] font-extrabold text-[#b60a01] tracking-tight">
                Value<span className="text-[#ffbc0b]">Max</span>
              </div>
              <div className="text-[10px] font-medium text-gray-400 uppercase tracking-[1.2px]">
                Cash &amp; Carry
              </div>
            </div>
          </Link>

          {/* Search bar — pushed to right, before Sign In */}
          <div className="flex flex-1 justify-end items-center gap-3">
            <div className="relative w-full max-w-[520px]">
              <div className={`flex items-center w-full bg-gray-100 border-2 rounded-[10px] overflow-visible transition-all duration-300 ${searchFocused ? "bg-white border-[#E8001C] shadow-[0_0_0_4px_rgba(232,0,28,0.08)]" : "border-transparent"}`}>
                <input
                  type="text"
                  className="flex-1 bg-transparent border-none outline-none px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 rounded-l-[8px]"
                  placeholder="Search products, brands, categories…"
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setActiveIndex(-1); }}
                  onFocus={() => { setSearchFocused(true); }}
                  onBlur={() => setTimeout(() => { setSearchFocused(false); setActiveIndex(-1); }, 150)}
                  onKeyDown={handleKeyDown}
                />
                <button className="bg-[#b60a01] hover:bg-[#9a0800] border-none px-4 h-11 flex items-center justify-center shrink-0 transition-colors duration-200 cursor-pointer rounded-r-[8px]">
                  <Search size={18} color="white" />
                </button>
              </div>

              {showDropdown && (
                <div className="absolute left-0 right-0 top-[calc(100%+8px)] bg-white border border-gray-100 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] z-50 overflow-hidden">
                  {matched.length > 0 ? (
                    <>
                      <div className="px-3.5 py-2 border-b border-gray-50 flex items-center justify-between">
                        <span className="text-[10.5px] font-semibold text-gray-400 uppercase tracking-widest">Categories</span>
                        <span className="text-[10.5px] text-gray-300">{Math.min(matched.length, 6)} result{matched.length !== 1 ? "s" : ""}</span>
                      </div>
                      <ul className="max-h-56 overflow-auto py-1">
                        {matched.slice(0, 6).map((c, idx) => (
                          <li
                            key={c.slug}
                            className={`flex items-center gap-3 px-3.5 py-2.5 cursor-pointer transition-colors duration-100 ${activeIndex === idx ? "bg-red-50" : "hover:bg-gray-50"}`}
                            onMouseDown={(e) => { e.preventDefault(); handleSelect(c.slug); }}
                            onMouseEnter={() => setActiveIndex(idx)}
                          >
                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-100 ${activeIndex === idx ? "bg-[#b60a01]" : "bg-gray-100"}`}>
                              <Tag size={13} color={activeIndex === idx ? "white" : "#b60a01"} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="text-sm font-medium text-gray-800 block truncate">
                                <span className="text-[#b60a01] font-semibold">{c.title.slice(0, searchQuery.trim().length)}</span>
                                {c.title.slice(searchQuery.trim().length)}
                              </span>
                            </div>
                            <span className="text-[10px] text-gray-300 shrink-0">↵</span>
                          </li>
                        ))}
                      </ul>
                      <div className="px-3.5 py-2 border-t border-gray-50 bg-gray-50/60">
                        <button
                          onMouseDown={(e) => { e.preventDefault(); router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`); setSearchFocused(false); }}
                          className="text-[11.5px] text-[#b60a01] font-semibold hover:underline bg-transparent border-none cursor-pointer p-0"
                        >
                          See all results for &ldquo;{searchQuery.trim()}&rdquo; →
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="px-4 py-6 text-center">
                      <div className="text-2xl mb-2">🔍</div>
                      <p className="text-sm font-medium text-gray-700">No results for &ldquo;{searchQuery.trim()}&rdquo;</p>
                      <p className="text-xs text-gray-400 mt-1">Try a different category name</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Sign In — after search bar */}
            <button className="border-2 border-[#b60a01] text-[#E8001C] hover:bg-[#b60a01] hover:text-white hover:-translate-y-px bg-transparent text-[13px] font-semibold px-4 py-[7px] rounded-lg cursor-pointer transition-all duration-200 whitespace-nowrap shrink-0">
              Apply For Jobs
            </button>
          </div>
        </div>

        {/* Mobile main row */}
        <div className="max-w-[1280px] mx-auto px-4 h-[66px] flex md:hidden items-center gap-3">

          {/* Logo — slightly bigger on mobile too */}
          <Link href="/" className="flex items-center gap-2 no-underline shrink-0 hover:scale-[1.03] transition-transform duration-200">
            <div className="w-[52px] h-[52px] bg-[#b60a01] rounded-[10px] flex items-center justify-center relative overflow-hidden shrink-0">
              <Image
                src={"/favicon.png"}
                alt="Logo"
                width={52}
                height={52}
              />
            </div>
            <div className="leading-tight">
              <div className="text-[20px] font-extrabold text-[#b60a01] tracking-tight">
                Value<span className="text-[#ffbc0b]">Max</span>
              </div>
            </div>
          </Link>

          {/* Hamburger pushed to far right */}
          <div className="flex items-center gap-1.5 ml-auto shrink-0">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center justify-center border border-gray-200 hover:border-[#b60a01] hover:text-[#E8001C] rounded-lg p-1.5 bg-transparent text-gray-700 cursor-pointer transition-colors duration-200"
              aria-label="Menu"
            >
              {menuOpen ? <LucideX size={20} /> : <LucideMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Desktop nav links row — unchanged */}
        <div className="hidden md:block border-t border-gray-100">
          <div className="max-w-[1280px] mx-auto px-5 flex items-center h-12 gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative no-underline text-[13.5px] font-medium px-3.5 py-1.5 rounded-lg transition-colors duration-150 whitespace-nowrap group
                  ${isActive(link) ? "text-[#E8001C] font-semibold" : "text-gray-600 hover:text-[#E8001C] hover:bg-red-50"}`}
              >
                {link.label}
                {link.label === "Deals" && (
                  <span className="inline-flex items-center bg-[#FFD100] text-[#7a5800] text-[9px] font-bold px-1.5 py-px rounded ml-1 tracking-wide align-middle">
                    HOT
                  </span>
                )}
                <span className={`absolute bottom-0.5 left-3.5 right-3.5 h-0.5 bg-[#FFD100] rounded-sm origin-left transition-transform duration-200 ${isActive(link) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu drawer — unchanged except cart removed */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="bg-white border-t border-gray-100 shadow-lg px-4 pt-3 pb-4 flex flex-col gap-1">
            <div className="relative mb-2">
              <div className={`flex items-center bg-gray-100 border-2 rounded-[9px] overflow-visible transition-all duration-300 ${searchFocused ? "bg-white border-[#E8001C] shadow-[0_0_0_3px_rgba(232,0,28,0.08)]" : "border-transparent"}`}>
                <input
                  type="text"
                  className="flex-1 bg-transparent border-none outline-none px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400"
                  placeholder="Search products…"
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setActiveIndex(-1); }}
                  onFocus={() => { setSearchFocused(true); }}
                  onBlur={() => setTimeout(() => { setSearchFocused(false); setActiveIndex(-1); }, 150)}
                  onKeyDown={handleKeyDown}
                />
                <button className="bg-[#b60a01] hover:bg-[#9a0800] border-none px-4 h-10 flex items-center justify-center shrink-0 transition-colors duration-200 cursor-pointer rounded-r-[7px]">
                  <Search size={16} color="white" />
                </button>
              </div>

              {showDropdown && (
                <div className="absolute left-0 right-0 top-[calc(100%+6px)] bg-white border border-gray-100 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] z-50 overflow-hidden">
                  {matched.length > 0 ? (
                    <>
                      <div className="px-3.5 py-2 border-b border-gray-50 flex items-center justify-between">
                        <span className="text-[10.5px] font-semibold text-gray-400 uppercase tracking-widest">Categories</span>
                        <span className="text-[10.5px] text-gray-300">{Math.min(matched.length, 6)} result{matched.length !== 1 ? "s" : ""}</span>
                      </div>
                      <ul className="max-h-52 overflow-auto py-1">
                        {matched.slice(0, 6).map((c, idx) => (
                          <li
                            key={c.slug}
                            className={`flex items-center gap-3 px-3.5 py-2.5 cursor-pointer transition-colors duration-100 ${activeIndex === idx ? "bg-red-50" : "hover:bg-gray-50"}`}
                            onMouseDown={(e) => { e.preventDefault(); handleSelect(c.slug); }}
                            onMouseEnter={() => setActiveIndex(idx)}
                          >
                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-100 ${activeIndex === idx ? "bg-[#b60a01]" : "bg-gray-100"}`}>
                              <Tag size={13} color={activeIndex === idx ? "white" : "#b60a01"} />
                            </div>
                            <span className="text-sm font-medium text-gray-800 block truncate flex-1">
                              <span className="text-[#b60a01] font-semibold">{c.title.slice(0, searchQuery.trim().length)}</span>
                              {c.title.slice(searchQuery.trim().length)}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="px-3.5 py-2 border-t border-gray-50 bg-gray-50/60">
                        <button
                          onMouseDown={(e) => { e.preventDefault(); router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`); setSearchFocused(false); setMenuOpen(false); }}
                          className="text-[11.5px] text-[#b60a01] font-semibold hover:underline bg-transparent border-none cursor-pointer p-0"
                        >
                          See all results for &ldquo;{searchQuery.trim()}&rdquo; →
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="px-4 py-5 text-center">
                      <div className="text-xl mb-1.5">🔍</div>
                      <p className="text-sm font-medium text-gray-700">No results for &ldquo;{searchQuery.trim()}&rdquo;</p>
                      <p className="text-xs text-gray-400 mt-0.5">Try a different category name</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => { setMenuOpen(false); }}
                className={`relative no-underline text-sm font-medium px-3.5 py-2.5 rounded-lg w-full transition-colors duration-150
                  ${isActive(link) ? "text-[#E8001C] font-semibold bg-red-50" : "text-gray-700 hover:text-[#E8001C] hover:bg-red-50"}`}
              >
                {link.label}
                {link.label === "Deals" && (
                  <span className="inline-flex items-center bg-[#ffbc0b] text-[#7a5800] text-[9px] font-bold px-1.5 py-px rounded ml-1.5 tracking-wide align-middle">
                    HOT
                  </span>
                )}
              </Link>
            ))}

            <button className="mt-2 border-2 border-[#b60a01] text-[#E8001C] hover:bg-[#E8001C] hover:text-white bg-transparent text-sm font-semibold px-4 py-2 rounded-lg cursor-pointer transition-all duration-200">
            Apply For Jobs
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}