import { Announcement } from "@/lib/types";

export const announcements: Announcement[] = [
  {
    id: "ann-001",
    title: "Call for Research Fellows 2026",
    slug: "call-for-research-fellows-2026",
    summary:
      "Applications invited for thematic research fellowships aligned to ORC’s core research verticals.",
    publishedAt: "2026-04-05",
    category: "Notice",
    priority: "High",
    link: "/opportunities"
  },
  {
    id: "ann-002",
    title: "Tender Notice for Website Development Support",
    slug: "tender-notice-website-development-support",
    summary:
      "Notice regarding procurement and implementation support for institutional web development and digital infrastructure.",
    publishedAt: "2026-04-02",
    category: "Tender",
    priority: "Important",
    link: "/announcements"
  },
  {
    id: "ann-003",
    title: "Office Order: Editorial Submission Workflow",
    slug: "office-order-editorial-submission-workflow",
    summary:
      "Internal publication and metadata review workflow for institutional outputs.",
    publishedAt: "2026-03-25",
    category: "Circular",
    priority: "Normal",
    link: "/governance"
  },
  {
    id: "ann-004",
    title: "Important Update: ORC Annual Report Released",
    slug: "important-update-orc-annual-report-released",
    summary:
      "The institutional annual report for 2025–26 is now available for download.",
    publishedAt: "2026-04-01",
    category: "Update",
    priority: "Important",
    link: "/publications/annual-report-2025-26"
  }
];
