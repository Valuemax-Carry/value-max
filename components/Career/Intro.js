"use client";

import { useEffect, useState } from "react";
import ApplyForm from "./ApplyForm";

export default function Intro() {
  const [visible, setVisible] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;800&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRight {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        .vm-careers { font-family: 'Poppins', sans-serif; }
        .vm-display { font-family: 'Playfair Display', serif; }

        .vm-fade-up-1 { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s both; }
        .vm-fade-up-2 { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.25s both; }
        .vm-fade-up-3 { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.4s both; }
        .vm-fade-up-4 { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.55s both; }
        .vm-fade-up-5 { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.7s both; }

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

        .vm-btn-hover {
          transition: all 0.22s cubic-bezier(0.22,1,0.36,1);
        }
        .vm-btn-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(232,0,28,0.28);
        }
        .vm-btn-hover:active { transform: translateY(0); }
      `}</style>

      <section className="vm-careers bg-white pt-10 pb-24 overflow-hidden">
        <div className="max-w-[880px] mx-auto px-5 sm:px-8 text-center">
          <h1 className="vm-display text-[2.2rem] sm:text-[3rem] leading-[1.1] font-extrabold text-gray-900 mb-8 vm-fade-up-1">
            <span className="vm-underline-anim text-[#E8001C]">Careers</span>
          </h1>

          <div className="text-left space-y-6">
            <p className="text-gray-700 text-base sm:text-lg font-semibold vm-fade-up-2">
              Welcome!
              <br />
              <span className="text-gray-500 font-normal">
                We&apos;re delighted that you are interested in a career at{" "}
                <span className="text-gray-900 font-bold">ValueMax Cash &amp; Carry</span>.
              </span>
            </p>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed vm-fade-up-3">
              We are looking for highly motivated, passionate people who want to
              make a difference. Whether you are a student, working in any
              professional domain, retail, or customer handling, or in commercial
              business, the work you do at{" "}
              <span className="text-gray-900 font-bold">ValueMax</span> directly
              touches the lives of people who need it most.
            </p>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed vm-fade-up-3">
              We offer challenging work opportunities. But that is not all. We
              offer you a supportive community, competitive compensation,
              benefits, and an opportunity to advance in your field.
            </p>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed vm-fade-up-4">
              Explore more to find out about your career options with{" "}
              <span className="text-gray-900 font-bold">ValueMax Cash &amp; Carry</span>.
            </p>
          </div>

          <div className="flex justify-center mt-10 vm-fade-up-5">
            <button
              className="vm-btn-hover bg-[#b60a01] hover:bg-[#c0001a] text-white font-bold text-sm px-8 py-3.5 rounded-xl border-none cursor-pointer uppercase tracking-wide"
              onClick={() => {
                setOpenForm(true);
              }}
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>

      <ApplyForm openForm={openForm} setOpenForm={setOpenForm} />
    </>
  );
}