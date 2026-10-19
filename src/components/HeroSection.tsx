import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';
import { hero, nav } from '../content';

export default function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col" style={{ overflowX: 'clip' }}>
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between px-6 pt-6 md:px-10 md:pt-8">
          {nav.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
            >
              {label}
            </a>
          ))}
        </nav>
      </FadeIn>

      <FadeIn delay={0.15} y={40}>
        <div className="overflow-hidden">
          {/* 11vw fills ~91% of the width for this greeting (measured: 8.27em of text).
              The glyphs sit ~0.2em below the box top, so 1rem - 0.2em keeps a constant gap to the nav
              (a fixed -mt-5 only suits a 250px font). */}
          <h1 className="hero-heading mt-6 w-full whitespace-nowrap text-center text-[19vw] font-black uppercase leading-none tracking-tight sm:mt-[calc(1rem-0.2em)] sm:text-[11vw]">
            {hero.greeting[0]}
            <br className="sm:hidden" /> {hero.greeting[1]}
          </h1>
        </div>
      </FadeIn>

      {/* z-20 keeps the copy and the button above the portrait on narrow screens */}
      <div className="relative z-20 mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            {hero.tagline}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton label={hero.cta.label} href={hero.cta.href} />
        </FadeIn>
      </div>

      {/* Centering lives on this plain wrapper: FadeIn and Magnet both write an inline
          transform, which would otherwise override the -translate-x-1/2 class.
          A foto fica centrada (horizontal e vertical) no espaço abaixo do título, inteira;
          a largura também respeita a altura da tela (vh) para nunca invadir o título. */}
      <div className="absolute left-1/2 top-[57%] z-10 w-[min(260px,36vh)] -translate-x-1/2 -translate-y-1/2 sm:w-[min(360px,44vh)] md:w-[min(440px,50vh)] lg:w-[min(520px,52vh)]">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            magnetStrength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            wrapperClassName="relative block w-full"
          >
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 sm:rounded-[60px]">
              <picture>
                <source srcSet={hero.photo.webp} type="image/webp" />
                <img
                  src={hero.photo.jpg}
                  alt={hero.photo.alt}
                  draggable={false}
                  className="block aspect-square h-auto w-full select-none object-cover"
                />
              </picture>
            </div>
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
