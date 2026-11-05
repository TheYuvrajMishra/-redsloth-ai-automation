import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProblemStrip from '../components/ProblemStrip';
import HowItWorks from '../components/HowItWorks';
import Automations from '../components/Automations';
import Proof from '../components/Proof';
import Faq from '../components/Faq';
import FinalCta from '../components/FinalCta';
import Footer from '../components/Footer';

/**
 * Page order follows Serial Position: strongest at start (hero) and
 * end (final CTA). One idea per section, red accent in hero + final
 * CTA only.
 */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemStrip />
      <HowItWorks />
      <Automations />
      <Proof />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
