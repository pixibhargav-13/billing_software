import Image from "next/image";
import { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-brand-50/60 to-white">
      <div className="dot-bg absolute inset-0 opacity-60" />
      <div className="container-x relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="h-display mt-5">{title}</h1>
          <p className="mt-5 max-w-xl text-lg leading-7 text-ink-500">
            {subtitle}
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-brand-100/60 blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-white shadow-card">
            <Image
              src={image}
              alt=""
              width={900}
              height={700}
              className="h-[360px] w-full object-cover sm:h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
