import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FEATURED_PROJECTS } from '../../data/portfolioData';
import type { Project } from '../../types/portfolio';
import { ProjectModal } from '../ui/ProjectModal';
import { Trophy, ArrowRight, Eye } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'ALL PROJECTS' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'fullstack', label: 'FULL STACK' },
    { id: 'cloud', label: 'CLOUD & DEVOPS' },
    { id: 'iot', label: 'IOT & SMART SYSTEMS' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative z-10 border-t border-red-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center space-x-2 text-[#E50914] font-orbitron text-xs font-bold uppercase tracking-widest mb-2">
            <Trophy className="w-4 h-4" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bebas text-white tracking-wider">
            FEATURED ENGINEERING PROJECTS
          </h2>
          <p className="text-slate-400 text-sm font-inter max-w-xl mt-2">
            Production-ready applications built with intelligent AI engines, responsive web frontends, and cloud infrastructures.
          </p>
          <div className="w-24 h-1 bg-[#E50914] mt-3 rounded-full shadow-[0_0_12px_#E50914]" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg font-orbitron text-xs font-semibold uppercase tracking-wider transition-all border ${
                selectedCategory === cat.id
                  ? 'bg-[#E50914] text-white border-[#E50914] shadow-[0_0_20px_rgba(229,9,20,0.6)]'
                  : 'bg-[#0F0F17] text-slate-400 border-red-900/30 hover:border-[#E50914] hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl border border-red-900/30 overflow-hidden group hover:border-[#E50914] transition-all flex flex-col justify-between hud-corner-tl hud-corner-br"
            >
              {/* Card Image Banner */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-[#050505]">
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
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F17] via-transparent to-transparent opacity-90" />

                {/* Category Badge Overlay */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-orbitron px-2.5 py-1 rounded bg-[#050505]/80 text-[#FF1E27] border border-red-900/60 font-semibold tracking-wider uppercase">
                    {project.category}
                  </span>
                </div>

                {/* Hover Eye Icon Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#050505]/60 backdrop-blur-xs">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="px-4 py-2 rounded-lg bg-[#E50914] text-white font-orbitron text-xs font-bold uppercase tracking-wider flex items-center space-x-2 shadow-[0_0_20px_#E50914]"
                  >
                    <Eye className="w-4 h-4" />
                    <span>VIEW SPEC</span>
                  </button>
                </div>
              </div>

              {/* Card Body Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bebas text-white tracking-wide group-hover:text-glow-red transition">
                    {project.title}
                  </h3>
                  <p className="text-xs font-orbitron font-semibold text-[#E50914]">
                    {project.subtitle}
                  </p>
                  <p className="text-xs font-inter text-slate-300 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-red-950/40 text-slate-300 font-orbitron text-[10px] border border-red-900/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded bg-red-950/20 text-slate-400 font-orbitron text-[10px]">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>

                {/* Card Footer Buttons */}
                <div className="pt-4 border-t border-red-900/30 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-orbitron font-bold text-[#E50914] hover:text-white flex items-center space-x-1 transition"
                  >
                    <span>DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center space-x-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded bg-[#050505] text-slate-400 hover:text-white border border-red-900/30 hover:border-[#E50914] transition"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Details Modal Popup */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
