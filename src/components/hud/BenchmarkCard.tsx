import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import type { StatItem } from '../../types/portfolio';
import { Trophy, Code, Cpu, ShieldCheck, Flame, Server } from 'lucide-react';

interface BenchmarkCardProps {
  stat: StatItem;
  index: number;
}

export const BenchmarkCard: React.FC<BenchmarkCardProps> = ({ stat, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = stat.value;
    const duration = 1500;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += Math.ceil(end / 40);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, Math.max(stepTime, 20));

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  const getIcon = (id: string) => {
    switch (id) {
      case 'tech': return <Cpu className="w-6 h-6 text-[#E50914]" />;
      case 'projects': return <Trophy className="w-6 h-6 text-[#E50914]" />;
      case 'years': return <Flame className="w-6 h-6 text-[#E50914]" />;
      case 'cleancode': return <ShieldCheck className="w-6 h-6 text-[#E50914]" />;
      case 'dsa': return <Code className="w-6 h-6 text-[#E50914]" />;
      case 'deployments': return <Server className="w-6 h-6 text-[#E50914]" />;
      default: return <Cpu className="w-6 h-6 text-[#E50914]" />;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-5 rounded-xl border border-red-900/30 relative group overflow-hidden hud-corner-tl hud-corner-br"
    >
      {/* Top Cyber Accents */}
      <div className="flex items-center justify-between border-b border-red-900/20 pb-3 mb-3">
        <div className="p-2 rounded bg-red-950/40 border border-red-900/50 group-hover:border-[#E50914] transition">
          {getIcon(stat.id)}
        </div>
        <span className="text-[10px] font-orbitron text-slate-500 tracking-wider">
          BENCHMARK #{index + 1}
        </span>
      </div>

      {/* Counter Display */}
      <div className="space-y-1">
        <div className="flex items-baseline space-x-1">
          <span className="text-4xl sm:text-5xl font-bebas tracking-wide text-white group-hover:text-glow-red transition">
            {count}
          </span>
          <span className="text-2xl font-bebas text-[#E50914] font-bold">
            {stat.suffix}
          </span>
        </div>
        <h4 className="text-xs font-orbitron font-semibold text-slate-200 uppercase tracking-wider">
          {stat.label}
        </h4>
      </div>

      {/* Description Subtext */}
      <div className="mt-3 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
        <span>{stat.subtext}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] group-hover:animate-ping" />
      </div>
    </motion.div>
  );
};
