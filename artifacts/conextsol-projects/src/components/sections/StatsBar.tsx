import { ArrowUpRight } from 'lucide-react';

const stats = [
  { value: '6+', label: 'Projects delivered' },
  { value: 'R45M+', label: 'Client value influenced' },
  { value: '100%', label: 'On-time delivery' },
];

export function StatsBar() {
  return (
    <div className="stats-strip" data-testid="stats-bar">
      {stats.map((stat, index) => (
        <div className={`stat-cell ${index > 0 ? 'stat-cell-divided' : ''}`} key={stat.label} data-testid={`stat-${index}`}>
          <div className="flex items-end gap-2">
            <span className="stat-value">{stat.value}</span>
            {index === 1 ? <ArrowUpRight size={19} strokeWidth={2.5} aria-hidden="true" /> : null}
          </div>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}