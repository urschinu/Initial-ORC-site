import { PageHeader } from "@/components/sections/page-header";
import { FilterBar } from "@/components/ui/filter-bar";
import { ArchiveCard } from "@/components/cards/archive-card";
import { archiveItems } from "@/data/archive";

export default function ArchivePage() {
  return (
    <>
      <PageHeader
        eyebrow="Digital Archive"
        title="Mixed-media archive discovery"
        description="This section is designed to grow into a searchable archive for oral histories, images, audio-visual collections, documents, maps, and heritage records."
      />
      <section className="container-shell section-pad">
        <FilterBar filters={["Media Type", "Archive Type", "Location", "Vertical"]} />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {archiveItems.map((item) => (
            <ArchiveCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
