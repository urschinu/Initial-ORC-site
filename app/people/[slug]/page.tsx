import { notFound } from "next/navigation";
import { PageHeader } from "@/components/sections/page-header";
import { people } from "@/data/people";

export function generateStaticParams() {
  return people.map((person) => ({ slug: person.slug }));
}

export default async function PersonDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const person = people.find((item) => item.slug === slug);

  if (!person) {
    notFound();
  }

  return (
    <>
      <PageHeader eyebrow={person.role} title={person.title} description={person.summary} />
      <section className="container-shell section-pad grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <article className="prose-block">
          <h2>Profile</h2>
          <p>
            This profile page is ready for detailed biographies, selected publications, events,
            research interests, and collaborator metadata.
          </p>

          <h2 className="mt-8">Expertise</h2>
          <p>{person.expertise.join(" · ")}</p>

          <h2 className="mt-8">Affiliation</h2>
          <p>{person.affiliation}</p>
        </article>

        <aside className="panel p-6">
          <h3>Directory information</h3>
          <div className="mt-4 space-y-2 text-sm text-slate">
            <p>Role: {person.role}</p>
            <p>Affiliation: {person.affiliation}</p>
            {person.email ? <p>Email: {person.email}</p> : null}
            <p>Linked verticals: {person.verticals.length}</p>
          </div>
        </aside>
      </section>
    </>
  );
}
