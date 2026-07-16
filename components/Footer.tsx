import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo />
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
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-brand-600" /> contact@acuentra.com</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-brand-600" /> Remote-first · USA & India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-100">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-ink-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Acuentra. All rights reserved.</p>
          <p>HIPAA-aligned · SOC 2 ready · Built for modern practices.</p>
        </div>
      </div>
    </footer>
  );
}
