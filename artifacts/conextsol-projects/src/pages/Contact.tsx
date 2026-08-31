import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { whatsappUrl } from '@/data/portfolio';
import { SEOHead } from '@/components/seo/SEOHead';

interface FormValues { name: string; email: string; phone: string; need: string }
type FormErrors = Partial<Record<keyof FormValues, string>>;

export default function Contact() {
  const [values, setValues] = useState<FormValues>({ name: '', email: '', phone: '', need: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  const update = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: FormErrors = {};
    if (!values.name.trim()) nextErrors.name = 'Tell us who we are speaking to.';
    if (!values.email.trim()) nextErrors.email = 'An email helps us get back to you.';
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = 'That email address does not look quite right.';
    if (!values.need.trim()) nextErrors.need = 'A sentence or two is plenty.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSent(true);
  };

  return (
    <>
      <SEOHead title="Start a Project" description="Talk to Conextsol about a website or custom software project for your business." canonicalPath="/contact" />
      <section className="contact-page">
        <div className="container">
          <div className="contact-intro"><span className="section-kicker">Let&apos;s talk</span><h1 className="page-title">Make the next move <span className="gradient-text">useful.</span></h1><p>Have a website to fix, a workflow to untangle, or an idea that needs a proper shape? Start with the rough version.</p></div>
          <div className="contact-grid">
            <aside className="contact-info neo-card">
              <span className="eyebrow">Find us here</span>
              <h2>Good work starts<br /><em>with a conversation.</em></h2>
              <div className="contact-details">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" data-testid="link-contact-whatsapp"><span className="contact-detail-icon"><MessageCircle size={20} /></span><span><small>WhatsApp</small><strong>+27 66 119 2498</strong></span><ArrowUpRight size={17} /></a>
                <a href="mailto:hello@conextsol.co.za" data-testid="link-contact-email"><span className="contact-detail-icon"><Mail size={20} /></span><span><small>Email</small><strong>hello@conextsol.co.za</strong></span><ArrowUpRight size={17} /></a>
                <div><span className="contact-detail-icon"><MapPin size={20} /></span><span><small>Based in</small><strong>Cape Town, South Africa</strong></span></div>
              </div>
              <div className="contact-note"><Phone size={17} /> Prefer a quick chat? WhatsApp is usually the fastest way to reach us.</div>
            </aside>
            <div className="form-panel">
              {sent ? (
                <div className="success-state" data-testid="status-contact-success"><span className="success-icon"><Check size={25} /></span><span className="eyebrow">Message received</span><h2>That is a good start.</h2><p>Thanks, {values.name.split(' ')[0] || 'there'}. We will read the brief and get back to you soon. If it is urgent, WhatsApp us directly.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="button-primary" data-testid="link-success-whatsapp">Open WhatsApp <ArrowUpRight size={18} /></a><button type="button" className="text-link mt-5" onClick={() => setSent(false)} data-testid="button-send-another">Send another message</button></div>
              ) : (
                <form onSubmit={submit} noValidate className="contact-form" data-testid="form-contact">
                  <div className="form-heading"><span className="eyebrow">The short version</span><h2>Tell us what you need.</h2><p>Required fields are marked with an asterisk. No polished pitch deck required.</p></div>
                  <div className="form-two-col">
                    <label className="field"><span>Name <b>*</b></span><input data-testid="input-name" value={values.name} onChange={(event) => update('name', event.target.value)} placeholder="Your name" autoComplete="name" />{errors.name ? <small className="field-error">{errors.name}</small> : null}</label>
                    <label className="field"><span>Email <b>*</b></span><input type="email" data-testid="input-email" value={values.email} onChange={(event) => update('email', event.target.value)} placeholder="you@company.co.za" autoComplete="email" />{errors.email ? <small className="field-error">{errors.email}</small> : null}</label>
                  </div>
                  <label className="field"><span>Phone <i>optional</i></span><input type="tel" data-testid="input-phone" value={values.phone} onChange={(event) => update('phone', event.target.value)} placeholder="+27 ..." autoComplete="tel" /></label>
                  <label className="field"><span>What do you need? <b>*</b></span><textarea data-testid="input-need" value={values.need} onChange={(event) => update('need', event.target.value)} placeholder="A new website, a better booking flow, a system your team can actually use..." rows={5} />{errors.need ? <small className="field-error">{errors.need}</small> : null}</label>
                  <button type="submit" className="button-primary submit-button" data-testid="button-submit-contact">Send the brief <ArrowUpRight size={19} /></button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}