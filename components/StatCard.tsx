import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label?: string;
  subValue?: string;
  accentColor?: string; // Tailwind text color class, e.g., 'text-ember'
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, value, label, subValue, accentColor = 'text-white' }) => {
  return (
    <div className="flex-1 bg-surface border border-neutral-800 rounded-2xl p-4 flex flex-col justify-between min-h-[120px] relative shadow-md group hover:border-neutral-700 transition-colors">
        <div className={`p-2 rounded-full w-min mb-2 bg-white/5 border border-white/10 ${accentColor}`}>
            <Icon size={24} strokeWidth={2} />
        </div>
        
        <div>
            <div className="flex items-baseline gap-1">
                <span className="text-2xl font-display font-bold text-white tracking-wide">{value}</span>
                {subValue && <span className="text-xs text-neutral-500 font-mono">{subValue}</span>}
            </div>
            {label && <p className="text-xs text-neutral-400 font-semibold uppercase mt-1 tracking-wider">{label}</p>}
        </div>

        {/* Decorative corner accent */}
        <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-neutral-800 group-hover:bg-ember transition-colors"></div>
    </div>
  );
};

export default StatCard;