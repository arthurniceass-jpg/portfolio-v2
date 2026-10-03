import FadeIn from './FadeIn';
import { experience } from '../content';

const DIVIDER = '1px solid rgba(12, 12, 12, 0.15)';

export default function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="relative z-20 -mt-10 rounded-t-[40px] px-5 pb-20 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pb-24 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pb-32 md:pt-32"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn>
        <h2
          className="mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          {experience.heading}
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl" style={{ borderTop: DIVIDER }}>
        {experience.items.map(({ role, org, place, period, description }, i) => (
          <FadeIn
            key={role}
            delay={i * 0.1}
            className="grid gap-5 py-8 sm:py-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-12 md:py-12"
            style={{ borderBottom: DIVIDER, color: '#0C0C0C' }}
          >
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold uppercase tracking-wider opacity-60 sm:text-base">{period}</p>
              <p className="font-medium" style={{ fontSize: 'clamp(1.05rem, 1.9vw, 1.6rem)' }}>
                {org}
              </p>
              <p className="font-light opacity-60" style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)' }}>
                {place}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <h3
                className="font-black uppercase leading-none tracking-tight"
                style={{ fontSize: 'clamp(1.6rem, 3.6vw, 3.2rem)' }}
              >
                {role}
              </h3>
              <p
                className="max-w-2xl font-light leading-relaxed opacity-60"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
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
