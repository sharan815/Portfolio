import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { SpartanEmblem } from '../hud/SpartanEmblem';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-red-900/30 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-red-900/20">
          
          {/* Left Logo & Branding */}
          <div className="flex items-center space-x-4">
            <SpartanEmblem size={50} />
            <div>
              <h3 className="font-bebas text-3xl tracking-wider text-white">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs font-orbitron text-[#E50914] font-semibold">
                AI ENGINEER | CLOUD & DEVOPS ENGINEER | FULL STACK DEVELOPER
              </p>
              <p className="text-xs font-mono text-slate-500 mt-1">
                Code. Deploy. Automate. Innovate.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-[#0A0A0F] border border-red-900/40 text-slate-300 hover:text-[#E50914] hover:border-[#E50914] transition glow-red-sm"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-[#0A0A0F] border border-red-900/40 text-slate-300 hover:text-[#E50914] hover:border-[#E50914] transition glow-red-sm"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-3 rounded-xl bg-[#0A0A0F] border border-red-900/40 text-slate-300 hover:text-[#E50914] hover:border-[#E50914] transition glow-red-sm"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Bottom Copyright Bar & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-orbitron text-slate-500">
          <p>© {PERSONAL_INFO.copyrightYear} {PERSONAL_INFO.name}. All Rights Reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-[#0A0A0F] border border-red-900/40 text-slate-300 hover:text-[#E50914] hover:border-[#E50914] transition flex items-center space-x-2 group"
          >
            <span className="text-[10px] uppercase font-bold">TOP</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
