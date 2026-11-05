/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Strict palette: white (bg), black (text), ONE red accent.
        // Black/white alpha variants only for borders, shadows, bevels.
        red: '#C41D21', // brand red, sampled from the RedSloth logo
        black: '#000000',
        white: '#FFFFFF',
      },
      fontFamily: {
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      // Type scale — the ONLY sizes on the page (px).
      // 12 / 14 / 16 / 20 / 24 / 32 / 48 / 72
      fontSize: {
        xs: ['12px', { lineHeight: '16px' }],
        sm: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '28px' }],
        lg: ['20px', { lineHeight: '28px' }],
        xl: ['24px', { lineHeight: '32px' }],
        '2xl': ['32px', { lineHeight: '40px' }],
        '3xl': ['48px', { lineHeight: '56px' }],
        '4xl': ['72px', { lineHeight: '76px' }],
      },
      // Weight scale — Poppins carries headings, Inter stays thin (200–300).
      fontWeight: {
        thin: '200',
        light: '300',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      // Radius scale — the ONLY radii on the page.
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
      },
      // ONE shadow token set. Everything that lifts uses this.
      boxShadow: {
        card: '0 1px 2px rgb(0 0 0 / 0.06), 0 8px 24px rgb(0 0 0 / 0.08)',
      },
      // Spacing is Tailwind's default 4px-based scale — no ad-hoc values.
      maxWidth: {
        shell: '1120px',
      },
    },
  },
  plugins: [],
};
