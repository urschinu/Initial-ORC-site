import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function UtilityNav() {
  return (
    <div className="border-b border-line bg-white/60">
      <div className="container-shell flex flex-wrap items-center justify-between gap-3 py-2 text-sm text-slate">
        <div className="flex flex-wrap gap-4">
          {siteConfig.utilityLinks.map((item) => (
            <Link key={item.label} href={item.href} className="no-underline hover:text-ink">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <span>EN</span>
          <span className="text-line">|</span>
          <span className="opacity-60">OR (Phase 2)</span>
        </div>
      </div>
    </div>
  );
}
