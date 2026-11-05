'use client';

import { useState } from 'react';
import SectionHeading from './SectionHeading';
import Reveal from './ui/reveal';

/**
 * Automations we build — progressive disclosure: 6 cards, each one
 * expands on demand (recognition over recall: the detail is a tap
 * away, the card stays scannable). No red here.
 */
const AUTOMATIONS = [
  {
    title: 'Lead follow-up',
    summary: 'Every new lead gets a personal reply and a nudge sequence.',
    detail: 'Connects your CRM, email and WhatsApp. You stop chasing cold leads and copy-pasting the same reply.',
  },
  {
    title: 'Inbox triage',
    summary: 'Incoming mail sorted, drafted and routed in seconds.',
    detail: 'Works with Gmail and Outlook. You stop clearing the inbox every morning and forwarding mail to the right person.',
  },
  {
    title: 'Data entry & sync',
    summary: 'One entry updates every tool.',
    detail: 'Syncs your CRM, sheets and invoicing. You stop re-typing the same customer detail four times.',
  },
  {
    title: 'Reporting',
    summary: 'Your Monday report writes itself on Sunday night.',
    detail: 'Pulls the numbers from your tools into one doc. You stop hunting for figures at the end of the week.',
  },
  {
    title: 'Scheduling & reminders',
    summary: 'Bookings, reminders and reschedules without the back-and-forth.',
    detail: 'Wired to your calendar, email and SMS. You stop sending “just checking in” messages.',
  },
  {
    title: 'Support replies',
    summary: 'Common questions answered instantly, hard ones routed to a human.',
    detail: 'Built on your helpdesk and knowledge base. You stop answering the same five questions every day.',
  },
];

function AutomationCard({ a, index }: { a: (typeof AUTOMATIONS)[number]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={(index % 3) * 0.08} className="h-full">
      <article className="flex h-full flex-col rounded-md border border-black/10 bg-white p-6 shadow-card">
        <h3 className="font-display text-lg font-medium leading-[28px] text-black">{a.title}</h3>
        <p className="mt-2 flex-1 text-base font-light text-black">{a.summary}</p>
        {open ? <p className="mt-4 border-t border-black/10 pt-4 text-base font-light text-black">{a.detail}</p> : null}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-4 flex min-h-[44px] cursor-pointer items-center gap-2 self-start text-sm font-medium text-black transition-opacity duration-200 hover:opacity-60 focus-visible:outline-none disabled:cursor-not-allowed"
        >
          <span aria-hidden="true">{open ? '−' : '+'}</span>
          {open ? 'Show less' : 'See what it does'}
        </button>
      </article>
    </Reveal>
  );
}

export default function Automations() {
  return (
    <section id="automations" aria-label="Automations we build" className="scroll-mt-20 border-y border-black/10 bg-white">
      <div className="mx-auto max-w-shell px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          kicker="Automations we build"
          title="Start with the loop that hurts most"
          lede="Six starting points. Your audit picks the one that pays back fastest — then we build that one first."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {AUTOMATIONS.map((a, i) => (
            <AutomationCard key={a.title} a={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
