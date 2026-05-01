"use client";

import { motion } from "framer-motion";

interface Armada {
  id: number;
  name: string;
  capacity: string;
  facilities: string[];
  priceStart: string;
  color: string;
}

const armadas: Armada[] = [
  {
    id: 1,
    name: "Avanza",
    capacity: "7 Penumpang",
    facilities: ["AC", "Audio System", "USB Charger", "TV (opsional)"],
    priceStart: "Rp 150.000",
    color: "from-red-500 to-red-700",
  },
  {
    id: 2,
    name: "Innova",
    capacity: "7 Penumpang",
    facilities: ["AC Premium", "Audio System", "USB Charger", "TV", "WiFi (opsional)"],
    priceStart: "Rp 180.000",
    color: "from-slate-600 to-slate-800",
  },
  {
    id: 3,
    name: "Hiace",
    capacity: "15-20 Penumpang",
    facilities: ["AC Utama", "Audio System", "TV", "WiFi", "Toilet (opsional)", "Bagasi Besar"],
    priceStart: "Rp 350.000",
    color: "from-blue-600 to-blue-800",
  },
  {
    id: 4,
    name: "Elf",
    capacity: "15-20 Penumpang",
    facilities: ["AC", "Audio System", "TV", "Bagasi Besar", "Kabin Luas"],
    priceStart: "Rp 320.000",
    color: "from-green-600 to-green-800",
  },
  {
    id: 5,
    name: "Calya / Expander / XL7",
    capacity: "7 Penumpang",
    facilities: ["AC", "Audio System", "USB Charger", "Bagasi Luas"],
    priceStart: "Rp 140.000",
    color: "from-purple-600 to-purple-800",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

function VehiclePlaceholder({ name, color }: { name: string; color: string }) {
  return (
    <div className={`w-full h-48 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center relative overflow-hidden group`}>
      <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors" />
      <svg
        viewBox="0 0 200 100"
        className="w-40 h-20 drop-shadow-2xl"
        fill="rgba(255,255,255,0.9)"
      >
        <path d="M20 60 L30 40 L60 35 L100 35 L140 35 L170 40 L180 60 L180 75 L20 75 Z" fill="currentColor" opacity="0.9" />
        <path d="M50 35 L60 20 L100 20 L120 35 Z" fill="currentColor" opacity="0.7" />
        <circle cx="45" cy="75" r="12" fill="rgba(0,0,0,0.5)" />
        <circle cx="155" cy="75" r="12" fill="rgba(0,0,0,0.5)" />
        <circle cx="45" cy="75" r="8" fill="currentColor" opacity="0.8" />
        <circle cx="155" cy="75" r="8" fill="currentColor" opacity="0.8" />
        <rect x="65" y="25" width="30" height="15" rx="2" fill="rgba(255,255,255,0.3)" />
        <rect x="100" y="25" width="30" height="15" rx="2" fill="rgba(255,255,255,0.3)" />
        <rect x="140" y="30" width="25" height="20" rx="2" fill="rgba(255,255,255,0.2)" />
      </svg>
      <div className="absolute bottom-2 right-2 text-white/50 text-xs">
        {name} Illustration
      </div>
    </div>
  );
}

function ArmadaCard({ armada }: { armada: Armada }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300"
    >
      <VehiclePlaceholder name={armada.name} color={armada.color} />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-white">{armada.name}</h3>
          <span className="text-amber-400 font-bold">{armada.priceStart}</span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <svg
            className="w-5 h-5 text-blue-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="text-blue-200">{armada.capacity}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {armada.facilities.map((facility, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-blue-800/50 text-blue-200 text-xs rounded-full"
            >
              {facility}
            </span>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 bg-amber-400 hover:bg-amber-500 text-blue-900 font-semibold rounded-xl transition-colors duration-300"
        >
          Pilih Armada
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function FleetPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Armada <span className="text-amber-400">Kami</span>
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Kendaraan terawat dan nyaman untuk perjalanan Anda. Pilih armada yang sesuai
            dengan kebutuhan dan jumlah penumpang.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {armadas.map((armada) => (
            <ArmadaCard key={armada.id} armada={armada} />
          ))}
        </motion.div>

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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">BPJS Terjamin</h3>
              <p className="text-blue-200 text-sm">
                Setiap perjalanan sudah include asuransi
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}