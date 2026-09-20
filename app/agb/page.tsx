import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { agb } from "@/content/legal";

export const metadata: Metadata = {
  title: `${agb.title.join(" ")} — VELYQO`,
  description: agb.metaDescription,
  alternates: { canonical: "/agb" },
};

export default function Page() {
  return <LegalPage document={agb} />;
}
