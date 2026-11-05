'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Reveal from './ui/reveal';

/**
 * How it works — 3 steps (Miller's law). Goal-gradient: the progress
 * line above the steps fills as you scroll through them, so the
 * visitor feels the finish getting closer. Serial position: the
 * strongest steps are first and last.
 */
const STEPS = [
  {
    n: '01',
    title: 'Audit — free, 30 minutes',
    body: 'We map your most repetitive workflows and price the win in hours, not features. You keep the map even if we never work together.',
  },
  {
    n: '02',
    title: 'Build — one automation at a time',
    body: 'Wired into the tools you already use. You watch it work on real tasks before it goes live — no big-bang launch.',
  },
  {
    n: '03',
    title: 'Hand over — then we watch it',
    body: 'Your team runs it, with docs. We monitor it for 30 days and fix what breaks, free.',
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.5'] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <section id="how" aria-label="How it works" className="scroll-mt-20">
      <div className="mx-auto max-w-shell px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          kicker="How it works"
          title="Three steps. The first one is free."
          lede="No six-month roadmap, no platform to learn. One loop at a time, until the busywork is gone."
        />
        <div ref={ref} className="mt-12">
          {/* Goal-gradient progress line (decorative). */}
          <div className="h-[2px] w-full bg-black/10" aria-hidden="true">
            <motion.div
              className="h-full origin-left bg-black"
              style={reduceMotion ? { scaleX: 1 } : { scaleX: fill }}
            />
          </div>
          <p className="mt-4 text-sm font-light text-black">Step 1 of 3 — you are one audit from hours back.</p>
          <ol className="mt-8 grid gap-8 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <li key={s.n}>
                <Reveal delay={i * 0.08}>
                  <p className="font-display text-2xl font-semibold text-black">{s.n}</p>
                  <h3 className="mt-4 font-display text-lg font-medium leading-[28px] text-black">{s.title}</h3>
                  <p className="mt-2 text-base font-light text-black">{s.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
