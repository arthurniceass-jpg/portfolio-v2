import FadeIn from './FadeIn';
import ContactButton from './ContactButton';
import { contact, profile } from '../content';

const DIVIDER = '1px solid rgba(215, 226, 234, 0.15)';

export default function ContactSection() {
  return (
    <section
      id="contato"
      className="relative z-30 -mt-10 flex flex-col items-center rounded-t-[40px] px-5 pb-8 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pb-10 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn>
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          {contact.heading}
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} className="mt-10 flex flex-col items-center gap-6 text-center sm:mt-14">
        <p className="inline-flex items-center gap-2.5 rounded-full border border-[#D7E2EA]/30 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] sm:text-sm">
          <span aria-hidden="true" className="size-2 rounded-full bg-[#3ce07a]" />
          {contact.status}
        </p>
        <p
          className="max-w-[560px] font-medium leading-relaxed text-[#D7E2EA]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        >
          {contact.lede}
        </p>
      </FadeIn>

      <ul className="mt-14 w-full max-w-5xl sm:mt-20" style={{ borderTop: DIVIDER }}>
        {contact.links.map(({ label, value, href }) => (
          <li
            key={label}
            className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:py-7"
            style={{ borderBottom: DIVIDER }}
          >
            <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">
              {label}
            </span>
            {href ? (
              <a
                href={href}
                {...(/^https?:/i.test(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="break-words font-medium text-[#D7E2EA] underline-offset-8 transition-opacity duration-200 hover:underline hover:opacity-80 sm:text-right"
                style={{ fontSize: 'clamp(1rem, 2.4vw, 2rem)' }}
              >
                {value}
              </a>
            ) : (
              <span
                className="font-medium text-[#D7E2EA] sm:text-right"
                style={{ fontSize: 'clamp(1rem, 2.4vw, 2rem)' }}
              >
                {value}
              </span>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-14 sm:mt-20">
        <ContactButton label={contact.cta.label} href={contact.cta.href} />
      </div>

      <footer className="mt-20 flex w-full max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-[#D7E2EA]/15 pt-6 text-xs font-light uppercase tracking-widest text-[#D7E2EA]/50 sm:mt-28">
        <span>
          © {profile.year} {profile.name}
        </span>
        <span>{profile.city}</span>
      </footer>
    </section>
  );
}
