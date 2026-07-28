import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { AppointmentDialog } from "@/components/site/AppointmentDialog";
import { Button } from "@/components/ui/button";
import { SERVICES, FACILITIES, DOCTORS, TESTIMONIALS, HOSPITAL, whatsappLink } from "@/lib/site-data";
import { Ambulance, HeartPulse, ShieldCheck, Sparkles, Clock, Users, Award, Stethoscope, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gravity Hospital & Research Centre — Multi-Speciality Hospital in Nigdi, Pune" },
      { name: "description", content: "24×7 emergency, ICU, surgery, cardiology, ortho, gynaec and more at Gravity Hospital & Research Centre, Nigdi, PCMC, Pune." },
      { property: "og:title", content: "Gravity Hospital & Research Centre — Nigdi, Pune" },
      { property: "og:description", content: "Advanced multi-speciality hospital with 24×7 emergency, ICU, CT scan, ambulance and pharmacy in Nigdi, PCMC, Pune." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Multi-Speciality Hospital · Nigdi, PCMC"
        title={<>Compassionate care,<br/><span className="text-gradient-brand">advanced medicine.</span></> as unknown as string}
        subtitle="Gravity Hospital & Research Centre delivers 24×7 emergency care, ICU, surgery and 12+ specialities under one roof — with the warmth of a family hospital."
        image="/gravity/gravity%20(1).jpg"
      >
        <AppointmentDialog>
          <Button size="lg" className="bg-gradient-brand text-white shadow-elegant hover:opacity-95 btn-3d font-semibold px-7">Book Appointment</Button>
        </AppointmentDialog>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
          <Button size="lg" variant="outline" className="border-primary/30 btn-3d font-semibold px-7">WhatsApp Us</Button>
        </a>
      </PageHero>

      {/* Quick action strip */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 -mt-10 relative z-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Ambulance, title: "24×7 Ambulance", desc: HOSPITAL.phones[0], href: "/facilities/ambulance" },
            { icon: HeartPulse, title: "Emergency OPD", desc: "Walk-in, no appointment", href: "/facilities/emergency-opd" },
            { icon: Stethoscope, title: "Book OPD", desc: "12+ specialities", href: "/appointment" },
            { icon: ShieldCheck, title: "Insurance & Cashless", desc: "Major TPAs accepted", href: "/faq" },
          ].map((c) => (
            <Link key={c.title} to={c.href} className="card-3d rounded-2xl bg-card p-6 border border-border/80 shadow-soft flex flex-col justify-between">
              <c.icon className="h-8 w-8 text-primary" />
              <div className="mt-3 font-display font-bold text-foreground">{c.title}</div>
              <div className="text-sm text-muted-foreground">{c.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-20">
        <div className="rounded-3xl bg-gradient-brand text-white p-8 sm:p-12 shadow-3d grid gap-6 sm:grid-cols-4 text-center">
          {[
            { n: "12+", l: "Specialities" },
            { n: "24/7", l: "Emergency & ICU" },
            { n: "10k+", l: "Patients treated" },
            { n: "50+", l: "Doctors & staff" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl sm:text-5xl font-bold">{s.n}</div>
              <div className="text-white/80 text-sm mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 my-6 sm:my-12">
        <SectionHeader eyebrow="Scope of Services" title="Care across 12+ specialities" desc="From routine consultations to complex procedures, our departments work together to give you the right care, at the right time." />
        <div className="mt-12 sm:mt-16 grid gap-7 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group card-3d flex flex-col rounded-2xl overflow-hidden border border-border/80 bg-card shadow-soft hover:shadow-3d hover:border-primary/40 transition-all duration-300 h-full"
            >
              <div className="relative h-52 overflow-hidden bg-muted">
                <img src={s.image} alt={s.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute top-3 left-4 text-xs font-semibold text-white/90 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md">{s.category}</div>
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">{s.name}</h3>
                  <p className="mt-2.5 text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-2">{s.short}</p>
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

      {/* Facilities */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 my-6 sm:my-12">
        <SectionHeader eyebrow="24×7 Facilities" title="Ready when you need us most" desc="Round-the-clock support systems that keep our specialities working seamlessly." />
        <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FACILITIES.map((f) => (
            <Link
              key={f.slug}
              to={`/facilities/${f.slug}`}
              className="card-3d flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 sm:p-7 shadow-soft hover:shadow-3d hover:border-primary/40 transition-all duration-300 group h-full"
            >
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold group-hover:text-primary transition-colors">{f.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.short}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Leadership / MD */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-24">
        <div className="rounded-3xl overflow-hidden bg-card border shadow-3d grid lg:grid-cols-2">
          <div className="relative h-80 lg:h-auto">
            <img src={DOCTORS[0].image} alt={DOCTORS[0].name} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent" />
          </div>
          <div className="p-8 sm:p-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">Leadership</div>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold">A message from our Managing Director</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              "At Gravity Hospital, our greatest happiness is seeing patients recover safely and smile again. We combine advanced technology with compassionate, family-like care for every person who walks through our doors."
            </p>
            <div className="mt-6">
              <div className="font-semibold">{DOCTORS[0].name}</div>
              <div className="text-sm text-primary">{DOCTORS[0].role}</div>
            </div>
            <Link to="/doctors" className="mt-6 inline-flex items-center gap-1 text-primary font-medium">Meet our doctors <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-24">
        <SectionHeader eyebrow="Patient Stories" title="Trusted by families across PCMC" desc="Real experiences from patients and families who chose Gravity Hospital." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.slice(0, 6).map((t) => (
            <div key={t.name} className="card-3d rounded-2xl border bg-card p-6 shadow-soft">
              <Sparkles className="h-5 w-5 text-secondary" />
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">"{t.text}"</p>
              <div className="mt-4 text-sm">
                <div className="font-semibold">{t.name}</div>
                <div className="text-muted-foreground text-xs">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-24">
        <SectionHeader eyebrow="Why Gravity" title="Care you can feel, technology you can trust" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { icon: Clock, t: "24×7 emergency & ICU", d: "Round-the-clock physicians, nurses and life-saving support." },
            { icon: Award, t: "Experienced specialists", d: "Consultants across surgery, medicine, ortho, gynaec and more." },
            { icon: Users, t: "Family-like care", d: "Transparent billing, clear communication and compassionate staff." },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border bg-card p-6 shadow-soft tilt">
              <x.icon className="h-8 w-8 text-primary" />
              <div className="mt-3 font-display text-lg font-semibold">{x.t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{x.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-24">
        <div className="rounded-3xl overflow-hidden relative bg-gradient-brand p-10 sm:p-16 text-white shadow-3d">
          <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl float-slow" />
          <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-secondary/40 blur-3xl float-medium" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold">Need care today?</h2>
              <p className="mt-3 text-white/85 max-w-xl">Request an appointment or chat with us on WhatsApp — our team responds quickly, 24×7 for emergencies.</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <AppointmentDialog>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">Book Appointment</Button>
              </AppointmentDialog>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">WhatsApp</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export function SectionHeader({ eyebrow, title, desc }: { eyebrow?: string; title: string; desc?: string }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <div className="text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</div>}
      <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold">{title}</h2>
      {desc && <p className="mt-3 text-muted-foreground">{desc}</p>}
    </div>
  );
}
