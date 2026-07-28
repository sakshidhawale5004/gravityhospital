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
        eyebrow="24×7 Emergency & Critical Facility"
        title={f.name}
        subtitle={f.intro}
        image={f.image}
      >
        <AppointmentDialog>
          <Button size="lg" className="bg-gradient-brand text-white shadow-elegant hover:opacity-95 btn-3d font-semibold">Book Appointment</Button>
        </AppointmentDialog>
        <a href={`tel:${HOSPITAL.phones[0].replace(/\s/g, "")}`}>
          <Button size="lg" variant="outline" className="border-primary/30 btn-3d font-semibold"><Phone className="h-4 w-4 mr-2" /> Call now</Button>
        </a>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-16 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-10">
          {/* Detailed overview */}
          <div className="card-3d rounded-3xl border bg-card p-8 sm:p-10 shadow-soft">
            <div className="text-xs font-bold uppercase tracking-widest text-primary">Comprehensive Care Overview</div>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold">Why trust Gravity Hospital for {f.name}?</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed text-base">
              At Gravity Hospital & Research Centre in Nigdi, PCMC, our <strong>{f.name}</strong> unit is designed with patient safety, rapid response, and ethical clinical excellence at its core. We combine state-of-the-art medical technology with a mission-driven medical team working 24×7 to deliver immediate, life-saving care.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-base">
              Whether you are seeking routine consultation, emergency medical support, or specialized diagnostic assessment, our facility ensures transparent communication, seamless cashless insurance coordination, and family-centered support every step of the way.
            </p>

            <div className="mt-8 pt-8 border-t border-border/80">
              <div className="font-display text-lg font-semibold text-foreground">Dedicated Facility Features</div>
              <div className="mt-5 grid sm:grid-cols-2 gap-4">
                {f.features.map((it: string) => (
                  <div key={it} className="flex items-start gap-3 rounded-2xl bg-primary/5 p-4 border border-primary/10">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm font-semibold text-foreground">{it}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Patient Care Pathway */}
          <div className="card-3d rounded-3xl border bg-card p-8 sm:p-10 shadow-soft">
            <div className="text-xs font-bold uppercase tracking-widest text-primary">Patient Experience & Workflow</div>
            <h3 className="mt-2 font-display text-2xl font-bold">Our 4-Step Clinical Pathway</h3>
            <p className="mt-2 text-sm text-muted-foreground">Clear, structured protocols designed to minimize wait times and maximize recovery.</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {[
                { step: "01", title: "Immediate Triage & Intake", desc: "Rapid clinical assessment upon arrival by our qualified emergency or OPD nursing team." },
                { step: "02", title: "Precision Diagnostics", desc: "Quick access to on-site laboratory, ECG, X-ray, and ultrasound imaging for fast, accurate answers." },
                { step: "03", title: "Specialist Consultation", desc: "Direct evaluation by experienced consultants with transparent treatment options and billing clarity." },
                { step: "04", title: "Continued Aftercare", desc: "Comprehensive discharge summaries, medication guidance, and follow-up support for lasting recovery." },
              ].map((s) => (
                <div key={s.step} className="rounded-2xl border border-border/80 bg-muted/30 p-5 relative overflow-hidden">
                  <div className="font-display text-3xl font-extrabold text-primary/20 absolute top-3 right-4">{s.step}</div>
                  <div className="font-display font-bold text-foreground text-base relative z-10">{s.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed relative z-10">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ section */}
          <div className="card-3d rounded-3xl border bg-card p-8 sm:p-10 shadow-soft">
            <h3 className="font-display text-2xl font-bold">Frequently Asked Questions</h3>
            <div className="mt-6 space-y-4">
              {[
                {
                  q: `Is the ${f.name} available 24 hours a day, 7 days a week?`,
                  a: "Yes, our emergency rooms, ICU, trauma care, ambulance, and inpatient services operate continuously 24×7 including Sundays and public holidays.",
                },
                {
                  q: "How does cashless insurance billing work for this facility?",
                  a: "Gravity Hospital accepts all major private health insurances and TPA networks. Our dedicated insurance helpdesk assists with cashless pre-authorization and documentation.",
                },
                {
                  q: "Can family members accompany patients during treatment?",
                  a: "Yes, family support is vital. We provide clear visitation hours and comfortable attendant seating while ensuring sterile protocols in critical care areas.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="rounded-2xl border border-border/80 bg-background p-5">
                  <div className="font-semibold text-foreground text-sm sm:text-base">{faq.q}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right sticky sidebar */}
        <div className="space-y-6">
          <div className="rounded-3xl bg-gradient-brand text-white p-8 shadow-3d sticky top-32">
            <div className="text-xs font-bold uppercase tracking-widest text-white/80">Direct Assistance</div>
            <h3 className="mt-2 font-display text-2xl font-bold">Need {f.name} now?</h3>
            <p className="mt-3 text-sm text-white/90 leading-relaxed">{f.contact}</p>

            <div className="mt-6 pt-6 border-t border-white/20 space-y-3">
              <div className="text-xs font-semibold text-white/80 uppercase tracking-wider">Emergency Helplines</div>
              {HOSPITAL.phones.map((p) => (
                <a
                  key={p}
                  href={`tel:${p.replace(/\s/g, "")}`}
                  className="flex items-center justify-between rounded-xl bg-white/10 hover:bg-white/20 px-4 py-3 font-semibold transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 text-white" />
                    <span>{p}</span>
                  </span>
                  <span className="text-xs bg-white text-primary px-2.5 py-1 rounded-full font-bold">Call</span>
                </a>
              ))}
            </div>

            <a
              href={whatsappLink(`Hi Gravity Hospital, I need information or assistance regarding ${f.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full"
            >
              <Button className="w-full bg-white text-primary hover:bg-white/95 font-bold shadow-lg py-6 text-base">
                WhatsApp Emergency Desk
              </Button>
            </a>

            <div className="mt-6 text-center text-xs text-white/70">
              Address: Triveni Nagar Chowk, Nigdi, PCMC, Pune
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-20">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">Hospital Network</div>
            <h3 className="mt-1 font-display text-2xl font-bold">Explore other medical facilities</h3>
          </div>
          <Link to="/facilities" className="text-sm font-semibold text-primary hover:underline">View all facilities →</Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {related.map((r) => (
            <Link key={r.slug} to={`/facilities/${r.slug}`} className="card-3d rounded-3xl overflow-hidden border bg-card shadow-soft group">
              <div className="relative h-48 overflow-hidden bg-muted">
                <img src={r.image} alt={r.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                  24×7 Facility
                </div>
              </div>
              <div className="p-6">
                <div className="font-display text-lg font-bold group-hover:text-primary transition-colors">{r.name}</div>
                <div className="text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">{r.short}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
