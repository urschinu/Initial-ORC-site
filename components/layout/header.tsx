import Link from "next/link";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Events", href: "/events" },
  { label: "People", href: "/people" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "Digital Archive", href: "/archive" },
  { label: "Governance", href: "/governance" },
  { label: "Contact", href: "/contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="container-shell flex items-center justify-between gap-6 py-4">
        <Link href="/" className="no-underline">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-laterite/20 bg-white font-serif text-lg font-semibold text-laterite">
              ORC
            </div>
            <div>
              <div className="text-lg font-semibold">Odisha Research Centre</div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate">
                Research · Archives · Public Knowledge
              </div>
            </div>
          </div>
        </Link>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex flex-wrap items-center gap-5 text-sm">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="no-underline hover:text-laterite">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
