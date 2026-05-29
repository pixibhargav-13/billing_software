import { LucideIcon } from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export default function FeatureGrid({ items }: { items: Feature[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ icon: Icon, title, body }) => (
        <div key={title} className="card group transition hover:-translate-y-0.5 hover:shadow-soft">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition group-hover:bg-brand-600 group-hover:text-white">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-ink-500">{body}</p>
        </div>
      ))}
    </div>
  );
}
