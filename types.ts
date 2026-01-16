export interface UserStats {
  xp: number;
  xpTarget: number;
  timerRemainingMin: number;
  streak: number;
  objectiveProgress: number; // 0-100
}

export interface ActivityLog {
  id: string;
  type: 'work' | 'workout' | 'sleep' | 'other';
  durationMin: number;
  label: string;
}

export interface AnalyticsData {
  name: string;
  minutes: number;
}