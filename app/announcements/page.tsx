import { PageHeader } from "@/components/sections/page-header";
import { FilterBar } from "@/components/ui/filter-bar";
import { AnnouncementCard } from "@/components/cards/announcement-card";
import { announcements } from "@/data/announcements";

export default function AnnouncementsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Announcements"
        title="Notices, tenders, circulars, and updates"
        description="The announcements section is meant for fast, date-forward institutional communication with clear public discoverability."
      />
      <section className="container-shell section-pad">
        <FilterBar filters={["Notice", "Tender", "Circular", "Update"]} />
        <div className="grid gap-4 md:grid-cols-2">
          {announcements.map((item) => (
            <AnnouncementCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
