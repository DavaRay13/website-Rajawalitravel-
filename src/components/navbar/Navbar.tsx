"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Rute", href: "/route" },
  { label: "Armada", href: "/fleet" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="relative flex items-center">
        <svg
          width="48"
          height="32"
          viewBox="0 0 48 32"
          className="fill-white group-hover:fill-amber-400 transition-colors duration-300"
        >
          <path d="M4 24h4l2-6h12l2 6h4l3-8h2l2-4h-4l-1-2h-2l-1 2H16l-3 8H8l-4 10z" />
          <circle cx="9" cy="26" r="3" />
          <circle cx="23" cy="26" r="3" />
          <circle cx="37" cy="26" r="3" />
        </svg>
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          className="absolute -top-2 -right-2 fill-amber-400 group-hover:fill-amber-300 transition-colors duration-300"
        >
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
      </div>
      <span className="text-xl font-bold text-white tracking-wider group-hover:text-amber-400 transition-colors duration-300">
        RAJAWALI
      </span>
    </Link>
  );
}

function DesktopMenu({ activeItem }: { activeItem: string }) {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="relative text-white font-medium text-sm uppercase tracking-wide py-2 group"
        >
          <span
            className={`transition-colors duration-300 ${
              activeItem === item.label.toLowerCase()
                ? "text-amber-400"
                : "hover:text-amber-400"
            }`}
          >
            {item.label}
          </span>
          <motion.span
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400"
            initial={{ width: 0 }}
            animate={{ width: activeItem === item.label.toLowerCase() ? "100%" : 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </Link>
      ))}
    </nav>
  );
}

function MobileMenu({
  isOpen,
  onClose,
  activeItem,
}: {
  isOpen: boolean;
  onClose: () => void;
  activeItem: string;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-blue-900/98 backdrop-blur-xl lg:hidden"
        >
          <div className="flex flex-col h-full pt-6 px-6">
            <div className="flex justify-between items-center mb-12">
              <Logo />
              <button
                onClick={onClose}
                className="w-12 h-12 flex items-center justify-center text-white hover:text-amber-400 transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col items-center gap-8 flex-1 pt-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`text-2xl font-bold uppercase tracking-wider transition-colors duration-300 ${
                      activeItem === item.label.toLowerCase()
                        ? "text-amber-400"
                        : "text-white hover:text-amber-400"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pb-8"
            >
              <Link
                href="/#booking"
                onClick={onClose}
                className="block w-full py-4 text-center bg-amber-400 hover:bg-amber-500 text-blue-900 font-bold rounded-full text-lg transition-all duration-300"
              >
                Pesan Sekarang
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function HamburgerButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden w-12 h-12 flex items-center justify-center text-white hover:text-amber-400 transition-colors"
      aria-label="Toggle menu"
    >
      <motion.div
        animate={isOpen ? "open" : "closed"}
        className="w-6 h-5 relative"
      >
        <motion.span
          className="absolute left-0 w-6 h-0.5 bg-current rounded"
          animate={{
            top: isOpen ? "50%" : "20%",
            rotate: isOpen ? 45 : 0,
            y: isOpen ? "-50%" : 0,
          }}
          style={{ y: "-50%" }}
        />
        <motion.span
          className="absolute left-0 w-6 h-0.5 bg-current rounded"
          animate={{ opacity: isOpen ? 0 : 1, top: "50%" }}
          style={{ top: "50%", y: "-50%" }}
        />
        <motion.span
          className="absolute left-0 w-6 h-0.5 bg-current rounded"
          animate={{
            top: isOpen ? "50%" : "80%",
            rotate: isOpen ? -45 : 0,
            y: isOpen ? "-50%" : 0,
          }}
          style={{ y: "-50%" }}
        />
      </motion.div>
    </button>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeItem = useMemo(() => {
    if (pathname === "/") return "home";
    if (pathname === "/route") return "rute";
    if (pathname === "/fleet") return "armada";
    return "home";
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-blue-900/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Logo />

            <DesktopMenu activeItem={activeItem} />

            <div className="hidden lg:block">
              <Link
                href="/#booking"
                className="inline-block px-6 py-2.5 bg-amber-400 hover:bg-amber-500 text-blue-900 font-semibold rounded-full text-sm transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/20"
              >
                Pesan Sekarang
              </Link>
            </div>

            <HamburgerButton
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeItem={activeItem}
      />
    </>
  );
}