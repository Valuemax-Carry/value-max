"use client";

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';

const LOYALTY_PERKS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: "Earn Points Every Visit",
    desc: "Collect 1 point for every Rs. 100 spent across all categories.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
      </svg>
    ),
    title: "Exclusive Member Discounts",
    desc: "Unlock up to 15% off on selected items every week, just for members.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    title: "Free Home Delivery",
    desc: "Members with Gold status enjoy free delivery on all orders above Rs. 5,000.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
    title: "Birthday Bonus",
    desc: "Double points all month on your birthday — our treat to you.",
  },
]

const WHATSAPP_NUMBER = "03085518210"

function getTimeUntil(targetDate) {
  const now = new Date().getTime()
  const target = new Date(targetDate).getTime()
  const diff = target - now
  if (diff <= 0) return { days: 0, h: 0, m: 0, s: 0 }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const s = Math.floor((diff % (1000 * 60)) / 1000)
  return { days, h, m, s }
}

export default function Deals() {
  const [visible, setVisible] = useState(false)
  const [luckyTime, setLuckyTime] = useState({ days: 0, h: 0, m: 0, s: 0 })

  useEffect(() => {
    setLuckyTime(getTimeUntil("2026-07-18T00:00:00"))
    const t = setTimeout(() => setVisible(true), 60)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setLuckyTime(getTimeUntil("2026-07-18T00:00:00"))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const pad = n => String(n).padStart(2, '0')

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;800&display=swap');
        .vm-deals { font-family: 'Poppins', sans-serif; }
        .vm-display { font-family: 'Playfair Display', serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
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
        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(182,10,1,0.4); }
          70% { box-shadow: 0 0 0 12px rgba(182,10,1,0); }
          100% { box-shadow: 0 0 0 0 rgba(182,10,1,0); }
        }
        @keyframes shimmer {
          0% { background-position: -600px 0; }
          100% { background-position: 600px 0; }
        }
        @keyframes floatBike {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .vm-fu-1 { animation: fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.08s both; }
        .vm-fu-2 { animation: fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.2s both; }
        .vm-fu-3 { animation: fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.32s both; }
        .vm-fu-4 { animation: fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.44s both; }
        .vm-fi-5 { animation: fadeIn 0.8s ease 0.56s both; }
        .vm-underline { display: inline-block; position: relative; }
        .vm-underline::after {
          content: '';
          position: absolute;
          bottom: -3px; left: 0; right: 0;
          height: 5px;
          background: #FFD100;
          border-radius: 3px;
          transform-origin: left;
          animation: slideRight 0.55s cubic-bezier(0.22,1,0.36,1) 0.75s both;
        }
        .loyalty-card-wrap {
          background: linear-gradient(135deg, #1a0000 0%, #b60a01 50%, #e8001c 100%);
          border-radius: 24px;
          position: relative;
          overflow: hidden;
          padding: 40px 44px;
        }
        .loyalty-card-wrap::before {
          content: '';
          position: absolute;
          top: -80px; right: -80px;
          width: 300px; height: 300px;
          border-radius: 50%;
          background: rgba(255,209,0,0.08);
        }
        .loyalty-card-wrap::after {
          content: '';
          position: absolute;
          bottom: -60px; left: 20px;
          width: 200px; height: 200px;
          border-radius: 50%;
          background: rgba(255,255,255,0.04);
        }
        .loyalty-card-visual {
          background: linear-gradient(135deg, #2a0000 0%, #7a0600 60%, #b60a01 100%);
          border-radius: 18px;
          border: 1.5px solid rgba(255,209,0,0.35);
          padding: 28px 28px 24px;
          position: relative;
          overflow: hidden;
          min-height: 200px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1);
        }
        .loyalty-card-visual::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,209,0,0.6), transparent);
        }
        .loyalty-shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%);
          background-size: 600px 100%;
          animation: shimmer 3s infinite linear;
        }
        .perk-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(182,10,1,0.08);
          border: 1.5px solid rgba(182,10,1,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #b60a01;
          flex-shrink: 0;
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
        }
        .perk-card:hover .perk-icon-wrap {
          background: #b60a01;
          border-color: #b60a01;
          color: #fff;
          transform: scale(1.08);
        }
        .perk-card {
          transition: transform 0.25s cubic-bezier(0.22,1,0.36,1);
        }
        .perk-card:hover { transform: translateY(-3px); }
        @media (max-width: 768px) {
          .loyalty-card-wrap { padding: 28px 20px; }
          .loyalty-card-visual { min-height: 160px; padding: 22px 20px 18px; }
        }
        .vm-primary-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #b60a01;
          color: #fff;
          font-weight: 700;
          font-size: 13px;
          padding: 12px 26px;
          border-radius: 12px;
          border: 2px solid #FFD100;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 6px 20px rgba(182,10,1,0.28);
          text-decoration: none;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
        }
        .vm-primary-btn:hover {
          background: #9a0800;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(182,10,1,0.36);
        }
        .vm-ghost-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #FFD100;
          font-weight: 700;
          font-size: 13px;
          padding: 11px 24px;
          border-radius: 12px;
          border: 2px solid rgba(255,209,0,0.6);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
          text-decoration: none;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
        }
        .vm-ghost-btn:hover {
          background: #FFD100;
          color: #7a0600;
          transform: translateY(-2px);
        }
        .banner-hero {
          background: linear-gradient(135deg, #0d0000 0%, #1a0000 35%, #6b0000 70%, #b60a01 100%);
          position: relative;
          overflow: hidden;
        }
        .banner-hero::before {
          content: '';
          position: absolute;
          top: -120px; right: -120px;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: rgba(255,209,0,0.06);
          pointer-events: none;
        }
        .banner-hero::after {
          content: '';
          position: absolute;
          bottom: -100px; left: -80px;
          width: 380px; height: 380px;
          border-radius: 50%;
          background: rgba(255,255,255,0.03);
          pointer-events: none;
        }
        .pulse-dot { animation: pulse-ring 2s ease infinite; }
        .lucky-section {
          background: linear-gradient(135deg, #0d0000 0%, #1a0000 30%, #6b0000 65%, #b60a01 100%);
          position: relative;
          overflow: hidden;
        }
        .lucky-section::before {
          content: '';
          position: absolute;
          top: -100px; right: -100px;
          width: 450px; height: 450px;
          border-radius: 50%;
          background: rgba(255,209,0,0.05);
          pointer-events: none;
        }
        .lucky-section::after {
          content: '';
          position: absolute;
          bottom: -80px; left: -60px;
          width: 320px; height: 320px;
          border-radius: 50%;
          background: rgba(255,255,255,0.03);
          pointer-events: none;
        }
        .bike-float { animation: floatBike 3s ease-in-out infinite; }
        .lucky-shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%);
          background-size: 600px 100%;
          animation: shimmer 3s infinite linear;
          pointer-events: none;
        }
        .time-block {
          background: rgba(255,255,255,0.08);
          border: 1.5px solid rgba(255,209,0,0.3);
          border-radius: 16px;
          padding: 16px 20px;
          min-width: 72px;
          text-align: center;
          backdrop-filter: blur(4px);
        }
        @media (max-width: 480px) {
          .time-block {
            padding: 12px 14px;
            min-width: 58px;
            border-radius: 12px;
          }
        }
        .countdown-wrapper {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 6px;
          width: 100%;
          max-width: 420px;
        }
        @media (min-width: 1024px) {
          .countdown-wrapper {
            justify-self: start;
          }
        }
      `}</style>

      <div className="vm-deals bg-[#fafafa] min-h-screen" id='deals'>

        <section id="loyalty" className="py-16 sm:py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-10">

            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-[#b60a01] text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest mb-4">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#b60a01" stroke="#b60a01" strokeWidth="1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                Member Rewards
              </div>
              <h2 className="vm-display text-[1.9rem] sm:text-[2.4rem] font-extrabold text-gray-900 mb-3">
                The ValueMax <span className="text-[#b60a01]">Loyalty Card</span>
              </h2>
              <p className="text-gray-500 text-base max-w-[540px] mx-auto leading-relaxed">
                Shop more, earn more. Your loyalty card unlocks exclusive benefits every single visit.
              </p>
            </div>

            <div className="loyalty-card-wrap mb-14">
              <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10">

                <div className="flex-1 text-white text-center lg:text-left">
                  <h3 className="vm-display text-[1.6rem] sm:text-[2rem] font-extrabold text-white mb-4 leading-snug">
                    Your Card. Your Rewards.<br />
                    <span className="text-[#FFD100]">Every Visit Counts.</span>
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-7 max-w-[420px] mx-auto lg:mx-0">
                    Join thousands of Cash & Carry members who save big every month. Apply once, benefit forever.
                  </p>
                  <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8">
                    {[["10,000+","Active Members"],["15%","Max Discount"],["1 Point","Per Rs. 100"]].map(([val, label]) => (
                      <div key={label}>
                        <p className="text-[#FFD100] font-extrabold text-xl leading-none">{val}</p>
                        <p className="text-white/60 text-xs mt-1">{label}</p>
                      </div>
                    ))}
                  </div>
                  <button className="vm-primary-btn" style={{background:'#FFD100',color:'#7a0600',borderColor:'rgba(255,255,255,0.3)'}}>
                    Apply for Your Card
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </div>

                <div className="flex-shrink-0 w-full max-w-[340px]">
                  <div className="loyalty-card-visual">
                    <div className="loyalty-shimmer" />
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-8">
                        <div>
                          <p className="text-white/50 text-[10px] uppercase tracking-widest font-semibold">ValueMax Cash & Carry</p>
                          <p className="text-[#FFD100] font-extrabold text-sm tracking-wider">LOYALTY CARD</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-[#FFD100]/20 border border-[#FFD100]/40 flex items-center justify-center">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFD100" stroke="#FFD100" strokeWidth="0.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        </div>
                      </div>
                      <p className="text-white/40 text-[11px] tracking-[4px] font-mono mb-1">CARD NUMBER</p>
                      <p className="text-white font-mono font-bold tracking-[3px] text-base mb-6">•••• •••• •••• 4821</p>
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-white/40 text-[10px] uppercase tracking-widest">Member Since</p>
                          <p className="text-white font-semibold text-sm">25th June 2025</p>
                        </div>
                        <div className="text-right">
                          <p className="text-white/40 text-[10px] uppercase tracking-widest">Points</p>
                          <p className="text-[#FFD100] font-extrabold text-lg leading-none">2,480</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {LOYALTY_PERKS.map((perk) => (
                <div key={perk.title} className="perk-card bg-[#fafafa] border border-gray-100 rounded-2xl p-6 hover:border-[#b60a01]/20 hover:bg-white hover:shadow-sm transition-all duration-200">
                  <div className="perk-icon-wrap mb-4">
                    {perk.icon}
                  </div>
                  <h4 className="text-gray-900 font-bold text-[14px] mb-2 leading-snug">{perk.title}</h4>
                  <p className="text-gray-400 text-[13px] leading-relaxed">{perk.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        <section id="lucky-draw" className="lucky-section py-20 sm:py-28">
          <div className="lucky-shimmer" />
          <div className="max-w-[1280px] mx-auto px-6 sm:px-10 relative z-10">

            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-[#FFD100]/30 text-[#FFD100] text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
                <span className="w-2 h-2 rounded-full bg-[#FFD100] pulse-dot inline-block" />
                Grand Lucky Draw
              </div>
              <h2 className="vm-display text-[2rem] sm:text-[2.8rem] lg:text-[3.2rem] font-extrabold text-white leading-[1.1] mb-4">
                Win a Brand New
                <br />
                <span className="text-[#FFD100]">Motorcycle — Free!</span>
              </h2>
              <p className="text-white/65 text-base sm:text-lg max-w-[540px] mx-auto leading-relaxed">
                Every purchase enters you into our grand lucky draw. One lucky winner takes home a brand new bike on 18 July 2026.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

              <div className="flex-shrink-0 w-full max-w-[420px] mx-auto lg:mx-0">
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#FFD100]/30 bg-white/5 backdrop-blur-sm p-8 flex flex-col items-center">
                  <div className="bike-float mb-4">
                    <Image
                    src={"/BlogBanner/bike.png"}
                    alt='Bike'
                    width={180}
                    height={180}
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-white/50 text-[10px] uppercase tracking-[3px] font-semibold mb-1">Prize</p>
                    <p className="text-[#FFD100] font-extrabold text-lg leading-snug vm-display">Brand New Motorcycle</p>
                    <p className="text-white/40 text-xs mt-1">United CD 70 — Worth Rs. 120,000</p>
                  </div>
                  <div className="mt-6 w-full border-t border-white/10 pt-5 flex items-center justify-between">
                    <div className="text-center">
                      <p className="text-white/40 text-[10px] uppercase tracking-widest">Draw Date</p>
                      <p className="text-[#FFD100] font-bold text-sm mt-0.5">18 July 2026</p>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div className="text-center">
                      <p className="text-white/40 text-[10px] uppercase tracking-widest">Entry</p>
                      <p className="text-white font-bold text-sm mt-0.5">Every Purchase</p>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div className="text-center">
                      <p className="text-white/40 text-[10px] uppercase tracking-widest">Winners</p>
                      <p className="text-[#FFD100] font-bold text-sm mt-0.5">1 Grand Prize</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left w-full">
                <p className="text-white/60 text-xs uppercase tracking-[3px] font-bold mb-6">Draw Countdown</p>

                <div className="countdown-wrapper mx-auto lg:mx-0 mb-10">
                  {[
                    {label:'DAYS', val: luckyTime.days},
                    {label:'HRS', val: luckyTime.h},
                    {label:'MIN', val: luckyTime.m},
                    {label:'SEC', val: luckyTime.s},
                  ].map(({label, val}, i) => (
                    <React.Fragment key={label}>
                      <div className="text-center">
                        <div className="time-block">
                          <span className="block text-[1.6rem] sm:text-[2.2rem] font-extrabold text-white leading-none tracking-tight">{pad(val)}</span>
                        </div>
                        <p className="text-[#FFD100]/70 text-[10px] font-bold uppercase tracking-widest mt-2">{label}</p>
                      </div>
                      {i < 3 && (
                        <span className="text-[#FFD100]/60 text-2xl font-black leading-none pb-6 text-center">{':'}</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <div className="space-y-4 mb-8 mx-auto lg:mx-0">
                  {[
                    "Make any purchase at Cash & Carry to get an entry ticket.",
                    "More you spend, more entries you earn — Rs. 1,000 = 1 entry.",
                    "Draw is live on 18 July 2026 at our Rawalpindi store.",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-[#FFD100] text-[#7a0600] text-[11px] font-extrabold flex items-center justify-center mt-0.5">{i+1}</span>
                      <p className="text-white/70 text-sm leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <Link href="#categories" className="vm-primary-btn">
                    Shop & Enter Now
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I want to know more about the Lucky Draw bike contest.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vm-ghost-btn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.05 2C6.495 2 2 6.495 2 12.05c0 1.978.548 3.868 1.544 5.5L2 22l4.573-1.526A10.02 10.02 0 0 0 12.05 22C17.605 22 22 17.505 22 11.95 22 6.495 17.605 2 12.05 2zm0 18.15a8.121 8.121 0 0 1-4.149-1.137l-.297-.177-3.08 1.027 1.04-3.002-.196-.308A8.149 8.149 0 0 1 3.9 11.95c0-4.493 3.658-8.15 8.15-8.15 4.493 0 8.15 3.657 8.15 8.15 0 4.492-3.657 8.15-8.15 8.15z"/></svg>
                    Ask on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-[#fafafa]">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
            <div className="bg-white border-2 border-gray-100 rounded-2xl px-8 sm:px-12 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-[#b60a01]/20 transition-colors duration-300">
              <div>
                <p className="text-[#b60a01] text-xs font-bold uppercase tracking-widest mb-2">Stay Updated</p>
                <h3 className="vm-display text-[1.5rem] sm:text-[1.8rem] font-extrabold text-gray-900 leading-snug">
                  Never Miss a Deal Again
                </h3>
                <p className="text-gray-400 text-sm mt-2">Get weekly deal alerts sent straight to your WhatsApp.</p>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I want to subscribe to Cash & Carry deals.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="vm-primary-btn whitespace-nowrap flex-shrink-0"
                style={{background:'#25D366',borderColor:'rgba(0,0,0,0.1)'}}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.05 2C6.495 2 2 6.495 2 12.05c0 1.978.548 3.868 1.544 5.5L2 22l4.573-1.526A10.02 10.02 0 0 0 12.05 22C17.605 22 22 17.505 22 11.95 22 6.495 17.605 2 12.05 2zm0 18.15a8.121 8.121 0 0 1-4.149-1.137l-.297-.177-3.08 1.027 1.04-3.002-.196-.308A8.149 8.149 0 0 1 3.9 11.95c0-4.493 3.658-8.15 8.15-8.15 4.493 0 8.15 3.657 8.15 8.15 0 4.492-3.657 8.15-8.15 8.15z"/></svg>
                Subscribe on WhatsApp
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}