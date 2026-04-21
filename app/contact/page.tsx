import { PageHeader } from "@/components/sections/page-header";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contact and institutional directory"
        description="The contact section is structured for public inquiry, institutional address, directory information, and future collaboration routing."
      />
      <section className="container-shell section-pad grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="panel p-6">
          <h2>Contact information</h2>
          <div className="mt-5 space-y-3 text-slate">
            <p>{siteConfig.address}</p>
            <p>{siteConfig.email}</p>
            <p>{siteConfig.phone}</p>
          </div>

          <h2 className="mt-8">Directory note</h2>
          <p className="mt-3 text-slate">
            In production, this section can expand into staff-wise email directories, office
            contacts, collaboration requests, and route-specific inquiry handling.
          </p>
        </div>

        <div className="panel p-6">
          <h2>Inquiry form</h2>
          <div className="mt-5 grid gap-4">
            <input className="rounded-xl border border-line bg-white px-4 py-3" placeholder="Full name" />
            <input className="rounded-xl border border-line bg-white px-4 py-3" placeholder="Email address" />
            <input className="rounded-xl border border-line bg-white px-4 py-3" placeholder="Subject" />
            <textarea
              className="min-h-40 rounded-xl border border-line bg-white px-4 py-3"
              placeholder="Message"
            />
            <button className="w-fit rounded-full bg-ink px-5 py-3 text-sm font-medium text-white">
              Send inquiry
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
