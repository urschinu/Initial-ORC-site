import { PageHeader } from "@/components/sections/page-header";
import { FilterBar } from "@/components/ui/filter-bar";
import { EventCard } from "@/components/cards/event-card";
import { events } from "@/data/events";

export default function EventsPage() {
  const upcoming = events.filter((event) => event.status === "Upcoming");
  const past = events.filter((event) => event.status === "Past");

  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Public programmes and scholarly gatherings"
        description="Upcoming and past events can be organised here with date-forward display, speaker visibility, and linked research context."
      />
      <section className="container-shell section-pad">
        <FilterBar filters={["Upcoming", "Past", "Mode", "Vertical"]} />

        <h2 className="mb-5">Upcoming events</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {upcoming.map((item) => (
            <EventCard key={item.id} item={item} />
          ))}
        </div>

        <h2 className="mb-5 mt-12">Past events</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {past.map((item) => (
            <EventCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
