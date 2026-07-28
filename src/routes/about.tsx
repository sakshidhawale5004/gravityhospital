import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { HOSPITAL, DOCTORS, whatsappLink } from "@/lib/site-data";
import { SectionHeader } from "./index";
import { Heart, ShieldCheck, Users, Award, Stethoscope, Clock, Activity, CheckCircle2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppointmentDialog } from "@/components/site/AppointmentDialog";

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
  const md = DOCTORS[0];

  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us · Gravity Hospital & Research Centre"
        title={"Advanced multi-speciality healthcare with a family heart" as unknown as string}
        subtitle={`${HOSPITAL.full} in Nigdi, PCMC, Pune is built to deliver ethical, evidence-based medical care with transparency, compassion, and uncompromising clinical standards.`}
        image="/hospitalnewimage.jpeg"
      />

      {/* Founder & Managing Director Spotlight */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-16">
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
                <Award className="h-3.5 w-3.5" /> A Message From Our Leadership
              </div>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-foreground">
                {md.name}
              </h2>
              <div className="mt-1 text-base font-semibold text-primary">
                {md.role} · {md.speciality}
              </div>

              <p className="mt-6 text-muted-foreground leading-relaxed text-base">
                "At Gravity Hospital & Research Centre, our greatest happiness is seeing our patients recover safely and return home with a smile. We founded this institution with a singular promise: to bring metropolitan-grade medical excellence and advanced surgery to PCMC without ever losing the warmth, empathy, and honesty of a family hospital."
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed text-base">
                {md.bio}
              </p>

              <div className="mt-6 rounded-2xl bg-primary/5 p-5 border border-primary/15">
                <div className="font-semibold text-foreground text-sm">
                  Our hospital stands on four pillars: ethical practice, transparent billing, 24×7 emergency readiness, and clinical teamwork.
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/80 flex flex-wrap items-center gap-4">
              <AppointmentDialog>
                <Button size="lg" className="bg-gradient-brand text-white shadow-elegant hover:opacity-95 btn-3d font-semibold px-7">
                  <Calendar className="h-4 w-4 mr-2" /> Book Appointment
                </Button>
              </AppointmentDialog>
              <Link to="/doctors">
                <Button size="lg" variant="outline" className="border-primary/30 btn-3d font-semibold">
                  Meet All Doctors →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story & Philosophy */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeader eyebrow="Our Story" title="Healthcare that starts with listening and empathy" />
          <p className="mt-4 text-muted-foreground leading-relaxed text-base">
            Gravity Hospital & Research Centre was established in Nigdi, PCMC to bridge the gap between advanced tertiary hospital capabilities and patient-friendly community care.
            From routine OPD check-ups to complex surgical interventions and critical emergency care, our multi-speciality team treats every patient with undivided attention and respect.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed text-base">
            We invest continuously in cutting-edge diagnostic equipment, sterile Operation Theatres, and continuous medical training. This ensures that every family in Pune and PCMC receives timely, accurate diagnoses and evidence-based treatments under one roof.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t pt-6">
            <div>
              <div className="font-display text-3xl font-extrabold text-primary">12+</div>
              <div className="text-xs font-semibold uppercase text-muted-foreground mt-1">Specialities</div>
            </div>
            <div>
              <div className="font-display text-3xl font-extrabold text-primary">24×7</div>
              <div className="text-xs font-semibold uppercase text-muted-foreground mt-1">Emergency & ICU</div>
            </div>
            <div>
              <div className="font-display text-3xl font-extrabold text-primary">100%</div>
              <div className="text-xs font-semibold uppercase text-muted-foreground mt-1">Ethical Billing</div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-3d border border-border/80 bg-card p-4">
          <div className="rounded-2xl overflow-hidden h-96">
            <img src="/hospitalbuilding.jpeg" alt="Hospital Building" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Clinical Infrastructure & Capabilities */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-widest text-primary">State-of-the-Art Infrastructure</div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold">Complete Hospital Facilities Under One Roof</h2>
          <p className="mt-3 text-muted-foreground">
            Our hospital is designed around patient safety, sterile infection control, and rapid emergency response.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Level-3 Critical Care ICU",
              desc: "Equipped with multi-parameter monitors, mechanical ventilators, and 24×7 intensive care nursing for critical patient management.",
              icon: Activity,
            },
            {
              title: "Modern Modular OTs",
              desc: "Sterile Operation Theatres with laminar airflow, advanced anesthesia workstations, and C-arm imaging for safe surgical procedures.",
              icon: ShieldCheck,
            },
            {
              title: "Advanced Imaging & CT Scan",
              desc: "In-house CT scan, digital X-ray, and high-resolution ultrasound imaging ensuring rapid diagnostic accuracy day and night.",
              icon: Stethoscope,
            },
            {
              title: "24×7 Emergency & Ambulance",
              desc: "Dedicated trauma resuscitation unit with immediate ambulance dispatch and on-call specialists for accidents and cardiac emergencies.",
              icon: Clock,
            },
            {
              title: "24×7 In-House Pharmacy",
              desc: "Fully stocked pharmacy with verified medicines, surgical consumables, and emergency life-saving drugs available 24 hours.",
              icon: Heart,
            },
            {
              title: "Cashless Insurance Helpdesk",
              desc: "Direct cashless tie-ups with all major private health insurances and TPA networks with seamless pre-authorization support.",
              icon: CheckCircle2,
            },
          ].map((inf) => (
            <div key={inf.title} className="card-3d rounded-3xl border border-border/80 bg-card p-6 sm:p-7 shadow-soft flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <inf.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-foreground">{inf.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{inf.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values & Mission */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-24 mb-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Heart, t: "Mission", d: "Compassionate, transparent, evidence-based healthcare for every patient." },
            { icon: ShieldCheck, t: "Vision", d: "A trusted multi-speciality institution known for outcomes and empathy." },
            { icon: Users, t: "Values", d: "Respect, safety, teamwork and continuous learning." },
            { icon: Award, t: "Recognitions", d: "Honoured with the Samajratna Puraskar for community service." },
          ].map((x) => (
            <div key={x.t} className="card-3d rounded-3xl border bg-card p-6 sm:p-8 shadow-soft">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <x.icon className="h-6 w-6" />
              </div>
              <div className="mt-4 font-display text-lg font-bold text-foreground">{x.t}</div>
              <div className="text-sm text-muted-foreground mt-2 leading-relaxed">{x.d}</div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
