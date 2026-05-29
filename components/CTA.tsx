import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA({
  title = "Ready to clean up your revenue cycle?",
  body = "Talk to an Infividhya specialist and see what's possible in 30 days.",
  primary = { href: "/contact", label: "Get a free assessment" },
  secondary = { href: "/medical-biller", label: "Explore services" },
}: {
  title?: string;
  body?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="container-x my-16">
      <div className="relative overflow-hidden rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-600 to-brand-700 p-10 text-white shadow-soft sm:p-14">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-accent-500/20 blur-2xl" />
        <div className="relative grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mt-3 max-w-xl text-base text-white/85">{body}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              href={primary.href}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
            >
              {primary.label} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={secondary.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {secondary.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
