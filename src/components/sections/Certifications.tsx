import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../../data/portfolioData';
import { Award, Cloud, BarChart, Code, Cpu, Server, CheckCircle } from 'lucide-react';

export const Certifications: React.FC = () => {
  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud': return <Cloud className="w-6 h-6 text-[#E50914]" />;
      case 'BarChart': return <BarChart className="w-6 h-6 text-[#E50914]" />;
      case 'Code': return <Code className="w-6 h-6 text-[#E50914]" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#E50914]" />;
      case 'Server': return <Server className="w-6 h-6 text-[#E50914]" />;
      default: return <Award className="w-6 h-6 text-[#E50914]" />;
    }
  };

  return (
    <section id="certifications" className="py-20 relative z-10 bg-[#07070B] border-t border-red-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center space-x-2 text-[#E50914] font-orbitron text-xs font-bold uppercase tracking-widest mb-2">
            <Award className="w-4 h-4" />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bebas text-white tracking-wider">
            CERTIFICATIONS & ACCREDITATION
          </h2>
          <p className="text-slate-400 text-sm font-inter max-w-xl mt-2">
            Industry recognized certifications spanning cloud architecture, data analytics, machine learning, and software development.
          </p>
          <div className="w-24 h-1 bg-[#E50914] mt-3 rounded-full shadow-[0_0_12px_#E50914]" />
        </div>

        {/* Horizontal Luxury Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-xl border border-red-900/30 group hover:border-[#E50914] transition-all flex flex-col justify-between hud-corner-tl hud-corner-br"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-red-900/30 mb-4">
                  <div className="p-3 rounded-xl bg-red-950/50 border border-red-900/40 group-hover:bg-[#E50914]/20 transition">
                    {getCertIcon(cert.icon)}
                  </div>
                  <span className="text-[10px] font-orbitron px-2.5 py-1 rounded bg-[#050505] text-slate-400 border border-red-900/40">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-2xl font-bebas text-white tracking-wide group-hover:text-glow-red transition">
                  {cert.title}
                </h3>
                <p className="text-xs font-orbitron font-semibold text-[#E50914] mb-4">
                  ISSUED BY: {cert.issuer.toUpperCase()}
                </p>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-red-950/40 text-slate-300 font-orbitron text-[10px] border border-red-900/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-red-900/20 flex items-center justify-between text-[10px] font-orbitron text-slate-500">
                <span className="flex items-center space-x-1 text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>VERIFIED CREDENTIAL</span>
                </span>
                <span>ID: VALIDATED</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
