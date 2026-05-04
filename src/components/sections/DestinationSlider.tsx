"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const destinations = [
  {
    id: 1,
    title: "PARIS TRIP",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 2,
    title: "SYDNEY VOYAGE",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 3,
    title: "SOUTH KOREA ADVENTURE",
    image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 4,
    title: "AMERICA DISCOVERY",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  }
];

export default function DestinationSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const handleNext = contextSafe((e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % destinations.length);
  });

  const handlePrev = contextSafe((e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
  });

  useGSAP(() => {
    destinations.forEach((_, index) => {
      const card = cardsRef.current[index];
      if (!card) return;

      const title = card.querySelector(".dest-title");
      const link = card.querySelector(".dest-link");
      const img = card.querySelector(".dest-img");

      if (index === activeIndex) {
        // Expand active card
        gsap.to(card, {
          flexGrow: 3,
          duration: 0.8,
          ease: "expo.out"
        });
        
        // Show text with stagger
        gsap.fromTo([title, link], 
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.2 }
        );

        // Parallax effect on image
        gsap.to(img, {
          scale: 1.1,
          x: "0%",
          duration: 1.2,
          ease: "power2.out"
        });
      } else {
        // Shrink inactive cards
        gsap.to(card, {
          flexGrow: 1,
          duration: 0.8,
          ease: "expo.out"
        });

        // Hide text
        gsap.to([title, link], {
          opacity: 0,
          y: 20,
          duration: 0.4,
          ease: "power2.in"
        });

        // Parallax reset
        gsap.to(img, {
          scale: 1.2,
          x: "-5%",
          duration: 1.2,
          ease: "power2.out"
        });
      }
    });
  }, { dependencies: [activeIndex], scope: containerRef });

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-black">
      {/* Navigation Buttons */}
      <div className="absolute top-10 right-10 z-20 flex gap-4">
        <button 
          onClick={handlePrev}
          className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={handleNext}
          className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Cards Container */}
      <div 
        ref={containerRef}
        className="flex w-full h-full gap-0"
        onMouseLeave={() => setActiveIndex(0)}
      >
        {destinations.map((dest, index) => (
          <div
            key={dest.id}
            ref={(el) => (cardsRef.current[index] = el)}
            onMouseEnter={() => setActiveIndex(index)}
            className="relative h-full overflow-hidden cursor-pointer flex-1"
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img
                src={dest.image}
                alt={dest.title}
                className="dest-img absolute inset-0 w-full h-full object-cover"
                style={{ width: '110%', height: '100%', left: '-5%' }}
              />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80" />

            {/* Content */}
            <div className="absolute bottom-10 left-10 right-10 z-10 pointer-events-none">
              <h3 className="dest-title text-2xl md:text-5xl font-bold text-white mb-3 uppercase tracking-tighter">
                {dest.title}
              </h3>
              <div className="dest-link text-white/70 font-medium text-sm md:text-base flex items-center gap-2">
                SEE MORE 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
