import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Send } from 'lucide-react';
import { SpartanEmblem } from '../hud/SpartanEmblem';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-red-900/40 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Brand & Title */}
        <a href="#home" className="flex items-center space-x-3 group">
          <SpartanEmblem size={44} />
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bebas text-2xl tracking-wider text-white group-hover:text-glow-red transition">
                SHARAN
              </span>
              <span className="text-[9px] font-orbitron px-1.5 py-0.5 rounded bg-red-950/80 text-[#E50914] border border-red-900/60 font-semibold">
                TITAN Edition
              </span>
            </div>
            <p className="text-[10px] font-orbitron text-slate-400 hidden sm:block">
              AI Engineer | Full Stack Developer | Cloud & DevOps
            </p>
          </div>
        </a>

        {/* Desktop Menu Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-orbitron font-semibold uppercase tracking-widest text-slate-300 hover:text-[#E50914] transition-colors relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E50914] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Right Side glowing CTA Button */}
        <div className="hidden sm:flex items-center space-x-4">
          <button
            onClick={onContactClick}
            className="relative group overflow-hidden px-5 py-2.5 rounded-lg bg-[#E50914] text-white font-orbitron text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(229,9,20,0.5)] hover:shadow-[0_0_35px_rgba(255,30,39,0.8)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <Send className="w-3.5 h-3.5" />
              <span>LET'S CONNECT</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF1E27] to-[#E50914] opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#0F0F17] border border-red-900/50 text-slate-200 hover:text-[#E50914] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#050505]/95 backdrop-blur-xl border-b border-red-900/50 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-orbitron font-semibold uppercase tracking-widest text-slate-200 hover:text-[#E50914] transition py-1"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-red-900/30">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onContactClick();
                  }}
                  className="w-full py-3 rounded-lg bg-[#E50914] text-white font-orbitron text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(229,9,20,0.5)]"
                >
                  <Send className="w-4 h-4" />
                  <span>LET'S CONNECT</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
