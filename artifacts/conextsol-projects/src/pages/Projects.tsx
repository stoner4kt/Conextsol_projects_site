import { useMemo, useState } from 'react';
import { Link } from 'wouter';
import { ArrowUpRight } from 'lucide-react';
import { CaseStudyCard } from '@/components/portfolio/CaseStudyCard';
import { CTABanner } from '@/components/sections/CTABanner';
import { IndustryFilter } from '@/components/sections/IndustryFilter';
import { SEOHead } from '@/components/seo/SEOHead';
import { projects } from '@/data/portfolio';

export default function Projects() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const filteredProjects = useMemo(() => projects.filter((project) => selectedIndustry === 'All' || project.industry === selectedIndustry), [selectedIndustry]);

  return (
    <>
      <SEOHead title="Our Work" description="Explore Conextsol case studies across logistics, legal, property, commerce, finance, and hospitality." canonicalPath="/projects" />
      <section className="page-header">
        <div className="container">
          <Link href="/" className="back-link" data-testid="link-projects-home"><ArrowUpRight size={16} className="rotate-[-135deg]" /> Back home</Link>
          <div className="page-heading-row">
            <div>
              <span className="section-kicker">The portfolio</span>
              <h1 className="page-title">Our <span className="gradient-text">Work.</span></h1>
              <p className="page-lede">Real briefs. Real clients. Measurable results.</p>
            </div>
            <p className="page-aside">Six snapshots of the way we think: start with the business problem, then build the right thing.</p>
          </div>
          <IndustryFilter selected={selectedIndustry} onChange={setSelectedIndustry} />
        </div>
      </section>
      <section className="section-block pt-16 md:pt-24">
        <div className="container">
          <div className="results-meta"><span>{filteredProjects.length} {filteredProjects.length === 1 ? 'case study' : 'case studies'}</span><span className="results-rule" /><span>{selectedIndustry === 'All' ? 'Everything we have shipped' : selectedIndustry}</span></div>
          {filteredProjects.length > 0 ? (
            <div className="projects-grid">
              {filteredProjects.map((project, index) => <CaseStudyCard key={project.id} project={project} index={index} />)}
            </div>
          ) : (
            <div className="empty-card">
              <span className="section-kicker">A small pause</span>
              <h2 className="mt-5 font-display text-3xl font-bold">No work in that filter yet.</h2>
              <p className="mt-3 text-muted-foreground">That does not mean we cannot help. We are comfortable learning a new sector.</p>
              <Link href="/contact" className="button-primary mt-7 inline-flex" data-testid="link-empty-contact">Start a conversation <ArrowUpRight size={18} /></Link>
            </div>
          )}
        </div>
      </section>
      <CTABanner title="Don't see your industry?" subtitle="We work across sectors. The useful part is getting close to the problem." ctaLabel="Let's Talk" />
    </>
  );
}