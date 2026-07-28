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
        image="/BUILDING%20IMage%20for%20about%20page.jpeg"
      />

      {/* Founder & Managing Director Spotlight */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-16">
        <div className="rounded-3xl overflow-hidden bg-card border border-border/80 shadow-3d grid lg:grid-cols-[420px_1fr]">
          <div className="p-6 sm:p-8 flex items-center justify-center bg-gradient-to-br from-primary/5 via-muted/30 to-background border-b lg:border-b-0 lg:border-r border-border/60">
            <div className="relative w-full max-w-sm aspect-[4/5] overflow-hidden rounded-2xl shadow-3d border-4 border-white group">
              <img
                src="/aboutpagepratapimage.jpeg"
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
                {md.role} · {md.speciality} · Honoured with Samajratna Puraskar
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
          <div className="rounded-2xl overflow-hidden min-h-[420px] sm:min-h-[480px] aspect-[4/3]">
            <img src="/aboutpageimage.webp" alt="Gravity Hospital Care & Empathy" className="w-full h-full object-cover object-center" />
          </div>
        </div>
      </section>

      {/* Hospital Campus & Facility Showcase Gallery */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-widest text-primary">Hospital Campus</div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold">A Look Inside Our Healthcare Campus</h2>
          <p className="mt-3 text-muted-foreground">
            Modern, welcoming architecture combined with Level-3 clinical safety and rapid-access emergency triage in Nigdi, PCMC.
          </p>
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-3">
          {[
            {
              src: "/gallery/gallerypageimagesdon%27taddinotherpages%20(1).jpeg",
              title: "Main Hospital Building & Entrance",
              desc: "Primary patient entrance with 0-minute emergency walk-in access and 24×7 ambulance bay.",
            },
            {
              src: "/gallery/gallerypageimagesdon%27taddinotherpages%20(2).jpeg",
              title: "Multi-Speciality OPD & Diagnostics",
              desc: "Consultation chambers for 12+ specialities, digital radiology, and modern diagnostic laboratory.",
            },
            {
              src: "/gallery/gallerypageimagesdon%27taddinotherpages%20(3).jpeg",
              title: "Critical Care ICU & Surgical Wing",
              desc: "Level-3 intensive care unit, modular operating theatres, and 24×7 trauma support.",
            },
          ].map((item) => (
            <div key={item.title} className="card-3d rounded-3xl overflow-hidden border border-border/80 bg-card shadow-soft hover:shadow-3d transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-64 overflow-hidden bg-muted">
                <img src={item.src} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white font-display font-bold text-lg">{item.title}</div>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Pillars of Institutional Excellence */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-24">
        <div className="rounded-3xl border border-border/80 bg-gradient-to-br from-primary/5 via-background to-muted/30 p-8 sm:p-14 shadow-soft">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-widest text-primary">Institutional Excellence</div>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-foreground">Why Families & Physicians Trust Gravity</h2>
            <p className="mt-3 text-muted-foreground">
              We adhere strictly to evidence-based clinical protocols, ethical patient counseling, and 100% transparent pricing.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "24×7 Trauma & ICU Protocols",
                desc: "Immediate ACLS-certified nursing response, bedside echocardiography, mechanical ventilation, and continuous specialist monitoring.",
              },
              {
                title: "Zero-Infection Surgical Suites",
                desc: "Modular operating theatres with HEPA laminar airflow filtration, positive-pressure air balance, and stringent sterility auditing.",
              },
              {
                title: "Dedicated TPA Insurance Desk",
                desc: "Direct cashless tie-ups across all major health insurers and corporate TPAs with instant pre-authorization processing.",
              },
              {
                title: "Multi-Disciplinary Tumor & Surgical Boards",
                desc: "Complex surgical cases are reviewed collaboratively by surgeons, physicians, and intensivists for optimal patient outcomes.",
              },
              {
                title: "Transparent & Itemized Billing",
                desc: "Clear upfront estimates with detailed itemized bills at discharge—giving families complete peace of mind with zero hidden charges.",
              },
              {
                title: "Community Healthcare Leadership",
                desc: "Recognized with the prestigious Samajratna Puraskar for free health camps, emergency medical outreach, and charitable care.",
              },
            ].map((p, idx) => (
              <div key={p.title} className="rounded-2xl bg-white p-7 border border-border/80 shadow-sm relative">
                <div className="font-display text-2xl font-bold text-primary/20 absolute top-5 right-6">0{idx + 1}</div>
                <h3 className="font-display font-bold text-lg text-foreground relative z-10 pr-6">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed relative z-10">{p.desc}</p>
              </div>
            ))}
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
