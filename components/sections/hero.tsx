import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaPrimary: { href: string; label: string };
  ctaSecondary: { href: string; label: string };
}

export function Hero({ title, subtitle, ctaPrimary, ctaSecondary }: HeroProps) {
  return (
    <section className="border-b border-line">
      <div className="container-shell section-pad grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <div className="mb-4 inline-flex items-center rounded-full border border-laterite/20 bg-white px-4 py-2 text-xs uppercase tracking-[0.2em] text-laterite">
            ICSSR-recognized interdisciplinary institution
          </div>
          <h1 className="max-w-4xl">{title}</h1>
          <p className="mt-6 max-w-measure text-lg text-slate">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={ctaPrimary.href}
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-white no-underline hover:bg-laterite"
            >
              {ctaPrimary.label}
            </Link>
            <Link
              href={ctaSecondary.href}
              className="rounded-full border border-line bg-white px-6 py-3 text-sm font-medium text-ink no-underline hover:border-laterite"
            >
              {ctaSecondary.label}
            </Link>
          </div>
        </div>

        <div className="panel data-grid p-8">
          <div className="text-sm uppercase tracking-[0.2em] text-laterite">Positioning</div>
          <p className="mt-4 text-lg leading-8">
            The Odisha Research Centre website is conceived as a living institutional knowledge
            system connecting research, archives, governance records, and public programmes in the
            service of rigorous Odisha-focused scholarship.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Scholarly",
              "Credible",
              "Regionally rooted",
              "Globally legible",
              "Editorially rigorous",
              "Public-facing"
            ].map((item) => (
              <div key={item} className="rounded-xl border border-line bg-paper px-4 py-3 text-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
