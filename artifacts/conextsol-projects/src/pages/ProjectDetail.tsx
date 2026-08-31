import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link, useParams } from 'wouter';
import { motion, useReducedMotion } from 'framer-motion';
import { CaseStudyCard } from '@/components/portfolio/CaseStudyCard';
import { CTABanner } from '@/components/sections/CTABanner';
import { SEOHead } from '@/components/seo/SEOHead';
import { projects } from '@/data/portfolio';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((item) => item.id === id);
  const reduced = useReducedMotion();

  if (!project) {
    return (
      <>
        <SEOHead title="Project not found" description="That Conextsol case study could not be found." />
        <section className="not-found-page"><div className="container"><span className="section-kicker">404 / not here</span><h1 className="page-title mt-7">That case study <span className="gradient-text">went walkabout.</span></h1><Link href="/projects" className="button-primary mt-8 inline-flex" data-testid="link-detail-not-found">Back to all projects <ArrowUpRight size={18} /></Link></div></section>
      </>
    );
  }

  const related = (project.relatedProjectIds ?? []).map((relatedId) => projects.find((item) => item.id === relatedId)).filter(Boolean) as typeof projects;

  return (
    <>
      <SEOHead title={project.clientType} description={project.description} canonicalPath={`/projects/${project.id}`} />
      <section className="detail-hero">
        <div className="container">
          <Link href="/projects" className="back-link" aria-label="Back to all projects" data-testid="link-back-projects"><ArrowLeft size={16} /> Back to Projects</Link>
          <div className="detail-hero-grid">
            <motion.div initial={reduced ? false : { opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55 }}>
              <span className="section-kicker kicker-teal">{project.industry}</span>
              <p className="detail-index">Case study / 0{projects.findIndex((item) => item.id === project.id) + 1}</p>
              <h1 className="detail-title">{project.clientType}</h1>
              <p className="detail-description">{project.description}</p>
              <div className="key-result-large">
                <span className="result-label">Key result</span>
                <strong>{project.keyMetric}</strong>
              </div>
            </motion.div>
            <motion.div initial={reduced ? false : { opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.12 }} className="detail-image-wrap">
              <img src={project.imageUrl} alt={`${project.clientType} case study hero`} width="1200" height="800" fetchPriority="high" className="detail-image" />
              <span className="image-caption">Conextsol / {project.industry}</span>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-block detail-content">
        <div className="container">
          <div className="story-grid">
            <article className="story-card story-card-orange"><p className="eyebrow">01 / The brief</p><h2>The Challenge</h2><p>{project.challenge}</p></article>
            <article className="story-card story-card-teal"><p className="eyebrow">02 / The move</p><h2>Our Solution</h2><p>{project.solution}</p></article>
            <article className="story-card story-card-yellow"><p className="eyebrow">03 / The proof</p><h2>The Outcome</h2><ul>{project.outcomes.map((outcome) => <li key={outcome}><CheckCircle2 size={19} aria-hidden="true" /> <span>{outcome}</span></li>)}</ul></article>
          </div>

          <div className="metadata-strip" data-testid="project-metadata">
            <div><span className="metadata-label">Services used</span><strong>{project.services.join(' · ')}</strong></div>
            <div><span className="metadata-label">Industry</span><strong>{project.industry}</strong></div>
            <div><span className="metadata-label">Key metric</span><strong>{project.keyMetric}</strong></div>
          </div>

          <div className="process-section">
            <div className="process-heading"><span className="eyebrow">Behind the build</span><h2 className="section-heading mt-4">How we <em>built it.</em></h2><p>Good outcomes come from a clear process. Here is the short version.</p></div>
            <div className="process-content">
              <div className="tech-pills">{(project.techStack ?? []).map((tech) => <span className="tech-pill" key={tech}>{tech}</span>)}</div>
              <div className="process-steps">{(project.processSteps ?? []).map((step, index) => <div className="process-step" key={step.title}><span className="step-number">0{index + 1}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></div>)}</div>
            </div>
          </div>

          {project.gallery?.length ? <div className="gallery-section"><div className="section-intro-row mb-8"><div><span className="eyebrow">Inside the work</span><h2 className="section-heading mt-4">A few <em>details.</em></h2></div><span className="gallery-count">{project.gallery.length} frames</span></div><div className="gallery-grid">{project.gallery.map((imageUrl, index) => <div className={`gallery-item gallery-item-${index % 3}`} key={`${imageUrl}-${index}`}><img src={imageUrl} alt={`${project.clientType} project detail ${index + 1}`} width="900" height={index % 3 === 0 ? '1100' : '800'} loading="lazy" /></div>)}</div></div> : null}

          {project.testimonial ? <figure className="testimonial-card"><span className="testimonial-mark" aria-hidden="true">“</span><blockquote>{project.testimonial.quote}</blockquote><figcaption><span className="testimonial-avatar">{project.testimonial.author.charAt(0)}</span><span><strong>{project.testimonial.author}</strong><small>{project.testimonial.role}</small></span></figcaption></figure> : null}

          {related.length ? <section className="related-section"><div className="section-intro-row mb-10"><div><span className="eyebrow">Keep exploring</span><h2 className="section-heading mt-4">More work you <em>might like.</em></h2></div><Link href="/projects" className="text-link desktop-only" data-testid="link-detail-view-all">View all projects <ArrowUpRight size={17} /></Link></div><div className="related-row">{related.map((relatedProject, index) => <CaseStudyCard key={relatedProject.id} project={relatedProject} index={index} />)}</div></section> : null}
        </div>
      </section>
      <CTABanner title="Ready to build something like this?" subtitle="Tell us what is not working yet. We will meet you there." />
    </>
  );
}