import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';
import { about, hero } from '../content';

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative flex min-h-screen items-center justify-center px-5 py-20 sm:px-8 md:px-10"
    >
      {about.decorations.map(({ src, className, delay, x }) => (
        <FadeIn
          key={src}
          delay={delay}
          x={x}
          y={0}
          duration={0.9}
          className={`pointer-events-none absolute ${className}`}
        >
          <img src={src} alt="" draggable={false} className="block h-auto w-full select-none" />
        </FadeIn>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn y={40}>
            <h2
              className="hero-heading text-center font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              {about.heading}
            </h2>
          </FadeIn>
          <AnimatedText
            text={about.text}
            className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>
        <ContactButton label={hero.cta.label} href={hero.cta.href} />
      </div>
    </section>
  );
}
