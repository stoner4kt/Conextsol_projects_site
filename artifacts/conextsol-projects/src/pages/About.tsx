import { ArrowUpRight, Compass, HandHeart, MessageCircle } from 'lucide-react';
import { Link } from 'wouter';
import { motion, useReducedMotion } from 'framer-motion';
import { CTABanner } from '@/components/sections/CTABanner';
import { SEOHead } from '@/components/seo/SEOHead';

const values = [
  { icon: HandHeart, title: 'Extreme Ownership', text: 'We take responsibility for the whole outcome, not just the screen in front of us.' },
  { icon: MessageCircle, title: 'No Jargon', text: 'Plain language makes better decisions. We keep the work understandable at every step.' },
  { icon: Compass, title: 'Local Context', text: 'South African businesses have specific constraints and opportunities. We design for the real terrain.' },
];

export default function About() {
  const reduced = useReducedMotion();
  return (
    <>
      <SEOHead title="We Build What Works" description="Meet Conextsol, a Cape Town web design and custom software studio focused on practical business outcomes." canonicalPath="/about" />
      <section className="about-hero">
        <div className="container narrow-content">
          <span className="section-kicker"><span className="kicker-dot" /> The studio</span>
          <motion.h1 initial={reduced ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="page-title about-title">We Build <span className="gradient-text">What Works.</span></motion.h1>
          <p className="about-lede">Conextsol is a Cape Town web design and custom software studio for South African businesses with something important to get done.</p>
          <p className="about-lede about-lede-small">We bring a practical point of view to every brief: understand the business, make the complicated clear, and measure whether the work actually moved things forward.</p>
        </div>
      </section>
      <section className="section-block values-section">
        <div className="container">
          <div className="section-intro-row mb-10"><div><span className="eyebrow">How we work</span><h2 className="section-heading mt-4">A small team with<br /><em>serious follow-through.</em></h2></div><p className="section-aside">No theatre between the brief and the result. You work with the people doing the work.</p></div>
          <div className="values-grid">{values.map(({ icon: Icon, title, text }, index) => <motion.article initial={reduced ? false : { opacity: 0, y: 20 }} whileInView={reduced ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className={`value-card value-card-${index}`} key={title}><span className="value-icon"><Icon size={22} /></span><h3>{title}</h3><p>{text}</p></motion.article>)}</div>
        </div>
      </section>
      <section className="studio-bridge"><div className="container bridge-inner"><div><span className="eyebrow eyebrow-dark">More of the story</span><h2>There is more behind<br /><em>the work.</em></h2></div><a href="https://conextsol.co.za/about" target="_blank" rel="noopener noreferrer" className="cta-button" data-testid="link-full-story">Read our full story <ArrowUpRight size={18} /></a></div></section>
      <section className="section-block services-tease"><div className="container"><span className="eyebrow">What we offer</span><div className="services-list"><a href="https://conextsol.co.za/services" target="_blank" rel="noopener noreferrer" data-testid="link-service-websites"><span>Websites that work harder</span><ArrowUpRight size={21} /></a><a href="https://conextsol.co.za/services" target="_blank" rel="noopener noreferrer" data-testid="link-service-software"><span>Software built around your team</span><ArrowUpRight size={21} /></a><a href="https://conextsol.co.za/services" target="_blank" rel="noopener noreferrer" data-testid="link-service-growth"><span>Digital systems that grow with you</span><ArrowUpRight size={21} /></a></div></div></section>
      <CTABanner title="Have a useful problem?" subtitle="That is usually where the interesting work starts." ctaLabel="Let's Talk" />
    </>
  );
}