import './globals.css';
import type { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import SmoothScroll from '../components/SmoothScroll';

export const metadata = {
  title: 'RedSloth — Slow on busywork, fast on results',
  description:
    'RedSloth builds custom AI automations — workflows, agents and integrations — that remove repetitive operational work. Book a free automation audit.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300&family=Poppins:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* forcedTheme="light": the brief locks a light theme, no toggle. */}
      <body className="bg-white font-sans text-base font-light text-black antialiased">
        <ThemeProvider attribute="class" forcedTheme="light" enableSystem={false}>
          <SmoothScroll />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
