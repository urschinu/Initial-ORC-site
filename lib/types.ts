export type VerticalKey =
  | "kalinga-space-power-memory"
  | "sea-and-state-oceanic-odisha"
  | "orality-pothi-print-digitalscapes"
  | "palimpsests-of-the-sacred"
  | "communities-caste-commons"
  | "climate-history-anthropocene-habitability";

export interface Seo {
  title: string;
  description: string;
  image?: string;
}

export interface BaseEntity {
  id: string;
  title: string;
  slug: string;
  summary: string;
  publishedAt: string;
  updatedAt?: string;
  seo?: Seo;
}

export interface ResearchVertical extends BaseEntity {
  key: VerticalKey;
  whyItMatters: string;
  subThemes: string[];
  methods: string[];
  outputs: string[];
  partners: string[];
  archiveRelation: string;
  futureAgenda: string;
}

export interface Publication extends BaseEntity {
  format: "Working Paper" | "Policy Brief" | "Book" | "Proceedings" | "Annual Report" | "Lecture Text";
  authors: string[];
  year: number;
  citation: string;
  abstract: string;
  pdfUrl: string;
  verticals: VerticalKey[];
  themes: string[];
}

export interface Event extends BaseEntity {
  startDate: string;
  endDate?: string;
  venue: string;
  mode: "Online" | "Offline" | "Hybrid";
  registrationUrl?: string;
  speakers: string[];
  verticals: VerticalKey[];
  status: "Upcoming" | "Past";
}

export interface Person extends BaseEntity {
  role: string;
  affiliation: string;
  expertise: string[];
  email?: string;
  verticals: VerticalKey[];
}

export interface Announcement extends BaseEntity {
  category: "Notice" | "Tender" | "Circular" | "Update";
  priority: "Normal" | "Important" | "High";
  link?: string;
}

export interface Opportunity extends BaseEntity {
  category: "Fellowship" | "Internship" | "Recruitment" | "Research Consultant Call" | "Call for Papers" | "Call for Proposals";
  deadline: string;
  eligibility: string;
  applicationUrl?: string;
  documents: string[];
}

export interface ArchiveItem extends BaseEntity {
  archiveType: "Oral History" | "Image" | "Audio-Visual" | "Document" | "Map" | "Heritage Documentation";
  mediaType: "audio" | "video" | "image" | "document" | "mixed";
  rights: string;
  provenance: string;
  sourceCollection: string;
  location: string;
  dateRange: string;
  verticals: VerticalKey[];
  fileUrl?: string;
}

export interface Partner {
  id: string;
  name: string;
  description: string;
  href?: string;
}

export interface GovernanceDocument {
  id: string;
  title: string;
  type: "Policy" | "Annual Report" | "Compliance" | "Administrative Document";
  year: number;
  fileUrl: string;
}
