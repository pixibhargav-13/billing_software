import Link from "next/link";

/**
 * Basic placeholder logo for Acuentra.
 * The mark is a simple rounded-square badge with an upward "revenue pulse"
 * motif — meant as a lightweight stand-in until a final brand mark is ready.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white shadow-soft">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* upward pulse / growth motif */}
          <path d="M3 14h4l2.5-6L13 17l2.5-9L18 14h3" />
        </svg>
      </span>
      <span className="font-display text-lg font-extrabold tracking-tight text-ink-900">
        Acuentra
      </span>
    </Link>
  );
}
