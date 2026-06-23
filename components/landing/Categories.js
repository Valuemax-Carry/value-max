"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CATEGORIES = [
  { id: 1, slug: "personal-care", title: "Personal Care & Hygiene", image: "/ProdcutsBanner/1.png" },
  { id: 2, slug: "cooking-oils", title: "Cooking Oils & Ghee", image: "/ProdcutsBanner/2.png" },
  { id: 3, slug: "staples", title: "Staples & Grains", image: "/ProdcutsBanner/3.png" },
  { id: 4, slug: "beverages", title: "Beverages & Drinks", image: "/ProdcutsBanner/4.png" },
  { id: 5, slug: "snacks", title: "Snacks & Confectionery", image: "/ProdcutsBanner/5.png" },
  { id: 6, slug: "household", title: "Household Cleaners", image: "/ProdcutsBanner/6.png" },
  { id: 7, slug: "dairy", title: "Dairy & Refrigerated", image: "/ProdcutsBanner/7.png" },
  { id: 8, slug: "bakery", title: "Bakery & Bread", image: "/ProdcutsBanner/8.png" },
  { id: 9, slug: "frozen-foods", title: "Frozen Foods", image: "/ProdcutsBanner/9.png" },
  { id: 10, slug: "beverages-hot", title: "Tea, Coffee & Hot Drinks", image: "/ProdcutsBanner/10.png" },
  { id: 11, slug: "baby-care", title: "Baby Care", image: "/ProdcutsBanner/11.png" },
  { id: 12, slug: "pets", title: "Pet Supplies", image: "/ProdcutsBanner/12.png" },
  { id: 13, slug: "personal-hair", title: "Hair Care & Styling", image: "/ProdcutsBanner/13.png" },
  { id: 14, slug: "health", title: "Health & Supplements", image: "/ProdcutsBanner/14.png" },
  { id: 15, slug: "bulk-orders", title: "Bulk Orders & Business", image: "/ProdcutsBanner/15.png" },
];

export default function Categories() {
  const [visible, setVisible] = useState(false);
  const swiperRef = useRef(null);

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

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideRight {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        .vm-display { font-family: 'Playfair Display', serif; }
        .vm-hero { font-family: 'Poppins', sans-serif; }

        .vm-fade-up-1 { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s both; }
        .vm-fade-up-2 { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.25s both; }
        .vm-fade-up-3 { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.4s both; }
        .vm-fade-in-5 { animation: fadeIn 1s ease 0.7s both; }

        .vm-underline-anim {
          display: inline-block;
          position: relative;
        }

        .vm-underline-anim::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 5px;
          background: #FFD100;
          border-radius: 3px;
          transform-origin: left;
          animation: slideRight 0.6s cubic-bezier(0.22,1,0.36,1) 0.8s both;
        }

        .categories-swiper {
          padding-bottom: 60px !important;
          padding-left: 4px !important;
          padding-right: 4px !important;
        }

        .swiper-button-next,
        .swiper-button-prev {
          width: 46px;
          height: 46px;
          background: #b60a01;
          border: 2px solid #FFD100;
          border-radius: 12px;
          color: #FFD100;
          transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
          box-shadow: 0 4px 15px rgba(182, 10, 1, 0.25);
          z-index: 10;
          top: calc(50% - 30px);
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: #c0001a;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(182, 10, 1, 0.4);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 18px;
          font-weight: 800;
        }

        .swiper-button-next { right: 0px; }
        .swiper-button-prev { left: 0px; right: auto; }

        .swiper-pagination-bullet {
          background: #E8001C;
          opacity: 0.35;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: #FFD100;
          opacity: 1;
          width: 28px;
          border-radius: 5px;
        }

        .swiper-pagination { bottom: 10px !important; }

        .category-card {
          height: 380px;
          cursor: pointer;
        }

        .category-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid transparent;
          transition: border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1);
        }

        .category-card:hover .category-card-inner {
          border-color: #E8001C;
          box-shadow: 0 12px 36px rgba(232, 0, 28, 0.22);
          transform: translateY(-4px);
        }

        .category-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }

        .category-card:hover .category-image {
          transform: scale(1.07);
        }

        .category-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.68) 0%,
            rgba(0,0,0,0.18) 50%,
            rgba(0,0,0,0) 100%
          );
          opacity: 0;
          transition: opacity 0.35s ease;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 28px;
          z-index: 2;
        }

        .category-card:hover .category-overlay {
          opacity: 1;
        }

        .category-btn {
          background: #E8001C;
          color: #fff;
          font-weight: 700;
          font-size: 12px;
          padding: 9px 22px;
          border-radius: 8px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          cursor: pointer;
          border: 2px solid #FFD100;
          transform: translateY(12px);
          opacity: 0;
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease, background 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 4px 16px rgba(232,0,28,0.3);
          white-space: nowrap;
        }

        .category-card:hover .category-btn {
          opacity: 1;
          transform: translateY(0);
        }

        .category-btn:hover {
          background: #FFD100;
          color: #b60a01;
          border-color: #FFD100;
          box-shadow: 0 6px 22px rgba(255,209,0,0.35);
        }

        @media (max-width: 1024px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 38px;
            height: 38px;
          }

          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 15px;
          }

          .category-card { height: 300px; }
        }
      `}</style>

      <section className="vm-hero bg-white py-20 sm:py-28 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-8 sm:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <div className={`${visible ? "vm-fade-up-1" : "opacity-0"} inline-flex items-center gap-2 bg-red-50 border border-red-100 text-[#E8001C] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-widest`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#b60a01] animate-pulse inline-block" />
              Explore Gallery
            </div>

            <h2 className={`${visible ? "vm-fade-up-2" : "opacity-0"} vm-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] leading-[1.12] font-extrabold text-gray-900 mb-3`}>
              Shop by
              <span className="vm-underline-anim ml-2 text-[#E8001C]">Category</span>
            </h2>

            <p className={`${visible ? "vm-fade-up-3" : "opacity-0"} text-gray-500 text-base sm:text-lg max-w-[600px] mx-auto`}>
              Browse our curated selection of premium products and categories
            </p>
          </div>

          <div className={`${visible ? "vm-fade-in-5" : "opacity-0"} relative px-10`}>
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={22}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 18 },
                1024: { slidesPerView: 4, spaceBetween: 22 },
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="categories-swiper"
            >
              {CATEGORIES.map((category) => (
                <SwiperSlide key={category.id}>
                  <div className="category-card">
                    <div className="category-card-inner">
                      <img
                        src={category.image}
                        alt={category.title || `Category ${category.id}`}
                        className="category-image"
                      />
                      <div className="category-overlay">
                        <div className="text-center px-4">
                          <div className="text-white font-bold text-lg leading-tight mb-2 category-title">
                            {category.title}
                          </div>
                          <Link href={`/products/${category.slug}`} className="inline-block">
                            <button className="category-btn" aria-label={`Explore ${category.title}`}>
                              Explore →
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="swiper-button-prev" />
              <div className="swiper-button-next" />
              <div className="swiper-pagination" />
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}