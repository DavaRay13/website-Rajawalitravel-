"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading atau tunggu sampai window loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-blue-900"
        >
          <div className="relative flex flex-col items-center">
            {/* Pulsing Glow Effect */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-64 h-64 bg-amber-400 rounded-full blur-[100px]"
            />

            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                y: [0, -10, 0] 
              }}
              transition={{
                scale: { duration: 0.5 },
                opacity: { duration: 0.5 },
                y: { 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }
              }}
              className="relative z-10"
            >
              <Image
                src="/images/logo.png"
                alt="Rajawali Logo"
                width={300}
                height={100}
                className="w-auto h-20 md:h-28 object-contain"
                priority
              />
            </motion.div>

            {/* Progress Bar or Text */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 200, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-8 h-1 bg-white/20 rounded-full overflow-hidden w-[200px]"
            >
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "linear",
                }}
                className="absolute top-0 bottom-0 w-1/2 bg-amber-400 rounded-full"
              />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-4 text-amber-400 font-medium tracking-[0.2em] uppercase text-xs"
            >
              Menyiapkan Perjalanan Anda...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
