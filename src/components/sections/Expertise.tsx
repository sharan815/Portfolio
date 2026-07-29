import React from 'react';
import { motion } from 'framer-motion';
import { EXPERTISE_CARDS } from '../../data/portfolioData';
import { Cloud, Cpu, Layout, Bot, Database, Terminal, Shield } from 'lucide-react';

export const Expertise: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud': return <Cloud className="w-8 h-8 text-[#E50914]" />;
      case 'Cpu': return <Cpu className="w-8 h-8 text-[#E50914]" />;
      case 'Layout': return <Layout className="w-8 h-8 text-[#E50914]" />;
      case 'Bot': return <Bot className="w-8 h-8 text-[#E50914]" />;
      case 'Database': return <Database className="w-8 h-8 text-[#E50914]" />;
      case 'Terminal': return <Terminal className="w-8 h-8 text-[#E50914]" />;
      default: return <Cloud className="w-8 h-8 text-[#E50914]" />;
    }
  };

  return (
    <section id="expertise" className="py-20 relative z-10 bg-[#07070B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center space-x-2 text-[#E50914] font-orbitron text-xs font-bold uppercase tracking-widest mb-2">
            <Shield className="w-4 h-4" />
            <span>TITAN SPECIFICATIONS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bebas text-white tracking-wider">
            CORE EXPERTISE & CAPABILITIES
          </h2>
          <p className="text-slate-400 text-sm font-inter max-w-2xl mt-2">
            Engineered with modern architecture, automated workflows, and robust cloud performance.
          </p>
          <div className="w-24 h-1 bg-[#E50914] mt-3 rounded-full shadow-[0_0_12px_#E50914]" />
        </div>

        {/* 4 Spec Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EXPERTISE_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-xl border border-red-900/30 relative group hover:border-[#E50914] transition-all flex flex-col justify-between hud-corner-tl hud-corner-br"
            >
              {/* Card Top */}
              <div>
                <div className="flex items-center justify-between border-b border-red-900/20 pb-4 mb-4">
                  <div className="p-3 rounded-xl bg-red-950/40 border border-red-900/50 group-hover:scale-110 group-hover:bg-[#E50914]/20 transition-all">
                    {getIcon(card.iconName)}
                  </div>
                  <span className="text-[10px] font-orbitron px-2.5 py-1 rounded bg-red-950/80 text-[#FF1E27] border border-red-900/60 font-semibold tracking-wider">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bebas text-white tracking-wide group-hover:text-glow-red transition">
                  {card.title}
                </h3>
                <p className="text-xs font-orbitron font-semibold text-[#E50914] mb-3">
                  {card.subtitle}
                </p>

                <p className="text-sm font-inter text-slate-300 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Card Bottom Spec Status Bar */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-orbitron text-slate-500">
                <span className="flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-pulse" />
                  <span className="text-slate-400">SPEC OK</span>
                </span>
                <span>MODULE #{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
