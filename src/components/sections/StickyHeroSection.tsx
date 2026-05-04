"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const sections = [
  {
    id: 1,
    title: "Eksplorasi Keindahan",
    subtitle: "PERJALANAN PREMIUM",
    description: "Nikmati pengalaman travel eksklusif dengan layanan door-to-door yang dirancang khusus untuk kenyamanan maksimal Anda.",
    bgColor: "bg-[#0f172a]", // Deep Blue
    image: "/images/service-car.jpg"
  },
  {
    id: 2,
    title: "Armada Mewah",
    subtitle: "KENYAMANAN UTAMA",
    description: "Unit Hiace Luxury dengan kabin luas dan kursi ergonomis, memastikan setiap kilometer perjalanan terasa menyenangkan.",
    bgColor: "bg-[#1e293b]", // Slate Blue
    image: "/images/service-shuttle.jpg"
  },
  {
    id: 3,
    title: "Rute Terlengkap",
    subtitle: "KONEKTIVITAS TINGGI",
    description: "Layanan rutin Sukabumi, Cianjur, Bandung menuju Jabodetabek dan Bandara Soetta dengan jadwal yang fleksibel.",
    bgColor: "bg-[#334155]", // Slate Gray
    image: "/images/service-background.jpg"
  },
  {
    id: 4,
    title: "Layanan 24 Jam",
    subtitle: "SIAGA SELALU",
    description: "Kami hadir kapan saja Anda membutuhkan. Tim profesional kami siap melayani pemesanan dan perjalanan Anda setiap saat.",
    bgColor: "bg-[#475569]", // Cool Gray
    image: "/images/service-package.jpg"
  }
];

export default function StickyHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLDivElement>(".sticky-card");
    const navItems = gsap.utils.toArray<HTMLDivElement>(".nav-item-text");
    const navLines = gsap.utils.toArray<HTMLDivElement>(".nav-item-line");

    // Initially hide all cards except the first one by pushing them down
    gsap.set(cards.slice(1), { y: "100vh" });

    // Set the initial active state for the first nav item
    gsap.set(navItems[0], { color: "#fbbf24", fontWeight: "bold", x: 10 });
    gsap.set(navLines[0], { width: 40, backgroundColor: "#fbbf24" });

    // Main ScrollTrigger for pinning and stacking
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${cards.length * 150}%`, // Increased scroll distance for smoother transitions
        pin: true,
        scrub: 1,
      }
    });

    cards.forEach((card, i) => {
      // Bring the card up (if it's not the first one)
      if (i > 0) {
        tl.to(card, {
          y: 0,
          duration: 1,
          ease: "power2.inOut"
        }, i * 2 - 1); // Animation starts at index-based timestamp

        // Highlight current nav item
        tl.to(navItems[i], { color: "#fbbf24", fontWeight: "bold", x: 10, duration: 0.5 }, i * 2 - 1);
        tl.to(navLines[i], { width: 40, backgroundColor: "#fbbf24", duration: 0.5 }, i * 2 - 1);

        // Remove highlight from previous nav item
        tl.to(navItems[i-1], { color: "#94a3b8", fontWeight: "normal", x: 0, duration: 0.5 }, i * 2 - 1);
        tl.to(navLines[i-1], { width: 24, backgroundColor: "#475569", duration: 0.5 }, i * 2 - 1);
      }

      // Scale down and fade out the card when the NEXT one comes up
      if (i < cards.length - 1) {
        tl.to(card, {
          scale: 0.9,
          opacity: 0.4,
          y: "-=50",
          duration: 1,
          ease: "power2.inOut"
        }, i * 2 + 1); // Scale down happens when NEXT card starts coming up
      }
    });

    // Add empty space at the end of the timeline so the last card is readable before unpinning
    tl.to({}, { duration: 1.5 });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-slate-900 overflow-hidden">
      {/* Sidebar Navigation */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-8">
        {sections.map((sec, i) => (
          <div key={sec.id} className="flex items-center gap-4 group">
            <div className="nav-item-line w-6 h-[2px] bg-slate-600 transition-all" />
            <span className="nav-item-text text-slate-400 text-sm uppercase tracking-[0.3em] font-medium transition-all">
              Section {sec.id}
            </span>
          </div>
        ))}
      </div>

      {/* Cards Container */}
      <div className="relative w-full h-full flex items-center justify-center px-4 md:px-20 lg:pl-64">
        {sections.map((sec, i) => (
          <div
            key={sec.id}
            className={`sticky-card absolute w-full max-w-5xl h-[70vh] md:h-[80vh] rounded-[40px] md:rounded-[64px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row ${sec.bgColor} border border-white/5`}
            style={{ 
              zIndex: i + 1,
            }}
          >
            {/* Content Section */}
            <div className="w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center order-2 md:order-1">
              <div className="overflow-hidden mb-4">
                <span className="text-amber-400 font-bold tracking-[0.3em] uppercase text-sm block">
                  {sec.subtitle}
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.1]">
                {sec.title}
              </h2>
              <p className="text-slate-300 text-lg md:text-xl max-w-md leading-relaxed mb-10 opacity-80">
                {sec.description}
              </p>
              <button className="group w-fit flex items-center gap-4 px-10 py-5 bg-white text-slate-900 font-bold rounded-full hover:bg-amber-400 hover:text-blue-900 transition-all duration-300">
                JELAJAHI
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 h-full relative order-1 md:order-2 overflow-hidden">
              <img
                src={sec.image}
                alt={sec.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/40 to-transparent" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
