import { notFound } from "next/navigation";
import { PageHeader } from "@/components/sections/page-header";
import { verticals } from "@/data/verticals";
import { publications } from "@/data/publications";
import { events } from "@/data/events";
import { archiveItems } from "@/data/archive";
import { people } from "@/data/people";
import Link from "next/link";

export function generateStaticParams() {
  return verticals.map((vertical) => ({ slug: vertical.slug }));
}

export default async function VerticalDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vertical = verticals.find((item) => item.slug === slug);
  if (!vertical) {
    notFound();
  }

  const linkedPublications = publications.filter((item) => item.verticals.includes(vertical.key));
  const linkedEvents = events.filter((item) => item.verticals.includes(vertical.key));
  const linkedArchive = archiveItems.filter((item) => item.verticals.includes(vertical.key));
  const linkedPeople = people.filter((item) => item.verticals.includes(vertical.key));

  return (
    <>
      <PageHeader
        eyebrow="Research Vertical"
        title={vertical.title}
        description={vertical.summary}
      />

      <section className="container-shell section-pad grid gap-10 lg:grid-cols-[1fr_0.95fr]">
        <div className="space-y-10">
          <div className="prose-block">
            <h2>Why it matters</h2>
            <p>{vertical.whyItMatters}</p>
          </div>

          <div>
            <h2>Sub-themes</h2>
            <ul className="mt-4 grid gap-3">
              {vertical.subThemes.map((item) => (
                <li key={item} className="panel p-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Methods and sources</h2>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {vertical.methods.map((item) => (
                <li key={item} className="panel p-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="prose-block">
            <h2>Archive relation</h2>
            <p>{vertical.archiveRelation}</p>
          </div>

          <div className="prose-block">
            <h2>Future agenda</h2>
            <p>{vertical.futureAgenda}</p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="panel p-6">
            <h3>Linked publications</h3>
            <ul className="mt-4 space-y-3">
              {linkedPublications.map((item) => (
                <li key={item.id}>
                  <Link href={`/publications/${item.slug}`} className="no-underline hover:text-laterite">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel p-6">
            <h3>Linked events</h3>
            <ul className="mt-4 space-y-3">
              {linkedEvents.map((item) => (
                <li key={item.id}>
                  <Link href={`/events/${item.slug}`} className="no-underline hover:text-laterite">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel p-6">
            <h3>Linked archive items</h3>
            <ul className="mt-4 space-y-3">
              {linkedArchive.map((item) => (
                <li key={item.id}>
                  <Link href={`/archive/${item.slug}`} className="no-underline hover:text-laterite">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel p-6">
            <h3>Team and collaborators</h3>
            <ul className="mt-4 space-y-3">
              {linkedPeople.map((item) => (
                <li key={item.id}>
                  <Link href={`/people/${item.slug}`} className="no-underline hover:text-laterite">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
