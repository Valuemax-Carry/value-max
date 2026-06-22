"use client";

export default function CartDrawer({ cartOpen, setCartOpen, cartItems, totalItems, totalPrice }) {
  return (
    <>
      <div
        onClick={() => setCartOpen(false)}
        className={`fixed inset-0 bg-black/30 z-[1100] transition-opacity duration-300 ${
          cartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`fixed top-0 right-0 w-[360px] max-w-[95vw] h-screen bg-white z-[1200] flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">
          <div className="text-base font-bold text-gray-900">
            🛒 Your Cart{" "}
            <span className="text-[#E8001C] font-extrabold">({totalItems})</span>
          </div>
          <button
            onClick={() => setCartOpen(false)}
            className="w-8 h-8 bg-gray-100 hover:bg-red-50 hover:text-[#E8001C] text-gray-500 rounded-lg flex items-center justify-center transition-colors duration-150 cursor-pointer border-none"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-3">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-3 py-3 border-b border-gray-50">
              <div className="w-[46px] h-[46px] bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-center text-[22px] shrink-0">
                {item.img}
              </div>
              <div className="flex-1">
                <div className="text-[13px] font-semibold text-gray-900">{item.name}</div>
                <div className="text-[12px] font-semibold text-[#E8001C] mt-0.5">
                  Rs. {(item.price * item.qty).toLocaleString()}
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-gray-100 rounded-lg px-2 py-1 text-[13px] font-semibold text-gray-700">
                <button className="text-[#E8001C] text-base w-[18px] h-[18px] flex items-center justify-center hover:scale-125 transition-transform duration-150 cursor-pointer border-none bg-transparent">−</button>
                {item.qty}
                <button className="text-[#E8001C] text-base w-[18px] h-[18px] flex items-center justify-center hover:scale-125 transition-transform duration-150 cursor-pointer border-none bg-transparent">+</button>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t-2 border-gray-100 px-5 py-4">
          <div className="flex justify-between items-center mb-3.5">
            <span className="text-[13px] text-gray-500">Total Amount</span>
            <span className="text-xl font-extrabold text-gray-900">
              Rs. {totalPrice.toLocaleString()}{" "}
              <span className="text-[13px] font-medium text-gray-400">PKR</span>
            </span>
          </div>
          <button className="w-full bg-[#E8001C] hover:bg-[#c0001a] hover:-translate-y-px active:translate-y-0 text-white font-bold text-sm py-3.5 rounded-xl transition-all duration-200 tracking-wide cursor-pointer border-none">
            Proceed to Checkout →
          </button>
        </div>
      </div>
    </>
  );
}