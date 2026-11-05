import AuditForm from './AuditForm';
import Reveal from './ui/reveal';
import { LoopGlyph } from './RebusGlyphs';

/**
 * Final CTA — peak-end: the most memorable section. The red accent
 * lives here and in the hero only. Second rebus headline (the page's
 * 2nd of 2): the loop glyph replaces the word "loop".
 * Serial position: the strongest section is last.
 */
export default function FinalCta() {
  return (
    <section id="audit" aria-label="Book a free automation audit" className="on-red scroll-mt-20 bg-red text-white">
      <div className="mx-auto grid max-w-shell gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <Reveal>
          <h2
            aria-label="Hand the busywork to the loop."
            className="font-display text-2xl font-semibold leading-[40px] tracking-tight text-white"
          >
            Hand the busywork
            <br />
            to the <LoopGlyph className="text-white" />
          </h2>
          <p className="mt-6 max-w-[480px] text-base font-light text-white sm:text-lg">
            Thirty minutes. A map of your most repetitive work, priced in hours. You keep the map
            either way.
          </p>
          <ul className="mt-8 space-y-4 text-base font-light text-white">
            <li className="flex gap-4">
              <span className="font-display font-semibold" aria-hidden="true">1</span>
              <span>Book a time — pick any slot that suits your team.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-display font-semibold" aria-hidden="true">2</span>
              <span>We map the repeats — the workflows, the hours, the tools.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-display font-semibold" aria-hidden="true">3</span>
              <span>You get the map — and a fixed price for the first loop.</span>
            </li>
          </ul>
        </Reveal>
        <Reveal delay={0.12}>
          <AuditForm />
        </Reveal>
      </div>
    </section>
  );
}
