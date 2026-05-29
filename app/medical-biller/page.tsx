import Image from "next/image";
import {
  FileCheck2,
  Send,
  Search,
  BarChart3,
  AlarmClock,
  ShieldCheck,
  CheckCircle2,
  ReceiptText,
  ListChecks,
  RefreshCw,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { Section } from "@/components/Section";
import FeatureGrid from "@/components/FeatureGrid";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Medical Biller — Infividhya",
  description:
    "End-to-end medical billing services — charge entry, claims submission, AR follow-up, and denial management.",
};

export default function MedicalBillerPage() {
  return (
    <>
      <PageHero
        eyebrow="Medical Billing"
        title={
          <>
            Medical billing that{" "}
            <span className="text-brand-600">pays on the first pass.</span>
          </>
        }
        subtitle="Infividhya's remote medical billers plug into your existing team to manage the entire billing process — from the moment a patient visit is documented to the moment payment lands in your account."
        image="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1400&q=80"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <span className="eyebrow">Service overview</span>
            <h2 className="h-section mt-4">
              End-to-end claims management — without the headcount.
            </h2>
            <p className="mt-5 text-ink-500">
              Our billers handle charge entry, payer-specific claim formatting,
              electronic submission, and real-time tracking. Every claim is
              monitored, every denial is worked, and every dollar is accounted
              for — so you can stay focused on patients.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink-700">
              {[
                "98%+ first-pass clean claim rate",
                "Medicare, Medicaid & all major commercial payers",
                "Same-day or next-day claim submission",
                "Real-time claim status monitoring & alerts",
                "Multi-specialty billing support",
                "Works with all major EHR / Practice Management systems",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-brand-50 blur-xl" />
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1100&q=80"
              alt="Medical billing dashboard"
              width={1100}
              height={800}
              className="rounded-3xl border border-white object-cover shadow-card"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow">What you get</span>
          <h2 className="h-section mt-4">
            A fully-managed billing operation.
          </h2>
        </div>
        <FeatureGrid
          items={[
            { icon: ReceiptText, title: "Charge entry & coding review", body: "Accurate charge capture and a pre-submission audit on every encounter." },
            { icon: Send, title: "Electronic claims submission", body: "Payer-specific formatting and submission via clearinghouses or direct portals." },
            { icon: Search, title: "Claim scrubbing", body: "Multi-layer scrubbing to catch coding gaps, modifier issues, and payer rule mismatches before submission." },
            { icon: AlarmClock, title: "Real-time tracking", body: "Proactive alerts on rejections and pended claims — not weekly surprises." },
            { icon: RefreshCw, title: "Denial work & appeals", body: "Root-cause analysis, payer-deadline appeals, and trend reporting to stop repeat denials." },
            { icon: BarChart3, title: "Transparent dashboards", body: "Collections, AR aging, denial categories, and provider productivity in one place." },
          ]}
        />
      </Section>

      <Section>
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow">Our process</span>
          <h2 className="h-section mt-4">
            How a typical claim moves through Infividhya.
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "01", icon: FileCheck2, t: "Capture", b: "Charges are captured from your EHR or superbill within 24 hours of the encounter." },
            { n: "02", icon: ListChecks, t: "Scrub", b: "Codes, modifiers, and payer rules are validated by our scrubbing engine and reviewer." },
            { n: "03", icon: Send, t: "Submit", b: "Clean claims are submitted electronically the same or next business day." },
            { n: "04", icon: BarChart3, t: "Reconcile", b: "Payments are posted, denials are worked, and exceptions hit a dashboard, not your inbox." },
          ].map(({ n, icon: Icon, t, b }) => (
            <div key={n} className="card">
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-display text-2xl font-extrabold text-brand-100">
                  {n}
                </span>
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-ink-900">
                {t}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-500">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-accent-500/10 blur-xl" />
            <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1100&q=80"
              alt="Compliance"
              width={1100}
              height={800}
              className="rounded-3xl border border-white object-cover shadow-card"
            />
          </div>
          <div>
            <span className="eyebrow">Compliance & quality</span>
            <h2 className="h-section mt-4">
              Compliant by default. Audit-ready always.
            </h2>
            <p className="mt-5 text-ink-500">
              Every Infividhya biller works inside HIPAA-aligned environments
              with controlled access, encrypted data handling, and continuous
              quality auditing. Our internal QA team samples claims weekly to
              ensure error rates stay well below industry benchmarks.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink-700">
              {[
                "HIPAA-aligned workflows & infrastructure",
                "CPC / CCS / CRC certified coders on staff",
                "Weekly internal QA & monthly audits",
                "Documented SOPs for every payer",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CTA
        title="Ready to clean up your billing?"
        body="See a sample audit of your last 30 days of claims — on us."
        primary={{ href: "/contact", label: "Request a free audit" }}
        secondary={{ href: "/revenue-cycle-management", label: "Explore RCM" }}
      />
    </>
  );
}
