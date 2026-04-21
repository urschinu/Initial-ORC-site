import { partners } from "@/data/partners";

export function PartnerStrip() {
  return (
    <section className="border-y border-line bg-white/50">
      <div className="container-shell section-pad">
        <div className="mb-6 text-xs uppercase tracking-[0.2em] text-laterite">Institutional Partnerships</div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {partners.map((partner) => (
            <div key={partner.id} className="panel p-4">
              <div className="font-medium">{partner.name}</div>
              <p className="mt-2 text-sm text-slate">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
