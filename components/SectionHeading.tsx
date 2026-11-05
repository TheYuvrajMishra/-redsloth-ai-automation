import type { ReactNode } from 'react';
import Reveal from './ui/reveal';

/**
 * One idea per section: kicker (12px) + title (32px) + optional lede.
 * Same shape everywhere (Similarity + Proximity) so scanning is cheap.
 */
export default function SectionHeading({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: ReactNode;
  lede?: string;
}) {
  return (
    <Reveal>
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-black">{kicker}</p>
      <h2 className="mt-4 max-w-[640px] font-display text-2xl font-semibold leading-[40px] tracking-tight text-black">
        {title}
      </h2>
      {lede ? <p className="mt-4 max-w-[560px] text-base font-light text-black">{lede}</p> : null}
    </Reveal>
  );
}
