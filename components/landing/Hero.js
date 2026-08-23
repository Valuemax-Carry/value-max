"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

const STATS = [
  { value: "10,000+", label: "Products" },
  { value: "Rs. 15K", label: "Free Delivery Above" },
  { value: "1st", label: "Physical Store" },
  { value: "100%", label: "Wholesale Prices" },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    const countTimer = setTimeout(() => setCount(true), 600);
    return () => {
      clearTimeout(timer);
      clearTimeout(countTimer);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;800&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideRight {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(232,0,28,0.4); }
          70% { transform: scale(1); box-shadow: 0 0 0 12px rgba(232,0,28,0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(232,0,28,0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .vm-hero { font-family: 'Poppins', sans-serif; }
        .vm-display { font-family: 'Playfair Display', serif; }

        .vm-fade-up-1 { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s both; }
        .vm-fade-up-2 { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.25s both; }
        .vm-fade-up-3 { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.4s both; }
        .vm-fade-up-4 { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.55s both; }
        .vm-fade-up-5 { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.7s both; }
        .vm-fade-in-6 { animation: fadeIn 1s ease 0.9s both; }

        .vm-underline-anim {
          display: inline-block;
          position: relative;
        }
        .vm-underline-anim::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0; right: 0;
          height: 5px;
          background: #FFD100;
          border-radius: 3px;
          transform-origin: left;
          animation: slideRight 0.6s cubic-bezier(0.22,1,0.36,1) 0.8s both;
        }

        .vm-badge-float { animation: floatBadge 3s ease-in-out infinite; }

        .vm-cta-primary {
          animation: pulse-ring 2.5s ease-in-out 2s infinite;
        }

        .vm-shimmer-text {
          background: linear-gradient(90deg, #E8001C 0%, #FFD100 40%, #E8001C 60%, #FFD100 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .vm-ticker-track {
          display: flex;
          width: max-content;
          animation: tickerScroll 22s linear infinite;
        }
        .vm-ticker-track:hover { animation-play-state: paused; }

        .vm-stat-card {
          animation: fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both;
        }
        .vm-stat-card:nth-child(1) { animation-delay: 0.6s; }
        .vm-stat-card:nth-child(2) { animation-delay: 0.75s; }
        .vm-stat-card:nth-child(3) { animation-delay: 0.9s; }
        .vm-stat-card:nth-child(4) { animation-delay: 1.05s; }

        .vm-video-wrapper {
          animation: fadeIn 1.2s ease 1.1s both;
        }

        .vm-btn-hover {
          transition: all 0.22s cubic-bezier(0.22,1,0.36,1);
        }
        .vm-btn-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(232,0,28,0.28);
        }
        .vm-btn-hover:active { transform: translateY(0); }

        .vm-outline-hover {
          transition: all 0.22s cubic-bezier(0.22,1,0.36,1);
        }
        .vm-outline-hover:hover {
          transform: translateY(-2px);
          background: #1a1a1a;
          color: #fff;
          border-color: #1a1a1a;
        }

        .vm-swiper-box {
          height: 180px;
        }
        @media (min-width: 420px) {
          .vm-swiper-box {
            height: 240px;
          }
        }
        @media (min-width: 640px) {
          .vm-swiper-box {
            height: 300px;
          }
        }
        @media (min-width: 1024px) {
          .vm-swiper-box {
            height: auto;
            aspect-ratio: 4/3;
          }
        }
      `}</style>

      <section ref={heroRef} className="vm-hero bg-white overflow-hidden">
        <div className="relative bg-white overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[45%] h-full bg-[#b60a01] hidden lg:block"
            style={{ clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)" }}
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
                backgroundSize: "20px 20px",
              }}
            />
          </div>

          <div className="absolute top-6 right-0 w-full h-full hidden lg:block pointer-events-none">
            <div
              className="absolute top-8 right-[8%] w-20 h-20 bg-[##ffbc0b] rounded-full opacity-20 vm-badge-float"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="absolute top-32 right-[22%] w-10 h-10 bg-[#ffbc0b] rounded-full opacity-30 vm-badge-float"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute bottom-20 right-[6%] w-14 h-14 bg-white rounded-full opacity-15 vm-badge-float"
              style={{ animationDelay: "1.5s" }}
            />
          </div>

          <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 py-10 sm:py-20 lg:py-28 flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-10 lg:items-center">
            <div className="relative z-10">
              <div className="vm-fade-up-1 inline-flex items-center gap-2 bg-red-50 border border-red-100 text-[#E8001C] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[##b60a01] animate-pulse inline-block" />
                Now Open — Rawalpindi's First
              </div>

              <h1 className="vm-display text-[2rem] xs:text-[2.2rem] sm:text-[3.2rem] lg:text-[3.8rem] leading-[1.08] font-extrabold text-gray-900 mb-2 vm-fade-up-2">
                Pakistan's{" "}
                <span className="vm-underline-anim text-[#E8001C]">
                  Trusted
                </span>
              </h1>
              <h1 className="vm-display text-[2rem] xs:text-[2.2rem] sm:text-[3.2rem] lg:text-[3.8rem] leading-[1.08] font-extrabold text-gray-900 mb-4 vm-fade-up-2">
                Cash <span className="font-sans">&amp;</span> Carry Store
              </h1>

              <p className="text-gray-500 text-sm sm:text-lg leading-relaxed max-w-[480px] mb-3 vm-fade-up-3">
                Fresh groceries. Everyday savings. Everything your family needs
                with quality you can trust — all in one place.
              </p>

              <p className="text-[13px] text-gray-400 font-medium tracking-wide mb-6 vm-fade-up-3">
                A project of{" "}
                <span className="text-gray-700 font-semibold">
                  ASHRAF & SONS TRADERS
                </span>
                &nbsp; (SMC-PVT) LTD.
              </p>

              <div className="flex flex-wrap gap-3 mb-8 vm-fade-up-4">
                <Link href={"#categories"}>
                <button className="vm-cta-primary vm-btn-hover bg-[#b60a01] hover:bg-[#c0001a] text-white font-bold text-sm px-7 py-3.5 rounded-xl border-none cursor-pointer">
                  Shop the Store →
                </button>
                </Link>
                <button className="vm-outline-hover border-2 border-gray-200 text-gray-800 font-semibold text-sm px-7 py-3.5 rounded-xl bg-transparent cursor-pointer">
                  View Deals
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 vm-fade-up-5">
                {STATS.map((s, i) => (
                  <div
                    key={i}
                    className="vm-stat-card bg-white border border-gray-100 rounded-xl p-3.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="text-[#E8001C] text-xl font-extrabold leading-tight">
                      {s.value}
                    </div>
                    <div className="text-gray-400 text-[11px] font-medium mt-0.5 leading-tight">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex flex-col items-center lg:items-end vm-fade-in-6">
              <div className="vm-badge-float absolute -top-4 -left-4 lg:-top-6 lg:-left-8 bg-[#ffbc0b] text-[#7a5800] text-[11px] font-bold px-3.5 py-2 rounded-xl shadow-lg z-20 leading-tight text-center">
                <div className="text-lg font-black leading-none">Trusted</div>
                <div className="uppercase tracking-wider">In Pakistan</div>
              </div>

              <div className="vm-swiper-box w-full max-w-[460px] bg-gray-100 rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-gray-300">
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="4" />
                    <polygon
                      points="10,8 16,12 10,16"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                  <p className="text-sm font-medium text-gray-400">
                    Store Tour Video
                  </p>
                  <p className="text-xs text-gray-300">
                    Place your{" "}
                    <code className="bg-gray-200 px-1 rounded text-gray-500">
                      video.mp4
                    </code>{" "}
                    in{" "}
                    <code className="bg-gray-200 px-1 rounded text-gray-500">
                      /public
                    </code>
                  </p>
                </div>
                <Swiper
                  modules={[Autoplay]}
                  loop={true}
                  autoplay={{ delay: 3500, disableOnInteraction: false }}
                  className="absolute inset-0 w-full h-full"
                >
                  {[
                    "/HeroSwiper/2.webp",
                    "/HeroSwiper/4.webp",
                    "/HeroSwiper/1.jpg",
                    "/HeroSwiper/5.jpg",
                    "/HeroSwiper/3.webp",
                  ].map((src, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={src}
                        alt={`hero-${i}`}
                        className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="flex items-center gap-2 mt-4 bg-white border border-gray-100 rounded-full px-4 py-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[12px] text-gray-500 font-medium">
                  Store Open — Visit Us in Rawalpindi
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#b60a01] py-3.5 overflow-hidden relative">
          <div className="flex overflow-hidden">
            <div className="vm-ticker-track">
              {[...Array(2)].map((_, r) => (
                <div key={r} className="flex items-center gap-0">
                  {[
                    "📦 Wholesale Prices",
                    "🛒 10,000+ Products",
                    "🚚 Free Delivery above Rs. 15,000",
                    "⭐ Pakistan's Trusted Cash & Carry",
                    "📍 Now Open in Chak Beli Khan, Rawalpindi",
                    "💛 Ashraf & Sons Traders",
                    "📦 Bulk Orders Welcome",
                    "🔥 New Deals Every Week",
                  ].map((item, i) => (
                    <span
                      key={i}
                      className="text-white text-[13px] font-semibold whitespace-nowrap px-8 flex items-center gap-2"
                    >
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
              {
                icon: "🏪",
                title: "First Physical Store",
                desc: "Rawalpindi's dedicated cash & carry — a new standard for wholesale and retail shopping in Pakistan.",
              },
              {
                icon: "💰",
                title: "Wholesale Prices",
                desc: "Direct from suppliers. No middlemen. You save more whether you buy one or one hundred.",
              },
              {
                icon: "🤝",
                title: "Trusted Since Day One",
                desc: "A proud project of Ashraf & Sons Traders — built on decades of business integrity.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="flex gap-4 items-start p-5 bg-white rounded-2xl border border-amber-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                style={{
                  animation: `fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.15}s both`,
                }}
              >
                <div className="text-3xl shrink-0 mt-0.5">{f.icon}</div>
                <div>
                  <div className="text-[15px] font-bold text-gray-900 mb-1">
                    {f.title}
                  </div>
                  <div className="text-[13px] text-gray-500 leading-relaxed">
                    {f.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-14 sm:py-20">
            <div className="text-center mb-10">
              <div className="text-[11px] uppercase tracking-[3px] text-[#E8001C] font-bold mb-2">
                Store in Action
              </div>
              <h2 className="vm-display text-3xl sm:text-4xl font-extrabold text-gray-900">
                See ValueMax in Action
              </h2>
              <p className="text-gray-400 text-sm mt-2 max-w-md mx-auto">
                Take a virtual tour of Rawalpindi's most modern cash & carry
                experience
              </p>
            </div>

            <div
              className="vm-video-wrapper relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100"
              style={{ aspectRatio: "16/9" }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gray-50 text-gray-300 z-0">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="4" />
                  <polygon
                    points="10,8 16,12 10,16"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
                <p className="text-sm font-medium text-gray-400">
                  Store Tour — Full View
                </p>
                <p className="text-xs text-gray-300">
                  Replace{" "}
                  <code className="bg-gray-200 px-1 rounded text-gray-500">
                    src
                  </code>{" "}
                  with your video URL or local file path
                </p>
              </div>
              <video
                className="relative z-10 w-full h-full object-cover"
                src="/videos/herovideo.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/40 to-transparent z-20 flex items-end px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#b60a01] animate-pulse" />
                  <span className="text-white text-xs font-semibold tracking-wide uppercase">
                    Live Store — Rawalpindi
                  </span>
                </div>
                <div className="ml-auto text-[#FFD100] text-xs font-bold tracking-wide">
                  ValueMax Cash &amp; Carry
                </div>
              </div>
            </div>

            <p className="text-center text-[12px] text-gray-400 mt-5 font-medium">
              A project of{" "}
              <span className="text-gray-600 font-semibold">
             ASHRAF & SONS TRADERS
              </span>{" "}
              (SMC-PVT) LTD.            
              </p>
          </div>
        </div>
      </section>
    </>
  );
}
