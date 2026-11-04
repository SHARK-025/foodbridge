import React, { useState } from 'react';
import { Utensils, Store, Building2, Leaf, BarChart3, Info, TrendingUp } from 'lucide-react';
import { IMPACT_METRICS } from '../data/mockData';
import useInView from '../hooks/useInView';
import useCountUp from '../hooks/useCountUp';

const iconMap = {
  Utensils,
  Store,
  Building2,
  Leaf,
};

function MetricCard({ metric, isInView }) {
  const Icon = iconMap[metric.icon] || Utensils;
  
  // Numerical targets for gentle animation
  const targetMap = {
    meals: 142500,
    donors: 480,
    ngos: 120,
    waste: 78,
  };

  const target = targetMap[metric.id] || 100;
  const animatedValue = useCountUp(target, 1800, isInView);

  const displayValue = () => {
    if (!isInView) return '0';
    if (metric.id === 'meals') return `${animatedValue.toLocaleString()}+`;
    if (metric.id === 'donors') return `${animatedValue}+`;
    if (metric.id === 'ngos') return `${animatedValue}+`;
    if (metric.id === 'waste') return `${animatedValue}.4 Tons`;
    return metric.value;
  };

  return (
    <div className="bg-[#21543b]/55 backdrop-blur-xs rounded-3xl p-6 sm:p-8 border border-[#DDE9D8]/20 hover:border-[#E7A64B]/60 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:shadow-2xl">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#173D2B] flex items-center justify-center text-[#E7A64B] shadow-inner group-hover:scale-105 transition-transform">
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#E7A64B] bg-[#173D2B]/85 px-2.5 py-1 rounded font-bold shadow-xs">
            Demo Metric
          </span>
        </div>

        <div className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#F7F3E9] mb-1 font-mono tabular-nums leading-tight">
          {displayValue()}
        </div>
        <div className="text-base font-semibold text-[#E7A64B] mb-2">
          {metric.label}
        </div>
      </div>

      <p className="text-xs text-[#DDE9D8]/75 leading-relaxed pt-3 border-t border-[#DDE9D8]/15 mt-3 font-normal">
        {metric.subtext}
      </p>
    </div>
  );
}

export default function ImpactDashboard() {
  const [filterPeriod, setFilterPeriod] = useState('Quarter');
  const [containerRef, isInView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="impact"
      ref={containerRef}
      className="py-24 bg-[#173D2B] text-[#F7F3E9] relative overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E7A64B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#21543b]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#21543b] text-[#E7A64B] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#E7A64B]/30 shadow-xs">
            <BarChart3 className="w-3.5 h-3.5 text-[#E7A64B]" />
            <span>Community Dashboard Simulation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-5 leading-tight text-[#F7F3E9]">
            The Ripple Effect of Every Rescued Meal
          </h2>
          <p className="text-base sm:text-lg text-[#DDE9D8]/80 leading-relaxed font-normal">
            Visualizing the collective social and ecological impact generated when excess kitchen capacity is redirected to neighborhood tables.
          </p>
        </div>

        {/* Mandatory Explicit Demonstration Notice Banner */}
        <div className="mb-12 max-w-4xl mx-auto bg-[#21543b]/85 border border-[#E7A64B]/40 rounded-2xl p-4 sm:p-5 flex items-start space-x-3.5 shadow-lg">
          <Info className="w-5 h-5 text-[#E7A64B] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#DDE9D8] leading-relaxed font-normal">
            <span className="font-bold text-[#E7A64B] block sm:inline">
              Illustrative Demonstration Metrics:
            </span>{' '}
            All metrics displayed below are simulated sample data modeled for this UI/UX competition showcase. In compliance with FoodBridge transparency standards, these figures represent projected network velocity rather than audited commercial metrics.
          </div>
        </div>

        {/* 4 Core Summary Metric Cards with Count-Up Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {IMPACT_METRICS.summary.map((metric) => (
            <MetricCard key={metric.id} metric={metric} isInView={isInView} />
          ))}
        </div>

        {/* Interactive Breakdown Visualization Area */}
        <div className="bg-[#21543b]/40 rounded-3xl p-6 sm:p-10 border border-[#DDE9D8]/20 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-[#DDE9D8]/15 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#E7A64B] font-bold">
                Food Category Breakdown (Simulated)
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F7F3E9] mt-0.5">
                Surplus Stream Distribution
              </h3>
            </div>

            {/* Filter pills */}
            <div className="flex items-center space-x-2">
              <span className="text-xs text-[#DDE9D8]/70 hidden sm:inline">Timeline:</span>
              {['Month', 'Quarter', 'Year'].map((period) => (
                <button
                  key={period}
                  type="button"
                  onClick={() => setFilterPeriod(period)}
                  className={`text-xs font-bold px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    filterPeriod === period
                      ? 'bg-[#E7A64B] text-[#173D2B] shadow-xs'
                      : 'bg-[#173D2B] text-[#DDE9D8] hover:bg-[#21543b]'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          {/* Breakdown Progress Bars */}
          <div className="space-y-6">
            {IMPACT_METRICS.categories.map((cat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm gap-1">
                  <div className="font-semibold text-[#F7F3E9] flex items-center space-x-2">
                    <span>{cat.name}</span>
                    <span className="text-[11px] text-[#E7A64B] font-normal">({cat.portions})</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-[#DDE9D8]/80 font-medium">
                    <span className="font-mono font-bold text-[#E7A64B]">{cat.percentage}%</span>
                    <span className="text-[#DDE9D8]/60">•</span>
                    <span className="text-emerald-300 flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>{cat.trend}</span>
                    </span>
                  </div>
                </div>

                {/* Progress bar container */}
                <div className="h-3.5 w-full bg-[#173D2B] rounded-full overflow-hidden p-0.5 border border-[#DDE9D8]/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#E7A64B] via-[#d89639] to-emerald-400 transition-all duration-1000 ease-out"
                    style={{ width: `${cat.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Environmental Insight Footer */}
          <div className="mt-10 pt-6 border-t border-[#DDE9D8]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#DDE9D8]/80">
            <div className="flex items-center space-x-2">
              <Leaf className="w-4 h-4 text-[#E7A64B] shrink-0" />
              <span>
                Simulated equivalent of <strong className="text-[#F7F3E9]">168 Metric Tons of CO₂e</strong> prevented through landfill diversion.
              </span>
            </div>
            <div className="text-[11px] font-mono text-[#E7A64B]">
              Calculated via standard compost & anaerobic baseline models
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
