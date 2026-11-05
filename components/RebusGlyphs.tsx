/**
 * Rebus glyphs — small inline SVGs that replace or punctuate words
 * inside headlines. Sized in em (class `rebus-glyph` in globals.css)
 * so they track the text's x-height and sit on the baseline.
 * Decorative: the headline carries an aria-label with the plain words.
 */

export function SlothGlyph({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`rebus-glyph ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {/* ears */}
      <circle cx="5.5" cy="6.5" r="2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18.5" cy="6.5" r="2" stroke="currentColor" strokeWidth="1.8" />
      {/* face */}
      <ellipse cx="12" cy="13" rx="8.5" ry="7.5" stroke="currentColor" strokeWidth="1.8" />
      {/* eye patches */}
      <ellipse cx="8.5" cy="12" rx="2.4" ry="3" fill="currentColor" opacity="0.9" />
      <ellipse cx="15.5" cy="12" rx="2.4" ry="3" fill="currentColor" opacity="0.9" />
      {/* eyes — white dots so they read on the dark patch */}
      <circle cx="8.5" cy="12" r="0.9" fill="#fff" />
      <circle cx="15.5" cy="12" r="0.9" fill="#fff" />
      {/* nose + sleepy smile */}
      <ellipse cx="12" cy="15.6" rx="1.4" ry="1" fill="currentColor" />
      <path d="M9.5 17.5 Q12 19 14.5 17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function LoopGlyph({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`rebus-glyph ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {/* circular arrow — the automation loop, in one glyph */}
      <path
        d="M20 12a8 8 0 1 1-2.3-5.6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M18.5 2.5v4h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
