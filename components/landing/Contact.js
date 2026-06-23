"use client";

import { useEffect, useRef, useState } from "react";

const CONTACT_CARDS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: "Call Us",
    value: "+03085518210",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    label: "Email Us",
    value: "isaamir81@gmail.com",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Visit Us",
    value: "Islam Plaza, Main Bazar, Chak Beli Khan, Postal Code 47600, Tehsil & District Rawalpindi",
  },
];

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;800&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
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
        @keyframes slideRight {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        .vm-contact { font-family: 'Poppins', sans-serif; }
        .vm-contact-display { font-family: 'Playfair Display', serif; }

        .vm-c-up-1 { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.05s both; }
        .vm-c-up-2 { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both; }
        .vm-c-up-3 { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.35s both; }
        .vm-c-up-4 { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.5s both; }

        .vm-c-card {
          animation: fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both;
        }
        .vm-c-card:nth-child(1) { animation-delay: 0.5s; }
        .vm-c-card:nth-child(2) { animation-delay: 0.65s; }
        .vm-c-card:nth-child(3) { animation-delay: 0.8s; }

        .vm-c-shimmer {
          background: linear-gradient(90deg, ##b60a01 0%, ##ffbc0b 40%, #b60a01 60%, #ffbc0b 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .vm-c-badge-float { animation: floatBadge 3.4s ease-in-out infinite; }

        .vm-c-underline {
          display: inline-block;
          position: relative;
        }
        .vm-c-underline::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0; right: 0;
          height: 5px;
          background: #ffbc0b;
          border-radius: 3px;
          transform-origin: left;
          animation: slideRight 0.6s cubic-bezier(0.22,1,0.36,1) 0.75s both;
        }

        .vm-c-cta {
          animation: pulse-ring 2.5s ease-in-out 1.6s infinite;
          transition: all 0.22s cubic-bezier(0.22,1,0.36,1);
        }
        .vm-c-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(232,0,28,0.28);
        }
        .vm-c-cta:active { transform: translateY(0); }

        .vm-c-outline {
          transition: all 0.22s cubic-bezier(0.22,1,0.36,1);
        }
        .vm-c-outline:hover {
          transform: translateY(-2px);
          background: #1a1a1a;
          color: #fff;
          border-color: #1a1a1a;
        }

        .vm-c-icon-card {
          transition: all 0.22s cubic-bezier(0.22,1,0.36,1);
        }
        .vm-c-icon-card:hover {
          transform: translateY(-4px);
          border-color: rgba(232,0,28,0.25);
          box-shadow: 0 12px 28px rgba(0,0,0,0.08);
        }
        .vm-c-icon-wrap {
          transition: all 0.22s cubic-bezier(0.22,1,0.36,1);
        }
        .vm-c-icon-card:hover .vm-c-icon-wrap {
          background: #b60a01;
          color: #fff;
        }
      `}</style>

      <section ref={sectionRef} className="vm-contact relative bg-[#ffffff] overflow-hidden mt-20"
      id="contact">
        <div className="absolute top-0 left-0 w-[40%] h-full bg-[#ffffff] hidden lg:block" style={{clipPath: "polygon(0 0, 88% 0, 76% 100%, 0% 100%)"}} />

        <div className="absolute top-10 left-[6%] w-20 h-20 bg-[#ffbc0b] rounded-full opacity-15 vm-c-badge-float hidden lg:block" />
        <div className="absolute bottom-16 left-[18%] w-10 h-10 bg-[#b60a01] rounded-full opacity-10 vm-c-badge-float hidden lg:block" style={{animationDelay: "1s"}} />

        <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 py-16 sm:py-20 lg:py-28 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-12">

          <div className="relative z-10 max-w-[480px]">
            {visible && (
              <div className="vm-c-up-1 inline-flex items-center gap-2 bg-red-50 border border-red-100 text-[#E8001C] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b60a01] animate-pulse inline-block" />
                Let's Talk Business
              </div>
            )}

            {visible && (
              <h2 className="vm-contact-display vm-c-up-2 text-[2.4rem] sm:text-[3rem] lg:text-[3.4rem] leading-[1.1] font-extrabold text-gray-900 mb-5">
                Ready to Stock Up at{" "}
                <span className="vm-c-underline text-[#E8001C]">Wholesale Prices</span>
                ?
              </h2>
            )}

            {visible && (
              <p className="vm-c-up-3 text-gray-500 text-base sm:text-lg leading-relaxed mb-8">
                Whether you're furnishing a home or restocking a business, our team is ready to help you find exactly what you need.
              </p>
            )}

            {visible && (
              <div className="vm-c-up-4 flex flex-wrap gap-3">
                <button className="vm-c-cta bg-[#b60a01] hover:bg-[#c0001a] text-white font-bold text-sm px-7 py-3.5 rounded-xl border-none cursor-pointer">
                  Shop the Store →
                </button>
                <button className="vm-c-outline border-2 border-gray-200 text-gray-800 font-semibold text-sm px-7 py-3.5 rounded-xl bg-transparent cursor-pointer">
                  Get in Touch
                </button>
              </div>
            )}
          </div>

          <div className="relative z-10 w-full lg:w-auto flex flex-col gap-4">
            {CONTACT_CARDS.map((c, i) => (
              <div
                key={i}
                target={c.label === "Visit Us" ? "_blank" : undefined}
                rel={c.label === "Visit Us" ? "noopener noreferrer" : undefined}
                className="vm-c-card vm-c-icon-card flex items-center gap-4 cursor-pointer bg-white border border-gray-100 rounded-2xl px-6 py-5 shadow-sm no-underline w-full lg:w-[360px]"
              >
                <div className="vm-c-icon-wrap shrink-0 w-12 h-12 rounded-xl bg-red-50 text-[#E8001C] flex items-center justify-center">
                  {c.icon}
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold mb-0.5">{c.label}</div>
                  <div className="text-gray-900 text-[15px] font-semibold leading-snug">{c.value}</div>
                </div>
              </div>
            ))}

            {visible && (
              <div className="vm-c-up-4 flex items-center gap-2 mt-2 bg-white border border-gray-100 rounded-full px-4 py-2 shadow-sm self-start">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[12px] text-gray-500 font-medium">A project of Ashraf &amp; Sons Traders</span>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}