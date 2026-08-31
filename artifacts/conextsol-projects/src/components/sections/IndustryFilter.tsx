import { industries } from '@/data/portfolio';

interface IndustryFilterProps {
  selected: string;
  onChange: (industry: string) => void;
}

export function IndustryFilter({ selected, onChange }: IndustryFilterProps) {
  return (
    <div className="filter-scroll" role="list" aria-label="Filter projects by industry" data-testid="filter-industries">
      {industries.map((industry) => (
        <button
          key={industry}
          type="button"
          role="listitem"
          data-testid={`button-filter-${industry.toLowerCase().replace(/\s+/g, '-')}`}
          aria-pressed={selected === industry}
          onClick={() => onChange(industry)}
          className={`filter-pill ${selected === industry ? 'filter-pill-active' : ''}`}
        >
          {industry}
        </button>
      ))}
    </div>
  );
}