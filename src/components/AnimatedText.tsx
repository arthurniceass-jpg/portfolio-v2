import { Fragment, useRef, type CSSProperties } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface CharProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function Char({ char, index, total, progress }: CharProps) {
  const opacity = useTransform(progress, [index / total, (index + 1) / total], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const total = text.replace(/ /g, '').length;
  let start = 0;

  return (
    <p ref={ref} className={className} style={style}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, wordIndex) => {
          const wordStart = start;
          start += word.length;

          return (
            <Fragment key={wordIndex}>
              <span className="inline-block whitespace-nowrap">
                {word.split('').map((char, charIndex) => (
                  <Char
                    key={charIndex}
                    char={char}
                    index={wordStart + charIndex}
                    total={total}
                    progress={scrollYProgress}
                  />
                ))}
              </span>
              {wordIndex < words.length - 1 && ' '}
            </Fragment>
          );
        })}
      </span>
    </p>
  );
}
