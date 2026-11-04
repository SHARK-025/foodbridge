import React, { useState } from 'react';
import { Network, ArrowRight, Sparkles, Building2, Store, Users, Play } from 'lucide-react';
import { SOLUTION_NODES } from '../data/mockData';

export default function OurSolution({ onOpenDonate }) {
  const [selectedNode, setSelectedNode] = useState('bridge');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState(0);

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimStep(1);
    setSelectedNode('donors');

    setTimeout(() => {
      setSimStep(2);
      setSelectedNode('bridge');
    }, 900);

    setTimeout(() => {
      setSimStep(3);
      setSelectedNode('ngos');
    }, 1800);

    setTimeout(() => {
      setSimStep(4);
      setSelectedNode('communities');
      setIsSimulating(false);
    }, 2700);
  };

  return (
    <section id="solution" className="py-24 bg-[#F7F3E9] relative overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-subtle-grain pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#DDE9D8] text-[#173D2B] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#173D2B]/10 shadow-xs">
            <Network className="w-3.5 h-3.5 text-[#E7A64B]" />
            <span>Our Solution Architecture</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#173D2B] tracking-tight mb-5 leading-tight">
            How FoodBridge Closes the Loop
          </h2>
          <p className="text-base sm:text-lg text-[#252A25]/80 leading-relaxed font-normal">
            By eliminating logistical friction and establishing verified local pathways, FoodBridge transforms surplus food into fresh community meals in real time.
          </p>
        </div>

        {/* Attractive Visual Connection Diagram Container */}
        <div className="bg-[#173D2B] rounded-3xl p-6 sm:p-10 lg:p-12 text-[#F7F3E9] shadow-2xl relative overflow-hidden mb-12 border border-[#173D2B]">
          
          {/* Subtle gold decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E7A64B]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Diagram Title Bar & Interactive Simulation Trigger */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-[#DDE9D8]/15 gap-4 relative z-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#E7A64B] font-bold">
                Interactive Connection Flow
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F7F3E9] mt-0.5">
                From Commercial Kitchens to Neighborhood Tables
              </h3>
            </div>

            {/* Interactive Simulation Run Button */}
            <button
              type="button"
              onClick={runSimulation}
              disabled={isSimulating}
              className="inline-flex items-center space-x-2 bg-[#E7A64B] hover:bg-[#d89639] active:scale-[0.98] text-[#173D2B] text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition-all cursor-pointer disabled:opacity-75 self-start sm:self-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F3E9]"
              aria-label="Simulate rescue dispatch flow across 4 stages"
            >
              <Play className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
              <span>{isSimulating ? `Tracing Stage 0${simStep}...` : 'Simulate Live Rescue Flow'}</span>
            </button>
          </div>

          {/* Horizontal Connection Diagram on Desktop / Stack on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 relative z-10">
            {SOLUTION_NODES.map((node, index) => {
              const isSelected = selectedNode === node.id;
              const isSimActive = isSimulating && simStep === index + 1;

              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNode(node.id)}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected || isSimActive}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedNode(node.id);
                    }
                  }}
                  className={`cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 relative border flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E7A64B] ${
                    isSelected || isSimActive
                      ? 'bg-[#F7F3E9] text-[#173D2B] border-[#E7A64B] shadow-lg scale-[1.02]'
                      : 'bg-[#21543b]/60 text-[#F7F3E9] border-[#DDE9D8]/20 hover:border-[#E7A64B]/50 hover:bg-[#21543b]'
                  }`}
                >
                  <div>
                    {/* Top Row: Step Number & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-xs font-mono font-bold px-2 py-1 rounded ${
                          isSelected || isSimActive
                            ? 'bg-[#173D2B] text-[#E7A64B]'
                            : 'bg-[#173D2B]/80 text-[#DDE9D8]'
                        }`}
                      >
                        STAGE {node.step}
                      </span>
                      <span
                        className={`text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          isSelected || isSimActive
                            ? 'bg-[#E7A64B]/30 text-[#173D2B]'
                            : 'bg-[#E7A64B]/20 text-[#E7A64B]'
                        }`}
                      >
                        {node.tag}
                      </span>
                    </div>

                    {/* Role Title */}
                    <h4
                      className={`font-serif text-lg sm:text-xl font-bold mb-2 ${
                        isSelected || isSimActive ? 'text-[#173D2B]' : 'text-[#F7F3E9]'
                      }`}
                    >
                      {node.role}
                    </h4>

                    {/* Entities list */}
                    <div
                      className={`text-xs font-medium mb-3 ${
                        isSelected || isSimActive ? 'text-[#252A25]/80' : 'text-[#DDE9D8]/80'
                      }`}
                    >
                      {node.entities}
                    </div>

                    {/* Description preview */}
                    <p
                      className={`text-xs leading-relaxed font-normal ${
                        isSelected || isSimActive ? 'text-[#252A25]/90' : 'text-[#DDE9D8]/75'
                      }`}
                    >
                      {node.description}
                    </p>
                  </div>

                  {/* Active Indicator & Step Connector */}
                  <div className="mt-5 pt-3 border-t border-current/10 flex items-center justify-between text-xs font-semibold">
                    <span className={isSelected || isSimActive ? 'text-[#173D2B] font-bold' : 'text-[#E7A64B]'}>
                      {isSelected || isSimActive ? 'Active Node' : 'Click to Inspect'}
                    </span>
                    {index < 3 && (
                      <ArrowRight
                        className={`w-4 h-4 hidden md:block ${
                          isSelected || isSimActive ? 'text-[#173D2B]' : 'text-[#DDE9D8]/50'
                        }`}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Selected Node Deep Dive Banner */}
          {selectedNode && (
            <div className="mt-8 bg-[#21543b] rounded-2xl p-6 border border-[#E7A64B]/40 animate-fadeIn relative z-10">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E7A64B] flex items-center justify-center text-[#173D2B] shrink-0 font-bold shadow-xs">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#E7A64B] uppercase tracking-wider font-bold">
                      Protocol Insight
                    </span>
                    <h5 className="font-serif text-lg font-bold text-[#F7F3E9]">
                      {SOLUTION_NODES.find((n) => n.id === selectedNode)?.role}
                    </h5>
                  </div>
                </div>
                <p className="text-sm text-[#DDE9D8] max-w-2xl leading-relaxed font-normal">
                  {SOLUTION_NODES.find((n) => n.id === selectedNode)?.description}
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Triple Stakeholder Cards Below Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stakeholder 1: For Donors */}
          <div className="bg-[#DDE9D8]/45 hover:bg-[#DDE9D8]/75 rounded-2xl p-6 border border-[#173D2B]/10 hover:border-[#173D2B]/30 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#173D2B] text-[#E7A64B] flex items-center justify-center mb-4 shadow-xs">
                <Store className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#173D2B] mb-1.5">For Food Donors</h4>
              <p className="text-xs sm:text-sm text-[#252A25]/80 leading-relaxed mb-4 font-normal">
                Effortless surplus pickup with zero paperwork. Fulfill corporate ESG goals and eliminate commercial waste disposal fees.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenDonate('donor')}
              className="text-xs font-bold text-[#173D2B] hover:text-[#E7A64B] inline-flex items-center space-x-1 cursor-pointer pt-2 border-t border-[#173D2B]/10"
            >
              <span>Offer Food Surplus</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Stakeholder 2: For NGOs */}
          <div className="bg-[#DDE9D8]/45 hover:bg-[#DDE9D8]/75 rounded-2xl p-6 border border-[#173D2B]/10 hover:border-[#173D2B]/30 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#173D2B] text-[#E7A64B] flex items-center justify-center mb-4 shadow-xs">
                <Building2 className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#173D2B] mb-1.5">For Registered NGOs</h4>
              <p className="text-xs sm:text-sm text-[#252A25]/80 leading-relaxed mb-4 font-normal">
                Access scheduled, verified hot meals and bakery surplus to expand daily service capacity for community members in need.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenDonate('partner')}
              className="text-xs font-bold text-[#173D2B] hover:text-[#E7A64B] inline-flex items-center space-x-1 cursor-pointer pt-2 border-t border-[#173D2B]/10"
            >
              <span>Register Kitchen</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Stakeholder 3: For Volunteers */}
          <div className="bg-[#DDE9D8]/45 hover:bg-[#DDE9D8]/75 rounded-2xl p-6 border border-[#173D2B]/10 hover:border-[#173D2B]/30 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#173D2B] text-[#E7A64B] flex items-center justify-center mb-4 shadow-xs">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#173D2B] mb-1.5">For Volunteer Couriers</h4>
              <p className="text-xs sm:text-sm text-[#252A25]/80 leading-relaxed mb-4 font-normal">
                Use bicycle, cargo bike, or car to bridge the last mile during free hours. Receive route guidance and insulated thermal packs.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenDonate('volunteer')}
              className="text-xs font-bold text-[#173D2B] hover:text-[#E7A64B] inline-flex items-center space-x-1 cursor-pointer pt-2 border-t border-[#173D2B]/10"
            >
              <span>Join as Volunteer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
