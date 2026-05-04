"use client";

import { motion } from "framer-motion";
import DestinationSlider from "@/components/sections/DestinationSlider";

interface Route {
  id: number;
  origin: string;
  destination: string;
  price: string;
  icon: string;
}

const routes: { city: string; routes: Route[] }[] = [
  {
    city: "Sukabumi",
    routes: [
      { id: 1, origin: "Sukabumi", destination: "Bandara Soetta", price: "Rp 180.000", icon: "✈️" },
      { id: 2, origin: "Sukabumi", destination: "Tangerang", price: "Rp 150.000", icon: "🏙️" },
      { id: 3, origin: "Sukabumi", destination: "Jakarta", price: "Rp 140.000", icon: "🏙️" },
      { id: 4, origin: "Sukabumi", destination: "Bekasi", price: "Rp 160.000", icon: "🏙️" },
      { id: 5, origin: "Sukabumi", destination: "Depok", price: "Rp 130.000", icon: "🏙️" },
      { id: 6, origin: "Sukabumi", destination: "Bogor", price: "Rp 120.000", icon: "🏙️" },
    ],
  },
  {
    city: "Cianjur",
    routes: [
      { id: 7, origin: "Cianjur", destination: "Bandara Soetta", price: "Rp 170.000", icon: "✈️" },
      { id: 8, origin: "Cianjur", destination: "Tangerang", price: "Rp 140.000", icon: "🏙️" },
      { id: 9, origin: "Cianjur", destination: "Jakarta", price: "Rp 130.000", icon: "🏙️" },
      { id: 10, origin: "Cianjur", destination: "Bekasi", price: "Rp 150.000", icon: "🏙️" },
      { id: 11, origin: "Cianjur", destination: "Depok", price: "Rp 120.000", icon: "🏙️" },
      { id: 12, origin: "Cianjur", destination: "Bogor", price: "Rp 110.000", icon: "🏙️" },
    ],
  },
  {
    city: "Bandung",
    routes: [
      { id: 13, origin: "Bandung", destination: "Bandara Soetta", price: "Rp 250.000", icon: "✈️" },
      { id: 14, origin: "Bandung", destination: "Tangerang", price: "Rp 220.000", icon: "🏙️" },
      { id: 15, origin: "Bandung", destination: "Jakarta", price: "Rp 200.000", icon: "🏙️" },
      { id: 16, origin: "Bandung", destination: "Bekasi", price: "Rp 210.000", icon: "🏙️" },
      { id: 17, origin: "Bandung", destination: "Depok", price: "Rp 190.000", icon: "🏙️" },
      { id: 18, origin: "Bandung", destination: "Bogor", price: "Rp 180.000", icon: "🏙️" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

function RouteCard({ route }: { route: Route }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300 group"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl">{route.icon}</span>
        <span className="text-amber-400 font-bold text-lg">{route.price}</span>
      </div>
      <div className="flex items-center gap-3 mb-4">
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
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-3 bg-amber-400 hover:bg-amber-500 text-blue-900 font-semibold rounded-xl transition-colors duration-300"
      >
        Pesan Sekarang
      </motion.button>
    </motion.div>
  );
}

export default function RoutePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 pt-28 pb-16">
      <div className="w-full mb-16">
        <DestinationSlider />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
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
                <h2 className="text-2xl font-bold text-white">{group.city}</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-amber-400/50 to-transparent" />
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.routes.map((route) => (
                  <RouteCard key={route.id} route={route} />
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-blue-200 mb-6">
            Tidak menemukan rute yang Anda cari? Hubungi kami untuk custom rute.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border-2 border-amber-400 text-amber-400 font-semibold rounded-full text-lg hover:bg-amber-400 hover:text-blue-900 transition-all duration-300"
          >
            Hubungi Kami
          </motion.button>
        </motion.div>
      </div>
    </main>
  );
}