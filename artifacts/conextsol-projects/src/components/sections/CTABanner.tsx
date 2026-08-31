import { ArrowUpRight } from 'lucide-react';
import { whatsappUrl } from '@/data/portfolio';

interface CTABannerProps {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function CTABanner({ title, subtitle, ctaLabel = 'Start a Project', ctaHref = whatsappUrl }: CTABannerProps) {
  return (
    <section className="cta-outer" data-testid="cta-banner">
      <div className="cta-inner">
        <div className="max-w-2xl">
          <span className="eyebrow eyebrow-dark">A good next move</span>
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-stone-950 md:text-5xl">{title}</h2>
          {subtitle ? <p className="mt-4 max-w-xl text-base leading-7 text-stone-900/75 md:text-lg">{subtitle}</p> : null}
        </div>
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="link-cta-whatsapp"
          className="cta-button"
        >
          {ctaLabel}
          <ArrowUpRight size={19} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}