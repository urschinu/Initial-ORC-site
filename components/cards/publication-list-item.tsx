import Link from "next/link";
import { Publication } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export function PublicationListItem({ item }: { item: Publication }) {
  return (
    <article className="list-divider panel p-6">
      <div className="badge">{item.format}</div>
      <h3 className="mt-4 text-2xl">
        <Link href={`/publications/${item.slug}`} className="no-underline hover:text-laterite">
          {item.title}
        </Link>
      </h3>
      <p className="mt-3 max-w-measure text-slate">{item.summary}</p>
      <div className="meta-row">
        <span>{formatDate(item.publishedAt)}</span>
        <span>•</span>
        <span>{item.year}</span>
        <span>•</span>
        <span>{item.verticals.length} linked verticals</span>
      </div>
    </article>
  );
}
