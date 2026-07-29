import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Direct static image paths that work cleanly across local and Vercel deployments
const rawGalleryImages = [
  "/gravity/gravity (4).jpg",
  "/gravity/gravity (3).jpg",
  ...Array.from(
    { length: 32 },
    (_, i) => `/gallery/gallerypageimagesdon'taddinotherpages (${i + 1}).jpeg`
  ),
];

const galleryImages = rawGalleryImages.map((p) => encodeURI(p));

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
        subtitle="Facilities, leadership moments and community highlights from Gravity Hospital & Research Centre."
        image="/gallery-heroimage.jpeg"
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(src)}
              className="group card-3d overflow-hidden rounded-3xl border border-border/80 bg-card p-3 sm:p-3.5 shadow-soft hover:shadow-3d hover:border-primary/40 transition-all duration-300 text-left"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted">
                <img
                  src={src}
                  alt={`Gravity Hospital gallery photo ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs font-semibold text-white bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                    Click to view fullscreen
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl bg-transparent border-0 p-0 shadow-none">
          {active && <img src={active} alt="Gallery view" className="w-full h-auto rounded-2xl shadow-3d" />}
        </DialogContent>
      </Dialog>
    </SiteLayout>
  );
}
