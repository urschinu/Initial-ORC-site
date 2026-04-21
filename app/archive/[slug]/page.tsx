import { notFound } from "next/navigation";
import { PageHeader } from "@/components/sections/page-header";
import { DownloadDocumentBlock } from "@/components/ui/download-document-block";
import { archiveItems } from "@/data/archive";

export function generateStaticParams() {
  return archiveItems.map((item) => ({ slug: item.slug }));
}

export default async function ArchiveDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = archiveItems.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <PageHeader eyebrow={item.archiveType} title={item.title} description={item.summary} />
      <section className="container-shell section-pad grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <article className="prose-block">
          <h2>Provenance</h2>
          <p>{item.provenance}</p>

          <h2 className="mt-8">Source collection</h2>
          <p>{item.sourceCollection}</p>

          <h2 className="mt-8">Rights and access</h2>
          <p>{item.rights}</p>
        </article>

        <aside className="space-y-6">
          <div className="panel p-6">
            <h3>Archive metadata</h3>
            <div className="mt-4 space-y-2 text-sm text-slate">
              <p>Location: {item.location}</p>
              <p>Date range: {item.dateRange}</p>
              <p>Media type: {item.mediaType}</p>
              <p>Vertical links: {item.verticals.length}</p>
            </div>
          </div>

          {item.fileUrl ? <DownloadDocumentBlock href={item.fileUrl} label="Open related document" /> : null}
        </aside>
      </section>
    </>
  );
}
