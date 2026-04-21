import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { SectionIntro } from "@/components/sections/section-intro";
import { PublicationListItem } from "@/components/cards/publication-list-item";
import { EventCard } from "@/components/cards/event-card";
import { AnnouncementCard } from "@/components/cards/announcement-card";
import { ArchiveCard } from "@/components/cards/archive-card";
import { PartnerStrip } from "@/components/sections/partner-strip";
import { NewsletterBlock } from "@/components/sections/newsletter-block";
import { QuoteBlock } from "@/components/sections/quote-block";
import { publications } from "@/data/publications";
import { events } from "@/data/events";
import { announcements } from "@/data/announcements";
import { archiveItems } from "@/data/archive";
import { verticals } from "@/data/verticals";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Odisha Research Centre"
        subtitle="An ICSSR-recognized interdisciplinary institution advancing Odisha-focused research, archives, publishing, and public knowledge."
        ctaPrimary={{ href: "/research", label: "Explore Research" }}
        ctaSecondary={{ href: "/opportunities", label: "Current Opportunities" }}
      />

      <section className="container-shell section-pad">
        <SectionIntro
          kicker="Institutional Mandate"
          title="Research, archives, and public programmes in one coherent knowledge system"
          description="ORC is framed here as a high-trust institutional platform that supports scholarship, editorial publishing, public engagement, archival work, and governance visibility."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Interdisciplinary research on Odisha",
            "Metadata-led publication workflows",
            "Archive-linked knowledge discovery",
            "Transparent governance and public information"
          ].map((item) => (
            <div key={item} className="panel p-5">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell section-pad">
        <SectionIntro
          kicker="Research Verticals"
          title="A structured research architecture"
          description="Each vertical is designed as an entry point that can connect projects, publications, archive items, events, people, and future agendas."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {verticals.map((vertical) => (
            <Link
              key={vertical.id}
              href={`/research/${vertical.slug}`}
              className="panel block p-6 no-underline hover:border-laterite"
            >
              <h3>{vertical.title}</h3>
              <p className="mt-3 text-slate">{vertical.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-shell section-pad">
        <SectionIntro
          kicker="Featured Publications"
          title="Editorial outputs with strong metadata"
          description="The publication layer is designed list-first, with explicit type, date, linked verticals, and download actions."
        />
        <div className="grid gap-4">
          {publications.slice(0, 3).map((item) => (
            <PublicationListItem key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="container-shell section-pad">
        <SectionIntro
          kicker="Current Projects and Events"
          title="Programmes in motion"
          description="Use this area to surface seminars, workshops, lecture series, and ongoing public-facing research activity."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {events.slice(0, 4).map((item) => (
            <EventCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="container-shell section-pad">
        <SectionIntro
          kicker="Announcements"
          title="Latest notices and institutional updates"
          description="Notices, tenders, circulars, and urgent updates are surfaced compactly for quick public access."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {announcements.slice(0, 4).map((item) => (
            <AnnouncementCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="container-shell section-pad">
        <SectionIntro
          kicker="Archive Highlight"
          title="Mixed-media discovery built for long-term growth"
          description="The archive layer is designed for images, documents, oral histories, maps, and other mixed-media assets with provenance and rights metadata."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {archiveItems.map((item) => (
            <ArchiveCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="container-shell section-pad">
        <QuoteBlock
          quote="The site is designed as a durable institutional front-end, not just a brochure, and can later connect cleanly to a structured CMS."
          attribution="Demo framing note"
        />
      </section>

      <PartnerStrip />
      <NewsletterBlock />
    </>
  );
}
