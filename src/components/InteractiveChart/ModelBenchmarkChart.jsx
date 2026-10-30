import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';

export default function ModelBenchmarkChart({ models }) {
  const chartData = models.map((m) => ({
    ...m,
    labelString: `${m.accuracy.toFixed(2)}%`,
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const d = payload[0].payload;
      return (
        <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700/80 px-4 py-3 rounded-xl shadow-2xl text-left text-xs z-50 min-w-[220px]">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="font-bold text-white text-sm">{d.name}</span>
            {d.isChampion && (
              <span className="bg-fluent-emerald/20 text-fluent-emerald border border-fluent-emerald/40 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">
                Champion
              </span>
            )}
          </div>
          <div className="space-y-1.5 text-slate-300">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Holdout Accuracy:</span>
              <strong className="text-white font-mono text-sm">{d.accuracy.toFixed(2)}%</strong>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Macro-F1 Score:</span>
              <strong className="text-slate-200 font-mono">{d.macroF1.toFixed(4)}</strong>
            </div>
            <div className="pt-1.5 border-t border-slate-800 text-[11px] text-slate-400">
              {d.note}
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-fluent-card">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white text-base">
            Model Progression Benchmark (80/20 Holdout Split, N = 400)
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Hover to view Macro-F1 and inductive bias notes. Extra Trees audited at 80.00% in Cell 1.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full bg-fluent-emerald"></span>
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">CatBoost Champion (89.75%)</span>
        </div>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 5, right: 65, left: 25, bottom: 5 }}
          >
            <XAxis
              type="number"
              domain={[50, 95]}
              tick={{ fill: '#94a3b8', fontSize: 11 }}
              tickLine={false}
              axisLine={{ stroke: '#e2e8f0' }}
            />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fill: '#334155', fontSize: 12, fontWeight: 500 }}
              width={140}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="accuracy" radius={[0, 6, 6, 0]} barSize={22}>
              {chartData.map((entry, index) => (
                <Cell
                  key={`bar-${index}`}
                  fill={entry.isChampion ? '#10B981' : entry.color}
                />
              ))}
              <LabelList
                dataKey="labelString"
                position="right"
                style={{ fill: '#0f172a', fontSize: 12, fontWeight: 700, fontFamily: 'monospace' }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex flex-wrap justify-between items-center gap-2">
        <span>CatBoost 5-Fold Stratified CV Mean: <strong className="text-slate-800 dark:text-white font-mono">88.60% ± 1.93%</strong> (Macro-F1: 0.8313)</span>
        <span className="text-[11px] text-slate-400">Occam's Razor: Standalone CatBoost outperforms ensembles</span>
      </div>
    </div>
  );
}
