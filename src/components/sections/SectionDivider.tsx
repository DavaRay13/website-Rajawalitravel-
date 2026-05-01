"use client";

import { motion } from "framer-motion";

type DividerType = "waves-down" | "waves-up" | "curve-down" | "curve-up" | "triangle";

interface SectionDividerProps {
  type?: DividerType;
  className?: string;
}

function WavesDown({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full ${className}`}>
      <svg
        className="absolute bottom-0 left-0 w-full h-16 md:h-24"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,50 1440,50 L1440,100 L0,100 Z"
          fill="url(#waveGradient)"
        />
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="50%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-full h-12 md:h-16"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,40 1440,40 L1440,80 L0,80 Z"
          fill="#0f172a"
        />
      </svg>
    </div>
  );
}

function WavesUp({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full rotate-180 ${className}`}>
      <svg
        className="absolute bottom-0 left-0 w-full h-16 md:h-24"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,50 1440,50 L1440,100 L0,100 Z"
          fill="url(#waveGradientUp)"
        />
        <defs>
          <linearGradient id="waveGradientUp" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="50%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-full h-12 md:h-16"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,40 1440,40 L1440,80 L0,80 Z"
          fill="#0f172a"
        />
      </svg>
    </div>
  );
}

function CurveDown({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full ${className}`}>
      <svg
        className="absolute bottom-0 left-0 w-full h-16 md:h-24"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          d="M0,0 L0,60 Q360,120 720,60 T1440,60 L1440,0 Z"
          fill="#1e3a8a"
        />
      </svg>
    </div>
  );
}

function CurveUp({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full rotate-180 ${className}`}>
      <svg
        className="absolute bottom-0 left-0 w-full h-16 md:h-24"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          d="M0,0 L0,60 Q360,120 720,60 T1440,60 L1440,0 Z"
          fill="#1e3a8a"
        />
      </svg>
    </div>
  );
}

function Triangle({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full ${className}`}>
      <svg
        className="absolute bottom-0 left-0 w-full h-12 md:h-16"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          d="M0,60 L240,0 L480,60 L720,0 L960,60 L1200,0 L1440,60 L1440,60 L0,60 Z"
          fill="#1e3a8a"
        />
      </svg>
    </div>
  );
}

export default function SectionDivider({
  type = "waves-down",
  className = "",
}: SectionDividerProps) {
  const components = {
    "waves-down": WavesDown,
    "waves-up": WavesUp,
    "curve-down": CurveDown,
    "curve-up": CurveUp,
    triangle: Triangle,
  };

  const DividerComponent = components[type];

  return <DividerComponent className={className} />;
}