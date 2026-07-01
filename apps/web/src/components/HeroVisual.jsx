import React from 'react';
import { Brain, ShieldCheck, Cloud, Code2, Network } from 'lucide-react';
import Logo from '@/components/Logo.jsx';

const badges = [
  {
    title: 'Quality Engineering',
    icon: ShieldCheck,
    className: 'top-4 left-12',
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    className: 'top-8 right-10',
  },
  {
    title: 'Software Dev',
    icon: Code2,
    className: 'top-1/2 right-0 -translate-y-1/2',
  },
  {
    title: 'AI & Automation',
    icon: Brain,
    className: 'bottom-10 left-4',
  },
  {
    title: 'IT Consulting',
    icon: Network,
    className: 'bottom-4 right-8',
  },
];

export default function HeroVisual() {
  return (
    <div className="relative h-[650px] w-full overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2563eb22,transparent_70%)]" />

      {/* Orbit Rings */}
      <div className="orbit orbit1" />
      <div className="orbit orbit2" />
      <div className="orbit orbit3" />

      {/* Logo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 blur-[90px] bg-blue-600 opacity-30 rounded-full" />
          <Logo iconOnly={true} src="/assets/logo.png" size={240} className="relative" />
        </div>
      </div>

      {/* Floating Badges */}
      {badges.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className={`badge ${item.className}`}>
            <Icon size={20} />
            <span>{item.title}</span>
          </div>
        );
      })}

      {/* Floating Particles */}
      <span className="particle left-[18%] top-[15%]" />
      <span className="particle left-[85%] top-[20%]" />
      <span className="particle left-[78%] top-[72%]" />
      <span className="particle left-[5%] top-[48%]" />
      <span className="particle left-[60%] top-[35%]" />
    </div>
  );
}
