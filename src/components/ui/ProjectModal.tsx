import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../../types/portfolio';
import { X, ExternalLink, Activity } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050505]/85 backdrop-blur-md"
        />

        {/* Modal Content Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-[#0A0A0F] border-2 border-[#E50914]/60 rounded-2xl shadow-[0_0_50px_rgba(229,9,20,0.4)] overflow-hidden z-10 my-8 hud-corner-tl hud-corner-br"
        >
          {/* Top Cyber Bar */}
          <div className="bg-[#050505] px-6 py-4 border-b border-red-900/40 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E50914] animate-ping" />
              <span className="font-orbitron text-xs font-bold text-white uppercase tracking-wider">
                PROJECT SPECIFICATION // {project.id.toUpperCase()}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#0F0F17] text-slate-400 hover:text-white hover:bg-red-950 border border-red-900/40 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Image & Banner Header */}
          <div className="relative h-64 sm:h-80 overflow-hidden bg-[#050505]">
            <img
              src={project.image}
              alt={project.title}
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.dataset.fallbackTried) {
                  target.dataset.fallbackTried = 'true';
                  if (project.image.startsWith('/')) {
                    target.src = project.image.slice(1);
                  }
                }
              }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent" />
            
            {project.metrics && (
              <div className="absolute bottom-4 left-6 bg-[#050505]/90 border border-[#E50914] px-3.5 py-1.5 rounded-lg font-orbitron text-xs text-white font-bold glow-red-sm flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#E50914]" />
                <span>{project.metrics}</span>
              </div>
            )}
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs font-orbitron font-semibold text-[#E50914] uppercase tracking-widest block mb-1">
                {project.category.toUpperCase()} SOLUTION
              </span>
              <h3 className="text-3xl sm:text-4xl font-bebas text-white tracking-wide">
                {project.title}
              </h3>
              <p className="text-sm font-orbitron text-slate-300 font-semibold mt-1">
                {project.subtitle}
              </p>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded bg-red-950/60 border border-red-900/50 text-slate-200 font-orbitron text-xs font-medium"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-3 pt-2 border-t border-red-900/30">
              <h4 className="text-xs font-orbitron font-bold text-white uppercase tracking-wider">
                SYSTEM ARCHITECTURE & OVERVIEW
              </h4>
              <p className="text-sm font-inter text-slate-300 leading-relaxed">
                {project.fullDetails || project.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-red-900/30 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-lg bg-[#0F0F17] hover:bg-red-950 border border-red-900/50 hover:border-[#E50914] text-white font-orbitron text-xs font-bold uppercase tracking-wider flex items-center space-x-2 transition"
                  >
                    <GithubIcon className="w-4 h-4 text-[#E50914]" />
                    <span>VIEW REPOSITORY</span>
                  </a>
                )}
                {project.demoUrl && project.demoUrl !== '#' && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-lg bg-[#E50914] text-white font-orbitron text-xs font-bold uppercase tracking-wider flex items-center space-x-2 shadow-[0_0_20px_rgba(229,9,20,0.6)] hover:shadow-[0_0_35px_rgba(255,30,39,0.9)] transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>LIVE DEMO</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-4 py-2 rounded font-orbitron text-xs text-slate-400 hover:text-white"
              >
                CLOSE WINDOW
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
