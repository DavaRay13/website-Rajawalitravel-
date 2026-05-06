"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/Observer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Observer);
}

const images = [
  { id: 1, src: "/images/hiace.jpg", title: "Armada Hiace Luxury" },
  { id: 2, src: "/images/galeri-4.jpg", title: "Interior Nyaman" },
  { id: 3, src: "/images/galeri-3.jpg", title: "Layanan Eksekutif" },
  { id: 4, src: "/images/galeri-2.jpg", title: "Tepat Waktu" },
  { id: 5, src: "/images/galeri-5.jpg", title: "Destinasi Wisata" },
  { id: 6, src: "/images/galeri-6.jpg", title: "Perjalanan Aman" },
  { id: 7, src: "/images/galeri-7.jpg", title: "Driver Profesional" },
];

export default function PhotoGallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const updateGallery = contextSafe((index: number) => {
    const cards = gsap.utils.toArray<HTMLDivElement>(".gallery-card");
    const total = cards.length;

    cards.forEach((card, i) => {
      // Calculate relative position
      let diff = i - index;

      // Handle infinite loop logic for positions
      if (diff > total / 2) diff -= total;
      if (diff < -total / 2) diff += total;

      const absDiff = Math.abs(diff);

      // 3D Transformations
      const z = absDiff === 0 ? 0 : -200 * absDiff;
      const rotateY = diff * -45; // Tilt side cards
      const xPercent = diff * 50; // Stack cards
      const opacity = Math.max(0.3, 1 - absDiff * 0.3);
      const scale = Math.max(0.6, 1 - absDiff * 0.15);

      gsap.to(card, {
        xPercent: xPercent,
        z: z,
        rotateY: rotateY,
        opacity: opacity,
        scale: scale,
        duration: 1,
        ease: "power3.out",
        zIndex: total - absDiff,
        overwrite: true,
      });
    });
  });

  const nextSlide = contextSafe(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  });

  const prevSlide = contextSafe(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  });

  useEffect(() => {
    updateGallery(currentIndex);
  }, [currentIndex, updateGallery]);

  useGSAP(() => {
    // Initial setup
    gsap.set(".gallery-card", { perspective: 1000 });

    // Observer for touch/swipe interaction (NO WHEEL/SCROLL)
    Observer.create({
      target: containerRef.current,
      type: "touch,pointer",
      onLeft: () => nextSlide(),
      onRight: () => prevSlide(),
      tolerance: 50,
      preventDefault: false // Allow page scrolling
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 bg-slate-50 overflow-hidden select-none">
      {/* Viewfinder Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle Grid Background */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />
        
        {/* Camera Viewfinder Corners */}
        <div className="absolute top-12 left-8 md:left-12 w-12 h-12 border-t-2 border-l-2 border-amber-500/30" />
        <div className="absolute top-12 right-8 md:right-12 w-12 h-12 border-t-2 border-r-2 border-amber-500/30" />
        <div className="absolute bottom-12 left-8 md:left-12 w-12 h-12 border-b-2 border-l-2 border-amber-500/30" />
        <div className="absolute bottom-12 right-8 md:right-12 w-12 h-12 border-b-2 border-r-2 border-amber-500/30" />
        
        {/* Floating Abstract Shapes for Depth */}
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px] opacity-40" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-amber-100 rounded-full blur-[120px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Title Header */}
        <div className="text-center mb-20 relative">
          <div className="inline-block relative">
            <div className="w-16 h-1 bg-amber-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 tracking-tight">
              GALERI <span className="text-amber-500">FOTO</span>
            </h2>
            <div className="mt-6 flex justify-center items-center gap-4">
              <div className="h-px w-8 bg-blue-900/10" />
              <div className="w-2 h-2 rounded-full border border-amber-500" />
              <div className="h-px w-8 bg-blue-900/10" />
            </div>
          </div>
        </div>

        {/* 3D Slider Container */}
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center perspective-[2000px]">
          <div ref={sliderRef} className="relative w-full h-full flex items-center justify-center transform-style-3d">
            {images.map((img, index) => (
              <div
                key={img.id}
                className="gallery-card absolute w-[280px] h-[380px] md:w-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform-style-3d cursor-pointer"
                onClick={() => setCurrentIndex(index)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-bold">{img.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-8 mt-12">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border-2 border-blue-900 flex items-center justify-center text-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300 group"
          >
            <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-amber-500' : 'w-2 bg-gray-300'}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border-2 border-blue-900 flex items-center justify-center text-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300 group"
          >
            <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .perspective-2000 {
          perspective: 2000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
}
