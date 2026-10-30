import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';

export default function ClassDistributionChart({ data }) {
  const [viewMode, setViewMode] = useState('percentage'); // 'percentage' | 'count'

  const chartData = data.map((item) => ({
    ...item,
    displayValue: viewMode === 'percentage' ? item.percentage : item.count,
    labelString: viewMode === 'percentage' ? `${item.percentage.toFixed(2)}%` : `${item.count} rows`,
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const d = payload[0].payload;
      return (
        <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700/80 px-4 py-3 rounded-lg shadow-xl text-left text-xs z-50">
          <p className="font-semibold text-white text-sm mb-1">{d.name}</p>
          <div className="space-y-1 text-slate-300">
            <p className="flex justify-between gap-4">
              <span>Count:</span>
              <strong className="text-white font-mono">{d.count} employees</strong>
            </p>
            <p className="flex justify-between gap-4">
              <span>Share:</span>
              <strong className="text-fluent-royalBlue font-mono">{d.percentage.toFixed(2)}%</strong>
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-fluent-card flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white text-sm tracking-wide">
            Target Class Distribution (N = 2,000)
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Audit-verified ground truth proportions
          </p>
        </div>

        {/* View Toggle */}
        <div className="inline-flex rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 p-0.5 text-xs">
          <button
            type="button"
            onClick={() => setViewMode('percentage')}
            className={`px-2.5 py-1 rounded-md font-medium transition-all ${
              viewMode === 'percentage'
                ? 'bg-white dark:bg-slate-900 text-fluent-royalBlue shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            % Share
          </button>
          <button
            type="button"
            onClick={() => setViewMode('count')}
            className={`px-2.5 py-1 rounded-md font-medium transition-all ${
              viewMode === 'count'
                ? 'bg-white dark:bg-slate-900 text-fluent-royalBlue shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Count
          </button>
        </div>
      </div>

      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 5, right: 60, left: 10, bottom: 5 }}
          >
            <XAxis
              type="number"
              domain={viewMode === 'percentage' ? [0, 65] : [0, 1300]}
              tick={{ fill: '#94a3b8', fontSize: 11 }}
              tickLine={false}
              axisLine={{ stroke: '#e2e8f0' }}
            />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fill: '#334155', fontSize: 12, fontWeight: 500 }}
              width={110}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="displayValue" radius={[0, 6, 6, 0]} barSize={22}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
              <LabelList
                dataKey="labelString"
                position="right"
                style={{ fill: '#0f172a', fontSize: 12, fontWeight: 600, fontFamily: 'monospace' }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 flex justify-between items-center">
        <span>Severe minority imbalance: High Performers represent only 10.40%</span>
        <span className="font-mono text-fluent-royalBlue">10.4% vs 56.5%</span>
      </div>
    </div>
  );
}
