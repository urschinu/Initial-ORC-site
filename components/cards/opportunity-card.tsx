import Link from "next/link";
import { Opportunity } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export function OpportunityCard({ item }: { item: Opportunity }) {
  return (
    <article className="panel p-6">
      <div className="badge">{item.category}</div>
      <h3 className="mt-4">
        <Link href={item.applicationUrl ?? "/opportunities"} className="no-underline hover:text-laterite">
          {item.title}
        </Link>
      </h3>
      <p className="mt-3 text-slate">{item.summary}</p>
      <div className="meta-row">
        <span>Deadline</span>
        <span>•</span>
        <span>{formatDate(item.deadline)}</span>
      </div>
      <p className="mt-4 text-sm text-slate">{item.eligibility}</p>
    </article>
  );
}
