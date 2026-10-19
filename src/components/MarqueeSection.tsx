import { Fragment, type ReactNode } from 'react';
import { showcase } from '../content';
import { tech } from '../data/tech';

const TILE_WIDTH = 420;
const TILE_GAP = 12; // Tailwind gap-3
const SPEED = 55; // px por segundo

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
  reverse?: boolean;
}

/**
 * Carrossel contínuo: a trilha tem 4 cópias dos cards (2 metades idênticas) e anda -50%
 * em loop, então a emenda nunca aparece. Cada cópia leva `pr-3` para que o -50% caia
 * exatamente no começo da segunda metade (sem pulo). Para ao passar o mouse.
 */
function MarqueeRow({ tiles, reverse = false }: MarqueeRowProps) {
  // largura de uma metade (2 cópias) -> duração para manter a mesma velocidade em px/s
  const halfWidth = tiles.length * 2 * (TILE_WIDTH + TILE_GAP);
  const duration = `${Math.round(halfWidth / SPEED)}s`;

  return (
    <div className="marquee">
      <div
        className={`marquee-track flex w-max ${reverse ? 'marquee-reverse' : ''}`}
        style={{ animationDuration: duration }}
      >
        {[0, 1, 2, 3].map((copy) => (
          <div key={copy} className="flex shrink-0 gap-3 pr-3" aria-hidden={copy > 0 ? true : undefined}>
            {tiles.map((tile, i) => (
              <Fragment key={`${copy}-${i}`}>{tile}</Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <section
      className="marquee-section overflow-hidden pb-10 pt-24 sm:pt-32 md:pt-40"
      style={{ background: '#0C0C0C' }}
    >
      <div className="flex flex-col gap-3">
        <MarqueeRow tiles={shotTiles} />
        <MarqueeRow tiles={techTiles} reverse />
      </div>
    </section>
  );
}
