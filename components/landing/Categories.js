"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CATEGORIES = [
  { id: 1, image: "/ProdcutsBanner/1.png" },
  { id: 2, image: "/ProdcutsBanner/2.png" },
  { id: 3, image: "/ProdcutsBanner/3.png" },
  { id: 4, image: "/ProdcutsBanner/4.png" },
  { id: 5, image: "/ProdcutsBanner/5.png" },
  { id: 6, image: "/ProdcutsBanner/6.png" },
  { id: 7, image: "/ProdcutsBanner/7.png" },
  { id: 8, image: "/ProdcutsBanner/8.png" },
  { id: 9, image: "/ProdcutsBanner/9.png" },
  { id: 10, image: "/ProdcutsBanner/10.png" },
  { id: 11, image: "/ProdcutsBanner/11.png" },
  { id: 12, image: "/ProdcutsBanner/12.png" },
  { id: 13, image: "/ProdcutsBanner/13.png" },
  { id: 14, image: "/ProdcutsBanner/14.png" },
  { id: 15, image: "/ProdcutsBanner/15.png" },
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

        @keyframes floatImage {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
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
          padding-bottom: 60px;
        }

        .swiper-button-next,
        .swiper-button-prev {
          width: 50px;
          height: 50px;
          background: #b60a01;
          border: 2px solid #FFD100;
          border-radius: 12px;
          color: #FFD100;
          transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
          box-shadow: 0 4px 15px rgba(182, 10, 1, 0.2);
          z-index: 10;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: #c0001a;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(182, 10, 1, 0.35);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }

        .swiper-button-next {
          right: 20px;
        }

        .swiper-button-prev {
          left: 20px;
          right: auto;
        }

        .swiper-pagination-bullet {
          background: #E8001C;
          opacity: 0.4;
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

        .swiper-pagination {
          bottom: 10px !important;
        }

        .category-card {
          transition: all 0.4s cubic-bezier(0.22,1,0.36,1);
          position: relative;
          overflow: hidden;
          height: 320px;
        }

        .category-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          border: 2px solid transparent;
          border-radius: 20px;
          overflow: hidden;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, #E8001C, #FFD100) border-box;
          transition: all 0.4s cubic-bezier(0.22,1,0.36,1);
        }

        .category-card:hover .category-card-inner {
          border-color: #E8001C;
          box-shadow: 0 8px 32px rgba(232, 0, 28, 0.2);
          background: linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)) padding-box,
                      linear-gradient(135deg, #E8001C, #FFD100) border-box;
        }

        .category-image-wrapper {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .category-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
        }

        .category-card:hover .category-image {
          transform: scale(1.08);
        }

        .category-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0);
          transition: background 0.4s ease;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .category-card:hover .category-overlay {
          background: rgba(0, 0, 0, 0.3);
        }

        .category-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
          border: 2px solid white;
          background: transparent;
          color: white;
          font-weight: 600;
          font-size: 13px;
          padding: 10px 20px;
          border-radius: 8px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          opacity: 0;
          transform: translateY(10px);
          z-index: 3;
        }

        .category-card:hover .category-btn {
          opacity: 1;
          transform: translateY(0);
        }

        .category-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: white;
          transition: left 0.3s cubic-bezier(0.22,1,0.36,1);
          z-index: -1;
        }

        .category-btn:hover::before {
          left: 0;
        }

        .category-btn:hover {
          color: #E8001C;
          border-color: white;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }

          .swiper-button-next {
            right: 10px;
          }

          .swiper-button-prev {
            left: 10px;
          }

          .category-card {
            height: 280px;
          }
        }
      `}</style>

      <section className="vm-hero bg-white py-20 sm:py-28 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className={`${visible ? "vm-fade-up-1" : "opacity-0"} inline-flex items-center gap-2 bg-red-50 border border-red-100 text-[#E8001C] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-widest`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#b60a01] animate-pulse inline-block" />
              Explore Gallery
            </div>

            <h2 className={`${visible ? "vm-fade-up-2" : "opacity-0"} vm-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] leading-[1.12] font-extrabold text-gray-900 mb-3`}>
              Featured
              <span className="vm-underline-anim ml-2 text-[#E8001C]">Products</span>
            </h2>

            <p className={`${visible ? "vm-fade-up-3" : "opacity-0"} text-gray-500 text-base sm:text-lg max-w-[600px] mx-auto`}>
              Browse our curated selection of premium products and categories
            </p>
          </div>

          <div className={`${visible ? "vm-fade-in-5" : "opacity-0"}`}>
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 4, spaceBetween: 24 },
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
                      <div className="category-image-wrapper">
                        <img
                          src={category.image}
                          alt={`Product ${category.id}`}
                          className="category-image"
                        />
                      </div>
                      <div className="category-overlay">
                        <button className="category-btn">
                          Explore →
                        </button>
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