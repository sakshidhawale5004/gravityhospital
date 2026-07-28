import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Import all gallery asset pointers
const modules = import.meta.glob<{ default: { url: string } }>(
  "@/assets/gallery/*.asset.json",
  { eager: true }
);
const galleryImages = Object.entries(modules)
  .sort(([a], [b]) => {
    const na = parseInt(a.match(/g(\d+)/)?.[1] ?? "0");
    const nb = parseInt(b.match(/g(\d+)/)?.[1] ?? "0");
    return na - nb;
  })
  .map(([, m]) => m.default.url);

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Gravity Hospital & Research Centre" },
      { name: "description", content: "Photos from Gravity Hospital & Research Centre — facility, events and moments." },
      { property: "og:title", content: "Gallery — Gravity Hospital" },
      { property: "og:description", content: "A visual look inside Gravity Hospital & Research Centre, Nigdi, PCMC, Pune." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Gallery"
        title={"A look inside Gravity Hospital" as unknown as string}
        subtitle="Facilities, moments and community highlights from Gravity Hospital & Research Centre."
        image={galleryImages[0]}
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-14">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {galleryImages.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(src)}
              className="mb-4 block w-full break-inside-avoid rounded-2xl overflow-hidden border bg-card shadow-soft card-3d group"
            >
              <img
                src={src}
                alt={`Gravity Hospital gallery ${i + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </section>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl bg-transparent border-0 p-0 shadow-none">
          {active && <img src={active} alt="Gallery" className="w-full h-auto rounded-2xl shadow-3d" />}
        </DialogContent>
      </Dialog>
    </SiteLayout>
  );
}
