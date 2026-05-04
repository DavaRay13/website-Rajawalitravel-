"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Rute", href: "/route" },
  { label: "Armada", href: "/fleet" },
];

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    label: "Telepon",
    value: "+62 812 3456 7890",
    href: "tel:+6281234567890",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: "Email",
    value: "info@rajawali-travel.com",
    href: "mailto:info@rajawali-travel.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+62 812 3456 7890",
    href: "https://wa.me/+6281234567890",
  },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 2.52-1.12 4.84-2.94 6.24-1.73 1.33-3.94 2.04-6.1 1.85-2.82-.19-5.35-1.47-7.2-3.63-1.82-2.13-2.63-5.04-2.14-8.02.39-2.4 1.54-4.52 3.18-5.87 1.53-1.26 3.47-1.96 5.35-1.74.19.02.38.04.57.06v4.08c-1.2-.09-2.35-.22-3.47-.66-.58-.24-1.1-.53-1.56-.9-.39-.31-.7-.66-.95-1.03-.16-.24-.27-.49-.34-.75-.05-.17-.07-.35-.07-.52v-.03h-.01c-.01-.14 0-.27.03-.4.07-.28.2-.54.39-.76.21-.25.48-.46.81-.63.36-.19.77-.32 1.21-.36.33-.03.66-.02.99.01.49.04.96.17 1.37.39.58.31 1.08.72 1.48 1.22.4.5.72 1.07.94 1.67.22.61.33 1.25.31 1.9-.01.56-.08 1.11-.21 1.64-.13.51-.33 1-.58 1.46-.28.51-.62.98-1.01 1.39-.39.41-.84.75-1.32 1.01-.57.31-1.19.53-1.83.64-.48.08-.96.1-1.44.05-.35-.03-.69-.1-1.02-.21-.28-.09-.55-.21-.8-.35-.27-.16-.51-.35-.73-.57-.2-.2-.37-.42-.51-.65-.14-.24-.24-.49-.29-.75-.04-.19-.05-.38-.03-.58.02-.17.08-.33.16-.48.1-.19.24-.35.41-.48.19-.15.42-.27.66-.35.28-.1.57-.16.87-.19.25-.03.5-.02.75.02.21.03.42.09.62.18.21.09.4.21.58.35.19.15.36.32.51.5.16.19.29.39.39.6.11.22.18.46.22.7.04.24.04.48.01.72-.03.26-.1.51-.21.75-.13.27-.3.51-.5.73-.21.23-.46.43-.73.59-.28.17-.58.3-.89.4-.34.11-.69.18-1.05.22-.37.04-.75.04-1.12-.01-.34-.04-.68-.12-1-.25-.33-.13-.65-.31-.94-.53-.29-.22-.55-.48-.77-.77-.23-.3-.43-.63-.59-.97-.17-.37-.29-.75-.35-1.14-.06-.41-.06-.82-.01-1.23.05-.43.16-.85.32-1.25.17-.42.39-.82.66-1.18.27-.37.58-.71.93-1.01.36-.3.76-.55 1.19-.75.45-.2.92-.35 1.4-.45.49-.1.98-.15 1.48-.14h.01v4.11c.38-.03.75-.03 1.13 0 .36.03.72.1 1.06.21.35.12.68.27.99.46.32.2.61.44.87.7.26.27.49.56.69.88.19.32.34.66.44 1.01.1.36.15.73.14 1.1-.01.35-.07.7-.18 1.03-.11.33-.26.64-.45.92-.19.28-.42.53-.68.75-.26.22-.54.41-.85.56-.31.15-.64.26-.98.33-.34.07-.69.11-1.04.1-.32-.01-.63-.05-.94-.13-.3-.08-.59-.19-.86-.33-.27-.14-.52-.31-.75-.51-.23-.2-.43-.42-.61-.66-.18-.25-.33-.51-.45-.79-.12-.28-.21-.57-.26-.87z" />
      </svg>
    ),
  },
];

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-blue-900 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Image 
                src="/images/logo.png" 
                alt="Rajawali Logo" 
                width={40}
                height={40}
                className="w-10 h-auto"
              />
              <span className="text-xl font-bold text-white uppercase tracking-wider">RAJAWALI</span>
            </div>
            <p className="text-blue-200 mb-6">
              Layanan travel door-to-door terpercaya dari Sukabumi, Cianjur, dan
              Bandung ke seluruh Jabodetabek. Nikmati perjalanan nyaman dengan
              harga terjangkau.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-amber-400 hover:text-blue-900 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-white mb-6">Kontak</h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    className="flex items-start gap-3 text-blue-200 hover:text-amber-400 transition-colors"
                  >
                    <span className="text-amber-400 mt-0.5">{contact.icon}</span>
                    <div>
                      <div className="text-sm">{contact.label}</div>
                      <div>{contact.value}</div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-bold text-white mb-6">Galeri Armada</h3>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative aspect-video rounded-lg overflow-hidden group border border-white/10 bg-white/5">
                  <Image
                    src={`/images/footer-gallery-${i}.jpg`}
                    alt={`Gallery ${i}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
            <div className="text-blue-200 text-sm">
              <p className="font-bold text-white mb-1">Jam Operasional:</p>
              <p>Senin - Minggu: 24 Jam</p>
              <p>Layanan 24/7 termasuk hari libur</p>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-300 text-sm">
              &copy; {currentYear} Rajawali Travel. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-blue-300 hover:text-amber-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-300 hover:text-amber-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-blue-300 hover:text-amber-400 transition-colors">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}