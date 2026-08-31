import { ArrowUpRight, Linkedin, MessageCircle } from 'lucide-react';
import { Link } from 'wouter';
import { whatsappUrl } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-intro">
          <Link href="/" className="brand-lockup footer-brand" data-testid="link-footer-home">
            <span className="brand-name">Conextsol</span>
            <span className="brand-context">/ projects</span>
          </Link>
          <p>South Africa&apos;s results-driven web studio.</p>
          <p className="footer-location">Cape Town · Johannesburg · Everywhere practical</p>
        </div>
        <div className="footer-col">
          <p className="footer-label">Explore</p>
          <Link href="/projects" className="footer-link" data-testid="link-footer-projects">Projects <ArrowUpRight size={14} /></Link>
          <Link href="/about" className="footer-link" data-testid="link-footer-about">About <ArrowUpRight size={14} /></Link>
          <Link href="/contact" className="footer-link" data-testid="link-footer-contact">Contact <ArrowUpRight size={14} /></Link>
        </div>
        <div className="footer-col">
          <p className="footer-label">Main site</p>
          <a href="https://conextsol.co.za/services" target="_blank" rel="noopener noreferrer" className="footer-link" data-testid="link-footer-services">Services <ArrowUpRight size={14} /></a>
          <a href="https://conextsol.co.za/privacy-policy" target="_blank" rel="noopener noreferrer" className="footer-link" data-testid="link-footer-privacy">Privacy Policy <ArrowUpRight size={14} /></a>
          <a href="https://conextsol.co.za/terms-of-service" target="_blank" rel="noopener noreferrer" className="footer-link" data-testid="link-footer-terms">Terms <ArrowUpRight size={14} /></a>
        </div>
        <div className="footer-social">
          <p className="footer-label">Say hello</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="social-button" aria-label="WhatsApp" data-testid="link-footer-whatsapp"><MessageCircle size={18} /></a>
          <a href="https://www.linkedin.com/company/conextsol/" target="_blank" rel="noopener noreferrer" className="social-button" aria-label="LinkedIn" data-testid="link-footer-linkedin"><Linkedin size={18} /></a>
          <a href="https://x.com/conextsol" target="_blank" rel="noopener noreferrer" className="social-button" aria-label="X" data-testid="link-footer-x"><span className="font-display text-sm font-bold">X</span></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Conextsol. All rights reserved.</span>
        <span>Built by Conextsol · Hosted on Cloudflare</span>
      </div>
    </footer>
  );
}