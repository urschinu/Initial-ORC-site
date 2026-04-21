import { notFound } from "next/navigation";
import { PageHeader } from "@/components/sections/page-header";
import { events } from "@/data/events";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export default async function EventDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      <PageHeader eyebrow="Event" title={event.title} description={event.summary} />
      <section className="container-shell section-pad grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <article className="prose-block">
          <h2>Overview</h2>
          <p>
            This detail page is structured to accommodate agenda notes, speaker bios, event
            resources, recordings, downloadable brochures, and linked publications once production
            content is available.
          </p>

          <h2 className="mt-8">Speakers</h2>
          <p>{event.speakers.join(", ")}</p>
        </article>

        <aside className="panel p-6">
          <h3>Event details</h3>
          <div className="mt-4 space-y-2 text-sm text-slate">
            <p>Status: {event.status}</p>
            <p>Mode: {event.mode}</p>
            <p>Venue: {event.venue}</p>
            <p>Start date: {event.startDate}</p>
            {event.endDate ? <p>End date: {event.endDate}</p> : null}
            {event.registrationUrl ? <p>Registration URL: {event.registrationUrl}</p> : null}
          </div>
        </aside>
      </section>
    </>
  );
}
