import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Glow } from "@/components/ui/glow";
import type { LegalDocument } from "@/content/legal";

// Figma frames "VELYQO Impressum - DE Desktop" (82:653) and "VELYQO AGB — DE
// Desktop" (80:8): a centred title above an 800px numbered reading column.
export function LegalPage({ document }: { document: LegalDocument }) {
  const { title, lead, sections } = document;

  return (
    <>
      <div className="relative overflow-hidden bg-night">
        <Glow x={-100} y={150} width={700} height={600} color="var(--color-glow-pink)" opacity={0.102} blur={60} />
        <Glow x={850} y={50} width={700} height={650} color="var(--color-lime)" opacity={0.0784} blur={70} />

        <SiteHeader />

        <main className="relative mx-auto max-w-[1440px]">
          <header className="flex flex-col items-center gap-4 px-5 pt-16 pb-10 text-center md:px-10 lg:px-20 lg:pt-[172px]">
            <p className="text-[13px] leading-auto font-extrabold text-lime uppercase">Legal</p>
            <h1 className="font-outfit text-[clamp(32px,3.889vw,56px)] leading-[1.1] font-black text-white">
              {title.map((line) => (
                <span key={line} className="block max-md:hyphens-auto">
                  {line}
                </span>
              ))}
            </h1>
            {lead ? <p className="max-w-[640px] text-[14px] leading-[1.6] text-white/70">{lead}</p> : null}
          </header>

          <div className="mx-auto w-full max-w-[800px] px-5 pt-10 pb-[100px] md:px-10 lg:px-0 lg:pt-[60px]">
            <div className="flex flex-col border-t border-white/12">
              {sections.map((section) => (
                <section
                  key={section.number}
                  aria-labelledby={`section-${section.number}`}
                  className="flex gap-4 border-b border-white/12 pt-[34px] pb-[42px] md:gap-8"
                >
                  <p className="w-9 shrink-0 text-[16px] leading-auto font-bold text-lime tabular-nums md:w-[60px]">
                    {section.number}
                  </p>
                  <div className="flex min-w-0 flex-1 flex-col gap-[14px]">
                    <h2
                      id={`section-${section.number}`}
                      className="text-[21px] leading-[1.25] font-bold text-white max-md:text-[19px]"
                    >
                      {section.title}
                    </h2>
                    <div className="flex flex-col gap-5 text-[16px] leading-[1.65] text-white/70">
                      {section.body.map((block) =>
                        typeof block === "string" ? (
                          <p key={block.slice(0, 32)}>{block}</p>
                        ) : (
                          <p key={block[0]}>
                            {block.map((line) => (
                              <span key={line} className="block">
                                {line}
                              </span>
                            ))}
                          </p>
                        ),
                      )}
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </main>
      </div>
      <SiteFooter />
    </>
  );
}
