'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Button from './ui/button';
import { SlothGlyph } from './RebusGlyphs';

/**
 * Nav — Jakob's law: conventional logo-left, links-centre, CTA-right.
 * Hick's law: 4 links max + one CTA. Every tap target ≥44px.
 * Red appears only on the logo mark + the one CTA (accent cluster).
 */
const LINKS = [
  { href: '#how', label: 'How it works' },
  { href: '#automations', label: 'Automations' },
  { href: '#results', label: 'Results' },
  { href: '#faq', label: 'FAQ' },
];

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="#top" className={`flex min-h-[44px] items-center gap-2 ${className}`} aria-label="RedSloth — back to top">
      <span className="flex size-8 items-center justify-center rounded-sm bg-red text-white">
        <SlothGlyph className="h-[20px]" />
      </span>
      <span className="font-display text-xl font-semibold tracking-tight text-black">
        Red<span className="text-red">Sloth</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-shell items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main"
      >
        <Logo />
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="flex min-h-[44px] items-center text-sm font-light text-black transition-opacity duration-200 hover:opacity-60"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Button href="#audit" variant="primary" size="sm" className="hidden sm:inline-flex">
            Book a free audit
          </Button>
          <button
            type="button"
            className="flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-sm text-black transition-opacity duration-200 hover:opacity-60 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </div>
      </nav>
      {open ? (
        <div id="mobile-menu" className="border-t border-black/10 bg-white px-4 pb-4 pt-2 md:hidden">
          <ul className="flex flex-col">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[44px] items-center text-base font-light text-black"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button href="#audit" variant="primary" size="md" className="w-full">
                Book a free audit
              </Button>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
