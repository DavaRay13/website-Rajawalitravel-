"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

interface Route {
  id: number;
  origin: string;
  destination: string;
  icon: string;
}

const heroSlides = [
  {
    title: "Pesona Sukabumi",
    subtitle: "RUTE REGULER",
    image: "/images/sukabumi.jpg",
    description: "Layanan door-to-door terbaik dari dan menuju Sukabumi."
  },
  {
    title: "Kota Cianjur",
    subtitle: "RUTE REGULER",
    image: "/images/cianjur.jpg",
    description: "Kenyamanan perjalanan Anda adalah prioritas kami di rute Cianjur."
  },
  {
    title: "Bandung Juara",
    subtitle: "RUTE REGULER",
    image: "/images/bnadung.jpg",
    description: "Nikmati perjalanan eksekutif dari Bandung menuju Jabodetabek."
  }
];

const routes: { city: string; routes: Route[] }[] = [
  {
    city: "Sukabumi",
    routes: [
      { id: 1, origin: "Sukabumi", destination: "Bandara Soetta", icon: "✈️" },
      { id: 2, origin: "Sukabumi", destination: "Tangerang", icon: "🏙️" },
      { id: 3, origin: "Sukabumi", destination: "Jakarta", icon: "🏙️" },
      { id: 4, origin: "Sukabumi", destination: "Bekasi", icon: "🏙️" },
      { id: 5, origin: "Sukabumi", destination: "Depok", icon: "🏙️" },
      { id: 6, origin: "Sukabumi", destination: "Bogor", icon: "🏙️" },
    ],
  },
  {
    city: "Cianjur",
    routes: [
      { id: 7, origin: "Cianjur", destination: "Bandara Soetta", icon: "✈️" },
      { id: 8, origin: "Cianjur", destination: "Tangerang", icon: "🏙️" },
      { id: 9, origin: "Cianjur", destination: "Jakarta", icon: "🏙️" },
      { id: 10, origin: "Cianjur", destination: "Bekasi", icon: "🏙️" },
      { id: 11, origin: "Cianjur", destination: "Depok", icon: "🏙️" },
      { id: 12, origin: "Cianjur", destination: "Bogor", icon: "🏙️" },
    ],
  },
  {
    city: "Bandung",
    routes: [
      { id: 13, origin: "Bandung", destination: "Bandara Soetta", icon: "✈️" },
      { id: 14, origin: "Bandung", destination: "Tangerang", icon: "🏙️" },
      { id: 15, origin: "Bandung", destination: "Jakarta", icon: "🏙️" },
      { id: 16, origin: "Bandung", destination: "Bekasi", icon: "🏙️" },
      { id: 17, origin: "Bandung", destination: "Depok", icon: "🏙️" },
      { id: 18, origin: "Bandung", destination: "Bogor", icon: "🏙️" },
    ],
  },
];

const WHATSAPP_NUMBER = "6281234567890"; // Ganti dengan nomor asli

function RouteCard({ route }: { route: Route }) {
  const message = `Halo Rajawali Travel, saya ingin memesan travel rute ${route.origin} - ${route.destination}.`;
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300 group"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl">{route.icon}</span>
        <div className="w-8 h-8 rounded-full bg-amber-400/10 flex items-center justify-center">
          <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.433 5.625 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </div>
      </div>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-white font-semibold">{route.origin}</span>
        <svg
          className="w-5 h-5 text-amber-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
        <span className="text-white font-semibold">{route.destination}</span>
      </div>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 bg-amber-400 hover:bg-amber-500 text-blue-900 font-semibold rounded-xl transition-colors duration-300"
        >
          Pesan Sekarang
        </motion.button>
      </a>
    </motion.div>
  );
}

export default function RoutePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 pb-16">
      {/* Hero Swiper */}
      <div className="w-full h-[60vh] md:h-[70vh] relative mb-16 pt-20">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          className="h-full w-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-center px-4 max-w-4xl">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-amber-400 font-bold tracking-[0.3em] uppercase text-sm block mb-4"
                    >
                      {slide.subtitle}
                    </motion.span>
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-4xl md:text-6xl font-black text-white mb-6"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-blue-100 text-lg md:text-xl"
                    >
                      {slide.description}
                    </motion.p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {routes.map((group) => (
            <div key={group.city}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-12 h-12 bg-amber-400/20 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">{group.city}</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-amber-400/50 to-transparent" />
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.routes.map((route) => (
                  <RouteCard key={route.id} route={route} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-white/5 border border-white/10 rounded-[40px] p-12 backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Custom Rute?</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Tidak menemukan rute yang Anda cari? Kami melayani perjalanan kustom sesuai kebutuhan Anda.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo Rajawali Travel, saya ingin tanya rute kustom.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-amber-400 text-blue-900 font-bold rounded-full text-lg hover:bg-amber-500 transition-all duration-300 shadow-xl shadow-amber-400/20"
            >
              Hubungi Kami Sekarang
            </motion.button>
          </a>
        </motion.div>
      </div>
      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: #fbbf24 !important;
        }
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #fbbf24 !important;
          opacity: 1;
        }
      `}</style>
    </main>
  );
}