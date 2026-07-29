import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { Toast } from '../ui/Toast';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setToastMessage("Please complete all required fields.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setToastMessage("Thank you! Your message has been transmitted successfully to Sharan B.");
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-red-900/20">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-radial from-[#E50914]/15 via-transparent to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center space-x-2 text-[#E50914] font-orbitron text-xs font-bold uppercase tracking-widest mb-2">
            <MessageSquare className="w-4 h-4" />
            <span>COMMUNICATION CHANNEL</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bebas text-white tracking-wider">
            LET'S BUILD SOMETHING <span className="text-gradient-text-red">EXTRAORDINARY</span>
          </h2>
          <p className="text-slate-300 text-sm font-inter max-w-2xl mt-2">
            Open for collaborations on AI solutions, cloud-native architecture, full stack web platforms, and engineering opportunities.
          </p>
          <div className="w-24 h-1 bg-[#E50914] mt-3 rounded-full shadow-[0_0_12px_#E50914]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-6 rounded-xl border border-red-900/30 space-y-6 hud-corner-tl hud-corner-br">
              <h3 className="text-2xl font-bebas text-white tracking-wide border-b border-red-900/30 pb-3">
                DIRECT CONTACT CHANNELS
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-[#050505] border border-red-900/30 hover:border-[#E50914] transition group"
                >
                  <div className="p-3 rounded-lg bg-red-950/60 text-[#E50914] group-hover:scale-110 transition">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-orbitron text-slate-500 uppercase block">EMAIL ADDRESS</span>
                    <span className="text-sm font-inter text-slate-200 group-hover:text-white font-medium">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start space-x-4 p-4 rounded-lg bg-[#050505] border border-red-900/30 hover:border-[#E50914] transition group"
                >
                  <div className="p-3 rounded-lg bg-red-950/60 text-[#E50914] group-hover:scale-110 transition">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-orbitron text-slate-500 uppercase block">LINKEDIN PROFILE</span>
                    <span className="text-sm font-inter text-slate-200 group-hover:text-white font-medium">
                      linkedin.com/in/sharan-baranidharan
                    </span>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start space-x-4 p-4 rounded-lg bg-[#050505] border border-red-900/30 hover:border-[#E50914] transition group"
                >
                  <div className="p-3 rounded-lg bg-red-950/60 text-[#E50914] group-hover:scale-110 transition">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-orbitron text-slate-500 uppercase block">GITHUB REPOSITORIES</span>
                    <span className="text-sm font-inter text-slate-200 group-hover:text-white font-medium">
                      github.com/sharan815
                    </span>
                  </div>
                </a>

                <div className="flex items-start space-x-4 p-4 rounded-lg bg-[#050505] border border-red-900/30">
                  <div className="p-3 rounded-lg bg-red-950/60 text-[#E50914]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-orbitron text-slate-500 uppercase block">LOCATION</span>
                    <span className="text-sm font-inter text-slate-200 font-medium">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-xl border border-red-900/40 space-y-6 hud-corner-tl hud-corner-br"
            >
              <h3 className="text-2xl font-bebas text-white tracking-wide border-b border-red-900/30 pb-3 flex items-center justify-between">
                <span>TRANSMIT ENCRYPTED MESSAGE</span>
                <span className="text-xs font-orbitron text-emerald-400 font-normal">CHANNEL ACTIVE</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-orbitron font-semibold text-slate-300 uppercase block">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-[#050505] border border-red-900/40 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] font-inter"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-orbitron font-semibold text-slate-300 uppercase block">
                    YOUR EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-[#050505] border border-red-900/40 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] font-inter"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-orbitron font-semibold text-slate-300 uppercase block">
                  SUBJECT
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project Collaboration / Opportunity"
                  className="w-full bg-[#050505] border border-red-900/40 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] font-inter"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-orbitron font-semibold text-slate-300 uppercase block">
                  MESSAGE CONTENT *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="State your project inquiry or collaboration details..."
                  className="w-full bg-[#050505] border border-red-900/40 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] font-inter resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-lg bg-[#E50914] text-white font-orbitron text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(229,9,20,0.6)] hover:shadow-[0_0_40px_rgba(255,30,39,0.9)] transition-all flex items-center justify-center space-x-2 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center space-x-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>TRANSMITTING DATA...</span>
                  </span>
                ) : (
                  <span className="flex items-center space-x-2">
                    <Send className="w-4 h-4" />
                    <span>LET'S CONNECT</span>
                  </span>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </section>
  );
};
