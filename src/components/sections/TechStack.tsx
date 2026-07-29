import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TECH_STACK_CATEGORIES } from '../../data/portfolioData';
import { Cpu, Code, Server, Cloud, Database, Layout } from 'lucide-react';

export const TechStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...TECH_STACK_CATEGORIES.map(c => c.title)];

  const filteredCategories = selectedCategory === 'All'
    ? TECH_STACK_CATEGORIES
    : TECH_STACK_CATEGORIES.filter(c => c.title === selectedCategory);

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Programming': return <Code className="w-5 h-5 text-[#E50914]" />;
      case 'Frontend': return <Layout className="w-5 h-5 text-[#E50914]" />;
      case 'Backend & APIs': return <Server className="w-5 h-5 text-[#E50914]" />;
      case 'Cloud Infrastructure': return <Cloud className="w-5 h-5 text-[#E50914]" />;
      case 'DevOps & CI/CD': return <Cpu className="w-5 h-5 text-[#E50914]" />;
      case 'Databases & Tools': return <Database className="w-5 h-5 text-[#E50914]" />;
      default: return <Cpu className="w-5 h-5 text-[#E50914]" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative z-10 bg-[#07070B] border-t border-red-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center space-x-2 text-[#E50914] font-orbitron text-xs font-bold uppercase tracking-widest mb-2">
            <Cpu className="w-4 h-4" />
            <span>SYSTEM MATRIX</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bebas text-white tracking-wider">
            TECH STACK & PROFICIENCY HUD
          </h2>
          <p className="text-slate-400 text-sm font-inter max-w-xl mt-2">
            Categorized technical capabilities, languages, frameworks, cloud platforms & DevOps tooling.
          </p>
          <div className="w-24 h-1 bg-[#E50914] mt-3 rounded-full shadow-[0_0_12px_#E50914]" />
        </div>

        {/* Filter Pill Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg font-orbitron text-xs font-semibold uppercase tracking-wider transition-all border ${
                selectedCategory === cat
                  ? 'bg-[#E50914] text-white border-[#E50914] shadow-[0_0_20px_rgba(229,9,20,0.6)]'
                  : 'bg-[#0F0F17] text-slate-400 border-red-900/30 hover:border-[#E50914] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              className="glass-card p-6 rounded-xl border border-red-900/30 relative hud-corner-tl hud-corner-br"
            >
              <div className="flex items-center space-x-3 border-b border-red-900/30 pb-3 mb-5">
                <div className="p-2 rounded bg-red-950/60 border border-red-900/50">
                  {getCategoryIcon(cat.title)}
                </div>
                <h3 className="text-xl font-bebas text-white tracking-wider">
                  {cat.title}
                </h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-orbitron">
                      <span className="text-slate-200 font-medium flex items-center gap-1.5">
                        {skill.name}
                        {skill.hot && (
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-red-950 text-[#FF1E27] border border-red-800">
                            HOT
                          </span>
                        )}
                      </span>
                      <span className="text-[#E50914] font-bold">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 w-full bg-[#050505] rounded-full overflow-hidden border border-red-900/20 p-0.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-[#800000] via-[#E50914] to-[#FF1E27] rounded-full shadow-[0_0_10px_#E50914]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
