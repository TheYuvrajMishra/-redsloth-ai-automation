import SectionHeading from './SectionHeading';
import Reveal from './ui/reveal';

/**
 * Proof — what the first automation usually finds, as before → after.
 * No fake names, no fake testimonials: example outcomes only.
 * // TODO: replace with real data — every figure below is an invented
 * // placeholder until the first real client numbers land.
 */
const OUTCOMES = [
  {
    before: '20 hrs/week',
    after: '2 hrs/week',
    caption: 'Manual follow-ups, after the first automation.',
  },
  {
    before: '6 hours',
    after: '6 minutes',
    caption: 'Time for a customer to get a first reply.',
  },
  {
    before: '4 tools',
    after: '1 source',
    caption: 'Places the same customer detail had to be typed.',
  },
];

export default function Proof() {
  return (
    <section id="results" aria-label="Results" className="scroll-mt-20">
      <div className="mx-auto max-w-shell px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          kicker="Proof"
          title="What the first automation usually finds"
          lede="Example outcomes from first automations. Your audit prices the real numbers for your team — in hours, not adjectives."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {OUTCOMES.map((o, i) => (
            <Reveal key={o.caption} delay={i * 0.08}>
              <article className="rounded-md border border-black/10 bg-white p-6 shadow-card">
                <p className="font-display text-2xl font-semibold leading-[40px] text-black">
                  <span className="line-through decoration-2 opacity-40">{o.before}</span>
                  {' → '}
                  {o.after}
                </p>
                <p className="mt-4 text-base font-light text-black">{o.caption}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
