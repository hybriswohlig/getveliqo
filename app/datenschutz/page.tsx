import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { datenschutz } from "@/content/legal";

export const metadata: Metadata = {
  title: `${datenschutz.title.join(" ")} — VELYQO`,
  description: datenschutz.metaDescription,
  alternates: { canonical: "/datenschutz" },
};

export default function Page() {
  return <LegalPage document={datenschutz} />;
}
