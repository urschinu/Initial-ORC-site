import { ReactNode } from "react";

export function MetadataRow({ items }: { items: ReactNode[] }) {
  return <div className="meta-row">{items.map((item, index) => <span key={index}>{item}</span>)}</div>;
}
