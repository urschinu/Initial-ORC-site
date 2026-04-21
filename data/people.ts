import { Person } from "@/lib/types";

export const people: Person[] = [
  {
    id: "prs-001",
    title: "Prof. Chandi Prasad Nanda",
    slug: "prof-chandi-prasad-nanda",
    summary:
      "Historian, institutional leader, and public intellectual working across history, theory, archives, and regional thought.",
    publishedAt: "2026-01-01",
    role: "Director",
    affiliation: "Odisha Research Centre",
    expertise: ["Modern Indian History", "Regional Thought", "Archives", "Planetary History"],
    email: "director@odisharesearchcentre.org",
    verticals: [
      "kalinga-space-power-memory",
      "orality-pothi-print-digitalscapes",
      "climate-history-anthropocene-habitability"
    ]
  },
  {
    id: "prs-002",
    title: "Dr. Amrita Nayak",
    slug: "dr-amrita-nayak",
    summary:
      "Researcher focusing on littoral governance, coastal archives, and policy-facing historical analysis.",
    publishedAt: "2026-01-01",
    role: "Research Fellow",
    affiliation: "Odisha Research Centre",
    expertise: ["Coastal Governance", "Policy Analysis", "Blue Economy"],
    email: "research@odisharesearchcentre.org",
    verticals: ["sea-and-state-oceanic-odisha", "climate-history-anthropocene-habitability"]
  },
  {
    id: "prs-003",
    title: "Dr. S. K. Dash",
    slug: "dr-sk-dash",
    summary:
      "Scholar of community institutions, public policy, and field-based documentation in Odisha.",
    publishedAt: "2026-01-01",
    role: "Research Associate",
    affiliation: "Odisha Research Centre",
    expertise: ["Commons", "Fieldwork", "Social Policy"],
    verticals: ["communities-caste-commons"]
  },
  {
    id: "prs-004",
    title: "Editorial and Archive Team",
    slug: "editorial-and-archive-team",
    summary:
      "A cross-functional team handling metadata, publication workflows, archive documentation, and public-facing knowledge outputs.",
    publishedAt: "2026-01-01",
    role: "Institutional Team",
    affiliation: "Odisha Research Centre",
    expertise: ["Metadata", "Editorial Workflows", "Archive Curation", "Publishing"],
    verticals: ["orality-pothi-print-digitalscapes", "palimpsests-of-the-sacred"]
  }
];
