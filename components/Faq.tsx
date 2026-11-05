import SectionHeading from './SectionHeading';
import Reveal from './ui/reveal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

/**
 * FAQ — accordion, recognition over recall: the questions people
 * actually ask, answered in one tap. No red here.
 */
const FAQS = [
  {
    q: 'How long does the first automation take?',
    a: 'Most first automations go live in 2–3 weeks, including the audit. Small ones ship in days.',
  },
  {
    q: 'What tools do you work with?',
    a: 'Whatever you already use — CRMs, sheets, email, Slack, WhatsApp, invoicing tools. If it has an API or an inbox, we can usually wire it in. If a tool cannot be automated cleanly, the audit says so.',
  },
  {
    q: 'Who owns the automation?',
    a: 'You do. It runs in your accounts, on your tools. We hand over documentation and a 30-day fix window.',
  },
  {
    q: 'What does the free audit include?',
    a: 'A 30-minute call, a map of your most repetitive workflows, and the hours each one costs. You keep the map either way.',
  },
  {
    q: 'What if it breaks?',
    a: 'Every build includes 30 days of monitoring and fixes. After that, a small monthly check-in keeps it healthy — or your team runs it with the docs.',
  },
];

export default function Faq() {
  return (
    <section id="faq" aria-label="Frequently asked questions" className="scroll-mt-20 border-t border-black/10 bg-white">
      <div className="mx-auto max-w-shell px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          kicker="FAQ"
          title="Asked before every audit"
          lede="Something else? Ask it in the audit form below — a human reads every one."
        />
        <Reveal className="mt-12 max-w-[720px]">
          <Accordion type="single" collapsible defaultValue="item-0">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
