import Image from "next/image";
import {
  UserCheck,
  ClipboardList,
  Send,
  Wallet,
  RotateCcw,
  TrendingUp,
  CheckCircle2,
  ShieldCheck,
  HeartPulse,
  LineChart,
  CalendarRange,
  Banknote,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { Section } from "@/components/Section";
import FeatureGrid from "@/components/FeatureGrid";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Revenue Cycle Management — Infividhya",
  description:
    "Full-cycle RCM — eligibility verification, coding, claims, denial management, AR recovery, and reporting.",
};

export default function RCMPage() {
  return (
    <>
      <PageHero
        eyebrow="Revenue Cycle Management"
        title={
          <>
            End-to-end RCM that drives{" "}
            <span className="text-brand-600">measurable financial improvement.</span>
          </>
        }
        subtitle="A fully managed approach to your practice's financial health — from patient registration and eligibility checks through final payment reconciliation. Adaptable to any specialty, scalable to any size."
        image="https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=1400&q=80"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <span className="eyebrow">Why outsource RCM</span>
            <h2 className="h-section mt-4">
              Stop the leaks. Accelerate the cash.
            </h2>
            <p className="mt-5 text-ink-500">
              Most practices lose 5–10% of potential revenue to denials,
              underpayments, and aging AR. Infividhya&apos;s RCM team identifies
              every leakage point in your revenue flow, plugs them
              systematically, and delivers consistent cash flow improvements
              month after month — backed by transparent reporting you can act on.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink-700">
              {[
                "Dedicated RCM analyst & billing pod per account",
                "Eligibility checks before every appointment",
                "Denial root-cause analysis & proactive appeals",
                "AR cleanup projects & ongoing aging management",
                "Live KPI dashboards with monthly business reviews",
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
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1100&q=80"
              alt="RCM analytics"
              width={1100}
              height={800}
              className="rounded-3xl border border-white object-cover shadow-card"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow">The RCM lifecycle</span>
          <h2 className="h-section mt-4">
            Seven steps. One accountable team.
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: UserCheck, t: "Pre-registration", b: "Patient demographics captured and verified before the visit." },
            { icon: ShieldCheck, t: "Eligibility & benefits", b: "Real-time coverage, co-pay, deductible and network status checks." },
            { icon: ClipboardList, t: "Charge capture & coding", b: "Certified coders translate documentation into compliant codes." },
            { icon: Send, t: "Claim submission", b: "Scrubbed, payer-formatted claims submitted electronically." },
            { icon: Wallet, t: "Payment posting", b: "ERAs matched to claims with adjustments and patient responsibility recorded accurately." },
            { icon: RotateCcw, t: "Denial management", b: "Root-cause analysis, payer-deadline appeals, and recurring-issue prevention." },
            { icon: TrendingUp, t: "AR follow-up", b: "Segmented 30/60/90/120+ buckets worked methodically with escalation paths." },
            { icon: LineChart, t: "Reporting & review", b: "Live dashboards, monthly KPI reviews, and quarterly strategy resets." },
          ].map(({ icon: Icon, t, b }, i) => (
            <div key={t} className="card relative">
              <span className="absolute -top-3 left-5 grid h-7 w-7 place-items-center rounded-full bg-brand-600 font-display text-xs font-bold text-white shadow-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-ink-900">
                {t}
              </h3>
              <p className="mt-1 text-sm leading-6 text-ink-500">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow">Outcomes you can expect</span>
          <h2 className="h-section mt-4">
            Numbers that move when Infividhya runs your cycle.
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "+25–30%", l: "Collections within 90 days" },
            { n: "<5%", l: "Denial rate target" },
            { n: "<25", l: "Days in AR (typical)" },
            { n: "98%+", l: "Clean claim rate" },
          ].map(({ n, l }) => (
            <div key={l} className="card text-center">
              <div className="font-display text-3xl font-extrabold text-brand-700">
                {n}
              </div>
              <div className="mt-2 text-sm font-medium text-ink-500">{l}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow">What&apos;s included</span>
          <h2 className="h-section mt-4">
            Every lever, under one accountable partner.
          </h2>
        </div>
        <FeatureGrid
          items={[
            { icon: HeartPulse, title: "Eligibility & benefits", body: "Real-time checks via clearinghouse and direct payer portals — batch or per-appointment." },
            { icon: CalendarRange, title: "Prior authorization", body: "Proactive PA identification, submission, follow-up and peer-to-peer coordination." },
            { icon: Banknote, title: "Payment posting & reconciliation", body: "Automated ERA matching with human oversight on every exception." },
            { icon: RotateCcw, title: "Denial management & appeals", body: "Prioritized work queues, payer-deadline tracking, and recurring-trend remediation." },
            { icon: TrendingUp, title: "AR recovery", body: "Insurance and patient AR worked with separate, tailored playbooks." },
            { icon: LineChart, title: "Reporting & analytics", body: "Provider, payer, and location-level dashboards with monthly executive reviews." },
          ]}
        />
      </Section>

      <CTA
        title="Find out what's leaking — for free."
        body="Send us a sample AR report. Within 5 business days we'll show you exactly where the money is sitting and how fast we can recover it."
        primary={{ href: "/contact", label: "Get a free RCM assessment" }}
        secondary={{ href: "/medical-biller", label: "See Medical Biller" }}
      />
    </>
  );
}
