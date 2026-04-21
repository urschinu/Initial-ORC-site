import { PageHeader } from "@/components/sections/page-header";
import { QuoteBlock } from "@/components/sections/quote-block";
import { partners } from "@/data/partners";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="An institutional home for Odisha-focused scholarship"
        description="This section foregrounds legitimacy, mandate, leadership logic, partnership structure, and the institutional reasoning behind ORC."
      />

      <section className="container-shell section-pad grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <div className="prose-block">
            <h2>About ORC</h2>
            <p>
              Odisha Research Centre is conceived as a scholarly and public-facing institution that
              connects rigorous research with archival recovery, editorial publishing, and
              institutionally grounded public programming. It is built to serve scholars, policy
              practitioners, students, collaborators, and the wider reading public.
            </p>
          </div>

          <div className="prose-block">
            <h2>Vision and Mission</h2>
            <p>
              The site architecture assumes that ORC’s public role is not exhausted by event
              announcements or publication uploads. It must also communicate why Odisha matters as a
              historical, social, ecological, and civilisational field of inquiry, and why that
              inquiry needs durable institutional form.
            </p>
          </div>

          <div className="prose-block">
            <h2>Institutional Mandate</h2>
            <p>
              ORC’s work spans interdisciplinary research, public knowledge dissemination, archive
              development, and governance visibility. In digital terms, the website therefore needs
              to function as a trust-bearing institutional interface as well as an editorial and
              archival system.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <QuoteBlock
            quote="The site should feel calm, durable, scholarly, and accessible rather than promotional or transient."
            attribution="Design direction"
          />
          <div className="panel p-6">
            <h3>Institutional Partners</h3>
            <div className="mt-5 space-y-4">
              {partners.map((partner) => (
                <div key={partner.id} className="rounded-xl border border-line bg-paper p-4">
                  <div className="font-medium">{partner.name}</div>
                  <p className="mt-2 text-sm text-slate">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
