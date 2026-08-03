import Image from "next/image";
import Link from "next/link";
import logoImage from "../app/assets/logo.png";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src={logoImage}
        alt="Acuentra logo"
        width={50}
        height={50}
        className="h-11 w-auto rounded-lg object-contain"
        priority
      />
    </Link>
  );
}
