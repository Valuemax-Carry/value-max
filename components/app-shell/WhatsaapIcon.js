"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "+03085518210";
const WHATSAPP_MESSAGE = "Hello! I'm interested in shopping at ValueMax Cash & Carry.";

export default function WhatsappIcon() {
  const [hovered, setHovered] = useState(false);

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      <style>{`
        @keyframes wa-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes wa-ping {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes wa-fadein {
          from { opacity: 0; transform: translateX(8px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .wa-float {
          animation: wa-bounce 3s ease-in-out infinite;
        }
        .wa-float:hover {
          animation: none;
          transform: scale(1.1);
          transition: transform 0.2s cubic-bezier(0.22,1,0.36,1);
        }
        .wa-ring {
          animation: wa-ping 1.8s ease-out infinite;
        }
        .wa-tooltip {
          animation: wa-fadein 0.2s cubic-bezier(0.22,1,0.36,1) both;
        }
      `}</style>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="wa-float fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-14 h-14 rounded-full shadow-xl cursor-pointer no-underline"
        style={{ background: "#25D366" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span className="wa-ring absolute inset-0 rounded-full" style={{ background: "#25D366", zIndex: -1 }} />

        {hovered && (
          <span className="wa-tooltip absolute right-16 whitespace-nowrap bg-gray-900 text-white text-[12px] font-semibold px-3.5 py-2 rounded-lg shadow-lg pointer-events-none">
            Chat with us
            <span className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-0 h-0" style={{borderTop: "5px solid transparent", borderBottom: "5px solid transparent", borderLeft: "5px solid #111827"}} />
          </span>
        )}

        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 2C8.268 2 2 8.268 2 16c0 2.496.651 4.84 1.788 6.876L2 30l7.347-1.766A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2z"
            fill="white"
          />
          <path
            d="M16 4.5C9.596 4.5 4.5 9.596 4.5 16c0 2.214.627 4.282 1.712 6.04l.243.39-1.03 3.758 3.87-1.015.378.222A11.47 11.47 0 0 0 16 27.5c6.404 0 11.5-5.096 11.5-11.5S22.404 4.5 16 4.5z"
            fill="#25D366"
          />
          <path
            d="M11.93 9.5c-.28-.63-.576-.642-.842-.653-.218-.01-.468-.009-.718-.009s-.655.093-.998.468c-.343.374-1.31 1.28-1.31 3.12s1.342 3.62 1.53 3.87c.187.25 2.6 4.15 6.41 5.65 3.17 1.25 3.81 1 4.5.937.686-.063 2.213-.905 2.525-1.78.312-.874.312-1.623.218-1.78-.093-.156-.343-.25-.718-.437s-2.213-1.093-2.556-1.218c-.343-.124-.593-.187-.843.188-.25.374-.967 1.218-1.186 1.468-.218.25-.437.281-.812.094-.374-.188-1.58-.583-3.01-1.856-1.112-.992-1.862-2.217-2.08-2.592-.218-.374-.023-.576.164-.762.168-.168.375-.437.562-.656.187-.218.25-.374.375-.624.124-.25.062-.468-.031-.656-.094-.187-.82-2.037-1.158-2.78z"
            fill="white"
          />
        </svg>
      </a>
    </>
  );
}