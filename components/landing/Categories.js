"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Fallback image if a category has no product image for some reason
const FALLBACK_IMAGE = "/ProdcutsBanner/4.png";

// Converts a category title into a URL-friendly slug (used for /products/[slug])
function slugify(str = "") {
  return str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Safely builds a usable <img src> from the API's productImage object
// Handles: { data: "base64string", contentType } and Mongo Buffer-style shapes
function getImageSrc(productImage) {
  if (!productImage) return FALLBACK_IMAGE;

  const contentType = productImage.contentType || "image/jpeg";
  let raw = productImage.data;

  if (raw && typeof raw === "object") {
    if (raw.$binary?.base64) {
      raw = raw.$binary.base64;
    } else if (Array.isArray(raw.data)) {
      try {
        raw = btoa(
          new Uint8Array(raw.data).reduce(
            (acc, byte) => acc + String.fromCharCode(byte),
            ""
          )
        );
      } catch {
        raw = null;
      }
    } else {
      raw = null;
    }
  }

  if (!raw || typeof raw !== "string") return FALLBACK_IMAGE;

  // Already a data URL or a normal URL/path
  if (raw.startsWith("data:") || raw.startsWith("http") || raw.startsWith("/")) {
    return raw;
  }

  return `data:${contentType};base64,${raw}`;
}

export default function Categories() {
  const [visible, setVisible] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function fetchCategories() {
      try {
        const res = await fetch(
          "https://api.valuemax.com.pk/api/products/all-products"
        );
        if (!res.ok) throw new Error("Failed to fetch products");
        const products = await res.json();

        // Build one category entry per unique productCategories value,
        // using the first matching product's image as the category thumbnail
        const seen = new Map();

        (Array.isArray(products) ? products : []).forEach((product) => {
          const title = product?.productCategories;
          if (!title) return;

          if (!seen.has(title)) {
            seen.set(title, {
              id: product._id || title,
              slug: slugify(title),
              title,
              image: getImageSrc(product.productImage),
            });
          }
        });

        if (isMounted) {
          setCategories(Array.from(seen.values()));
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
        if (isMounted) setCategories([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchCategories();
    return () => {
      isMounted = false;
    };
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

        .vm-underline-anim { display: inline-block; position: relative; }
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

        .categories-swiper { padding: 8px 4px 8px !important; }
        .swiper-pagination { display: none !important; }

        .cat-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: #b60a01;
          border: 2px solid #FFD100;
          color: #FFD100;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(182,10,1,0.25);
          transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
          font-size: 18px;
          font-weight: 900;
          user-select: none;
        }
        .cat-nav-btn:hover {
          background: #c0001a;
          box-shadow: 0 8px 24px rgba(182,10,1,0.35);
          transform: translateY(-52%);
        }
        .cat-nav-btn:active { transform: translateY(-48%); }
        .cat-nav-prev { left: -22px; }
        .cat-nav-next { right: -22px; }

        .category-card-inner {
          position: relative;
          width: 100%;
          border-radius: 18px;
          overflow: hidden;
          border: 2px solid transparent;
          transition: border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1);
          aspect-ratio: 3/4;
          display: block;
        }
        .category-card-inner:hover {
          border-color: #E8001C;
          box-shadow: 0 16px 40px rgba(232,0,28,0.22);
          transform: translateY(-5px);
        }
        .category-card-inner:hover .category-image { transform: scale(1.07); }
        .category-card-inner:hover .category-btn {
          opacity: 1;
          transform: translateY(0);
        }

        .category-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }

        .category-label {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          z-index: 3;
          background: linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.3) 60%, transparent 100%);
          padding: 40px 16px 18px;
        }

        .category-btn {
          display: inline-block;
          background: #b60a01;
          color: #fff;
          font-weight: 700;
          font-size: 11px;
          padding: 7px 16px;
          border-radius: 7px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          border: 1.5px solid #b60a01;
          opacity: 0;
          transform: translateY(10px);
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease, background 0.2s ease;
          box-shadow: 0 4px 14px rgba(232,0,28,0.3);
          white-space: nowrap;
          margin-top: 8px;
        }
        .category-btn:hover {
          background: #c0001a;
          color: #fff;
        }

        @media (max-width: 640px) {
          .cat-nav-prev { left: -14px; }
          .cat-nav-next { right: -14px; }
          .cat-nav-btn { width: 36px; height: 36px; font-size: 15px; border-radius: 8px; }
        }
      `}</style>

      <section className="vm-hero bg-white py-20 sm:py-28 overflow-hidden" id="categories">
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

          <div className={`${visible ? "vm-fade-in-5" : "opacity-0"} relative px-8`}>

            <button className="cat-nav-btn cat-nav-prev swiper-cat-prev" aria-label="Previous">
              ‹
            </button>
            <button className="cat-nav-btn cat-nav-next swiper-cat-next" aria-label="Next">
              ›
            </button>

            {!loading && categories.length > 0 && (
              <Swiper
                ref={swiperRef}
                modules={[Navigation, Autoplay]}
                spaceBetween={18}
                slidesPerView={1}
                breakpoints={{
                  480: { slidesPerView: 2, spaceBetween: 16 },
                  768: { slidesPerView: 3, spaceBetween: 18 },
                  1024: { slidesPerView: 4, spaceBetween: 20 },
                  1280: { slidesPerView: 5, spaceBetween: 20 },
                }}
                navigation={{
                  prevEl: ".swiper-cat-prev",
                  nextEl: ".swiper-cat-next",
                }}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                loop={true}
                className="categories-swiper"
              >
                {categories.map((category) => (
                  <SwiperSlide key={category.id} className="w-full">
                    <Link href={`/products/${category.slug}`} className="block w-full">
                      <div className="category-card-inner">
                        <img
                          src={category.image}
                          alt={category.title || `Category ${category.id}`}
                          className="category-image"
                        />
                        <div className="category-label">
                          <p className="text-white font-bold text-[14px] leading-snug drop-shadow-md">
                            {category.title}
                          </p>
                          <span className="category-btn">
                            Explore →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}

          </div>
        </div>
      </section>
    </>
  );
}