"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null); // Keep this ref for the parent div
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Image slide in from left
      gsap.from(imageRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Content slide in from right
      gsap.from(contentRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Stagger child elements in content
      const children = contentRef.current?.children;
      if (children) {
        gsap.from(Array.from(children), {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          delay: 0.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div ref={imageRef} className="w-full md:w-1/2 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/images/about-image.jpg" // Pastikan gambar ini ada di public/images/
            alt="Tentang Rajawali Travel"
            fill
            className="object-cover"
          />
        </div>

        {/* Right: Content */}
        <div ref={contentRef} className="w-full md:w-1/2 space-y-6">
          <span className="inline-block px-4 py-2 bg-blue-900/10 text-blue-900 rounded-full text-sm font-bold border border-blue-900/20">
            Tentang Kami
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
            Layanan Eksklusif <span className="text-amber-500">24 jam</span> Menyesuaikan Jadwal Anda
          </h2>
          <div className="w-20 h-1.5 bg-amber-400 rounded-full" />
          <p className="text-gray-600 text-lg leading-relaxed">
            Rajawali Travel adalah solusi transportasi terpercaya yang berfokus pada kenyamanan dan ketepatan waktu. Kami memahami bahwa setiap perjalanan Anda sangat berharga, itulah sebabnya kami hadir dengan layanan door-to-door yang siap menjemput Anda tepat di depan pintu rumah.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Melayani rute strategis dari <span className="font-bold text-blue-900">Sukabumi, Cianjur, dan Bandung</span> menuju <span className="font-bold text-blue-900">Bandara Soekarno-Hatta serta wilayah Jabodetabek</span>. Dengan armada yang terawat dan driver profesional, kami menjamin pengalaman perjalanan yang aman, nyaman, dan bebas repot.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-semibold text-blue-900">Door to Door</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-semibold text-blue-900">Tersedia 24 jam</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-semibold text-blue-900">Armada Terawat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}