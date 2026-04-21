interface SectionIntroProps {
  title: string;
  kicker?: string;
  description?: string;
}

export function SectionIntro({ title, kicker, description }: SectionIntroProps) {
  return (
    <div className="mb-6">
      {kicker ? (
        <div className="mb-2 text-xs uppercase tracking-[0.2em] text-laterite">{kicker}</div>
      ) : null}
      <h2>{title}</h2>
      {description ? <p className="mt-3 max-w-measure text-slate">{description}</p> : null}
    </div>
  );
}
