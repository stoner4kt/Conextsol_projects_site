import { useEffect, type ReactNode } from 'react';
import { MessageCircle } from 'lucide-react';
import { useLocation } from 'wouter';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { whatsappUrl } from '@/data/portfolio';

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location]);

  return (
    <div className="site-shell">
      <a href="#main" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat with us on WhatsApp" data-testid="link-floating-whatsapp">
        <span className="whatsapp-pulse" />
        <MessageCircle size={26} strokeWidth={2.2} aria-hidden="true" />
      </a>
    </div>
  );
}