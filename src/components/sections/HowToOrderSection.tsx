"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const steps = [
  {
    number: "01",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
    title: "Pilih Rute",
    description: "Tentukan lokasi penjemputan dan tujuan perjalanan Anda.",
  },
  {
    number: "02",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    title: "Hubungi Kami",
    description: "Hubungi tim kami via WhatsApp atau telepon untuk booking.",
  },
  {
    number: "03",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Tunggu Penjemputan",
    description: "Sopir akan menjemput Anda di lokasi yang sudah disepakati.",
  },
  {
    number: "04",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Nikmati Perjalanan",
    description: "Nikmati perjalanan nyaman menuju destinasi dengan layanan kami.",
  },
];

export default function HowToOrderSection() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative bg-slate-900 py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cara <span className="text-amber-400">Memesan</span>
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Hanya 4 langkah mudah untuk menikmati perjalanan nyaman bersama Rajawali.
          </p>
        </motion.div>

        {/* Custom Navigation Buttons Container */}
        <div className="flex justify-end gap-4 mb-6 lg:absolute lg:top-0 lg:right-8 lg:mb-0 lg:mt-8 z-20">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border ${
              isBeginning 
                ? 'bg-slate-800/50 border-white/5 text-white/30 cursor-not-allowed' 
                : 'bg-slate-800 border-white/10 text-white hover:bg-amber-400 hover:text-blue-900 hover:border-amber-400 cursor-pointer shadow-lg'
            }`}
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border ${
              isEnd 
                ? 'bg-slate-800/50 border-white/5 text-white/30 cursor-not-allowed' 
                : 'bg-slate-800 border-white/10 text-white hover:bg-amber-400 hover:text-blue-900 hover:border-amber-400 cursor-pointer shadow-lg'
            }`}
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative px-2 pb-12"
        >
          <Swiper
            modules={[Navigation, Pagination]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 32,
              },
            }}
            className="how-to-order-swiper !pb-14"
          >
            {steps.map((step, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="h-full mt-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300 h-full flex flex-col relative group">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-blue-900 font-bold text-lg">{step.number}</span>
                    </div>

                    <div className="w-20 h-20 bg-amber-400/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-amber-400 group-hover:bg-amber-400/20 transition-colors duration-300 mt-2">
                      {step.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-blue-200 leading-relaxed text-sm flex-grow">{step.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom styles for Swiper pagination to match the dark theme */}
          <style dangerouslySetInnerHTML={{ __html: `
            .how-to-order-swiper .swiper-pagination-bullet {
              background: rgba(255, 255, 255, 0.3);
              opacity: 1;
            }
            .how-to-order-swiper .swiper-pagination-bullet-active {
              background: #fbbf24; /* amber-400 */
            }
          `}} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-4"
        >
          <motion.a
            href="https://wa.me/6285720853828"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-amber-400 hover:bg-amber-500 text-blue-900 font-bold rounded-full text-lg transition-all duration-300 shadow-lg shadow-amber-400/20"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pesan via WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
