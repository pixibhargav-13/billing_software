import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  Sparkles,
  HeartPulse,
  ShieldCheck,
  Workflow,
  Users,
  Stethoscope,
  LineChart,
  ReceiptText,
} from "lucide-react";
import { Section } from "@/components/Section";
import FeatureGrid from "@/components/FeatureGrid";
import CTA from "@/components/CTA";

const heroImg =
  "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1400&q=80";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="dot-bg absolute inset-0 opacity-60" />
        <div className="container-x relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:py-24">
          <div>
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" /> Built for modern practices
            </span>
            <h1 className="h-display mt-5">
              Smarter medical billing.{" "}
              <span className="text-brand-600">Stronger</span> revenue.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-7 text-ink-500">
              Infividhya is a remote-first partner for medical billing, revenue
              cycle management, and virtual healthcare staffing. We plug into
              your team, plug the leaks, and help your practice grow without
              adding overhead.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn-primary">
                Get a free assessment <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/medical-biller" className="btn-ghost">
                Explore our services
              </Link>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-sm">
              {[
                ["98%+", "Clean claim rate"],
                ["24–48h", "Coding turnaround"],
                ["30%↑", "Avg. collection lift"],
              ].map(([num, label]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
                  <div className="font-display text-2xl font-extrabold text-brand-700">
                    {num}
                  </div>
                  <div className="mt-1 text-xs font-medium text-ink-500">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-brand-100/70 blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-white bg-white shadow-card">
              <Image
                src={heroImg}
                alt="Healthcare provider with laptop"
                width={1100}
                height={900}
                priority
                className="h-[440px] w-full object-cover sm:h-[520px]"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-card sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-ink-400">
                    Compliance
                  </div>
                  <div className="text-sm font-bold text-ink-900">
                    HIPAA · SOC 2 ready
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 top-6 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-card sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-500/15 text-accent-600">
                  <LineChart className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-ink-400">
                    Last 30 days
                  </div>
                  <div className="text-sm font-bold text-ink-900">
                    $1.2M recovered
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="border-y border-slate-200 bg-white">
        <div className="container-x flex flex-wrap items-center justify-between gap-x-10 gap-y-4 py-6 text-sm text-ink-500">
          <span className="font-semibold text-ink-700">
            Trusted across specialties:
          </span>
          {[
            "Primary Care",
            "Cardiology",
            "Orthopedics",
            "Behavioral Health",
            "Pediatrics",
            "Radiology",
          ].map((s) => (
            <span key={s} className="font-medium">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <Section>
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow">What we do</span>
          <h2 className="h-section mt-4">
            Three pillars. One team that integrates with yours.
          </h2>
          <p className="mt-4 text-ink-500">
            Whether you need a complete RCM partner, a focused billing team, or
            remote healthcare staff — we plug in fast and deliver measurable
            outcomes.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              href: "/medical-biller",
              icon: ReceiptText,
              title: "Medical Biller",
              body:
                "Accurate charge entry, payer-ready claims, and persistent follow-up — every claim, every payer, every day.",
              img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
            },
            {
              href: "/virtual-staffing",
              icon: Users,
              title: "Virtual Healthcare Staffing",
              body:
                "Remote VAs, scribes, receptionists and records specialists — handpicked, trained, and embedded into your workflows.",
              img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
            },
            {
              href: "/revenue-cycle-management",
              icon: HeartPulse,
              title: "Revenue Cycle Management",
              body:
                "End-to-end RCM — from eligibility to reconciliation — engineered to plug revenue leaks and accelerate cash flow.",
              img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80",
            },
          ].map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="card group block overflow-hidden p-0 transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={s.img}
                  alt=""
                  width={900}
                  height={600}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 to-transparent" />
                <div className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-xl bg-white/95 text-brand-700 shadow-card">
                  <s.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-ink-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink-500">{s.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* WHY INFIVIDHYA */}
      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-brand-50 blur-xl" />
            <Image
              src="https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?auto=format&fit=crop&w=1100&q=80"
              alt="Team collaborating"
              width={1100}
              height={900}
              className="rounded-3xl border border-white object-cover shadow-card"
            />
          </div>
          <div>
            <span className="eyebrow">Why Infividhya</span>
            <h2 className="h-section mt-4">
              We treat your revenue cycle like clinical care — methodical,
              measurable, and patient-first.
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                {
                  icon: ShieldCheck,
                  title: "Compliance-first DNA",
                  body:
                    "HIPAA-aligned workflows, SOC 2 readiness, and certified coders on every account.",
                },
                {
                  icon: Workflow,
                  title: "Plug into any PM/EHR",
                  body:
                    "Athena, eClinicalWorks, Kareo, AdvancedMD, NextGen, DrChrono — we work where you work.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Transparent reporting",
                  body:
                    "Live dashboards on collections, denials, AR aging, and provider productivity.",
                },
                {
                  icon: Stethoscope,
                  title: "Specialty depth",
                  body:
                    "12+ specialties supported with specialty-specific coders and payer playbooks.",
                },
              ].map((it) => (
                <li key={it.title} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <it.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-display text-base font-bold text-ink-900">
                      {it.title}
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-ink-500">
                      {it.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section>
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow">How we work</span>
          <h2 className="h-section mt-4">
            A 30-day on-ramp engineered for clean cash flow.
          </h2>
        </div>
        <FeatureGrid
          items={[
            { icon: ClipboardCheck, title: "1. Discover & audit", body: "We map your workflows, payer mix, and current AR to find the fastest wins." },
            { icon: Workflow, title: "2. Embed & integrate", body: "Your dedicated team integrates into your PM/EHR with documented SOPs." },
            { icon: LineChart, title: "3. Optimize & report", body: "Weekly KPIs, monthly reviews, and continuous denial-trend tuning." },
          ]}
        />
      </Section>

      <CTA />
    </>
  );
}
