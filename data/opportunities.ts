import { Opportunity } from "@/lib/types";

export const opportunities: Opportunity[] = [
  {
    id: "opp-001",
    title: "Research Fellowship 2026",
    slug: "research-fellowship-2026",
    summary:
      "Fellowship opportunity for early-career researchers working on Odisha-focused themes in the social sciences and allied humanities.",
    publishedAt: "2026-04-05",
    category: "Fellowship",
    deadline: "2026-05-31",
    eligibility:
      "Postgraduate degree with demonstrated research ability; preference for applicants with Odisha-related research experience.",
    applicationUrl: "https://example.org/apply",
    documents: ["/docs/fellowship-guidelines.pdf", "/docs/application-template.pdf"]
  },
  {
    id: "opp-002",
    title: "Research Consultant Call: Archive Documentation",
    slug: "research-consultant-call-archive-documentation",
    summary:
      "Call for consultants with expertise in metadata, heritage documentation, oral history, and archive workflows.",
    publishedAt: "2026-04-07",
    category: "Research Consultant Call",
    deadline: "2026-05-15",
    eligibility:
      "Relevant postgraduate qualification and demonstrable experience in documentation, editorial work, archive management, or allied research practice.",
    applicationUrl: "https://example.org/consultants",
    documents: ["/docs/research-consultant-guidelines.pdf"]
  },
  {
    id: "opp-003",
    title: "Recruitment: Research Officer",
    slug: "recruitment-research-officer",
    summary:
      "Institutional recruitment for a full-time research officer to support projects, publications, and research administration.",
    publishedAt: "2026-04-10",
    category: "Recruitment",
    deadline: "2026-05-20",
    eligibility:
      "Master’s degree with strong research, writing, and documentation skills; prior institutional experience desirable.",
    applicationUrl: "https://example.org/recruitment",
    documents: ["/docs/recruitment-research-officer.pdf"]
  }
];
