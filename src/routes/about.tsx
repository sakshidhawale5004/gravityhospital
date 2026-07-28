import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { HOSPITAL, DOCTORS } from "@/lib/site-data";
import { SectionHeader } from "./index";
import { Heart, ShieldCheck, Users, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Gravity Hospital & Research Centre" },
      { name: "description", content: "Learn about Gravity Hospital & Research Centre in Nigdi, PCMC, Pune — our mission, leadership and values." },
      { property: "og:title", content: "About Gravity Hospital & Research Centre" },
      { property: "og:description", content: "A modern multi-speciality hospital in Nigdi, PCMC, Pune committed to compassionate, high-quality care." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title={"A modern hospital with a family heart" as unknown as string}
        subtitle={`${HOSPITAL.full} is a multi-speciality hospital in Nigdi, PCMC, Pune, built to deliver advanced medical care with compassion, transparency and trust.`}
        image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-16 grid lg:grid-cols-2 gap-10">
        <div>
          <SectionHeader eyebrow="Our Story" title="Care that starts with listening" />
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Gravity Hospital & Research Centre was founded to make advanced healthcare accessible to families in PCMC and beyond.
            From routine OPD visits to critical emergencies, our team focuses on one thing — treating every patient the way we would treat our own family.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We invest continuously in equipment, training and clinical protocols, so patients get the right diagnosis, timely intervention and clear communication throughout their journey.
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-3d tilt">
          <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1400&q=80" alt="Hospital" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Heart, t: "Mission", d: "Compassionate, transparent, evidence-based healthcare for every patient." },
            { icon: ShieldCheck, t: "Vision", d: "A trusted multi-speciality institution known for outcomes and empathy." },
            { icon: Users, t: "Values", d: "Respect, safety, teamwork and continuous learning." },
            { icon: Award, t: "Recognitions", d: "Honoured with the Samajratna Puraskar for community service." },
          ].map((x) => (
            <div key={x.t} className="card-3d rounded-2xl border bg-card p-6 shadow-soft">
              <x.icon className="h-7 w-7 text-primary" />
              <div className="mt-3 font-display text-lg font-semibold">{x.t}</div>
              <div className="text-sm text-muted-foreground mt-1">{x.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-20">
        <div className="rounded-3xl overflow-hidden bg-card border shadow-3d grid lg:grid-cols-2">
          <div className="relative h-80 lg:h-auto">
            <img src={DOCTORS[0].image} alt={DOCTORS[0].name} className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="p-8 sm:p-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">Leadership</div>
            <h2 className="mt-2 font-display text-3xl font-bold">{DOCTORS[0].name}</h2>
            <div className="text-primary">{DOCTORS[0].role}</div>
            <p className="mt-4 text-muted-foreground leading-relaxed">{DOCTORS[0].bio}</p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Under his leadership, Gravity Hospital continues to expand services and build a team united by empathy and excellence.
            </p>
            <Link to="/doctors" className="mt-6 inline-block text-primary font-medium">Meet the full medical team →</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
