import { PageHeader } from "@/components/sections/page-header";
import { FilterBar } from "@/components/ui/filter-bar";
import { PublicationListItem } from "@/components/cards/publication-list-item";
import { publications } from "@/data/publications";

export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="Institutional publications"
        description="A metadata-first publication listing designed for reports, briefs, working papers, books, proceedings, and lecture texts."
      />
      <section className="container-shell section-pad">
        <FilterBar filters={["Format", "Year", "Vertical", "Theme"]} />
        <div className="grid gap-4">
          {publications.map((item) => (
            <PublicationListItem key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
