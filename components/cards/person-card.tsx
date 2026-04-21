import Link from "next/link";
import { Person } from "@/lib/types";

export function PersonCard({ item }: { item: Person }) {
  return (
    <article className="panel p-6">
      <div className="badge">{item.role}</div>
      <h3 className="mt-4">
        <Link href={`/people/${item.slug}`} className="no-underline hover:text-laterite">
          {item.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm uppercase tracking-[0.16em] text-slate">{item.affiliation}</p>
      <p className="mt-4 text-slate">{item.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.expertise.slice(0, 3).map((expertise) => (
          <span key={expertise} className="badge">
            {expertise}
          </span>
        ))}
      </div>
    </article>
  );
}
