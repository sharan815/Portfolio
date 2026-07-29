import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GamingLaptopMockup } from '../hud/GamingLaptopMockup';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

interface HeroProps {
  onExploreProjects: () => void;
  onDownloadResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onDownloadResume }) => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Ambient Background Fog & Radial Light Flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-[#E50914]/20 via-transparent to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-radial from-red-600/10 via-transparent to-transparent blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-[#E50914]/40 text-[#FF1E27] font-orbitron text-xs font-semibold uppercase tracking-widest glow-red-sm">
              <Sparkles className="w-3.5 h-3.5 animate-spin" />
              <span>{PERSONAL_INFO.badge}</span>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bebas tracking-wider text-white leading-none">
                {PERSONAL_INFO.alias} <span className="text-gradient-text-red drop-shadow-[0_0_20px_rgba(229,9,20,0.5)]">B.</span>
              </h1>
              
              <p className="text-xs sm:text-sm font-orbitron font-bold text-[#E50914] tracking-widest uppercase">
                AI ENGINEER • FULL STACK DEVELOPER • CLOUD & DEVOPS
              </p>
            </div>

            {/* Tagline & Description */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base font-orbitron text-slate-200 font-semibold leading-relaxed border-l-2 border-[#E50914] pl-3">
                "{PERSONAL_INFO.tagline}"
              </p>
              <p className="text-sm text-slate-400 font-inter leading-relaxed max-w-xl">
                {PERSONAL_INFO.intro}
              </p>
            </div>

            {/* Buttons Action Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreProjects}
                className="group relative px-6 py-3.5 rounded-lg bg-[#E50914] text-white font-orbitron text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(229,9,20,0.6)] hover:shadow-[0_0_40px_rgba(255,30,39,0.9)] transition-all flex items-center space-x-3 transform hover:-translate-y-0.5"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onDownloadResume}
                className="px-6 py-3.5 rounded-lg bg-[#0F0F17] text-slate-200 hover:text-white font-orbitron text-xs font-bold uppercase tracking-wider border border-red-900/40 hover:border-[#E50914] transition-all flex items-center space-x-2 group hover:shadow-[0_0_20px_rgba(229,9,20,0.3)]"
              >
                <Download className="w-4 h-4 text-[#E50914] group-hover:animate-bounce" />
                <span>DOWNLOAD RESUME / CV</span>
              </button>
            </div>

            {/* Social Links & Tech Quick Badges */}
            <div className="pt-6 border-t border-red-900/30 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-[#0F0F17] border border-red-900/40 text-slate-300 hover:text-[#E50914] hover:border-[#E50914] transition glow-red-sm"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-[#0F0F17] border border-red-900/40 text-slate-300 hover:text-[#E50914] hover:border-[#E50914] transition glow-red-sm"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-lg bg-[#0F0F17] border border-red-900/40 text-slate-300 hover:text-[#E50914] hover:border-[#E50914] transition glow-red-sm"
                  aria-label="Email Sharan"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <div className="text-right hidden sm:block">
                <span className="text-[10px] font-orbitron text-slate-400 block uppercase">
                  STATUS: <span className="text-emerald-400 font-bold">AVAILABLE FOR OFFERS</span>
                </span>
                <span className="text-[10px] font-mono text-slate-500">Coimbatore, India</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column 3D Gaming Laptop Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <GamingLaptopMockup />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
