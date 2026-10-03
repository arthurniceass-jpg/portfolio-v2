import { Fragment, useLayoutEffect, useRef, type ReactNode, type RefObject } from 'react';
import { showcase } from '../content';
import { tech } from '../data/tech';

const TILE_WIDTH = 420;
const TILE_GAP = 12; // Tailwind gap-3

const shotTiles: ReactNode[] = showcase.map(({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    decoding="async"
    draggable={false}
    className="h-[270px] w-[420px] shrink-0 rounded-2xl bg-white/5 object-cover"
  />
));

const techTiles: ReactNode[] = tech.map(({ label, icon }) => (
  <div className="flex h-[270px] w-[420px] shrink-0 flex-col items-center justify-center gap-7 rounded-2xl bg-[#D7E2EA]">
    <img src={icon} alt="" draggable={false} className="h-[104px] w-[104px] object-contain" />
    <span className="text-2xl font-semibold uppercase tracking-wider text-[#0C0C0C]">{label}</span>
  </div>
));

interface MarqueeRowProps {
  tiles: ReactNode[];
  rowRef: RefObject<HTMLDivElement>;
}

function MarqueeRow({ tiles, rowRef }: MarqueeRowProps) {
  const tripled = [0, 1, 2].flatMap((copy) =>
    tiles.map((tile, i) => <Fragment key={`${copy}-${i}`}>{tile}</Fragment>)
  );

  return (
    <div
      ref={rowRef}
      className="flex w-max gap-3"
      // Start on the middle copy so the row has tiles to spare on both sides
      // whichever direction it drifts.
      style={{ marginLeft: -tiles.length * (TILE_WIDTH + TILE_GAP), willChange: 'transform' }}
    >
      {tripled}
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      if (row1Ref.current) row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
      if (row2Ref.current) row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden pb-10 pt-24 sm:pt-32 md:pt-40"
      style={{ background: '#0C0C0C' }}
    >
      <div className="flex flex-col gap-3">
        <MarqueeRow tiles={shotTiles} rowRef={row1Ref} />
        <MarqueeRow tiles={techTiles} rowRef={row2Ref} />
      </div>
    </section>
  );
}
