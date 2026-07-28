import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { DOCTORS } from "@/lib/site-data";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Doctors — Gravity Hospital & Research Centre" },
      { name: "description", content: "Meet the consultants and specialists at Gravity Hospital & Research Centre, Nigdi, PCMC, Pune." },
      { property: "og:title", content: "Doctors — Gravity Hospital" },
      { property: "og:description", content: "Experienced consultants and specialists across medicine, surgery, orthopaedics and more." },
    ],
  }),
  component: Doctors,
});

function Doctors() {
  const [md, ...rest] = DOCTORS;
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Consultants & Specialists"
        title={"Meet our medical team" as unknown as string}
        subtitle="Experienced consultants working together across specialities to deliver safe, evidence-based care."
        image={md.image}
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-16">
        <div className="rounded-3xl overflow-hidden bg-card border shadow-3d grid lg:grid-cols-[380px_1fr]">
          <div className="relative h-96 lg:h-auto">
            <img src={md.image} alt={md.name} className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="p-8 sm:p-10">
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">Head of Hospital</div>
            <h2 className="mt-2 font-display text-3xl font-bold">{md.name}</h2>
            <div className="text-primary">{md.role} · {md.speciality}</div>
            <p className="mt-4 text-muted-foreground leading-relaxed">{md.bio}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-16">
        <h3 className="font-display text-2xl font-bold">Consultants & Specialists</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((d) => (
            <div key={d.slug} className="card-3d rounded-2xl overflow-hidden border bg-card shadow-soft">
              <div className="relative h-64 overflow-hidden bg-muted">
                <img src={d.image} alt={d.name} className="h-full w-full object-cover" />
                <div className="absolute top-3 left-3 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                  {d.speciality}
                </div>
              </div>
              <div className="p-5">
                <div className="font-display text-lg font-semibold">{d.name}</div>
                <div className="text-sm text-primary">{d.role}</div>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{d.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
