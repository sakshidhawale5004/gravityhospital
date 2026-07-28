import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SERVICES, whatsappLink } from "@/lib/site-data";
import { AppointmentDialog } from "@/components/site/AppointmentDialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Stethoscope, Activity } from "lucide-react";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] };
    const s = loaderData.service;
    return {
      meta: [
        { title: `${s.name} — Gravity Hospital & Research Centre` },
        { name: "description", content: s.intro.slice(0, 155) },
        { property: "og:title", content: `${s.name} — Gravity Hospital` },
        { property: "og:description", content: s.short },
        { property: "og:image", content: s.image },
        { name: "twitter:image", content: s.image },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service: s } = Route.useLoaderData();
  const related = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <SiteLayout>
      <PageHero
        eyebrow={`${s.icon}  Speciality`}
        title={s.name}
        subtitle={s.intro}
        image={s.image}
      >
        <AppointmentDialog>
          <Button size="lg" className="bg-gradient-brand text-white shadow-elegant">Book Appointment</Button>
        </AppointmentDialog>
        <a href={whatsappLink(`Hi, I'd like to enquire about ${s.name}.`)} target="_blank" rel="noopener noreferrer">
          <Button size="lg" variant="outline" className="border-primary/30">WhatsApp Enquiry</Button>
        </a>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-14 grid lg:grid-cols-3 gap-8">
        <Panel title="Highlights" icon={CheckCircle2} items={s.highlights} />
        <Panel title="Procedures & investigations" icon={Stethoscope} items={s.procedures} />
        <Panel title="Common conditions" icon={Activity} items={s.conditions} />
      </section>

      {/* Department Capabilities & 24×7 Diagnostic Backing */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 my-6">
        <div className="rounded-3xl border border-border/80 bg-card p-8 sm:p-10 shadow-soft">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10">
              Department Capabilities
            </div>
            <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-foreground">
              Why Patients Choose Our {s.name} Department
            </h3>
            <p className="mt-2 text-muted-foreground text-sm sm:text-base leading-relaxed">
              We combine compassionate specialist counseling with modern medical infrastructure for accurate diagnosis and faster healing.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-muted/40 p-5 border border-border/50">
              <div className="text-xl font-bold text-primary">01. Specialist Roster</div>
              <h4 className="mt-2 font-display font-semibold text-foreground">Experienced Consultants</h4>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Dedicated OPD consultations and round-the-clock emergency on-call availability for acute admissions.
              </p>
            </div>

            <div className="rounded-2xl bg-muted/40 p-5 border border-border/50">
              <div className="text-xl font-bold text-primary">02. 24×7 Diagnostics</div>
              <h4 className="mt-2 font-display font-semibold text-foreground">In-House Laboratory & Imaging</h4>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Supported by our 24×7 CT Scan, Digital X-Ray, 2D-Echo, Ultrasound, and fully automated Pathology lab.
              </p>
            </div>

            <div className="rounded-2xl bg-muted/40 p-5 border border-border/50">
              <div className="text-xl font-bold text-primary">03. ICU & Critical Care</div>
              <h4 className="mt-2 font-display font-semibold text-foreground">Intensive Monitoring</h4>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Seamless transfer to our 10-bed ICU for high-risk patients requiring continuous multi-parameter monitoring.
              </p>
            </div>

            <div className="rounded-2xl bg-muted/40 p-5 border border-border/50">
              <div className="text-xl font-bold text-primary">04. Cashless Support</div>
              <h4 className="mt-2 font-display font-semibold text-foreground">Empanelled with Major TPAs</h4>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                We accept cashless health insurance policies and corporate TPA cards for surgeries and inpatient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect During Your Consultation */}
      <section className="bg-muted/30 border-y border-border/60 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10">
              Patient Guide
            </div>
            <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-foreground">
              What to Expect During Your {s.name} Visit
            </h3>
            <p className="mt-2 text-muted-foreground text-sm sm:text-base">
              A step-by-step overview of our consultation, diagnostic, and treatment process.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-soft">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Before Your Visit</span>
              <h4 className="mt-2 font-display text-lg font-bold text-foreground">What to Bring</h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Please bring any past medical records, recent laboratory reports, X-rays/scans, current medications list, and your health insurance/Aadhaar card.
              </p>
            </div>

            <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-soft">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">During Consultation</span>
              <h4 className="mt-2 font-display text-lg font-bold text-foreground">Thorough Assessment</h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Your consultant will take a detailed medical history, perform a physical evaluation, and explain any diagnostic tests required in clear, simple language.
              </p>
            </div>

            <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-soft">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">After Consultation</span>
              <h4 className="mt-2 font-display text-lg font-bold text-foreground">Transparent Care Plan</h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                You will receive a written prescription, clear dietary and lifestyle recommendations, and a personalized follow-up schedule or procedure roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="rounded-3xl bg-gradient-brand text-white p-8 sm:p-12 shadow-3d grid lg:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold">Consult the {s.name} team</h2>
            <p className="mt-2 text-white/85 max-w-lg">Request an appointment with department, preferred date and time — we confirm on WhatsApp.</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <AppointmentDialog>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-7">Book Appointment</Button>
            </AppointmentDialog>
            <a href={whatsappLink(`Hi, I'd like to enquire about ${s.name}.`)} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-7">WhatsApp</Button>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <h3 className="font-display text-2xl font-bold">Related specialities</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {related.map((r) => (
            <Link key={r.slug} to={`/services/${r.slug}`} className="card-3d flex flex-col justify-between rounded-2xl overflow-hidden border border-border/80 bg-card shadow-soft hover:shadow-3d hover:border-primary/40 transition-all duration-300 group">
              <div className="relative h-44 overflow-hidden bg-muted">
                <img src={r.image} alt={r.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-0.5 text-lg shadow-sm">{r.icon}</div>
              </div>
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="font-display font-bold text-base group-hover:text-primary transition-colors">{r.name}</div>
                  <div className="text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-2">{r.short}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

function Panel({ title, icon: Icon, items }: { title: string; icon: any; items: string[] }) {
  return (
    <div className="card-3d rounded-2xl border bg-card p-6 shadow-soft">
      <div className="flex items-center gap-2 text-primary"><Icon className="h-5 w-5" /><div className="font-display text-lg font-semibold">{title}</div></div>
      <ul className="mt-4 grid gap-2">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-sm">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-brand" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
