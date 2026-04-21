import Link from "next/link";
import { siteConfig } from "@/lib/site";

const institution = [
  { label: "About ORC", href: "/about" },
  { label: "Mandate", href: "/about" },
  { label: "Leadership", href: "/people" },
  { label: "Partners", href: "/about" }
];

const knowledge = [
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Archive", href: "/archive" },
  { label: "Events", href: "/events" }
];

const publicAdmin = [
  { label: "Opportunities", href: "/opportunities" },
  { label: "Announcements", href: "/announcements" },
  { label: "Governance", href: "/governance" },
  { label: "Contact", href: "/contact" }
];

function FooterColumn({
  title,
  items
}: {
  title: string;
  items: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h3 className="mb-4 text-base">{title}</h3>
      <ul className="space-y-3 text-sm text-slate">
        {items.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="no-underline hover:text-ink">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-white/60">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-2 xl:grid-cols-4">
        <FooterColumn title="Institution" items={institution} />
        <FooterColumn title="Knowledge" items={knowledge} />
        <FooterColumn title="Public & Admin" items={publicAdmin} />
        <div>
          <h3 className="mb-4 text-base">Contact</h3>
          <div className="space-y-3 text-sm text-slate">
            <p>{siteConfig.address}</p>
            <p>{siteConfig.email}</p>
            <p>{siteConfig.phone}</p>
            <p>Newsletter and social links can be connected here in production.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-line py-4 text-center text-sm text-slate">
        <div className="container-shell">
          © 2026 Odisha Research Centre. Built as a structured institutional knowledge system.
        </div>
      </div>
    </footer>
  );
}
