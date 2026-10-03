import type { CSSProperties, ElementType, ReactNode } from 'react';
import { motion } from 'framer-motion';

type MotionTag = typeof motion.div;

// motion.create() returns a brand-new component type on every call, so keep one
// per tag instead of calling it during render (that would remount the subtree).
const motionTags = new Map<ElementType, MotionTag>();

function getMotionTag(tag: ElementType): MotionTag {
  let component = motionTags.get(tag);
  if (!component) {
    component = motion.create(tag as 'div');
    motionTags.set(tag, component);
  }
  return component;
}

interface FadeInProps {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
}

export default function FadeIn({
  children,
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
}: FadeInProps) {
  const Component = getMotionTag(as);

  return (
    <Component
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </Component>
  );
}
