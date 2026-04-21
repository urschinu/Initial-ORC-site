import Link from "next/link";
import { PageHeader } from "@/components/sections/page-header";
import { verticals } from "@/data/verticals";

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Research architecture"
        description="This section organises ORC’s six core research verticals and prepares the ground for linked projects, publications, events, and archive materials."
      />
      <section className="container-shell section-pad">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {verticals.map((vertical) => (
            <Link
              key={vertical.id}
              href={`/research/${vertical.slug}`}
              className="panel block p-6 no-underline hover:border-laterite"
            >
              <h2 className="text-2xl">{vertical.title}</h2>
              <p className="mt-3 text-slate">{vertical.summary}</p>
              <p className="mt-4 text-sm text-slate">{vertical.archiveRelation}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
