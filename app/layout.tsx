import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { UtilityNav } from "@/components/layout/utility-nav";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <UtilityNav />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
