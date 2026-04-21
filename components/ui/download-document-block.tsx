import Link from "next/link";

export function DownloadDocumentBlock({ href, label }: { href: string; label: string }) {
  return (
    <div className="mt-6 rounded-2xl border border-line bg-paper p-5">
      <div className="text-sm text-slate">Document</div>
      <Link
        href={href}
        className="mt-2 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-medium text-white no-underline"
      >
        {label}
      </Link>
    </div>
  );
}
