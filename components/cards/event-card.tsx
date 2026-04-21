import Link from "next/link";
import { Event } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export function EventCard({ item }: { item: Event }) {
  return (
    <article className="panel p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="badge">{item.status}</span>
        <span className="text-sm text-slate">{item.mode}</span>
      </div>
      <h3 className="mt-4">
        <Link href={`/events/${item.slug}`} className="no-underline hover:text-laterite">
          {item.title}
        </Link>
      </h3>
      <p className="mt-3 text-slate">{item.summary}</p>
      <div className="meta-row">
        <span>{formatDate(item.startDate)}</span>
        <span>•</span>
        <span>{item.venue}</span>
      </div>
    </article>
  );
}
