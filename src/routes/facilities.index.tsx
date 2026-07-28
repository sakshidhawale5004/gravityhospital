import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { FACILITIES } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/facilities/")({
  head: () => ({
    meta: [
      { title: "24×7 Facilities — Gravity Hospital & Research Centre" },
      { name: "description", content: "24×7 ICU, IPD, Emergency OPD, Pharmacy, Laboratory, CT Scan and Ambulance at Gravity Hospital." },
      { property: "og:title", content: "24×7 Facilities — Gravity Hospital" },
      { property: "og:description", content: "Round-the-clock hospital facilities in Nigdi, PCMC, Pune." },
    ],
  }),
  component: FacilitiesIndex,
});

function FacilitiesIndex() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="24×7 Facilities"
        title="Facilities that never sleep"
        subtitle="Round-the-clock support systems — from ICU to ambulance — that keep our specialities working seamlessly."
        image="/FACILITIES/ICU.jpg"
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 my-6 sm:my-12">
        <div className="grid gap-7 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((f) => (
            <Link
              key={f.slug}
              to={`/facilities/${f.slug}`}
              className="group card-3d flex flex-col rounded-2xl overflow-hidden border border-border/80 bg-card shadow-soft hover:shadow-3d hover:border-primary/40 transition-all duration-300 h-full"
            >
              <div className="relative h-52 overflow-hidden bg-muted">
                <img src={f.image} alt={f.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-3 left-4 text-xs font-semibold text-white/90 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md">
                  24×7 Facility
                </div>
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">{f.name}</h3>
                  <p className="mt-2.5 text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-2">{f.short}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-sm font-semibold text-primary group-hover:text-primary transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
