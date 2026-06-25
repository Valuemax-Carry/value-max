export default function PolicyPage() {
  return (
    <section className="min-h-screen bg-[#fff7f3] text-[#1f1f1f] py-20">
      <div className="max-w-[960px] mx-auto px-6 sm:px-10">
        <div className="bg-white shadow-[0_25px_80px_rgba(182,10,1,0.08)] rounded-[30px] border border-[#fde7e7] overflow-hidden">
          <div className="bg-[#b60a01] py-10 px-6 sm:px-10 text-white">
            <p className="text-sm uppercase tracking-[0.28em] text-[#ffdeb5] font-semibold mb-4">Policy</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">Privacy and Terms</h1>
            <p className="mt-4 text-sm sm:text-base text-[#ffe8d9] max-w-2xl">This page explains how ValueMax collects, uses, and protects your data while using our online store.</p>
          </div>

          <div className="px-6 sm:px-10 py-10 space-y-8 text-sm text-[#4a4a4a] leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-[#b60a01] mb-3">Data We Collect</h2>
              <p>We collect only the information you provide when placing an order or contacting customer support. This may include your name, phone number, email address, delivery address, and order details.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#b60a01] mb-3">How We Use Your Information</h2>
              <p>We use your data to process orders, manage deliveries, respond to inquiries, and improve the shopping experience. We do not sell your personal information to third parties.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#b60a01] mb-3">Security</h2>
              <p>We maintain secure systems and follow industry best practices to protect your data. Sensitive information is handled with care and only shared with trusted delivery partners when required to complete your order.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#b60a01] mb-3">Cookies & Analytics</h2>
              <p>Our website may use cookies and analytics tools to understand how customers interact with the site, improve performance, and deliver a seamless browsing experience.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#b60a01] mb-3">Contact</h2>
              <p>If you have questions about this policy, please contact us at <a href="mailto:isaamir81@gmail.com" className="font-semibold text-[#b60a01]">isaamir81@gmail.com</a> or call +03085518210.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
