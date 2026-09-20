import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { impressum } from "@/content/legal";

export const metadata: Metadata = {
  title: `${impressum.title.join(" ")} — VELYQO`,
  description: impressum.metaDescription,
  alternates: { canonical: "/impressum" },
};

export default function Page() {
  return <LegalPage document={impressum} />;
}
