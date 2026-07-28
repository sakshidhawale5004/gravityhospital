import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { FACILITIES, HOSPITAL, whatsappLink } from "@/lib/site-data";
import { AppointmentDialog } from "@/components/site/AppointmentDialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone } from "lucide-react";

export const Route = createFileRoute("/facilities/$slug")({
  loader: ({ params }) => {
    const facility = FACILITIES.find((f) => f.slug === params.slug);
    if (!facility) throw notFound();
    return { facility };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Facility not found" }, { name: "robots", content: "noindex" }] };
    const f = loaderData.facility;
    return {
      meta: [
        { title: `${f.name} — Gravity Hospital & Research Centre` },
        { name: "description", content: f.intro.slice(0, 155) },
        { property: "og:title", content: `${f.name} — Gravity Hospital` },
        { property: "og:description", content: f.short },
        { property: "og:image", content: f.image },
        { name: "twitter:image", content: f.image },
      ],
    };
  },
  component: FacilityDetail,
});

function FacilityDetail() {
  const { facility: f } = Route.useLoaderData();
  const related = FACILITIES.filter((x) => x.slug !== f.slug).slice(0, 3);

  return (
    <SiteLayout>
      <PageHero
        eyebrow={`${f.icon}  Facility · 24×7`}
        title={f.name}
        subtitle={f.intro}
        image={f.image}
      >
        <AppointmentDialog>
          <Button size="lg" className="bg-gradient-brand text-white shadow-elegant">Book Appointment</Button>
        </AppointmentDialog>
        <a href={`tel:${HOSPITAL.phones[0].replace(/\s/g, "")}`}>
          <Button size="lg" variant="outline" className="border-primary/30"><Phone className="h-4 w-4 mr-2" /> Call now</Button>
        </a>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-14 grid lg:grid-cols-2 gap-8">
        <div className="card-3d rounded-2xl border bg-card p-6 shadow-soft">
          <div className="font-display text-lg font-semibold text-primary">Key features</div>
          <ul className="mt-4 grid gap-3">
            {f.features.map((it: string) => (
              <li key={it} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-gradient-brand text-white p-6 shadow-3d">
          <div className="text-xs font-semibold uppercase tracking-widest text-white/80">How to reach</div>
          <p className="mt-3 leading-relaxed">{f.contact}</p>
          <div className="mt-4 grid gap-2">
            {HOSPITAL.phones.map((p) => (
              <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="flex items-center gap-2 font-semibold"><Phone className="h-4 w-4" />{p}</a>
            ))}
          </div>
          <a href={whatsappLink(`Hi, I need information about ${f.name}.`)} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex">
            <Button className="bg-white text-primary hover:bg-white/90">WhatsApp Us</Button>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-16">
        <h3 className="font-display text-2xl font-bold">Other facilities</h3>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {related.map((r) => (
            <Link key={r.slug} to={`/facilities/${r.slug}`} className="card-3d rounded-2xl overflow-hidden border bg-card shadow-soft group">
              <div className="relative h-36 overflow-hidden">
                <img src={r.image} alt={r.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-4">
                <div className="font-semibold">{r.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{r.short}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
