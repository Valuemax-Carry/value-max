"use client";

import { useEffect, useRef, useState } from "react";

const CONTACT_CARDS = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: "Call Us",
    value: "+92 300 1234567",
    href: "tel:+923001234567",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    label: "Email Us",
    value: "hello@valuemax.pk",
    href: "mailto:hello@valuemax.pk",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Visit Us",
    value: "Main Boulevard, Lahore, Pakistan",
    href: "https://maps.google.com",
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
        @keyframes drift {
          0%, 100% { transform: translate(0,0) rotate(0deg); }
          50% { transform: translate(10px,-12px) rotate(6deg); }
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
        .vm-c-card:nth-child(1) { animation-delay: 0.55s; }
        .vm-c-card:nth-child(2) { animation-delay: 0.7s; }
        .vm-c-card:nth-child(3) { animation-delay: 0.85s; }

        .vm-c-shimmer {
          background: linear-gradient(90deg, #E8001C 0%, #FFD100 40%, #E8001C 60%, #FFD100 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .vm-c-badge-float { animation: floatBadge 3.4s ease-in-out infinite; }
        .vm-c-drift { animation: drift 6s ease-in-out infinite; }

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
          background: #FFD100;
          border-radius: 3px;
        }

        .vm-c-icon-card {
          transition: all 0.22s cubic-bezier(0.22,1,0.36,1);
        }
        .vm-c-icon-card:hover {
          transform: translateY(-4px);
          border-color: rgba(232,0,28,0.4);
          box-shadow: 0 12px 28px rgba(0,0,0,0.35);
        }
        .vm-c-icon-wrap {
          transition: all 0.22s cubic-bezier(0.22,1,0.36,1);
        }
        .vm-c-icon-card:hover .vm-c-icon-wrap {
          background: #E8001C;
          color: #fff;
        }
      `}</style>

      <section ref={sectionRef} className="vm-contact relative bg-[#1a1a1a] overflow-hidden mt-20">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px"}} />

        <div className="absolute top-10 right-[8%] w-24 h-24 bg-[#E8001C] rounded-full opacity-20 blur-2xl vm-c-drift" />
        <div className="absolute bottom-10 left-[6%] w-32 h-32 bg-[#FFD100] rounded-full opacity-10 blur-2xl vm-c-drift" style={{animationDelay: "1s"}} />
        <div className="absolute top-1/2 left-[14%] w-3 h-3 bg-[#FFD100] rounded-full opacity-40 vm-c-badge-float" />
        <div className="absolute bottom-1/3 right-[18%] w-2 h-2 bg-[#E8001C] rounded-full opacity-50 vm-c-badge-float" style={{animationDelay: "0.6s"}} />

        <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 py-20 sm:py-28 flex flex-col items-center text-center">

          {visible && (
            <div className="vm-c-up-1 inline-flex items-center gap-2 bg-white/5 border border-white/10 text-[#FFD100] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-7 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD100] animate-pulse inline-block" />
              Let's Talk Business
            </div>
          )}

          {visible && (
            <h2 className="vm-contact-display vm-c-up-2 text-[2.4rem] sm:text-[3.2rem] lg:text-[3.8rem] leading-[1.08] font-extrabold text-white mb-5 max-w-3xl">
              Ready to Stock Up at{" "}
              <span className="vm-c-underline vm-c-shimmer">Wholesale Prices?</span>
            </h2>
          )}

          {visible && (
            <p className="vm-c-up-3 text-gray-400 text-base sm:text-lg leading-relaxed max-w-[520px] mb-10">
              Whether you're furnishing a home or restocking a business, our team is ready to help you find exactly what you need.
            </p>
          )}

          {visible && (
            <div className="vm-c-up-4 flex flex-wrap justify-center gap-4 mb-16">
              <button className="vm-c-cta bg-[#E8001C] hover:bg-[#c0001a] text-white font-bold text-sm px-8 py-4 rounded-xl border-none cursor-pointer">
                Shop the Store →
              </button>
              <button className="vm-c-outline border-2 border-white/20 text-white font-semibold text-sm px-8 py-4 rounded-xl bg-transparent cursor-pointer">
                Get in Touch
              </button>
            </div>
          )}

          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-5">
            {CONTACT_CARDS.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={c.label === "Visit Us" ? "_blank" : undefined}
                rel={c.label === "Visit Us" ? "noopener noreferrer" : undefined}
                className="vm-c-card vm-c-icon-card flex flex-col items-center gap-3 bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-8 no-underline"
              >
                <div className="vm-c-icon-wrap w-14 h-14 rounded-xl bg-white/10 text-[#FFD100] flex items-center justify-center">
                  {c.icon}
                </div>
                <div className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold">{c.label}</div>
                <div className="text-white text-[15px] font-semibold leading-snug">{c.value}</div>
              </a>
            ))}
          </div>

          {visible && (
            <div className="vm-c-up-4 flex items-center gap-2 mt-14 bg-white/5 border border-white/10 rounded-full px-5 py-2.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[12px] text-gray-300 font-medium">A project of Ashraf &amp; Sons Traders</span>
            </div>
          )}
        </div>
      </section>
    </>
  );
}