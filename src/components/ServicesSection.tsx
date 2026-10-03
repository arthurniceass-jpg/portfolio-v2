import FadeIn from './FadeIn';
import { services } from '../content';

const DIVIDER = '1px solid rgba(12, 12, 12, 0.15)';

export default function ServicesSection() {
  return (
    <section
      id="servicos"
      className="rounded-t-[40px] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn>
        <h2
          className="mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          {services.heading}
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl" style={{ borderTop: DIVIDER }}>
        {services.items.map(({ number, name, description }, i) => (
          <FadeIn
            key={number}
            delay={i * 0.1}
            className="flex items-start gap-5 py-8 sm:gap-8 sm:py-10 md:gap-12 md:py-12"
            style={{ borderBottom: DIVIDER }}
          >
            {/* 1.25em fits the widest of 01–05, so every description starts at the same x */}
            <span
              className="shrink-0 font-black leading-none"
              style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 10vw, 140px)', width: '1.25em' }}
            >
              {number}
            </span>
            <div className="flex flex-col gap-2 sm:gap-3">
              <h3
                className="font-medium uppercase"
                style={{ color: '#0C0C0C', fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {name}
              </h3>
              <p
                className="max-w-2xl font-light leading-relaxed"
                style={{ color: '#0C0C0C', opacity: 0.6, fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
              >
                {description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
