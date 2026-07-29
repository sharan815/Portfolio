import React from 'react';
import { motion } from 'framer-motion';
import { CLOUD_DEVOPS_TOOLS } from '../../data/portfolioData';
import { Cloud, Server, Cpu, ShieldCheck, Terminal, Zap, GitBranch, Globe, Rocket } from 'lucide-react';

export const CloudDevOps: React.FC = () => {
  const getToolIcon = (icon: string) => {
    switch (icon) {
      case 'Cloud': return <Cloud className="w-6 h-6 text-[#E50914]" />;
      case 'Container': return <Cpu className="w-6 h-6 text-[#E50914]" />;
      case 'GitBranch': return <GitBranch className="w-6 h-6 text-[#E50914]" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-[#E50914]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#E50914]" />;
      case 'Server': return <Server className="w-6 h-6 text-[#E50914]" />;
      case 'Globe': return <Globe className="w-6 h-6 text-[#E50914]" />;
      case 'Rocket': return <Rocket className="w-6 h-6 text-[#E50914]" />;
      case 'Shield': return <ShieldCheck className="w-6 h-6 text-[#E50914]" />;
      default: return <Cloud className="w-6 h-6 text-[#E50914]" />;
    }
  };

  return (
    <section id="cloud" className="py-20 relative z-10 bg-[#07070B] border-t border-red-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center space-x-2 text-[#E50914] font-orbitron text-xs font-bold uppercase tracking-widest mb-2">
            <Cloud className="w-4 h-4" />
            <span>INFRASTRUCTURE MATRIX</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bebas text-white tracking-wider">
            CLOUD & DEVOPS ECOSYSTEM
          </h2>
          <p className="text-slate-400 text-sm font-inter max-w-xl mt-2">
            Google Cloud & AWS infrastructure, Firebase sync, version control, IoT telemetry & development environments.
          </p>
          <div className="w-24 h-1 bg-[#E50914] mt-3 rounded-full shadow-[0_0_12px_#E50914]" />
        </div>

        {/* Cyber Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {CLOUD_DEVOPS_TOOLS.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-card p-5 rounded-xl border border-red-900/30 group hover:border-[#E50914] transition-all flex flex-col justify-between hud-corner-tl hud-corner-br"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-lg bg-red-950/50 border border-red-900/40 group-hover:bg-[#E50914]/20 transition">
                    {getToolIcon(tool.icon)}
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <h3 className="text-lg font-bebas text-white tracking-wide group-hover:text-glow-red transition">
                  {tool.name}
                </h3>
                <span className="text-[10px] font-orbitron text-slate-400 block">
                  {tool.category}
                </span>
              </div>

              <div className="mt-4 pt-3 border-t border-red-900/20 text-[10px] font-mono text-[#FF1E27]">
                {tool.status}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
