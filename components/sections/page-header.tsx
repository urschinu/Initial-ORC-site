interface PageHeaderProps {
  title: string;
  eyebrow?: string;
  description: string;
}

export function PageHeader({ title, eyebrow, description }: PageHeaderProps) {
  return (
    <section className="border-b border-line bg-white/40">
      <div className="container-shell section-pad">
        {eyebrow ? (
          <div className="mb-3 text-xs uppercase tracking-[0.2em] text-laterite">{eyebrow}</div>
        ) : null}
        <h1>{title}</h1>
        <p className="mt-5 max-w-measure text-lg text-slate">{description}</p>
      </div>
    </section>
  );
}
