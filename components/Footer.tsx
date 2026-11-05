import { Logo } from './Navbar';

/**
 * Footer — minimal, no duplicate links (the nav already links
 * everything). One line of brand, one copyright line.
 */
export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto flex max-w-shell flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <Logo />
        <p className="text-sm font-light text-black">Built slow. Spreads fast.</p>
        <p className="text-sm font-light text-black">© 2026 RedSloth. All rights reserved.</p>
      </div>
    </footer>
  );
}
