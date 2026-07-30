import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Shield, Target, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative z-10 border-t border-red-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center space-x-2 text-[#E50914] font-orbitron text-xs font-bold uppercase tracking-widest mb-2">
            <Shield className="w-4 h-4" />
            <span>CORE IDENTITY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bebas text-white tracking-wider">
            WHO AM I<span className="text-[#E50914]">?</span>
          </h2>
          <div className="w-24 h-1 bg-[#E50914] mt-2 rounded-full shadow-[0_0_12px_#E50914]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Visual HUD Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="glass-card p-6 rounded-2xl border border-red-900/40 relative hud-corner-tl hud-corner-br group">
              <div className="flex items-center space-x-4 pb-4 border-b border-red-900/30">
                {/* Profile Photo Avatar with Glowing Cyber Border */}
                <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-[#E50914] shadow-[0_0_15px_rgba(229,9,20,0.5)] shrink-0 bg-[#050505] flex items-center justify-center">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src.startsWith('/') || !target.dataset.triedRelative) {
                        target.dataset.triedRelative = 'true';
                        target.src = '.' + PERSONAL_INFO.profileImage;
                      } else {
                        target.style.display = 'none';
                      }
                    }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 pointer-events-none border border-red-500/30 rounded-xl" />
                </div>

                <div>
                  <h3 className="text-2xl font-bebas text-white tracking-wide">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs font-orbitron text-[#E50914]">B.TECH AI & DATA SCIENCE</p>
                  <span className="inline-block mt-1 text-[9px] font-orbitron text-emerald-400 font-bold uppercase tracking-wider">
                    ● ACTIVE DEVELOPER
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-xs font-inter text-slate-300">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#E50914] mt-0.5 shrink-0" />
                  <p><strong className="text-white font-orbitron">Specialization:</strong> Artificial Intelligence, Full Stack Web Architecture, Cloud Computing & DevOps Pipelines.</p>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#E50914] mt-0.5 shrink-0" />
                  <p><strong className="text-white font-orbitron">Engineering Philosophy:</strong> Clean architecture, robust test coverage, cloud-native scalability, and maximum user impact.</p>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#E50914] mt-0.5 shrink-0" />
                  <p><strong className="text-white font-orbitron">Target Horizon:</strong> Cloud & AI Solutions Engineering, Infrastructure Automation.</p>
                </div>
              </div>

              {/* Cyber Emblem Status */}
              <div className="mt-6 pt-4 border-t border-red-900/30 flex items-center justify-between text-[10px] font-orbitron text-slate-500">
                <span className="text-emerald-400">ENGINEERING DRIVEN</span>
                <span>COIMBATORE, INDIA</span>
              </div>
            </div>
          </motion.div>

          {/* Right Text & Mission Statement */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bebas text-white tracking-wide">
                ARCHITECTING INTELLIGENT APPLICATIONS & POWERING THE CLOUD
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-inter">
                {PERSONAL_INFO.aboutWhoAmI}
              </p>
            </div>

            {/* Mission Callout Box */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-red-950/50 via-[#0A0A0F] to-[#0A0A0F] border-l-4 border-[#E50914] border-t border-r border-b border-red-900/30 space-y-2">
              <div className="flex items-center space-x-2 text-[#E50914] font-orbitron text-xs font-bold uppercase tracking-wider">
                <Target className="w-4 h-4" />
                <span>MY MISSION</span>
              </div>
              <blockquote className="text-slate-200 text-sm sm:text-base font-orbitron italic font-medium leading-relaxed">
                "{PERSONAL_INFO.mission}"
              </blockquote>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
