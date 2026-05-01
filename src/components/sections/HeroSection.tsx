"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isNight, setIsNight] = useState(true); // Start with night mode
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsNight(prev => !prev);
    }, 3000); // 3 seconds cycle
    return () => clearInterval(interval);
  }, []);

  const bgGradient = isNight
    ? "from-blue-900 via-blue-800 to-blue-900"
    : "from-blue-300 via-blue-200 to-yellow-100";

  const textColor = isNight ? "text-white" : "text-blue-900";
  const subTextColor = isNight ? "text-blue-100" : "text-blue-700";
  const statsColor = isNight ? "text-blue-200" : "text-blue-600";

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b ${bgGradient} transition-all duration-1000`}>
      <div className="absolute inset-0 overflow-hidden">
        {isNight && Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${(i * 5.3) % 100}%`,
              top: `${((i * 7.3) % 100) * 0.6}%`,
            }}
            animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
            transition={{ duration: 2 + (i * 0.1), repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
        
        <div className={`absolute top-10 right-10 w-24 h-24 rounded-full transition-all duration-1000 ${
          isNight 
            ? "bg-gray-200 shadow-[0_0_30px_rgba(255,255,255,0.5)]" 
            : "bg-yellow-200 shadow-[0_0_40px_rgba(251,191,36,0.6)]"
        }`}>
          {isNight ? (
            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gray-300" />
            </div>
          ) : (
            <div className="w-full h-full rounded-full bg-yellow-200" />
          )}
        </div>
        
        <svg className="absolute bottom-32 left-0 w-full h-48" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <path
            d="M0,200 L0,150 L50,150 L50,120 L80,120 L80,150 L100,150 L100,100 L120,100 L120,150 L180,150 L180,80 L220,80 L220,150 L280,150 L280,130 L320,130 L320,150 L400,150 L400,90 L440,90 L440,150 L500,150 L500,110 L540,110 L540,150 L600,150 L600,70 L650,70 L650,150 L700,150 L700,140 L750,140 L750,150 L850,150 L850,85 L900,85 L900,150 L950,150 L950,120 L1000,120 L1000,150 L1100,150 L1100,95 L1150,95 L1150,150 L1200,150 L1200,200 Z"
            fill={isNight ? "#0f172a" : "#94a3b8"}
          />
          {Array.from({ length: 15 }).map((_, i) => (
            <rect
              key={i}
              x={20 + i * 70}
              y={100 + (i % 3) * 20}
              width="8"
              height="10"
              fill={isNight ? (i % 2 === 0 ? "#fbbf24" : "#fef3c7") : "#64748b"}
              style={{ opacity: isNight ? 1 : 0.3 }}
            />
          ))}
        </svg>
        
        <div className={`absolute bottom-0 left-0 w-full h-32 overflow-hidden ${isNight ? "bg-gray-900" : "bg-gray-700"}`}>
          <div className="absolute bottom-16 left-0 w-[200%] h-2">
            <div className="animate-road absolute inset-0 flex gap-8">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="w-16 h-2 bg-yellow-400" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-16 left-0 w-full flex justify-center z-10"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <svg width="500" height="200" viewBox="0 0 500 200" className="w-40 sm:w-56 md:w-64 lg:w-[500px]">
          <ellipse cx="250" cy="190" rx="220" ry="10" fill="rgba(0,0,0,0.3)" />
          <path d="M30,130 L30,70 L70,40 L180,35 L320,35 L430,40 L470,70 L470,130 L470,145 L30,145 L30,130 Z" fill="#1e3a8a" stroke="#1e40af" strokeWidth="2" />
          <path d="M400,130 L400,70 L430,40 L470,70 L470,130 L400,130 Z" fill="#1e3a8a" stroke="#1e40af" strokeWidth="2" />
          <rect x="80" y="50" width="50" height="35" rx="3" fill="#bfdbfe" stroke="#60a5fa" strokeWidth="1" />
          <rect x="140" y="50" width="50" height="35" rx="3" fill="#bfdbfe" stroke="#60a5fa" strokeWidth="1" />
          <rect x="200" y="50" width="50" height="35" rx="3" fill="#bfdbfe" stroke="#60a5fa" strokeWidth="1" />
          <rect x="260" y="50" width="50" height="35" rx="3" fill="#bfdbfe" stroke="#60a5fa" strokeWidth="1" />
          <rect x="320" y="50" width="50" height="35" rx="3" fill="#bfdbfe" stroke="#60a5fa" strokeWidth="1" />
          <path d="M380,90 L430,50 L430,90 L380,90 Z" fill="#bfdbfe" stroke="#60a5fa" strokeWidth="1" />
          <rect x="385" y="50" width="70" height="75" rx="2" fill="none" stroke="#1e40af" strokeWidth="1" />
          <path d="M385,50 L385,35 L430,35 L430,50 Z" fill="#bfdbfe" stroke="#60a5fa" strokeWidth="1" />
          <rect x="100" y="20" width="100" height="20" rx="5" fill="#374151" stroke="#4b5563" strokeWidth="1" />
          <line x1="80" y1="130" x2="80" y2="35" stroke="#1e40af" strokeWidth="1" />
          <line x1="140" y1="130" x2="140" y2="35" stroke="#1e40af" strokeWidth="1" />
          <line x1="200" y1="130" x2="200" y2="35" stroke="#1e40af" strokeWidth="1" />
          <line x1="260" y1="130" x2="260" y2="35" stroke="#1e40af" strokeWidth="1" />
          <line x1="320" y1="130" x2="320" y2="35" stroke="#1e40af" strokeWidth="1" />
          <line x1="380" y1="130" x2="380" y2="35" stroke="#1e40af" strokeWidth="1" />
          <ellipse cx="455" cy="110" rx="8" ry="6" fill={isNight ? "#fef3c7" : "#374151"} />
          <ellipse cx="455" cy="110" rx="12" ry="10" fill={isNight ? "rgba(251,191,36,0.3)" : "rgba(55,65,81,0.2)"} />
          <rect x="450" y="120" width="15" height="15" rx="2" fill="#4b5563" />
          <line x1="450" y1="122" x2="465" y2="122" stroke="#6b7280" strokeWidth="1" />
          <line x1="450" y1="125" x2="465" y2="125" stroke="#6b7280" strokeWidth="1" />
          <line x1="450" y1="128" x2="465" y2="128" stroke="#6b7280" strokeWidth="1" />
          <line x1="450" y1="131" x2="465" y2="131" stroke="#6b7280" strokeWidth="1" />
          <rect x="25" y="110" width="8" height="20" rx="2" fill="#ef4444" />
          <rect x="20" y="140" width="455" height="8" rx="2" fill="#4b5563" />
          <rect x="445" y="140" width="30" height="8" rx="2" fill="#4b5563" />
          <rect x="30" y="100" width="410" height="4" fill="#60a5fa" opacity="0.5" />
          <rect x="30" y="25" width="440" height="3" rx="1" fill="#4b5563" />
          <circle cx="100" cy="145" r="35" fill="#1f2937" />
          <circle cx="100" cy="145" r="28" fill="#374151" />
          <circle cx="100" cy="145" r="12" fill="#9ca3af" />
          <line x1="100" y1="117" x2="100" y2="173" stroke="#6b7280" strokeWidth="3" />
          <line x1="72" y1="145" x2="128" y2="145" stroke="#6b7280" strokeWidth="3" />
          <line x1="80" y1="125" x2="120" y2="165" stroke="#6b7280" strokeWidth="3" />
          <line x1="120" y1="125" x2="80" y2="165" stroke="#6b7280" strokeWidth="3" />
          <circle cx="400" cy="145" r="35" fill="#1f2937" />
          <circle cx="400" cy="145" r="28" fill="#374151" />
          <circle cx="400" cy="145" r="12" fill="#9ca3af" />
          <line x1="400" y1="117" x2="400" y2="173" stroke="#6b7280" strokeWidth="3" />
          <line x1="372" y1="145" x2="428" y2="145" stroke="#6b7280" strokeWidth="3" />
          <line x1="380" y1="125" x2="420" y2="165" stroke="#6b7280" strokeWidth="3" />
          <line x1="420" y1="125" x2="380" y2="165" stroke="#6b7280" strokeWidth="3" />
          <path d="M50,145 Q50,115 100,115 Q150,115 150,145" fill="#1e3a8a" stroke="#1e40af" strokeWidth="1" />
          <path d="M350,145 Q350,115 400,115 Q450,115 450,145" fill="#1e3a8a" stroke="#1e40af" strokeWidth="1" />
          <text x="155" y="85" fill="#fbbf24" fontSize="16" fontWeight="bold" fontFamily="sans-serif">RAJAWALI</text>
        </svg>
      </motion.div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium border transition-all duration-1000 ${
            isNight 
              ? "bg-amber-400/20 text-amber-400 border-amber-400/30" 
              : "bg-blue-900/20 text-blue-900 border-blue-900/30"
          }`}>
            Eksklusif 24/7 - Menyesuaikan Jadwal Anda
          </span>
        </div>
        
        <h1 className={`text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight ${textColor}`}>
          Perjalanan Nyaman <span className="text-amber-400">Tanpa Repot</span>
        </h1>
        
        <p className={`text-sm sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto ${subTextColor}`}>
          Layanan travel door-to-door dari Sukabumi, Cianjur, Bandung ke Bandara Soetta & seluruh Jabodetabek. Armada terawat, sopir berpengalaman.
        </p>
        
        <div className="mb-8 sm:mb-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button className="px-4 py-2 sm:px-8 sm:py-4 bg-amber-400 hover:bg-amber-500 text-blue-900 font-semibold rounded-full text-sm sm:text-lg transition-all duration-300">
            Pesan Sekarang
          </button>
          <button className={`px-4 py-2 sm:px-8 sm:py-4 bg-transparent border-2 font-semibold rounded-full text-sm sm:text-lg transition-all duration-300 ${
            isNight 
              ? "border-white text-white hover:bg-white hover:text-blue-900" 
              : "border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
          }`}>
            Lihat Rute
          </button>
        </div>
        
        <div className="mt-8 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-xl sm:text-3xl font-bold text-amber-400">500+</div>
            <div className={`text-xs sm:text-sm ${statsColor}`}>Pelanggan Puas</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-3xl font-bold text-amber-400">6</div>
            <div className={`text-xs sm:text-sm ${statsColor}`}>Unit Armada</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-3xl font-bold text-amber-400">24/7</div>
            <div className={`text-xs sm:text-sm ${statsColor}`}>Layanan Aktif</div>
          </div>
        </div>
      </div>

      <motion.div
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 transition-colors duration-1000 ${
          isNight ? "border-white/50" : "border-blue-900/50"
        }`}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className={`w-6 h-10 rounded-full flex justify-center pt-2 ${
          isNight ? "border-white/50" : "border-blue-900/50"
        }`}>
          <div className={`w-1.5 h-3 rounded-full ${
            isNight ? "bg-white/50" : "bg-blue-900/50"
          }`} />
        </div>
      </motion.div>
    </section>
  );
}