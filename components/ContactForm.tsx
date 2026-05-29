"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

const services = [
  "Medical Biller",
  "Revenue Cycle Management",
  "Virtual Healthcare Staffing",
  "Not sure yet",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to backend / email service
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card flex flex-col items-start gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <h3 className="font-display text-2xl font-bold text-ink-900">
          Thanks — we&apos;ve got it.
        </h3>
        <p className="text-sm text-ink-500">
          A specialist from Infividhya will reach out within one business day.
          If it&apos;s urgent, feel free to call us at{" "}
          <a className="font-semibold text-brand-700" href="tel:+15550102024">
            +1 (555) 010-2024
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-5">
      <div>
        <h3 className="font-display text-xl font-bold text-ink-900">
          Send us a message
        </h3>
        <p className="mt-1 text-sm text-ink-500">
          Required fields are marked with *
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name *" name="name" required />
        <Field label="Practice / Company" name="company" />
        <Field label="Email *" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>

      <div>
        <label className="text-sm font-semibold text-ink-700">
          What can we help with? *
        </label>
        <div className="mt-2 flex flex-wrap gap-2">
          {services.map((s) => (
            <label
              key={s}
              className="cursor-pointer rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-ink-700 transition hover:border-brand-400 has-[:checked]:border-brand-600 has-[:checked]:bg-brand-600 has-[:checked]:text-white"
            >
              <input
                type="radio"
                name="service"
                value={s}
                className="sr-only"
                defaultChecked={s === services[0]}
              />
              {s}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-ink-700">
          Tell us about your practice *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          placeholder="Specialty, monthly claim volume, current pain points…"
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send message <Send className="h-4 w-4" />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-ink-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
      />
    </div>
  );
}
