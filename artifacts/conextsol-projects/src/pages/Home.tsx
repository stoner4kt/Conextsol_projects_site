import { useState } from 'react';
import { ArrowDown, ArrowUpRight, MoveRight } from 'lucide-react';
import { Link } from 'wouter';
import { motion, useReducedMotion } from 'framer-motion';
import { CaseStudyCard } from '@/components/portfolio/CaseStudyCard';
import { CTABanner } from '@/components/sections/CTABanner';
import { IndustryFilter } from '@/components/sections/IndustryFilter';
import { StatsBar } from '@/components/sections/StatsBar';
import { SEOHead } from '@/components/seo/SEOHead';
import { projects, whatsappUrl } from '@/data/portfolio';

export default function Home() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const reduced = useReducedMotion();
  const visibleProjects = projects.filter((project) => selectedIndustry === 'All' || project.industry === selectedIndustry).slice(0, 3);

  return (
    <>
      <SEOHead title="The Work That Speaks" description="Real briefs, real clients, and measurable results from Conextsol, Cape Town's results-driven web studio." />
      <section className="hero-section">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="container hero-content">
          <motion.div initial={reduced ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <span className="section-kicker"><span className="kicker-dot" /> Our Work</span>
          </motion.div>
          <motion.h1 initial={reduced ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="hero-heading">
            The Work That <span className="gradient-text">Speaks.</span>
          </motion.h1>
          <motion.p initial={reduced ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="hero-copy">
            Every project here is a real brief, a real client, and a measurable result. Browse the case studies or get in touch to discuss yours.
          </motion.p>
          <motion.div initial={reduced ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="hero-actions">
            <Link href="/projects" className="button-primary" data-testid="link-browse-projects">Browse Case Studies <ArrowUpRight size={19} /></Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="button-secondary" data-testid="link-start-project">Start a Project <MoveRight size={18} /></a>
          </motion.div>
          <motion.div initial={reduced ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-14 max-w-4xl">
            <StatsBar />
          </motion.div>
        </div>
        <div className="hero-scroll" aria-hidden="true"><ArrowDown size={16} /> Scroll to explore</div>
      </section>

      <section className="section-block filter-section">
        <div className="container">
          <div className="section-intro-row">
            <div>
              <span className="eyebrow">Browse by sector</span>
              <h2 className="section-heading mt-4">Useful work, <em>across the board.</em></h2>
            </div>
            <p className="section-aside">Different industries. Same rule: make the next business decision easier.</p>
          </div>
          <IndustryFilter selected={selectedIndustry} onChange={setSelectedIndustry} />
        </div>
      </section>

      <section className="section-block projects-preview">
        <div className="container">
          <div className="section-intro-row mb-10">
            <div>
              <span className="eyebrow">Selected work</span>
              <h2 className="section-heading mt-4">A closer look at <em>what works.</em></h2>
            </div>
            <Link href="/projects" className="text-link desktop-only" data-testid="link-view-all-projects">View all projects <ArrowUpRight size={17} /></Link>
          </div>
          {visibleProjects.length > 0 ? (
            <div className="projects-grid">
              {visibleProjects.map((project, index) => <CaseStudyCard key={project.id} project={project} index={index} />)}
            </div>
          ) : (
            <div className="empty-card">No case studies in this sector yet. <Link href="/contact" className="underline">Tell us what you are building.</Link></div>
          )}
          <Link href="/projects" className="text-link mobile-only mt-7" data-testid="link-view-all-projects-mobile">View all projects <ArrowUpRight size={17} /></Link>
        </div>
      </section>

      <section className="quote-section">
        <div className="container quote-layout">
          <div className="quote-mark" aria-hidden="true">“</div>
          <blockquote>Good digital work should make the business feel lighter.</blockquote>
          <p>Not louder. Not more complicated. Just more useful to the people who keep it moving.</p>
        </div>
      </section>
      <CTABanner title="See your business here next?" subtitle="Bring us the messy brief. We will help you find the clear, commercially useful version of it." />
    </>
  );
}