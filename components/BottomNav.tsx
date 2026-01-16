import React from 'react';
import { Home, PieChart, Plus, Users, Settings } from 'lucide-react';

const BottomNav: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#0a0a0a] border-t border-neutral-900 pb-safe pt-2 px-6 pb-6">
      <div className="flex justify-between items-center max-w-md mx-auto h-16">
        <button className="p-2 text-ember hover:text-white transition-colors">
          <Home size={24} />
        </button>
        <button className="p-2 text-neutral-500 hover:text-white transition-colors">
          <PieChart size={24} />
        </button>
        
        {/* Main Action Button */}
        <button className="relative -top-5 bg-ember text-black p-4 rounded-2xl shadow-[0_0_20px_rgba(255,69,0,0.4)] hover:scale-105 active:scale-95 transition-transform border-2 border-[#0a0a0a]">
          <Plus size={28} strokeWidth={3} />
        </button>

        <button className="p-2 text-neutral-500 hover:text-white transition-colors">
          <Users size={24} />
        </button>
        <button className="p-2 text-neutral-500 hover:text-white transition-colors">
          <Settings size={24} />
        </button>
      </div>
    </div>
  );
};

export default BottomNav;