import { ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import { motion, useReducedMotion } from 'framer-motion';
import type { PortfolioProject } from '@/data/portfolio';

interface CaseStudyCardProps {
  project: PortfolioProject;
  index?: number;
}

export function CaseStudyCard({ project, index = 0 }: CaseStudyCardProps) {
  const reduced = useReducedMotion();
  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.55, delay: reduced ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="neo-card case-card group"
      data-testid={`card-project-${project.id}`}
    >
      <Link href={`/projects/${project.id}`} className="flex h-full flex-col" data-testid={`link-project-${project.id}`}>
        <div className="case-image-wrap">
          <img
            src={project.imageUrl}
            alt={`${project.clientType} project preview`}
            width="1200"
            height="800"
            loading="lazy"
            className="case-image"
          />
          <span className="image-badge">{project.industry}</span>
          <span className="image-arrow" aria-hidden="true"><ArrowUpRight size={20} /></span>
        </div>
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <p className="case-services">{project.services.join('  ·  ')}</p>
          <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.045em]">{project.clientType}</h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">{project.description}</p>
          <div className="result-box mt-6">
            <span className="result-label">Key result</span>
            <span className="result-value">{project.keyMetric}</span>
          </div>
          <span className="case-link mt-5">
            View case study <ArrowUpRight size={17} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}