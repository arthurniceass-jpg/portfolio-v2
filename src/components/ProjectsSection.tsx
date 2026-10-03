import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';
import { projects, type Project } from '../content';

const IMAGE_RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function ProjectCard({ project, index, total, progress }: ProjectCardProps) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const [topLeft, bottomLeft, right] = project.images;

  return (
    <div className="sticky top-24 h-[85vh] md:top-32">
      <motion.article
        className={`relative border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 ${IMAGE_RADIUS}`}
        style={{ background: '#0C0C0C', scale, top: index * 28, transformOrigin: 'top' }}
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

        <div className="grid grid-cols-[40fr_60fr] gap-3 sm:gap-4">
          <div className="flex flex-col gap-3 sm:gap-4">
            <img
              src={topLeft.src}
              alt={topLeft.alt}
              loading="lazy"
              draggable={false}
              className={`w-full bg-white/5 object-cover ${IMAGE_RADIUS}`}
              style={{ height: 'clamp(130px, 16vw, 230px)', objectPosition: topLeft.position }}
            />
            <img
              src={bottomLeft.src}
              alt={bottomLeft.alt}
              loading="lazy"
              draggable={false}
              className={`w-full bg-white/5 object-cover ${IMAGE_RADIUS}`}
              style={{ height: 'clamp(160px, 22vw, 340px)', objectPosition: bottomLeft.position }}
            />
          </div>
          {/* Absolutely positioned so the tall image fills the row set by the left column
              instead of stretching it to the picture's own aspect ratio. */}
          <div className="relative">
            <img
              src={right.src}
              alt={right.alt}
              loading="lazy"
              draggable={false}
              className={`absolute inset-0 h-full w-full bg-white/5 object-cover ${IMAGE_RADIUS}`}
              style={{ objectPosition: right.position }}
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function ProjectsSection() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

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

      <div ref={container} className="mx-auto max-w-[1440px]">
        {projects.items.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            total={projects.items.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
