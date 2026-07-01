
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cloud, Code2, Brain, Network } from 'lucide-react';

function InfinityLoopDiagram() {
  const cards = [
    { icon: Shield, label: 'Quality Engineering', x: 20, y: 20 },
    { icon: Cloud, label: 'DevOps & Cloud', x: 220, y: 15 },
    { icon: Code2, label: 'Software Dev', x: 120, y: 70 },
    { icon: Brain, label: 'AI & Automation', x: 40, y: 120 },
    { icon: Network, label: 'IT Consulting', x: 240, y: 110 }
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto aspect-video">
      {/* 3D-ish SVG Infinity Loop */}
      <svg
        viewBox="0 0 300 150"
        className="w-full h-full drop-shadow-[0_0_15px_rgba(0,102,255,0.5)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0066FF" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#0066FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#0066FF" stopOpacity="0.4" />
          </linearGradient>
          <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* Shadow path */}
        <path
          d="M 75 110 C 25 110, 10 75, 50 40 C 90 5, 120 40, 150 75 C 180 110, 210 145, 250 110 C 290 75, 275 40, 225 40 C 175 40, 180 75, 150 75 C 120 75, 125 110, 75 110 Z"
          fill="none"
          stroke="#0066FF"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.2"
          filter="url(#blur)"
        />

        {/* Main path animated */}
        <motion.path
          d="M 75 110 C 25 110, 10 75, 50 40 C 90 5, 120 40, 150 75 C 180 110, 210 145, 250 110 C 290 75, 275 40, 225 40 C 175 40, 180 75, 150 75 C 120 75, 125 110, 75 110 Z"
          fill="none"
          stroke="url(#glowGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity }}
        />
      </svg>

      {/* Floating Tech Cards */}
      {cards.map((card, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{ 
            opacity: { duration: 0.5, delay: idx * 0.2 },
            scale: { duration: 0.5, delay: idx * 0.2 },
            y: { duration: 4, repeat: Infinity, delay: idx * 0.5, ease: "easeInOut" }
          }}
          className="absolute glass px-3 py-2 rounded-xl flex items-center gap-2 border border-white/20 shadow-lg"
          style={{ left: `${(card.x / 300) * 100}%`, top: `${(card.y / 150) * 100}%` }}
        >
          <card.icon className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold text-white whitespace-nowrap">{card.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default InfinityLoopDiagram;
