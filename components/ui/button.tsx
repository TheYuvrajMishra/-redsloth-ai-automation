'use client';

import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * The ONLY button on the site — every CTA uses this.
 * Style: light-sweep (.btn-sweep) + bevel-alpha (.btn-bevel).
 * Hover animates ONLY background-position / opacity / box-shadow /
 * filter. No scale, transform or translate, ever.
 * States: hover, focus-visible (global ring), active, disabled,
 * loading. Min height 44px on every size (Fitts's + tap targets).
 */
const buttonVariants = cva(
  'btn-sweep inline-flex min-h-[44px] cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded-md border font-display text-sm font-semibold leading-none no-underline transition-[background-position,opacity,box-shadow,filter,background-color,border-color] duration-[250ms] ease focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        // Primary = the single red CTA (Von Restorff: it stands out).
        primary:
          'btn-bevel-dark border-red bg-red text-white hover:bg-[#a31216] hover:shadow-[0_8px_20px_rgb(196_29_33/0.35)] active:bg-[#8a0f12] active:brightness-[0.96]',
        secondary:
          'btn-bevel border-black/15 bg-white text-black hover:border-black/40 hover:shadow-[0_8px_20px_rgb(0_0_0/0.14)] active:bg-black/[0.04] active:brightness-[0.97]',
        ghost:
          'border-transparent bg-transparent text-black hover:bg-black/[0.06] active:bg-black/[0.10]',
      },
      size: {
        md: 'px-6 py-3',
        sm: 'px-5 py-3',
        lg: 'px-8 py-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  loading?: boolean;
  children: ReactNode;
}

function Spinner() {
  return (
    <svg
      className="size-4 animate-spin motion-reduce:animate-none"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
      <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function Button({
  href,
  variant,
  size,
  loading = false,
  disabled,
  children,
  className,
  ...props
}: ButtonProps) {
  const cls = cn(buttonVariants({ variant, size }), className);
  const content = (
    <>
      {loading ? <Spinner /> : null}
      <span className={loading ? 'opacity-80' : undefined}>{children}</span>
    </>
  );
  if (href && !disabled && !loading) {
    return (
      <Link href={href} className={cls} aria-disabled={undefined}>
        {content}
      </Link>
    );
  }
  return (
    <button
      type={props.type || 'button'}
      className={cls}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {content}
    </button>
  );
}

export { buttonVariants };
