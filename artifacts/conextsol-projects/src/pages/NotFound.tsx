import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import { SEOHead } from '@/components/seo/SEOHead';

export default function NotFound() {
  return (
    <>
      <SEOHead title="Page not found" description="This Conextsol Projects page could not be found." />
      <section className="not-found-page"><div className="container not-found-inner"><span className="section-kicker">404 / wrong turn</span><h1 className="page-title">This page is not<br /><span className="gradient-text">in the case book.</span></h1><p>It may have moved, or perhaps it was never a project at all. Either way, there is good work this way.</p><Link href="/projects" className="button-primary" data-testid="link-not-found-projects"><ArrowLeft size={18} /> Browse projects <ArrowUpRight size={18} /></Link></div></section>
    </>
  );
}