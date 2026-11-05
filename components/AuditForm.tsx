'use client';

import { useState, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Button from './ui/button';

/**
 * Audit form — Tesler's law (the system absorbs complexity: 2 required
 * fields, 1 optional) + Postel's law (forgiving input: trims, accepts
 * any reasonable text) + feedback loops (loading, inline errors,
 * success state). No backend yet: submit is simulated.
 * // TODO: wire to a real booking endpoint (Cal.com / form backend).
 */
export default function AuditForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [task, setTask] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle');
  const [submitted, setSubmitted] = useState({ name: '', email: '' });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next: typeof errors = {};
    if (!name.trim()) next.name = 'Tell us your name — first name is fine.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = 'That email doesn’t look right — check for a typo.';
    }
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setStatus('loading');
    // TODO: replace with a real POST to the booking endpoint.
    window.setTimeout(() => {
      setSubmitted({ name: name.trim(), email: email.trim().toLowerCase() });
      setStatus('done');
    }, 900);
  }

  if (status === 'done') {
    return (
      <div role="status" className="rounded-lg bg-white p-6 shadow-card sm:p-8">
        <CheckCircle2 className="size-8 text-black" aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl font-semibold text-black">You’re in the queue.</h3>
        <p className="mt-2 text-base font-light text-black">
          Thanks, {submitted.name} — we’ll reply to {submitted.email} within 1 business day with 3
          times for your audit.
        </p>
        <p className="mt-4 text-sm font-light text-black">
          Meanwhile, jot down the one task your team repeats most. That is usually where the audit
          starts.
        </p>
      </div>
    );
  }

  const inputCls =
    'mt-2 min-h-[44px] w-full rounded-sm border border-black/20 bg-white px-4 py-3 text-base font-light text-black placeholder:text-black/40 focus:border-black focus:outline-none disabled:cursor-not-allowed disabled:opacity-50';

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-lg bg-white p-6 shadow-card sm:p-8" aria-label="Book a free automation audit">
      <h3 className="font-display text-xl font-semibold text-black">Book your free audit</h3>
      <p className="mt-2 text-sm font-light text-black">30 minutes. No prep needed.</p>
      <div className="mt-6">
        <label htmlFor="audit-name" className="text-sm font-medium text-black">
          Your name
        </label>
        <input
          id="audit-name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'audit-name-error' : undefined}
          placeholder="e.g. Yuvraj"
          className={inputCls}
        />
        {errors.name ? (
          <p id="audit-name-error" role="alert" className="mt-2 text-sm font-light text-black">
            {errors.name}
          </p>
        ) : null}
      </div>
      <div className="mt-4">
        <label htmlFor="audit-email" className="text-sm font-medium text-black">
          Work email
        </label>
        <input
          id="audit-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'audit-email-error' : undefined}
          placeholder="you@company.com"
          className={inputCls}
        />
        {errors.email ? (
          <p id="audit-email-error" role="alert" className="mt-2 text-sm font-light text-black">
            {errors.email}
          </p>
        ) : null}
      </div>
      <div className="mt-4">
        <label htmlFor="audit-task" className="text-sm font-medium text-black">
          What eats your team’s time? <span className="font-light">(optional)</span>
        </label>
        <textarea
          id="audit-task"
          rows={3}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="e.g. Chasing invoice follow-ups every Friday"
          className={`${inputCls} min-h-[88px] resize-y py-3`}
        />
      </div>
      <Button type="submit" variant="primary" size="lg" loading={status === 'loading'} className="mt-6 w-full">
        {status === 'loading' ? 'Booking…' : 'Book my free audit'}
      </Button>
      <p className="mt-4 text-sm font-light text-black">
        No spam, no retainer pitch. If the audit finds nothing worth automating, we’ll tell you.
      </p>
    </form>
  );
}
