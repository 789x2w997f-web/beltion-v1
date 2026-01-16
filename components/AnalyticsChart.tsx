import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'TIME', value: 30 },
  { name: '', value: 0 }, // Spacer
  { name: 'WORK', value: 45 },
  { name: '', value: 0 }, // Spacer
  { name: 'REST', value: 20 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-neutral-900 border border-neutral-800 p-2 rounded shadow-xl">
        <p className="text-white font-mono text-xs">{`${label}: ${payload[0].value}m`}</p>
      </div>
    );
  }
  return null;
};

const AnalyticsChart: React.FC = () => {
  return (
    <div className="w-full h-[200px] bg-surface border border-neutral-800 rounded-2xl p-4 mt-2 relative">
       <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2 bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
                <span className="text-xs font-bold font-display text-neutral-300">TIME</span>
            </div>
            <div className="flex items-center gap-2 bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
                <span className="text-xs font-bold font-display text-neutral-300">ACTIVITY</span>
            </div>
       </div>

      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data} barCategoryGap={10}>
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#525252', fontSize: 10, fontFamily: 'Oswald' }}
            dy={10}
          />
          <Tooltip cursor={{fill: 'transparent'}} content={<CustomTooltip />} />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={index % 2 === 0 ? (index === 0 ? '#FFD700' : '#FF4500') : 'transparent'} 
                fillOpacity={0.8}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;