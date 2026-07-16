import { Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Section } from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import contactHeroImg from "@/app/assets/medical-invoice-document-form-patient-concept.jpg";

export const metadata = {
  title: "Contact Us — Acuentra",
  description:
    "Talk to an Acuentra specialist about medical billing, RCM, or virtual healthcare staffing.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build a healthier{" "}
            <span className="text-brand-600">revenue cycle.</span>
          </>
        }
        subtitle="Tell us a little about your practice. A real human from our team will respond within one business day — usually faster."
        image={contactHeroImg}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <ContactForm />

          <div className="space-y-5">
            <div className="card">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-ink-900">Email</h3>
                  <p className="mt-1 text-sm text-ink-500">General enquiries</p>
                  <a href="mailto:contact@acuentra.com" className="mt-2 inline-block text-sm font-semibold text-brand-700 hover:text-brand-800">
                    contact@acuentra.com
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-ink-900">Locations</h3>
                  <p className="mt-1 text-sm text-ink-500">
                    Remote-first · Operations across the USA & India
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-ink-900">Response time</h3>
                  <p className="mt-1 text-sm text-ink-500">
                    We respond to every enquiry within one business day.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-brand-100 bg-brand-50/60 p-6">
              <div className="flex items-start gap-3">
                <MessageSquare className="mt-0.5 h-5 w-5 text-brand-700" />
                <div>
                  <h3 className="font-display text-base font-bold text-ink-900">
                    Looking for a free assessment?
                  </h3>
                  <p className="mt-1 text-sm text-ink-500">
                    Send a sample AR or claims report along with your message —
                    we&apos;ll send back a tailored analysis within five business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
