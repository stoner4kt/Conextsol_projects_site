import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { whatsappUrl } from '@/data/portfolio';

const navItems = [
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="brand-lockup" data-testid="link-home">
          <span className="brand-name">Conextsol</span>
          <span className="brand-context">/ projects</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className={`nav-link ${location === item.href ? 'nav-link-active' : ''}`}
              data-testid={`link-nav-${item.label.toLowerCase()}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="desktop-actions">
          <a
            href="https://conextsol.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="main-site-link"
            data-testid="link-main-site"
          >
            <ArrowLeft size={14} aria-hidden="true" /> conextsol.co.za
          </a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="header-cta" data-testid="link-header-quote">
            Get a Quote <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          data-testid="button-mobile-menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open ? (
        <div className="mobile-drawer">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href} className="mobile-nav-link" data-testid={`link-mobile-${item.label.toLowerCase()}`}>
                {item.label}
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            ))}
          </nav>
          <div className="mt-5 border-t border-stone-900/15 pt-5">
            <a href="https://conextsol.co.za" target="_blank" rel="noopener noreferrer" className="mobile-secondary-link" data-testid="link-mobile-main-site">
              <ArrowLeft size={15} aria-hidden="true" /> Back to conextsol.co.za
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="header-cta mt-4 w-full justify-center" data-testid="link-mobile-quote">
              Get a Quote <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}