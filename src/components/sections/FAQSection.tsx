"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Bagaimana cara memesan travel Rajawali?",
    answer: "Anda dapat memesan travel Rajawali dengan menghubungi kami via WhatsApp atau telepon. Kami akan memandu Anda untuk memilih rute, menentukan jadwal penjemputan, dan mengkonfirmasi pemesanan. Pemesanan dapat dilakukan minimal 1 hari sebelum keberangkatan.",
  },
  {
    question: "Berapa lama waktu penjemputan sebelum keberangkatan?",
    answer: "Sopir kami akan menjemput Anda 30-60 menit sebelum keberangkatan, tergantung pada lokasi dan lalu lintas. Kami akan menginformasikan waktu penjemputan yang lebih spesifik saat konfirmasi pemesanan.",
  },
  {
    question: "Apakah bisa refund jika pembatalan?",
    answer: "Ya, kami menyediakan kebijakan refund yang fleksibel. Pembatalan lebih dari 24 jam sebelum keberangkatan akan mendapatkan refund penuh. Pembatalan kurang dari 24 jam akan mendapatkan refund 50%. Pembatalan kurang dari 12 jam tidak dapat refund.",
  },
  {
    question: "Apakah bisa mengubah jadwal keberangkatan?",
    answer: "Tentu saja! Anda dapat mengubah jadwal keberangkatan maksimal 12 jam sebelum waktu yang seharusnya. Tidak dikenakan biaya tambahan selama masih dalam periode yang sama.",
  },
  {
    question: "Apakah ada diskon untuk pemesanan grup?",
    answer: "Ya! Kami menyediakan diskon khusus untuk pemesanan grup. Untuk 5-10 orang mendapat diskon 5%, 11-20 orang mendapat diskon 10%, dan untuk 21+ orang mendapat diskon 15%. Hubungi kami untuk info lebih lanjut.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-b border-white/10"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left hover:text-amber-400 transition-colors"
      >
        <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 text-amber-400"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-blue-200 leading-relaxed">{faq.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-blue-900 py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pertanyaan <span className="text-amber-400">Umum</span>
          </h2>
          <p className="text-blue-200 text-lg">
            Temukan jawaban untuk pertanyaan yang sering diajukan.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-blue-200 mb-4">
            Tidak menemukan jawaban yang Anda cari?
          </p>
          <motion.a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 bg-transparent border-2 border-amber-400 text-amber-400 font-semibold rounded-full hover:bg-amber-400 hover:text-blue-900 transition-all duration-300"
          >
            Tanya Kami
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}