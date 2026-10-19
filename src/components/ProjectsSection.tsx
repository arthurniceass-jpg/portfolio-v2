import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';
import { projects, type Project } from '../content';

const CARD_RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

/**
 * Cada projeto é um cartão inteiro, um abaixo do outro (sem empilhar/cobrir).
 * Os prints aparecem completos (object-contain): nada é cortado, dá pra ler a tela toda.
 */
function ProjectCard({ project }: { project: Project }) {
  return (
    <FadeIn>
      <article
        className={`relative border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 ${CARD_RADIUS}`}
        style={{ background: '#0C0C0C' }}
      >
        <div className="mb-4 flex flex-wrap items-center gap-x-8 gap-y-4 sm:mb-6 md:mb-8">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span
              className="shrink-0 font-black leading-none text-[#D7E2EA]"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)', width: '1.25em' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm md:text-base">
                {project.category}
              </span>
              <h3
                className="font-medium uppercase text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {project.name}
              </h3>
              <span className="text-xs font-light tracking-wide text-[#D7E2EA]/50 sm:text-sm">
                {project.stack}
              </span>
            </div>
          </div>
          <p
            className="min-w-[240px] max-w-xl flex-1 font-light leading-relaxed text-[#D7E2EA]/70"
            style={{ fontSize: 'clamp(0.8rem, 1.2vw, 1.05rem)' }}
          >
            {project.description}
          </p>
          {project.href && (
            <LiveProjectButton href={project.href} label={projects.liveLabel} className="ml-auto" />
          )}
        </div>

        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3">
          {project.images.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              draggable={false}
              className="aspect-[16/10] w-full rounded-2xl border border-white/10 bg-white/5 object-contain sm:rounded-3xl"
            />
          ))}
        </div>
      </article>
    </FadeIn>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="relative z-10 -mt-10 rounded-t-[40px] px-5 pb-24 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pb-32 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pb-40 md:pt-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          {projects.heading}
        </h2>
      </FadeIn>

      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 md:gap-12">
        {projects.items.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
    </section>
  );
}
