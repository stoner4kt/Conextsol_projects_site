import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
}

export function SEOHead({ title, description, canonicalPath = '/' }: SEOHeadProps) {
  useEffect(() => {
    const fullTitle = `${title} | Conextsol Projects`;
    document.title = fullTitle;
    const setMeta = (selector: string, attributes: Record<string, string>) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        document.head.appendChild(element);
      }
      Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
    };
    setMeta('meta[name="description"]', { name: 'description', content: description });
    setMeta('meta[property="og:title"]', { property: 'og:title', content: fullTitle });
    setMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    setMeta('meta[property="og:url"]', { property: 'og:url', content: `https://projects.conextsol.co.za${canonicalPath}` });
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://projects.conextsol.co.za${canonicalPath}`);
  }, [canonicalPath, description, title]);

  return null;
}