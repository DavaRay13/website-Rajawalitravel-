"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const armadas = [
  { id: 1, name: "Toyota Avanza", image: "/images/avanza.jpg" },
  { id: 2, name: "Toyota Innova", image: "/images/innova.jpg" },
  { id: 3, name: "Toyota Hiace", image: "/images/hiace.jpg" },
  { id: 4, name: "Isuzu Elf Long", image: "/images/elf-long.jpg" },
  { id: 5, name: "Toyota Calya", image: "/images/calya.jpg" },
  { id: 6, name: "Mitsubishi Expander", image: "/images/expander.jpg" },
  { id: 7, name: "Suzuki XL7", image: "/images/xl7.jpg" },
];

export default function FleetPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Armada <span className="text-amber-400">Kami</span>
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Kendaraan terawat dan nyaman untuk perjalanan Anda. Pilih armada yang sesuai
            dengan kebutuhan Anda.
          </p>
        </motion.div>

        <div className="w-full py-8">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
            className="fleet-swiper pb-12"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40
              }
            }}
          >
            {armadas.map((armada) => (
              <SwiperSlide key={armada.id} className="w-[300px] sm:w-[400px]">
                <div className="relative group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-amber-400/50">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={armada.image}
                      alt={armada.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white text-center">{armada.name}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-amber-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Armada Terawat</h3>
              <p className="text-blue-200 text-sm">
                Servis rutin setiap bulan untuk kenyamanan maksimal
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-amber-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Sopir Profesional</h3>
              <p className="text-blue-200 text-sm">
                Berpengalaman dan familiar dengan semua rute
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-amber-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Layanan 24/7</h3>
              <p className="text-blue-200 text-sm">
                Siap melayani kebutuhan perjalanan Anda kapan saja
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <style jsx global>{`
        .fleet-swiper .swiper-pagination-bullet {
          background: #3b82f6;
        }
        .fleet-swiper .swiper-pagination-bullet-active {
          background: #fbbf24;
        }
        .fleet-swiper .swiper-button-next,
        .fleet-swiper .swiper-button-prev {
          color: #fbbf24;
        }
      `}</style>
    </main>
  );
}