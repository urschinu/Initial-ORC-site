import { PageHeader } from "@/components/sections/page-header";
import { FilterBar } from "@/components/ui/filter-bar";
import { PersonCard } from "@/components/cards/person-card";
import { people } from "@/data/people";

export default function PeoplePage() {
  return (
    <>
      <PageHeader
        eyebrow="People"
        title="Leadership, researchers, and collaborators"
        description="A searchable institutional directory can be housed here with filters by role, expertise, and research vertical."
      />
      <section className="container-shell section-pad">
        <FilterBar filters={["Role", "Vertical", "Affiliation"]} />
        <div className="grid gap-4 md:grid-cols-2">
          {people.map((item) => (
            <PersonCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
