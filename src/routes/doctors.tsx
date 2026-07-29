import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { DOCTORS, whatsappLink } from "@/lib/site-data";
import { AppointmentDialog } from "@/components/site/AppointmentDialog";
import { Button } from "@/components/ui/button";
import { Stethoscope, Award, Calendar, ArrowRight } from "lucide-react";

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
        eyebrow="Consultants & Medical Leadership"
        title={"Meet our expert medical team" as unknown as string}
        subtitle="Experienced consultants and surgeons working collaboratively across 12+ specialities to deliver evidence-based, compassionate hospital care."
        image="/doctorpage-herosectioimage.png"
      />

      {/* Managing Director & Head of Hospital Spotlight */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="rounded-3xl overflow-hidden bg-card border border-border/80 shadow-3d grid lg:grid-cols-[420px_1fr]">
          <div className="p-6 sm:p-8 flex items-center justify-center bg-gradient-to-br from-primary/5 via-muted/30 to-background border-b lg:border-b-0 lg:border-r border-border/60">
            <div className="relative w-full max-w-sm aspect-[4/5] overflow-hidden rounded-2xl shadow-3d border-4 border-white group">
              <img
                src={md.image}
                alt={md.name}
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 rounded-full bg-primary text-white px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-md">
                Managing Director
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                <Award className="h-3.5 w-3.5" /> Leadership & Medical Direction
              </div>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-foreground">
                {md.name}
              </h2>
              <div className="mt-1 text-base font-semibold text-primary">
                {md.role} · {md.speciality}
              </div>

              <p className="mt-6 text-muted-foreground leading-relaxed text-base">
                {md.bio}
              </p>

              <div className="mt-6 rounded-2xl bg-primary/5 p-5 border border-primary/15">
                <div className="font-semibold text-foreground text-sm">
                  "Our mission at Gravity Hospital is to bring world-class healthcare within reach of every family in PCMC—delivered with transparency, ethics, and genuine empathy."
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/80 flex flex-wrap items-center gap-4">
              <AppointmentDialog>
                <Button size="lg" className="bg-gradient-brand text-white shadow-elegant hover:opacity-95 btn-3d font-semibold px-7">
                  <Calendar className="h-4 w-4 mr-2" /> Book Consultation
                </Button>
              </AppointmentDialog>
              <a
                href={whatsappLink(`Hi Gravity Hospital, I would like to enquire about an appointment with ${md.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-primary/30 btn-3d font-semibold">
                  WhatsApp Enquiry
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Consultants & Specialists Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20 mb-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-primary">Our Specialists</div>
            <h3 className="mt-1 font-display text-3xl font-bold">Consultants & Specialities</h3>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            All our consultants are experienced practitioners with hospital residency and surgical credentials.
          </p>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((d) => (
            <div
              key={d.slug}
              className="group card-3d rounded-3xl overflow-hidden border border-border/80 bg-card p-4 sm:p-5 shadow-soft hover:shadow-3d hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-primary/5 to-muted border border-border/40">
                  <img
                    src={d.image}
                    alt={d.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary shadow-sm backdrop-blur-sm">
                    {d.speciality}
                  </div>
                </div>

                <div className="mt-5 px-1">
                  <h4 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {d.name}
                  </h4>
                  <div className="text-xs font-bold uppercase tracking-wider text-primary mt-1">
                    {d.role}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {d.bio}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 px-1 flex items-center justify-between">
                <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
                  <Stethoscope className="h-3.5 w-3.5 text-primary" /> OPD & Inpatient
                </span>
                <AppointmentDialog>
                  <Button size="sm" variant="outline" className="text-xs font-bold border-primary/30 hover:bg-primary hover:text-white transition-colors">
                    Book Appointment →
                  </Button>
                </AppointmentDialog>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
