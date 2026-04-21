import Link from "next/link";
import { Announcement } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export function AnnouncementCard({ item }: { item: Announcement }) {
  return (
    <article className="panel p-5">
      <div className="flex flex-wrap items-center gap-3">
        <span className="badge">{item.category}</span>
        <span className="text-sm text-slate">{item.priority}</span>
      </div>
      <h3 className="mt-3 text-xl">
        <Link href={item.link ?? "/announcements"} className="no-underline hover:text-laterite">
          {item.title}
        </Link>
      </h3>
      <p className="mt-3 text-slate">{item.summary}</p>
      <div className="meta-row">
        <span>{formatDate(item.publishedAt)}</span>
      </div>
    </article>
  );
}
