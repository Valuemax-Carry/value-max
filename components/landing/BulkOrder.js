"use client";

import { useState } from "react";

export default function BulkOrder() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });
  const [done, setDone] = useState(false);

  const WHATSAPP = "03085518210";
  const EMAIL = "isaamir81@gmail.com";

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Bulk order request%0AName: ${encodeURIComponent(form.name)}%0ACompany: ${encodeURIComponent(form.company)}%0AEmail: ${encodeURIComponent(form.email)}%0APhone: ${encodeURIComponent(form.phone)}%0AProduct: ${encodeURIComponent(form.product)}%0AQuantity: ${encodeURIComponent(form.quantity)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${body}`, "_blank");
    setDone(true);
    setForm({
      name: "",
      company: "",
      email: "",
      phone: "",
      product: "",
      quantity: "",
      message: "",
    });
    setTimeout(() => setDone(false), 4000);
  };

  const perks = [
    {
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Dedicated Support",
      desc: "Personal procurement manager for every bulk account",
    },
    {
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: "Wholesale Pricing",
      desc: "Special rates and credit terms approved per account",
    },
    {
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="1" y="3" width="15" height="13" rx="2" />
          <path d="M16 8h4l3 3v5h-7V8z" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
      title: "Nationwide Delivery",
      desc: "Priority dispatch to every corner of Pakistan",
    },
    {
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "24-Hour Response",
      desc: "Fast turnaround on every quote and inquiry",
    },
    {
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      title: "Trusted Partner",
      desc: "A proud project of Ashraf & Sons Traders",
    },
    {
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 11 12 14 22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      ),
      title: "10,000+ Products",
      desc: "Everything your business needs under one roof",
    },
  ];

  const fields = [
    {
      name: "name",
      label: "Your name",
      placeholder: "Ali Hassan",
      required: true,
      type: "text",
      half: true,
    },
    {
      name: "company",
      label: "Company / Business",
      placeholder: "Business name",
      type: "text",
      half: true,
    },
    {
      name: "email",
      label: "Email address",
      placeholder: "you@company.com",
      type: "email",
      half: true,
    },
    {
      name: "phone",
      label: "Phone number",
      placeholder: "03xx-xxxxxxx",
      type: "tel",
      half: true,
    },
    {
      name: "product",
      label: "Product name / SKU",
      placeholder: "e.g. Nestle Milk 1L, Rice 25kg",
      type: "text",
      half: false,
    },
    {
      name: "quantity",
      label: "Estimated quantity",
      placeholder: "e.g. 500 units / 20 cartons",
      type: "text",
      half: false,
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Playfair+Display:wght@700;800&display=swap');

        @keyframes boFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes boSlideRight {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes boPulseRing {
          0% { box-shadow: 0 0 0 0 rgba(182,10,1,0.4); }
          70% { box-shadow: 0 0 0 10px rgba(182,10,1,0); }
          100% { box-shadow: 0 0 0 0 rgba(182,10,1,0); }
        }
        @keyframes boFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes boDotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        @keyframes boSuccessPop {
          from { opacity: 0; transform: scale(0.94) translateY(6px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .bo-section {
          font-family: 'Poppins', sans-serif;
          background: #ffffff;
          padding: 72px 0;
          overflow: hidden;
        }

        .bo-display { font-family: 'Playfair Display', serif; }

        .bo-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .bo-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff0f0;
          border: 1px solid #ffd5d5;
          color: #E8001C;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 20px;
          animation: boFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s both;
        }

        .bo-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #b60a01;
          animation: boDotPulse 1.8s ease-in-out infinite;
        }

        .bo-card {
          background: #ffffff;
          border: 1px solid #f5e0e0;
          border-radius: 24px;
          padding: 56px 52px;
          display: flex;
          gap: 52px;
          align-items: stretch;
          position: relative;
          overflow: hidden;
          animation: boFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.05s both;
        }

        .bo-card::before {
          content: '';
          position: absolute;
          top: 0; right: 0;
          width: 38%;
          height: 100%;
          background: #fff8f8;
          clip-path: polygon(14% 0, 100% 0, 100% 100%, 0% 100%);
          pointer-events: none;
          z-index: 0;
        }

        .bo-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #b60a01 0%, #FFD100 60%, #b60a01 100%);
          border-radius: 24px 24px 0 0;
        }

        .bo-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 1;
        }

        .bo-title {
          font-size: 36px;
          font-weight: 800;
          color: #111;
          line-height: 1.1;
          margin: 0 0 12px;
          animation: boFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both;
        }

        .bo-title-accent {
          color: #b60a01;
          position: relative;
          display: inline-block;
        }
        .bo-title-accent::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0; right: 0;
          height: 4px;
          background: #FFD100;
          border-radius: 3px;
          transform-origin: left;
          animation: boSlideRight 0.6s cubic-bezier(0.22,1,0.36,1) 0.85s both;
        }

        .bo-desc {
          font-size: 14px;
          color: #666;
          line-height: 1.75;
          margin: 0 0 32px;
          max-width: 420px;
          animation: boFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.3s both;
        }

        .bo-perks-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 36px;
          animation: boFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.4s both;
        }

        .bo-perk {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          padding: 14px 16px;
          background: #ffffff;
          border: 1px solid #f0e0e0;
          border-radius: 14px;
          transition: all 0.2s cubic-bezier(0.22,1,0.36,1);
        }
        .bo-perk:hover {
          border-color: #f5baba;
          box-shadow: 0 4px 16px rgba(182,10,1,0.08);
          transform: translateY(-2px);
        }

        .bo-perk-icon {
          width: 36px;
          height: 36px;
          background: #fff0f0;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #b60a01;
          flex-shrink: 0;
        }

        .bo-perk-title {
          font-size: 12px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 2px;
        }

        .bo-perk-desc {
          font-size: 11px;
          color: #888;
          line-height: 1.5;
        }

        .bo-divider {
          height: 1px;
          background: linear-gradient(90deg, #fde7e7 0%, transparent 100%);
          margin-bottom: 24px;
          animation: boFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.5s both;
        }

        .bo-contact-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #bbb;
          margin-bottom: 12px;
          animation: boFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.55s both;
        }

        .bo-btns {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          animation: boFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.6s both;
        }

        .bo-btn-wa {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #25D366;
          color: #fff;
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 700;
          padding: 10px 20px;
          border-radius: 12px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.22s cubic-bezier(0.22,1,0.36,1);
        }
        .bo-btn-wa:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37,211,102,0.3);
        }

        .bo-btn-email {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #b60a01;
          color: #fff;
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 700;
          padding: 10px 20px;
          border-radius: 12px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.22s cubic-bezier(0.22,1,0.36,1);
        }
        .bo-btn-email:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(182,10,1,0.28);
          background: #9a0800;
        }

        .bo-form-wrap {
          width: 420px;
          flex-shrink: 0;
          background: #ffffff;
          border: 1px solid #f0e0e0;
          border-radius: 20px;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 1;
          animation: boFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.25s both;
        }

        .bo-form-badge {
          position: absolute;
          top: -14px;
          right: 24px;
          background: #FFD100;
          color: #7a5800;
          font-size: 11px;
          font-weight: 800;
          padding: 5px 14px;
          border-radius: 100px;
          letter-spacing: 0.04em;
          animation: boFloat 3s ease-in-out infinite;
        }

        .bo-form-title {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 800;
          color: #111;
          margin: 0 0 4px;
        }

        .bo-form-sub {
          font-size: 12px;
          color: #999;
          margin: 0 0 24px;
          line-height: 1.6;
        }

        .bo-fields-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 12px;
        }

        .bo-field-full {
          grid-column: 1 / -1;
        }

        .bo-field {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .bo-label {
          font-size: 11px;
          font-weight: 600;
          color: #aaa;
          letter-spacing: 0.04em;
        }

        .bo-input {
          background: #fafafa;
          border: 1.5px solid #f0e0e0;
          border-radius: 10px;
          padding: 9px 13px;
          font-size: 13px;
          font-family: 'Poppins', sans-serif;
          color: #111;
          outline: none;
          transition: border-color 0.18s, background 0.18s, box-shadow 0.18s;
          width: 100%;
          box-sizing: border-box;
        }
        .bo-input::placeholder { color: #ccc; }
        .bo-input:focus {
          border-color: #b60a01;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(182,10,1,0.08);
        }

        .bo-textarea {
          resize: none;
          line-height: 1.6;
        }

        .bo-submit {
          margin-top: 16px;
          width: 100%;
          background: #b60a01;
          color: #fff;
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          font-weight: 700;
          padding: 13px;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.22s cubic-bezier(0.22,1,0.36,1);
          animation: boPulseRing 2.5s ease-in-out 2s infinite;
        }
        .bo-submit:hover {
          background: #9a0800;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(182,10,1,0.28);
        }
        .bo-submit:active { transform: translateY(0); }

        .bo-success {
          margin-top: 12px;
          background: #f0faf5;
          border: 1px solid #b8e8cf;
          border-radius: 10px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: #1a6e40;
          font-weight: 500;
          animation: boSuccessPop 0.4s cubic-bezier(0.22,1,0.36,1) both;
        }

        .bo-trust-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 14px;
          font-size: 11px;
          color: #bbb;
        }

        .bo-trust-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #FFD100;
          display: inline-block;
        }

        @media (max-width: 1024px) {
          .bo-card {
            flex-direction: column;
            padding: 36px 28px;
          }
          .bo-card::before { display: none; }
          .bo-form-wrap { width: 100%; }
          .bo-perks-grid { grid-template-columns: 1fr 1fr; }
          .bo-inner { padding: 0 20px; }
        }

        @media (max-width: 600px) {
          .bo-title { font-size: 26px; }
          .bo-perks-grid { grid-template-columns: 1fr; }
          .bo-fields-grid { grid-template-columns: 1fr; }
          .bo-field-full { grid-column: 1; }
          .bo-section { padding: 48px 0; }
          .bo-card { padding: 28px 20px; }
        }
      `}</style>

      <section className="bo-section" id="bulk-order">
        <div className="bo-inner">
          <div className="bo-eyebrow">
            <span className="bo-eyebrow-dot" />
            Wholesale & Bulk Orders
          </div>

          <div className="bo-card">
            <div className="bo-left">
              <h2 className="bo-title bo-display">
                Bulk Orders & <span className="bo-title-accent">Wholesale</span>
                <br />
                Pricing
              </h2>

              <p className="bo-desc">
                Stock up on fresh groceries and everyday essentials with our
                bulk ordering service. We offer competitive prices, dependable
                supply, and fast delivery for businesses, restaurants,
                institutions, and large households across Pakistan.{" "}
              </p>

              <div className="bo-perks-grid">
                {perks.map((p, i) => (
                  <div className="bo-perk" key={i}>
                    <span className="bo-perk-icon">{p.icon}</span>
                    <div>
                      <div className="bo-perk-title">{p.title}</div>
                      <div className="bo-perk-desc">{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bo-divider" />
              <p className="bo-contact-label">Reach us directly</p>
              <div className="bo-btns">
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bo-btn-wa"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.112 1.523 5.844L.057 23.886a.5.5 0 0 0 .61.61l6.042-1.466A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 0 1-5.012-1.374l-.358-.213-3.724.903.92-3.635-.234-.374A9.818 9.818 0 1 1 12 21.818z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href={`mailto:${EMAIL}?subject=Bulk%20Order%20Inquiry`}
                  className="bo-btn-email"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Email Us
                </a>
              </div>
            </div>

            <div className="bo-form-wrap">
              <span className="bo-form-badge">✦ Get a Quote</span>
              <p className="bo-form-title">Request a Bulk Quote</p>
              <p className="bo-form-sub">
                Fill in your details and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="bo-fields-grid">
                  {fields.map((f) => (
                    <div
                      key={f.name}
                      className={`bo-field${f.half ? "" : " bo-field-full"}`}
                    >
                      <label className="bo-label">
                        {f.label}
                        {f.required ? " *" : ""}
                      </label>
                      <input
                        name={f.name}
                        value={form[f.name]}
                        onChange={handleChange}
                        placeholder={f.placeholder}
                        type={f.type}
                        required={!!f.required}
                        className="bo-input"
                      />
                    </div>
                  ))}

                  <div className="bo-field bo-field-full">
                    <label className="bo-label">Additional details</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Delivery location, packaging preference, timeline..."
                      rows={3}
                      className="bo-input bo-textarea"
                    />
                  </div>
                </div>

                <button type="submit" className="bo-submit">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Request Bulk Quote
                </button>

                {done && (
                  <div className="bo-success">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1a6e40"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Thanks — we'll get back to you shortly.
                  </div>
                )}

                <div className="bo-trust-strip">
                  <span className="bo-trust-dot" />
                  <span>
                    A project of{" "}
                    <strong style={{ color: "#555" }}>
                      Ashraf &amp; Sons Traders
                    </strong>
                  </span>
                  <span className="bo-trust-dot" />
                  <span>Pakistan's First Cash &amp; Carry</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
