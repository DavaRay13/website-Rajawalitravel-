"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
    title: "Door-to-Door Service",
    description: "Penjemputan dan pengantaran langsung ke lokasi tujuan Anda tanpa transit.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Layanan 24/7",
    description: "Siap melayani kapan saja, termasuk dini hari, hari libur, dan weekend.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    title: "Sopir Profesional",
    description: "Sopir berpengalaman, ramah, dan familiar semua rute perjalanan.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Armada Terjamin",
    description: "Kendaraan terawat dengan service rutin. Setiap perjalanan include BPJS asuransi.",
  },
];

const stats = [
  { value: "500+", label: "Pelanggan Puas" },
  { value: "6", label: "Unit Armada" },
  { value: "18", label: "Rute Tersedia" },
  { value: "24/7", label: "Layanan Aktif" },
];

function FeatureCard({ feature }: { feature: (typeof features)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const card = cardRef.current;
      const icon = iconRef.current;

      if (!card || !icon) return;

      const handleMouseEnter = () => {
        gsap.to(card, {
          y: -5,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(icon, {
          scale: 1.1,
          rotation: 5,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: cardRef }
  );

  return (
    <div
      ref={cardRef}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300 group cursor-pointer"
      style={{ willChange: "transform" }}
    >
      <div
        ref={iconRef}
        className="w-16 h-16 bg-amber-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-amber-400 group-hover:bg-amber-400 group-hover:text-blue-900 transition-all duration-300"
      >
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
      <p className="text-blue-200 leading-relaxed">{feature.description}</p>
    </div>
  );
}

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".feature-card", { opacity: 0, y: 30 });
      gsap.set(titleRef.current, { opacity: 0, y: -20 });
      gsap.set(".stat-item", { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      })
        .to(
          ".feature-card",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          ".stat-item",
          {
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.2"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative bg-blue-900 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mengapa Memilih <span className="text-amber-400">Rajawali?</span>
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Kami menghadirkan pengalaman perjalanan yang berbeda dengan layanan
            berkualitas tinggi dan harga yang kompetitif.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>

        <div
          ref={statsRef}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">
                {stat.value}
              </div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}