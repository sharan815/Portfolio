import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Cloud, Terminal, Shield, Activity, Radio } from 'lucide-react';
import { SpartanEmblem } from './SpartanEmblem';

export const GamingLaptopMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'terminal' | 'cloud'>('dashboard');

  return (
    <div className="relative w-full max-w-xl mx-auto py-6 group perspective-1000">
      {/* Background Spartan Smoke & Red Hologram Particles Halo */}
      <div className="absolute -inset-10 bg-radial from-[#E50914]/25 via-transparent to-transparent blur-3xl opacity-70 animate-pulse pointer-events-none" />

      {/* Massive Spartan Crest Background Silhouette */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-80 opacity-15 pointer-events-none select-none blur-[1px]">
        <SpartanEmblem size={320} glow={false} />
      </div>

      {/* Laptop Display Shell */}
      <motion.div
        initial={{ rotateX: 12, rotateY: -6, rotateZ: 2 }}
        whileHover={{ rotateX: 4, rotateY: 0, rotateZ: 0, scale: 1.02 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-[#0A0A0F] border-2 border-[#E50914]/50 rounded-t-2xl shadow-[0_0_50px_rgba(229,9,20,0.3)] overflow-hidden transition-all"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Top Bezel Web Camera & Status LED */}
        <div className="h-7 bg-[#050505] border-b border-[#1E1E2D] px-4 flex items-center justify-between">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E50914] animate-ping" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E50914]" />
            <span className="text-[10px] font-orbitron tracking-widest text-slate-400 uppercase">
              TITAN HUD OS v4.2
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Radio className="w-3 h-3 text-[#E50914] animate-pulse" />
            <span className="text-[10px] font-orbitron text-emerald-400">AWS ONLINE</span>
          </div>
        </div>

        {/* Laptop Screen Content Area */}
        <div className="p-4 sm:p-5 bg-gradient-to-b from-[#0F0F17] to-[#050505] min-h-[310px] flex flex-col justify-between relative overflow-hidden">
          {/* Screen Cyber Scanline Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(229,9,20,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

          {/* Top Navigation Header inside Laptop Screen */}
          <div className="flex items-center justify-between border-b border-red-900/30 pb-3 z-10">
            <div className="flex items-center space-x-2">
              <SpartanEmblem size={24} />
              <div>
                <h4 className="text-xs font-orbitron font-bold text-white tracking-wide">
                  SHARAN.DEV // SYSTEM_CONTROL
                </h4>
                <p className="text-[9px] text-slate-400 font-mono">B.TECH AI & DATA SCIENCE</p>
              </div>
            </div>

            {/* Tab Switcher inside Mockup */}
            <div className="flex bg-[#050505] p-0.5 rounded border border-red-900/40 text-[10px] font-orbitron">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`px-2.5 py-1 rounded transition ${activeTab === 'dashboard' ? 'bg-[#E50914] text-white font-bold' : 'text-slate-400 hover:text-white'}`}
              >
                HUD
              </button>
              <button
                onClick={() => setActiveTab('cloud')}
                className={`px-2.5 py-1 rounded transition ${activeTab === 'cloud' ? 'bg-[#E50914] text-white font-bold' : 'text-slate-400 hover:text-white'}`}
              >
                AWS
              </button>
              <button
                onClick={() => setActiveTab('terminal')}
                className={`px-2.5 py-1 rounded transition ${activeTab === 'terminal' ? 'bg-[#E50914] text-white font-bold' : 'text-slate-400 hover:text-white'}`}
              >
                CLI
              </button>
            </div>
          </div>

          {/* Screen Tab Views */}
          <div className="my-3 z-10">
            {activeTab === 'dashboard' && (
              <div className="space-y-3">
                {/* Live Telemetry Bar */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-[#050505]/80 p-2 rounded border border-red-900/30">
                    <div className="flex items-center justify-center space-x-1 text-slate-400 text-[10px]">
                      <Cpu className="w-3 h-3 text-[#E50914]" />
                      <span>AI ENG</span>
                    </div>
                    <p className="text-xs font-orbitron text-white font-bold mt-1">OPTIMIZED</p>
                  </div>
                  <div className="bg-[#050505]/80 p-2 rounded border border-red-900/30">
                    <div className="flex items-center justify-center space-x-1 text-slate-400 text-[10px]">
                      <Cloud className="w-3 h-3 text-[#E50914]" />
                      <span>AWS S3/EC2</span>
                    </div>
                    <p className="text-xs font-orbitron text-emerald-400 font-bold mt-1">99.9% UPTIME</p>
                  </div>
                  <div className="bg-[#050505]/80 p-2 rounded border border-red-900/30">
                    <div className="flex items-center justify-center space-x-1 text-slate-400 text-[10px]">
                      <Activity className="w-3 h-3 text-[#E50914]" />
                      <span>DSA LEVEL</span>
                    </div>
                    <p className="text-xs font-orbitron text-white font-bold mt-1">500+ SOLVED</p>
                  </div>
                </div>

                {/* Featured Active Process Widget */}
                <div className="bg-[#050505]/90 p-3 rounded-lg border border-[#E50914]/40 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="p-1.5 rounded bg-red-950/60 text-[#E50914] border border-red-900/50">
                        <Terminal className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[11px] font-orbitron text-white font-semibold">
                          AgroBot AI & PsySim Chatbot
                        </p>
                        <p className="text-[9px] text-slate-400 font-mono">Python • Django • ESP32 • LLM</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-orbitron px-2 py-0.5 rounded bg-red-900/40 text-[#FF1E27] border border-red-600/40 animate-pulse">
                      ACTIVE DEPLOYMENT
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'cloud' && (
              <div className="bg-[#050505]/90 p-3 rounded border border-red-900/40 space-y-2 text-[11px]">
                <div className="flex justify-between items-center text-slate-300">
                  <span className="font-orbitron text-[#E50914]">AWS EC2 Node</span>
                  <span className="text-emerald-400 font-mono">Running (t3.micro)</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span className="font-orbitron text-[#E50914]">Docker Container</span>
                  <span className="text-emerald-400 font-mono">AgroBot API [UP 14d]</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span className="font-orbitron text-[#E50914]">GitHub CI/CD</span>
                  <span className="text-emerald-400 font-mono">Workflow Passed</span>
                </div>
              </div>
            )}

            {activeTab === 'terminal' && (
              <div className="bg-[#050505] p-3 rounded border border-red-900/40 font-mono text-[10px] space-y-1 text-slate-300">
                <p className="text-slate-500">// Sharan B - Terminal Session</p>
                <p><span className="text-[#E50914]">sharan@sparta:~$</span> ./deploy_ai_models.sh</p>
                <p className="text-emerald-400">[SUCCESS] ESP32 IoT telemetry connected</p>
                <p className="text-emerald-400">[SUCCESS] PsySim LLM backend synchronized</p>
                <p className="text-slate-400 animate-pulse">&gt; Ready for new challenges...</p>
              </div>
            )}
          </div>

          {/* Bottom Screen Status Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-red-900/20 text-[9px] font-orbitron text-slate-500 z-10">
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-[#E50914]" /> SECURE ENCRYPTION
            </span>
            <span>SHARAN B // COIMBATORE, INDIA</span>
          </div>
        </div>
      </motion.div>

      {/* Laptop Keyboard Base (3D Base Edge) */}
      <div className="relative mx-auto w-[104%] -mt-1 h-5 bg-gradient-to-r from-[#14141E] via-[#2A2A38] to-[#14141E] rounded-b-xl border-t border-red-600/60 shadow-[0_15px_30px_rgba(229,9,20,0.4)] flex items-center justify-center">
        {/* RGB Keyboard Underglow Streak */}
        <div className="w-1/3 h-1 bg-gradient-to-r from-transparent via-[#E50914] to-transparent rounded-full animate-pulse shadow-[0_0_15px_#E50914]" />
        {/* Front Latch Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#050505] rounded-b" />
      </div>
    </div>
  );
};
