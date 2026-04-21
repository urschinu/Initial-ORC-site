import { notFound } from "next/navigation";
import { PageHeader } from "@/components/sections/page-header";
import { DownloadDocumentBlock } from "@/components/ui/download-document-block";
import { publications } from "@/data/publications";

export function generateStaticParams() {
  return publications.map((publication) => ({ slug: publication.slug }));
}

export default async function PublicationDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = publications.find((publication) => publication.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <PageHeader eyebrow={item.format} title={item.title} description={item.summary} />
      <section className="container-shell section-pad grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <article className="prose-block">
          <h2>Abstract</h2>
          <p>{item.abstract}</p>

          <h2 className="mt-8">Citation</h2>
          <p>{item.citation}</p>

          <h2 className="mt-8">Authors</h2>
          <p>{item.authors.join(", ")}</p>

          <h2 className="mt-8">Themes</h2>
          <p>{item.themes.join(" · ")}</p>
        </article>

        <aside className="space-y-6">
          <div className="panel p-6">
            <h3>Metadata</h3>
            <div className="mt-4 space-y-2 text-sm text-slate">
              <p>Format: {item.format}</p>
              <p>Year: {item.year}</p>
              <p>Published: {item.publishedAt}</p>
              <p>Linked verticals: {item.verticals.length}</p>
            </div>
          </div>
          <DownloadDocumentBlock href={item.pdfUrl} label="Download PDF" />
        </aside>
      </section>
    </>
  );
}
