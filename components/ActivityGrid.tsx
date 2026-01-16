import React from 'react';
import { Briefcase, Dumbbell, Moon, Grid } from 'lucide-react';

interface ActivityItem {
  id: string;
  label: string;
  duration: string;
  type: 'work' | 'workout' | 'sleep' | 'other';
}

const ActivityGrid: React.FC = () => {
  // Mock data as per wireframe
  const activities: ActivityItem[] = [
    { id: '1', label: 'Work', duration: '0min', type: 'work' },
    { id: '2', label: 'Workout', duration: '4min', type: 'workout' },
    { id: '3', label: 'Sleep', duration: '0min', type: 'sleep' },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'work': return <Briefcase size={18} />;
      case 'workout': return <Dumbbell size={18} />;
      case 'sleep': return <Moon size={18} />;
      default: return <Grid size={18} />;
    }
  };

  return (
    <div className="grid grid-cols-2 gap-3 w-full">
      {activities.map((activity) => (
        <button 
          key={activity.id}
          className="flex items-center justify-between p-4 bg-surface border border-neutral-800 rounded-xl hover:bg-neutral-800/50 transition-all active:scale-95 group"
        >
          <div className="flex flex-col items-start">
             <span className="text-sm font-bold font-display uppercase text-neutral-300 group-hover:text-white">{activity.label}</span>
             <span className="text-xs text-neutral-500">{activity.duration}</span>
          </div>
          <div className="text-neutral-600 group-hover:text-ember transition-colors">
            {getIcon(activity.type)}
          </div>
        </button>
      ))}

      {/* "Activities/More" Button */}
      <button className="flex items-center justify-between p-4 bg-surface border border-neutral-800 rounded-xl hover:bg-neutral-800/50 transition-all active:scale-95 group">
          <span className="text-sm font-bold font-display uppercase text-neutral-300 group-hover:text-white">Activitys</span>
          <div className="text-neutral-600 group-hover:text-gold transition-colors">
             <Grid size={18} />
          </div>
      </button>
    </div>
  );
};

export default ActivityGrid;