import React from 'react';
import { Flame, Clock, Trophy, User } from 'lucide-react';
import { useUserStats } from '../services/firebase';
import ObjectiveCard from './ObjectiveCard';
import StatCard from './StatCard';
import ActivityGrid from './ActivityGrid';
import AnalyticsChart from './AnalyticsChart';
import BottomNav from './BottomNav';

const Dashboard: React.FC = () => {
  const { stats, loading } = useUserStats();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
             <Flame className="text-ember mb-4 animate-bounce" size={48} />
             <p className="text-neutral-500 font-display tracking-widest">IGNITING...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-neutral-100 pb-28 relative overflow-hidden">
      {/* Background Gradients for Atmosphere */}
      <div className="fixed top-0 left-0 w-full h-64 bg-gradient-to-b from-ember/5 to-transparent pointer-events-none" />
      
      <div className="max-w-md mx-auto px-5 pt-4 relative z-10">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <div className="flex flex-col">
            <h1 className="text-xl font-display font-bold text-white tracking-widest">BELTION</h1>
            <span className="text-[10px] font-mono text-ember tracking-[0.2em] -mt-1">FIRE AND ASHES</span>
          </div>
          
          <div className="flex items-center gap-4">
             {/* Streak Counter */}
             <div className="flex items-center gap-1.5 bg-neutral-900/80 border border-neutral-800 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Flame size={16} className="text-ember fill-ember" />
                <span className="text-sm font-display font-bold">{stats.streak}</span>
             </div>
             
             {/* Profile Icon */}
             <div className="p-2 bg-neutral-900 rounded-full border border-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer">
                <User size={20} />
             </div>
          </div>
        </header>

        {/* Main Content Stack */}
        <div className="flex flex-col gap-5">
            
            {/* Objective Card */}
            <ObjectiveCard progress={stats.objectiveProgress} />

            {/* Stats Row */}
            <div className="flex gap-4">
                <StatCard 
                    icon={Trophy} 
                    value={`${stats.xp}`}
                    subValue={`/${stats.xpTarget}`}
                    label="XP"
                    accentColor="text-white"
                />
                <StatCard 
                    icon={Clock} 
                    value={`${stats.timerRemainingMin}`}
                    subValue="min"
                    label="Remaining"
                    accentColor="text-gold"
                />
            </div>

            {/* Activity Grid */}
            <ActivityGrid />

            {/* Chart */}
            <AnalyticsChart />
            
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Dashboard;