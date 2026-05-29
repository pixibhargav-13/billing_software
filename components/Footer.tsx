import Link from "next/link";
import { Stethoscope, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white">
              <Stethoscope className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-extrabold tracking-tight text-ink-900">
              Infi<span className="text-brand-600">vidhya</span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-6 text-ink-500">
            Modern medical billing, revenue cycle management, and virtual
            healthcare staffing — built to grow your practice.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold text-ink-900">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-ink-500">
            <li><Link href="/medical-biller" className="hover:text-brand-700">Medical Biller</Link></li>
            <li><Link href="/revenue-cycle-management" className="hover:text-brand-700">Revenue Cycle Management</Link></li>
            <li><Link href="/virtual-staffing" className="hover:text-brand-700">Virtual Healthcare Staffing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold text-ink-900">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-ink-500">
            <li><Link href="/about" className="hover:text-brand-700">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-brand-700">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold text-ink-900">Reach us</h4>
          <ul className="mt-4 space-y-3 text-sm text-ink-500">
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-brand-600" /> hello@infividhya.com</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-brand-600" /> +1 (555) 010-2024</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-brand-600" /> Remote-first · USA & India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-100">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-ink-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Infividhya. All rights reserved.</p>
          <p>HIPAA-aligned · SOC 2 ready · Built for modern practices.</p>
        </div>
      </div>
    </footer>
  );
}
