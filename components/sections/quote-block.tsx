interface QuoteBlockProps {
  quote: string;
  attribution: string;
}

export function QuoteBlock({ quote, attribution }: QuoteBlockProps) {
  return (
    <div className="panel border-l-4 border-l-laterite p-6">
      <blockquote className="text-xl leading-8 text-ink">“{quote}”</blockquote>
      <div className="mt-4 text-sm uppercase tracking-[0.18em] text-slate">{attribution}</div>
    </div>
  );
}
