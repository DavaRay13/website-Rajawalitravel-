"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function MapSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gray-50 overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-2 bg-blue-900/10 text-blue-900 rounded-full text-sm font-bold border border-blue-900/20">
            Lokasi Kami
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
            Area Layanan <span className="text-amber-500">& Jangkauan</span> Rajawali Travel
          </h2>
          <div className="w-20 h-1.5 bg-amber-400 rounded-full mx-auto" />
          <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
            Kami melayani penjemputan dan pengantaran di wilayah Sukabumi, Cianjur, Bandung, menuju Bandara Soekarno-Hatta dan seluruh area Jabodetabek.
          </p>
        </div>

        {/* Google Maps Iframe */}
        <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d106.845512753381!3d-6.914744372579976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6836371728258b%3A0x3015760a3f91800!2sSukabumi%2C%20Sukabumi%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1716282845612!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Rajawali Travel"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
