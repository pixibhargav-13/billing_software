import Image from "next/image";
import {
  Heart,
  Compass,
  Sparkles,
  ShieldCheck,
  Users,
  Globe,
  Award,
  HandHeart,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { Section } from "@/components/Section";
import FeatureGrid from "@/components/FeatureGrid";
import CTA from "@/components/CTA";

export const metadata = {
  title: "About Us — Infividhya",
  description:
    "Infividhya is a remote-first healthcare operations partner — medical billing, RCM, and virtual staffing for modern practices.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Infividhya"
        title={
          <>
            People-first healthcare operations,{" "}
            <span className="text-brand-600">delivered remotely.</span>
          </>
        }
        subtitle="We started Infividhya to give independent practices the same operational backbone that large health systems take for granted — accurate billing, clean revenue cycles, and reliable staffing — without the bloat of legacy vendors."
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Our story</span>
            <h2 className="h-section mt-4">
              Born at the intersection of healthcare and technology.
            </h2>
            <p className="mt-5 text-ink-500">
              Infividhya was founded by operators who watched too many great
              practices lose revenue to claims that never should have been
              denied, prior authorizations that never got followed up, and AR
              that aged into oblivion. We knew the problem wasn&apos;t the
              providers — it was the operational layer underneath them.
            </p>
            <p className="mt-4 text-ink-500">
              Today we&apos;re a remote-first team of certified medical
              coders, billers, RCM analysts, and virtual healthcare assistants
              partnering with practices across the United States. Every
              engagement is built on three principles: accuracy, transparency,
              and accountability.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-brand-50 blur-xl" />
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1100&q=80"
              alt="Team at work"
              width={1100}
              height={800}
              className="rounded-3xl border border-white object-cover shadow-card"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="card">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
              <Compass className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold text-ink-900">
              Our mission
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink-500">
              To make every dollar a practice earns flow back to the practice —
              quickly, accurately, and compliantly.
            </p>
          </div>
          <div className="card">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
              <Sparkles className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold text-ink-900">
              Our vision
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink-500">
              A future where independent practices thrive — backed by world-class
              operations they never have to build alone.
            </p>
          </div>
          <div className="card">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
              <Heart className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold text-ink-900">
              Our promise
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink-500">
              Transparent reporting, measurable outcomes, and a partnership that
              feels like an extension of your team — not a faceless vendor.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow">Our values</span>
          <h2 className="h-section mt-4">What we hold ourselves to.</h2>
        </div>
        <FeatureGrid
          items={[
            { icon: ShieldCheck, title: "Compliance-first", body: "HIPAA, payer rules, and CMS guidelines are non-negotiable — by design, not by exception." },
            { icon: Users, title: "Operate as one team", body: "We embed into your workflows, your tools, and your culture — invisible but indispensable." },
            { icon: Award, title: "Pursue accuracy", body: "Clean claims, clean codes, clean reports. Quality is everyone's job, every day." },
            { icon: Globe, title: "Remote-first", body: "Top talent isn't bound by geography. We bring the best people to your team, wherever they are." },
            { icon: HandHeart, title: "Patient-respect", body: "Behind every claim is a patient. We handle records and conversations with care and dignity." },
            { icon: Sparkles, title: "Continuously improve", body: "Every denial is a lesson. Every report drives the next improvement cycle." },
          ]}
        />
      </Section>

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-accent-500/10 blur-xl" />
            <Image
              src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1100&q=80"
              alt="Certified specialists"
              width={1100}
              height={900}
              className="rounded-3xl border border-white object-cover shadow-card"
            />
          </div>
          <div>
            <span className="eyebrow">Our people</span>
            <h2 className="h-section mt-4">
              Certified specialists. Healthcare obsessives. Real partners.
            </h2>
            <p className="mt-5 text-ink-500">
              Every Infividhya account is staffed by trained medical billers,
              certified coders (CPC, CCS, CRC), RCM analysts, and virtual
              healthcare assistants. We invest in continuous education on payer
              updates, ICD/CPT changes, and compliance — so you never have to.
            </p>
            <div className="mt-6 grid max-w-md grid-cols-3 gap-4">
              {[
                ["120+", "Specialists"],
                ["12+", "Specialties"],
                ["20+", "EHRs supported"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
                  <div className="font-display text-2xl font-extrabold text-brand-700">{n}</div>
                  <div className="mt-1 text-xs font-medium text-ink-500">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <CTA
        title="Want to see if we're the right fit?"
        body="Book a 20-minute discovery call. No commitment — just a clear assessment of where your revenue cycle can do better."
      />
    </>
  );
}
