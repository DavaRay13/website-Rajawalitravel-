"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function FullImageSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Parallax-like effect or simple fade in
      gsap.from(imageWrapperRef.current, {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="w-full overflow-hidden bg-gray-50">
      <div ref={imageWrapperRef} className="relative w-full">
        <Image
          src="/images/rajawali-bg.jpg" // Menggunakan gambar yang tersedia agar tidak error
          alt="Rajawali Travel Showcase"
          width={1920}
          height={1080}
          sizes="100vw"
          className="w-full h-auto block"
          priority
        />
        {/* Overlay untuk estetika, pointer-events-none agar tidak menghalangi klik jika ada */}
        <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply pointer-events-none" />
      </div>
    </section>
  );
}
