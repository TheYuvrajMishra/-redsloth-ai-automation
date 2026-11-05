'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '@/lib/utils';

/**
 * shadcn-style accordion (Radix). Recognition over recall: answers
 * are one tap away, no typing or remembering. The open/close marker
 * is a + / − text swap — no transform anywhere, per the button rules.
 */
const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b border-black/10', className)}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex min-h-[44px] flex-1 cursor-pointer items-center justify-between gap-4 py-4 text-left font-display text-base font-medium text-black transition-[opacity,background-color] duration-200 ease hover:opacity-70 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&[data-state=closed]_.mark-minus]:hidden [&[data-state=open]_.mark-plus]:hidden',
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {/* + when closed, − when open. Text swap, not a rotation. */}
      <span aria-hidden="true" className="shrink-0 font-sans text-xl font-light leading-none">
        <span className="mark-plus">+</span>
        <span className="mark-minus">−</span>
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'overflow-hidden text-base font-light text-black transition-opacity duration-200 ease data-[state=closed]:opacity-0 data-[state=open]:opacity-100',
      className,
    )}
    {...props}
  >
    <div className="pb-4 pr-8">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = 'AccordionContent';

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
