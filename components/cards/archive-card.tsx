import Link from "next/link";
import { ArchiveItem } from "@/lib/types";

export function ArchiveCard({ item }: { item: ArchiveItem }) {
  return (
    <article className="panel p-6">
      <div className="flex flex-wrap items-center gap-3">
        <span className="badge">{item.archiveType}</span>
        <span className="text-sm text-slate">{item.mediaType}</span>
      </div>
      <h3 className="mt-4">
        <Link href={`/archive/${item.slug}`} className="no-underline hover:text-laterite">
          {item.title}
        </Link>
      </h3>
      <p className="mt-3 text-slate">{item.summary}</p>
      <div className="meta-row">
        <span>{item.location}</span>
        <span>•</span>
        <span>{item.dateRange}</span>
      </div>
    </article>
  );
}
