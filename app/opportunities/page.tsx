import { PageHeader } from "@/components/sections/page-header";
import { FilterBar } from "@/components/ui/filter-bar";
import { OpportunityCard } from "@/components/cards/opportunity-card";
import { opportunities } from "@/data/opportunities";

export default function OpportunitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Opportunities"
        title="Fellowships, calls, and recruitment"
        description="This section is structured for deadline-first discovery with clear eligibility, guidelines, FAQs, and application routing."
      />
      <section className="container-shell section-pad">
        <FilterBar filters={["Fellowship", "Recruitment", "Consultant Call", "Deadline"]} />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {opportunities.map((item) => (
            <OpportunityCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
