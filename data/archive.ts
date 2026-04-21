import { ArchiveItem } from "@/lib/types";

export const archiveItems: ArchiveItem[] = [
  {
    id: "arc-001",
    title: "Port Photographs of Coastal Odisha",
    slug: "port-photographs-coastal-odisha",
    summary:
      "A curated image set documenting ports, harbours, and coastal labour histories in Odisha.",
    publishedAt: "2026-02-15",
    archiveType: "Image",
    mediaType: "image",
    rights: "For research and educational use with attribution.",
    provenance: "Institutional collection assembled through field documentation.",
    sourceCollection: "ORC Maritime Documentation Series",
    location: "Gopalpur, Paradeep, Dhamra",
    dateRange: "1950s–2020s",
    verticals: ["sea-and-state-oceanic-odisha"],
    fileUrl: "/docs/archive-guide.pdf"
  },
  {
    id: "arc-002",
    title: "Selected Oral Histories on Ritual and Public Memory",
    slug: "oral-histories-ritual-public-memory",
    summary:
      "Interview-based documentation of ritual memory, sacred routes, and community practices.",
    publishedAt: "2026-02-20",
    archiveType: "Oral History",
    mediaType: "audio",
    rights: "Restricted access; permissions apply.",
    provenance: "Recorded under ORC field documentation protocols.",
    sourceCollection: "Sacred Publics Oral History Collection",
    location: "Puri, Cuttack, Bhubaneswar",
    dateRange: "2024–2026",
    verticals: ["palimpsests-of-the-sacred", "orality-pothi-print-digitalscapes"],
    fileUrl: "/docs/archive-guide.pdf"
  },
  {
    id: "arc-003",
    title: "Historical Maps and Territorial Imagination in Odisha",
    slug: "historical-maps-territorial-imagination-odisha",
    summary:
      "Maps, district boundaries, route sketches, and public cartographies linked to regional memory and state formation.",
    publishedAt: "2026-01-30",
    archiveType: "Map",
    mediaType: "document",
    rights: "Usage subject to source collection terms.",
    provenance: "Compiled from gazetteers, public archives, and research reproductions.",
    sourceCollection: "Kalinga Cartographic Repository",
    location: "Odisha",
    dateRange: "Late 19th century–mid 20th century",
    verticals: ["kalinga-space-power-memory"],
    fileUrl: "/docs/archive-guide.pdf"
  }
];
