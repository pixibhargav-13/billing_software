import Image from "next/image";
import {
  Headphones,
  FileText,
  PhoneCall,
  Pill,
  Mic,
  CalendarCheck,
  ShieldCheck,
  CheckCircle2,
  Users,
  Workflow,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { Section } from "@/components/Section";
import FeatureGrid from "@/components/FeatureGrid";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Virtual Healthcare Staffing — Infividhya",
  description:
    "Dedicated remote healthcare assistants, scribes, receptionists, and records specialists — embedded into your practice.",
};

export default function VirtualStaffingPage() {
  return (
    <>
      <PageHero
        eyebrow="Virtual Healthcare Staffing"
        title={
          <>
            Expand your team.{" "}
            <span className="text-brand-600">Without expanding your office.</span>
          </>
        }
        subtitle="Infividhya connects healthcare providers with personalized remote staff — virtual assistants, scribes, receptionists, prescription coordinators and records specialists — embedded into your daily workflows."
        image="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1400&q=80"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <span className="eyebrow">Why virtual staffing</span>
            <h2 className="h-section mt-4">
              Add capacity, not overhead.
            </h2>
            <p className="mt-5 text-ink-500">
              Hiring in-house front-desk and administrative staff is slow,
              expensive, and hard to scale. Infividhya gives you trained
              healthcare professionals who work as a seamless extension of your
              practice — at a fraction of the cost of local hires, with none of
              the HR headaches.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink-700">
              {[
                "Dedicated team members assigned to your practice",
                "Trained on US healthcare workflows & HIPAA",
                "Integrated into your PM / EHR / phone system",
                "Daily, weekly, or full-time engagement models",
                "Backup coverage built in — no single-person risk",
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
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1100&q=80"
              alt="Virtual healthcare assistant"
              width={1100}
              height={800}
              className="rounded-3xl border border-white object-cover shadow-card"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow">Roles we provide</span>
          <h2 className="h-section mt-4">
            Pick a role. We deliver a trained professional.
          </h2>
        </div>
        <FeatureGrid
          items={[
            { icon: Headphones, title: "Virtual Healthcare Assistant", body: "A dedicated remote teammate handling admin tasks, patient communications, and clinical-staff support." },
            { icon: FileText, title: "Medical Records Management", body: "Retrieval, sorting, indexing and secure storage of patient records — always audit-ready." },
            { icon: PhoneCall, title: "Remote Phone Receptionist", body: "Professional call answering, appointment booking, new-patient intake and referral coordination." },
            { icon: Pill, title: "Prescription Coordination", body: "Routing prescriptions, managing refills, and processing incoming faxes to clear your inbox." },
            { icon: Mic, title: "Medical Transcription & Live Scribe", body: "Clean clinical notes from dictation, or live remote scribes joining the encounter in real time." },
            { icon: CalendarCheck, title: "Scheduling & Patient Coordination", body: "Calendar management, reminders, and rescheduling workflows that reduce no-shows." },
          ]}
        />
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-accent-500/10 blur-xl" />
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1100&q=80"
              alt="Onboarding"
              width={1100}
              height={800}
              className="rounded-3xl border border-white object-cover shadow-card"
            />
          </div>
          <div>
            <span className="eyebrow">How onboarding works</span>
            <h2 className="h-section mt-4">
              From kickoff to first day — in under two weeks.
            </h2>
            <ol className="mt-6 space-y-5">
              {[
                { t: "Discovery call", b: "We learn your workflow, tools, hours and the role profile you need." },
                { t: "Candidate match", b: "We shortlist trained candidates from our bench and you interview the top picks." },
                { t: "Secure setup", b: "HIPAA-aligned device, VPN, and access provisioning before day one." },
                { t: "Embedded launch", b: "SOPs documented, your team trained, your VA live with you on calls and queues." },
              ].map((s, i) => (
                <li key={s.t} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-600 font-display text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="font-display text-base font-bold text-ink-900">{s.t}</h4>
                    <p className="mt-1 text-sm leading-6 text-ink-500">{s.b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow">Built-in safeguards</span>
          <h2 className="h-section mt-4">
            Reliable, compliant, scalable.
          </h2>
        </div>
        <FeatureGrid
          items={[
            { icon: ShieldCheck, title: "HIPAA-aligned by default", body: "Hardened endpoints, secure access, signed BAAs and ongoing training." },
            { icon: Users, title: "Always-on coverage", body: "Backup staff trained on your SOPs — you never lose a day to PTO or attrition." },
            { icon: Workflow, title: "Embedded in your tools", body: "Your EHR, PM, phone system, ticketing, chat — we work in the tools you already use." },
          ]}
        />
      </Section>

      <CTA
        title="Need a teammate by next month?"
        body="Tell us the role and we'll have shortlisted candidates ready within a week."
        primary={{ href: "/contact", label: "Hire a virtual teammate" }}
      />
    </>
  );
}
