import Link from "next/link";
import { PageHeader } from "@/components/sections/page-header";
import { governanceDocuments } from "@/data/governance";

export default function GovernancePage() {
  return (
    <>
      <PageHeader
        eyebrow="Governance"
        title="Policies, reports, and public information"
        description="This section is designed as a high-trust repository for annual reports, institutional policies, compliance materials, and administrative documents."
      />
      <section className="container-shell section-pad">
        <div className="grid gap-4">
          {governanceDocuments.map((item) => (
            <article key={item.id} className="panel p-6">
              <div className="badge">{item.type}</div>
              <h2 className="mt-4 text-2xl">{item.title}</h2>
              <div className="meta-row">
                <span>{item.year}</span>
              </div>
              <Link
                href={item.fileUrl}
                className="mt-4 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-medium text-white no-underline"
              >
                Download document
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
