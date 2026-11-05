'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { Check } from 'lucide-react';
import Button from './ui/button';
import Reveal from './ui/reveal';
import { LoopGlyph, SlothGlyph } from './RebusGlyphs';

/**
 * Hero (~60% of the page's effort). One idea: the sloth does less,
 * your automations do more.
 * Rebus headline (the page's 1st of 2 rebus headlines): the sloth
 * glyph replaces the "o" in "Slow", the loop glyph punctuates
 * "results". Glyphs are aria-hidden; the h1 carries the plain words.
 * Visual: a minimal automation loop (request → agent → tools → done),
 * not a dashboard screenshot. The red dot travels the loop via SMIL
 * so it scales with the viewBox at any width; paused under
 * prefers-reduced-motion. Left-aligned, not a centred hero stack.
 */
const LOOP_PATH =
  'M160 28 C 250 28 292 66 292 120 C 292 174 250 212 160 212 C 70 212 28 174 28 120 C 28 66 70 28 160 28 Z';

const PROOF = ['Free 30-minute audit', 'No retainer to start', 'You own everything we build'];

export default function Hero() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // SMIL has no CSS off-switch: pause it in JS when reduced motion.
    if (reduceMotion) {
      svgRef.current?.pauseAnimations();
      return;
    }
    // One-time rebus glyph micro-animation (anime.js): a small sleepy
    // wobble on the two glyphs, then they rest. Content is visible
    // before and without this — it only adds motion.
    const anim = anime({
      targets: '.hero-rebus',
      rotate: [0, -8, 6, 0],
      translateY: [0, -3, 0],
      duration: 900,
      delay: anime.stagger(180, { start: 400 }),
      easing: 'easeInOutQuad',
    });
    return () => {
      anim.pause();
    };
  }, []);

  return (
    <section id="top" className="mx-auto max-w-shell px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-black">
              AI automations for busy teams
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1
              aria-label="Slow on busywork, fast on results."
              className="mt-4 font-display text-2xl font-semibold leading-[40px] tracking-tight text-black sm:text-3xl sm:leading-[56px] lg:text-4xl lg:leading-[76px]"
            >
              Sl
              <SlothGlyph className="hero-rebus text-red" />
              w on busywork,
              <br />
              fast on results
              <LoopGlyph className="hero-rebus ml-2 text-red" />
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-[560px] text-base font-light text-black sm:text-lg">
              RedSloth builds custom AI automations — workflows, agents and integrations — that take
              repetitive ops off your team, so the hours come back to the work that matters.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="#audit" variant="primary" size="lg">
                Book a free automation audit
              </Button>
              <Button href="#how" variant="secondary" size="lg">
                See how it works
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2" aria-label="What the audit includes">
              {PROOF.map((item) => (
                <li key={item} className="flex min-h-[24px] items-center gap-2 text-sm font-light text-black">
                  <Check className="size-4 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="lg:col-span-5">
          <figure className="rounded-lg border border-black/10 bg-white p-4 shadow-card sm:p-6">
            <figcaption className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-black">
                One automation, running
              </span>
              <span className="rounded-sm border border-black/10 px-2 py-1 text-xs font-light text-black">
                All day
              </span>
            </figcaption>
            <div className="relative mt-4">
              <svg
                ref={svgRef}
                viewBox="0 0 320 240"
                className="h-auto w-full"
                role="img"
                aria-label="Automation loop: a request comes in, the agent handles it, your tools update, done."
              >
                <path d={LOOP_PATH} fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" />
                {/* Travelling dot — SMIL, scales with the viewBox. */}
                <circle r="6" fill="#C41D21">
                  <animateMotion dur="6s" repeatCount="indefinite" path={LOOP_PATH} />
                </circle>
                {/* Nodes sit on the loop, outside the track. */}
                <g fontFamily="Inter, system-ui, sans-serif" fontSize="13" fill="#000">
                  <rect x="118" y="4" width="84" height="28" rx="8" fill="#fff" stroke="rgba(0,0,0,0.15)" />
                  <text x="160" y="23" textAnchor="middle">Request in</text>
                  <rect x="238" y="106" width="76" height="28" rx="8" fill="#fff" stroke="rgba(0,0,0,0.15)" />
                  <text x="276" y="125" textAnchor="middle">Agent acts</text>
                  <rect x="112" y="208" width="96" height="28" rx="8" fill="#fff" stroke="rgba(0,0,0,0.15)" />
                  <text x="160" y="227" textAnchor="middle">Tools update</text>
                  <rect x="6" y="106" width="60" height="28" rx="8" fill="#fff" stroke="rgba(0,0,0,0.15)" />
                  <text x="36" y="125" textAnchor="middle">Done</text>
                </g>
              </svg>
              {/* The sloth naps in the middle of the loop. */}
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                <SlothGlyph className="h-[48px] text-black" />
                <span className="mt-2 text-xs font-light text-black">the sloth naps</span>
              </div>
            </div>
            <p className="mt-4 text-sm font-light text-black">
              A request comes in. The agent handles it. Your tools update. Done — while the sloth
              naps.
            </p>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
