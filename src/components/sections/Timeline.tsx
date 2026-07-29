import React from 'react';
import { motion } from 'framer-motion';
import { CAREER_TIMELINE } from '../../data/portfolioData';
import { Clock, ChevronRight } from 'lucide-react';

export const Timeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative z-10 border-t border-red-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center space-x-2 text-[#E50914] font-orbitron text-xs font-bold uppercase tracking-widest mb-2">
            <Clock className="w-4 h-4" />
            <span>ENGINEERING ROADMAP</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bebas text-white tracking-wider">
            CINEMATIC TIMELINE & EXPERIENCE
          </h2>
          <p className="text-slate-400 text-sm font-inter max-w-xl mt-2">
            Chronological trajectory from academic foundation to full stack developments, AI internship, and cloud engineering.
          </p>
          <div className="w-24 h-1 bg-[#E50914] mt-3 rounded-full shadow-[0_0_12px_#E50914]" />
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Vertical Glowing Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#E50914] via-red-900/50 to-[#E50914] shadow-[0_0_10px_#E50914]" />

          <div className="space-y-12">
            {CAREER_TIMELINE.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 z-20 w-8 h-8 rounded-full bg-[#050505] border-2 border-[#E50914] flex items-center justify-center shadow-[0_0_15px_#E50914]">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${isEven ? 'sm:pr-10 sm:text-right' : 'sm:pl-10'}`}>
                    <div className="glass-card p-6 rounded-xl border border-red-900/30 group hover:border-[#E50914] transition-all hud-corner-tl hud-corner-br">
                      <div className={`flex items-center gap-2 mb-2 ${isEven ? 'sm:justify-end' : ''}`}>
                        <span className="font-bebas text-3xl text-gradient-text-red">
                          {item.year}
                        </span>
                        <span className="text-[10px] font-orbitron px-2 py-0.5 rounded bg-red-950 text-[#FF1E27] border border-red-800 font-semibold uppercase">
                          {item.type}
                        </span>
                      </div>

                      <h3 className="text-xl font-bebas text-white tracking-wide group-hover:text-glow-red transition">
                        {item.title}
                      </h3>
                      <p className="text-xs font-orbitron font-semibold text-[#E50914] mb-3">
                        {item.role} • {item.organization}
                      </p>

                      <p className="text-xs font-inter text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Key Highlights */}
                      <div className={`space-y-1 text-xs font-inter ${isEven ? 'sm:text-right' : ''}`}>
                        {item.highlights.map((h, i) => (
                          <div
                            key={i}
                            className={`flex items-center gap-1.5 text-slate-400 ${
                              isEven ? 'sm:justify-end' : ''
                            }`}
                          >
                            <ChevronRight className="w-3 h-3 text-[#E50914] shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
