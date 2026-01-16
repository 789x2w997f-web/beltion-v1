import React from 'react';

interface ObjectiveCardProps {
  progress: number;
}

const ObjectiveCard: React.FC<ObjectiveCardProps> = ({ progress }) => {
  return (
    <div className="w-full p-0.5 rounded-xl bg-gradient-to-r from-neutral-800 to-neutral-900 shadow-lg border border-neutral-800">
      <div className="bg-[#0a0a0a] rounded-[10px] p-5 relative overflow-hidden">
        {/* Gritty Texture Overlay (simulated with gradient) */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-50 pointer-events-none"></div>

        <div className="relative z-10 flex justify-between items-end mb-2">
          <div className="flex flex-col">
            <h2 className="text-xl font-display font-bold text-white tracking-wider">Objective</h2>
            <span className="text-xs text-neutral-400 font-mono tracking-widest uppercase mt-1">Every Second Matters</span>
          </div>
          <span className="text-3xl font-display font-bold text-ember">{progress}%</span>
        </div>

        {/* Progress Bar Container */}
        <div className="relative h-4 w-full bg-neutral-800 rounded-sm mt-3 overflow-hidden border border-neutral-700">
          {/* Filled Bar */}
          <div 
            className="h-full bg-ember relative shadow-[0_0_15px_rgba(255,69,0,0.6)]"
            style={{ width: `${progress}%` }}
          >
            {/* Scratched texture effect on bar */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/scratch-pad.png')] opacity-30 mix-blend-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectiveCard;