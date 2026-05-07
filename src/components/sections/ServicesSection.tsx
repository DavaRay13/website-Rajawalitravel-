"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "Shuttle Bandara",
    description:
      "Antar jemput 24 jam ke Bandara Soetta & Bandara Kertajati. On-time guarantee dengan tracking real-time.",
    image: "/images/service-shuttle.jpg", // Slot untuk gambar shuttle
  },
  {
    id: 2,
    title: "Kirim Paket Kilat",
    description:
      "Layanan pengiriman paket same-day & next-day. Aman, cepat, dan terpercaya dengan tracking.",
    image: "/images/service-package.jpg", // Slot untuk gambar paket
  },
  {
    id: 3,
    title: "Sewa Mobil + Driver",
    description:
      "Sewa mobil harian/mingguan dengan driver profesional. Armada terawat, harga kompetitif.",
    image: "/images/service-car.jpg", // Slot untuk gambar mobil
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLDivElement>(".service-card");
      const icons = gsap.utils.toArray<HTMLDivElement>(".service-icon-wrapper");

      if (cards.length === 0) return;

      gsap.set(cards, { 
        opacity: 0, 
        y: 30, 
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" 
      });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.2,
        stagger: 0.4, 
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Decorative background animation
      gsap.to(".bg-decoration", {
        y: -20,
        rotation: 5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Parallax Background animation
      gsap.to(sectionRef.current, {
        backgroundPosition: `50% 100%`,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      icons.forEach((icon, index) => {
        if (!icon) return;
        const img = icon.querySelector(".service-icon");
        if (!img) return;

        if (index === 0) {
          gsap.to(img, {
            y: -15,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        } else if (index === 1) {
          gsap.to(img, {
            scale: 1.05,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        } else if (index === 2) {
          gsap.to(img, {
            y: -10,
            x: 5,
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      });

      cards.forEach((card) => {
        if (!card) return;

        const handleMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          const iconWrapper = card.querySelector(".service-icon-wrapper");
          if (iconWrapper) {
            gsap.to(iconWrapper.querySelector(".service-icon"), {
              x: x / 40,
              y: y / 40,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        };

        const handleMouseLeave = () => {
          const iconWrapper = card.querySelector(".service-icon-wrapper");
          if (iconWrapper) {
            gsap.to(iconWrapper.querySelector(".service-icon"), {
              x: 0,
              y: 0,
              duration: 0.5,
              ease: "elastic.out(1, 0.5)",
            });
          }
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);
        (card as any)._handleMouseMove = handleMouseMove;
        (card as any)._handleMouseLeave = handleMouseLeave;
      });

      return () => {
        cards.forEach((card) => {
          if (card) {
            const handleMouseMove = (card as any)._handleMouseMove;
            const handleMouseLeave = (card as any)._handleMouseLeave;
            if (handleMouseMove) card.removeEventListener("mousemove", handleMouseMove);
            if (handleMouseLeave) card.removeEventListener("mouseleave", handleMouseLeave);
          }
        });
      };
    },
    { scope: sectionRef }
  );

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const iconWrapper = card.querySelector(".service-icon-wrapper");
    const overlay = card.querySelector(".service-content-overlay");
    const title = card.querySelector(".card-title");
    const img = card.querySelector(".service-icon");

    gsap.to(card, {
      scale: 1.02,
      duration: 0.4,
      ease: "power2.out",
    });
    
    gsap.to(overlay, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power3.out"
    });

    gsap.to(iconWrapper, {
      scale: 1.1,
      duration: 0.5,
      ease: "power3.out"
    });

    if (img) {
      gsap.to(img, {
        filter: "blur(4px) brightness(0.6)",
        duration: 0.5
      });
    }

    gsap.to(title, {
      opacity: 0,
      duration: 0.3
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const iconWrapper = card.querySelector(".service-icon-wrapper");
    const overlay = card.querySelector(".service-content-overlay");
    const title = card.querySelector(".card-title");
    const img = card.querySelector(".service-icon");

    gsap.to(card, {
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(overlay, {
      y: "100%",
      opacity: 0,
      duration: 0.5,
      ease: "power3.in"
    });

    gsap.to(iconWrapper, {
      scale: 1,
      duration: 0.5,
      ease: "power3.out"
    });

    if (img) {
      gsap.to(img, {
        filter: "blur(0px) brightness(1)",
        duration: 0.5
      });
    }

    gsap.to(title, {
      opacity: 1,
      duration: 0.3,
      delay: 0.2
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 pb-64 px-4 bg-fixed bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/service-background.jpg')", backgroundPosition: "50% 0px" }}
    >
      {/* Background Overlay untuk memastikan teks tetap terbaca */}
      <div className="absolute inset-0 bg-blue-900 opacity-70 z-[1]" />

      {/* Decorative Background Model Elements */}
      <div className="bg-decoration absolute -bottom-20 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob z-0" />
      <div className="bg-decoration absolute -bottom-20 -right-20 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 z-0" />

      <div ref={containerRef} className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-amber-400/20 text-amber-600 rounded-full text-sm font-medium border border-amber-400/30 mb-4">
            Layanan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Pilihan Layanan Terbaik
          </h2>
          <p className="text-blue-50 mt-4 max-w-2xl mx-auto">
            Solusi transportasi dan pengiriman yang dirancang untuk kenyamanan dan
            kecepatan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => {
            const message = `Halo Rajawali Travel, saya tertarik dengan layanan ${service.title}. Bisa minta informasi lebih lanjut?`;
            const waUrl = `https://wa.me/6285720853828?text=${encodeURIComponent(message)}`;

            return (
              <div
                key={service.id}
                className={`service-card relative h-[500px] bg-blue-900 rounded-3xl shadow-2xl border border-white/10 cursor-pointer overflow-hidden bill-change-transform ${
                  index === 0 ? "md:mt-0" : index === 1 ? "md:mt-16" : "md:mt-32"
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Full Image Container */}
                <div className="service-icon-wrapper absolute inset-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="service-icon w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900/90" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    <h3 className="card-title text-3xl font-bold text-white mt-auto text-center drop-shadow-lg transition-opacity duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Interactive Content Overlay (Revealed on Hover) */}
                <div className="service-content-overlay absolute inset-0 bg-blue-900/60 backdrop-blur-sm flex flex-col justify-end p-10 translate-y-full opacity-0">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <div className="w-12 h-1 bg-amber-400 mb-4" />
                  <p className="text-blue-50 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <a 
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-amber-400 font-bold group w-fit"
                  >
                    <span>Pesan Sekarang</span>
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
