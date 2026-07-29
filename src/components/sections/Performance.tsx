import React from 'react';
import { PERFORMANCE_STATS } from '../../data/portfolioData';
import { BenchmarkCard } from '../hud/BenchmarkCard';
import { Activity } from 'lucide-react';

export const Performance: React.FC = () => {
  return (
    <section id="performance" className="py-20 relative z-10 border-t border-red-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center space-x-2 text-[#E50914] font-orbitron text-xs font-bold uppercase tracking-widest mb-2">
            <Activity className="w-4 h-4 animate-pulse" />
            <span>BENCHMARK METRICS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bebas text-white tracking-wider">
            PERFORMANCE OVERVIEW
          </h2>
          <p className="text-slate-400 text-sm font-inter max-w-xl mt-2">
            Quantitative benchmarks measuring engineering velocity, DSA problem solving, and cloud deployments.
          </p>
          <div className="w-24 h-1 bg-[#E50914] mt-3 rounded-full shadow-[0_0_12px_#E50914]" />
        </div>

        {/* Benchmark Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PERFORMANCE_STATS.map((stat, index) => (
            <BenchmarkCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};
