import SectionHeading from './SectionHeading';
import Reveal from './ui/reveal';

/**
 * Problem / outcome strip — 3 items max (Miller's law).
 * No red here: the accent is saved for the hero CTA + final CTA.
 */
const PROBLEMS = [
  {
    title: 'Follow-ups eat the week',
    body: 'Reps chase replies, nudge invoices and update sheets by hand — hours that never show up as work.',
  },
  {
    title: 'The same detail, typed four times',
    body: 'One customer update copied into the CRM, the sheet, the invoice tool and Slack. Four chances to get it wrong.',
  },
  {
    title: 'Customers wait on humans',
    body: 'A simple question sits in the inbox for hours when a workflow could have answered it in seconds.',
  },
];

export default function ProblemStrip() {
  return (
    <section aria-label="The problem" className="border-y border-black/10 bg-white">
      <div className="mx-auto max-w-shell px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          kicker="The problem"
          title="The work that eats the week"
          lede="None of it is hard. All of it repeats. That is exactly what an automation is for."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <p className="font-display text-sm font-medium text-black">0{i + 1}</p>
              <h3 className="mt-4 font-display text-lg font-medium leading-[28px] text-black">{p.title}</h3>
              <p className="mt-2 text-base font-light text-black">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
