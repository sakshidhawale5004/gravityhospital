import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { AppointmentDialog } from "@/components/site/AppointmentDialog";
import { Button } from "@/components/ui/button";
import { SERVICES, FACILITIES, DOCTORS, TESTIMONIALS, HOSPITAL, whatsappLink } from "@/lib/site-data";
import {
  Ambulance,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Clock,
  Users,
  Award,
  Stethoscope,
  ArrowRight,
  HelpCircle,
  PhoneCall,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { TestimonialSlider } from "@/components/site/TestimonialSlider";

const SYMPTOM_GUIDE = [
  {
    id: "chest-breathing",
    label: "Chest Pain or Breathlessness",
    icon: "🫁",
    speciality: "General Medicine & Critical Care",
    advice:
      "For sudden chest pain, severe shortness of breath, or dizziness, visit our 24×7 Emergency OPD immediately for ECG, enzyme testing, and rapid triage.",
    emergency: true,
    link: "/services/medicine",
  },
  {
    id: "joint-injury",
    label: "Joint Pain, Fracture or Injury",
    icon: "🦴",
    speciality: "Orthopaedics & Joint Care",
    advice:
      "Specialized treatment for fractures, sports injuries, arthritis, and ligament pain with in-house digital X-Ray and modern orthopaedic surgery support.",
    emergency: false,
    link: "/services/orthopaedics",
  },
  {
    id: "fever-weakness",
    label: "Persistent Fever or Infection",
    icon: "🤒",
    speciality: "General Medicine",
    advice:
      "Comprehensive diagnostic evaluation for dengue, malaria, typhoid, seasonal viral infections, and chronic fatigue with our 24×7 Pathology Lab.",
    emergency: false,
    link: "/services/medicine",
  },
  {
    id: "abdominal-pain",
    label: "Abdominal Pain or Digestion",
    icon: "🔪",
    speciality: "General & Laparoscopic Surgery",
    advice:
      "Expert evaluation for appendicitis, gallstones, hernia, and acute gastric disorders with minimally invasive laparoscopic surgical procedures.",
    emergency: false,
    link: "/services/surgery",
  },
  {
    id: "maternity-gynae",
    label: "Pregnancy & Women's Health",
    icon: "👶",
    speciality: "Gynaecology & Obstetrics",
    advice:
      "Complete maternal and fetal care, high-risk pregnancy monitoring, painless delivery support, and routine gynecological check-ups.",
    emergency: false,
    link: "/services/gynaecology",
  },
  {
    id: "child-care",
    label: "Child & Newborn Care",
    icon: "🧸",
    speciality: "Paediatrics & Neonatology",
    advice:
      "Gentle, expert care for infants, toddlers, and children—including vaccinations, growth monitoring, and pediatric emergency support.",
    emergency: false,
    link: "/services/paediatrics",
  },
];

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
  const [activeSymptom, setActiveSymptom] = useState(SYMPTOM_GUIDE[0]);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Multi-Speciality Hospital · Nigdi, PCMC"
        title={<>Compassionate care,<br/><span className="text-gradient-brand">advanced medicine.</span></> as unknown as string}
        subtitle="Gravity Hospital & Research Centre delivers 24×7 emergency care, ICU, surgery and 12+ specialities under one roof — with the warmth of a family hospital."
        image="/hospitalnewimage.jpeg"
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

      {/* Interactive Symptom & Speciality Helpdesk — NEW SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 my-4">
        <div className="rounded-3xl border border-border/80 bg-gradient-to-br from-primary/5 via-card to-muted/30 p-6 sm:p-12 shadow-3d relative overflow-hidden">
          {/* Decorative floating shapes */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-brand opacity-15 blur-3xl float-slow" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-orange opacity-15 blur-3xl float-medium" />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
              <HelpCircle className="h-3.5 w-3.5" />
              Symptom & Care Guidance · Interactive Helpdesk
            </div>
            <h2 className="mt-4 font-display text-2xl sm:text-4xl font-extrabold text-foreground">
              Not sure which speciality to consult?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Select a common symptom or health concern below to instantly discover the recommended department, clinical advice, and immediate care options.
            </p>
          </div>

          {/* Symptom selector pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 relative z-10">
            {SYMPTOM_GUIDE.map((s) => {
              const isSelected = activeSymptom.id === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveSymptom(s)}
                  className={`inline-flex items-center gap-2.5 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 btn-3d ${
                    isSelected
                      ? "bg-gradient-brand text-white shadow-md scale-105"
                      : "bg-card border border-border/80 text-foreground hover:border-primary/50 hover:bg-muted/50"
                  }`}
                >
                  <span className="text-base">{s.icon}</span>
                  <span>{s.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Symptom Result Card */}
          <div className="mt-8 max-w-4xl mx-auto rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-3d relative z-10 animate-fade-in-up">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-border/60">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-2xl">
                  {activeSymptom.icon}
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">
                    Recommended Speciality
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-foreground">
                    {activeSymptom.speciality}
                  </h3>
                </div>
              </div>

              {activeSymptom.emergency ? (
                <div className="inline-flex items-center gap-2 rounded-full bg-rose-500/10 border border-rose-500/20 px-3.5 py-1.5 text-xs font-bold text-rose-600 dark:text-rose-400">
                  <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
                  24×7 Emergency Triage Available
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  OPD & Cashless Surgery Supported
                </div>
              )}
            </div>

            <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
              {activeSymptom.advice}
            </p>

            <div className="mt-7 pt-5 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <AppointmentDialog>
                  <Button size="lg" className="bg-gradient-brand text-white shadow-elegant hover:opacity-95 btn-3d font-semibold px-6">
                    <Calendar className="h-4 w-4 mr-2" /> Book OPD Consultation
                  </Button>
                </AppointmentDialog>
                <a
                  href={whatsappLink(`Hi Gravity Hospital, I'd like to enquire about consultation for ${activeSymptom.label} (${activeSymptom.speciality}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="border-primary/30 btn-3d font-semibold">
                    WhatsApp Enquiry
                  </Button>
                </a>
                <Link to={activeSymptom.link}>
                  <Button size="lg" variant="ghost" className="text-primary hover:text-primary font-semibold">
                    View Department Details →
                  </Button>
                </Link>
              </div>

              {activeSymptom.emergency && (
                <a
                  href={`tel:${HOSPITAL.phones[0].replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-rose-600 hover:underline"
                >
                  <PhoneCall className="h-4 w-4" /> Emergency Helpline: {HOSPITAL.phones[0]}
                </a>
              )}
            </div>
          </div>

          {/* Quick Assurance Strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-muted-foreground relative z-10">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" /> 24×7 ICU & Emergency Support
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" /> Senior Hospital Consultants
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" /> All Major Health Insurances & TPAs Accepted
            </div>
          </div>
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
              className="group card-3d flex flex-col rounded-2xl overflow-hidden border border-border/80 bg-card shadow-soft hover:shadow-3d hover:border-primary/40 transition-all duration-300 h-full"
            >
              <div className="relative h-44 overflow-hidden bg-muted">
                <img
                  src={f.image}
                  alt={f.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-3 left-3 text-xs font-semibold text-white/90 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md">
                  24×7 Facility
                </div>
              </div>
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors">{f.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{f.short}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-primary">
                  <span>Learn more</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Leadership / MD Spotlight */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
        <div className="rounded-3xl overflow-hidden bg-card border border-border/80 shadow-3d grid lg:grid-cols-[440px_1fr]">
          <div className="p-6 sm:p-8 flex items-center justify-center bg-gradient-to-br from-primary/5 via-muted/30 to-background border-b lg:border-b-0 lg:border-r border-border/60">
            <div className="relative w-full aspect-[4/5] min-h-[480px] sm:min-h-[540px] overflow-hidden rounded-2xl shadow-3d border-4 border-white group">
              <img
                src={DOCTORS[0].image}
                alt={DOCTORS[0].name}
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
                <Award className="h-3.5 w-3.5" /> Founder & Managing Director
              </div>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-foreground">
                A message from our Managing Director
              </h2>
              <div className="mt-1 text-base font-semibold text-primary">
                {DOCTORS[0].name} · Honoured with the Samajratna Puraskar
              </div>

              <p className="mt-6 text-muted-foreground leading-relaxed text-base">
                "At Gravity Hospital & Research Centre, our greatest happiness is seeing patients recover safely and smile again. We combine advanced technology with compassionate, family-like care for every person who walks through our doors."
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed text-base">
                Under Dr. Pratap Somwanshi&apos;s leadership, Gravity Hospital has grown into a premier multi-speciality institution in Nigdi, PCMC—providing 24×7 emergency trauma care, Level-3 ICU, modular Operation Theatres, and cashless insurance coordination under one roof.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border/80 pt-5">
                <div className="rounded-xl bg-primary/5 p-3 text-center">
                  <div className="font-display text-xl font-bold text-primary">15+</div>
                  <div className="text-[11px] font-semibold text-muted-foreground mt-0.5">Years Experience</div>
                </div>
                <div className="rounded-xl bg-primary/5 p-3 text-center">
                  <div className="font-display text-xl font-bold text-primary">25,000+</div>
                  <div className="text-[11px] font-semibold text-muted-foreground mt-0.5">Patients Treated</div>
                </div>
                <div className="rounded-xl bg-primary/5 p-3 text-center">
                  <div className="font-display text-xl font-bold text-primary">100%</div>
                  <div className="text-[11px] font-semibold text-muted-foreground mt-0.5">Ethical Care</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/80 flex flex-wrap items-center gap-4">
              <AppointmentDialog>
                <Button size="lg" className="bg-gradient-brand text-white shadow-elegant hover:opacity-95 btn-3d font-semibold px-7">
                  Book Consultation
                </Button>
              </AppointmentDialog>
              <Link to="/doctors">
                <Button size="lg" variant="outline" className="border-primary/30 btn-3d font-semibold">
                  Meet All 8 Doctors →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
        <SectionHeader
          eyebrow="Patient Stories · Verified Reviews"
          title="Trusted by families across PCMC"
          desc="Real experiences from patients and families who chose Gravity Hospital & Research Centre."
        />
        <TestimonialSlider />
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

      {/* PCMC Medical Advantage — 6 Pillars */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-widest text-primary">Why Choose Gravity Hospital</div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold">PCMC&apos;s Trusted Healthcare Advantage</h2>
          <p className="mt-3 text-muted-foreground">
            We combine tertiary hospital clinical standards with the genuine empathy and affordability of a community medical centre.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "24×7 Emergency & ICU Readiness",
              desc: "Round-the-clock emergency physicians, trauma nurses, and Level-3 intensive care units ready for critical admissions day or night.",
              tag: "Always Open",
            },
            {
              title: "Seamless Cashless Insurance",
              desc: "Direct cashless tie-ups across all major health insurances and TPAs with a dedicated helpdesk for quick pre-authorizations.",
              tag: "TPA Approved",
            },
            {
              title: "Modern Modular Operation Theatres",
              desc: "Sterile laminar airflow OTs equipped for general surgery, laparoscopy, orthopaedics, and emergency procedures.",
              tag: "Surgical Safety",
            },
            {
              title: "On-Site CT Scan & Diagnostics",
              desc: "In-house digital imaging, CT scan, X-ray, ultrasound, and pathology laboratory for immediate, accurate diagnostic reports.",
              tag: "Fast Diagnostics",
            },
            {
              title: "Experienced Medical Consultants",
              desc: "Senior hospital consultants and surgeons who explain every diagnosis and treatment option clearly to patients and families.",
              tag: "Expert Care",
            },
            {
              title: "100% Ethical & Transparent Billing",
              desc: "Clear cost estimates, transparent room tariffs, and honest medical counseling with zero hidden hospital charges.",
              tag: "Patient First",
            },
          ].map((adv) => (
            <div key={adv.title} className="card-3d rounded-3xl border border-border/80 bg-card p-7 shadow-soft flex flex-col justify-between">
              <div>
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                  {adv.tag}
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-foreground">{adv.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{adv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How We Serve Your Family — 3 Pathways */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-24">
        <div className="rounded-3xl border border-border/80 bg-gradient-to-br from-primary/5 via-background to-muted/30 p-8 sm:p-12 shadow-soft">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-primary">Patient Pathways</div>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-foreground">How we serve your family</h2>
            <p className="mt-2 text-muted-foreground">Tailored clinical workflows designed for convenience, safety, and rapid recovery.</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                step: "01",
                name: "Emergency & Trauma Care",
                desc: "Walk in any time 24×7. Immediate emergency triage, rapid stabilization, and direct specialist intervention without delay.",
              },
              {
                step: "02",
                name: "Planned Admissions & Surgery",
                desc: "Consult our surgeons in OPD, receive transparent cost counseling, and get complete cashless insurance support before admission.",
              },
              {
                step: "03",
                name: "Speciality OPD & Diagnostics",
                desc: "Book appointments with consultants across 12+ specialities with same-day diagnostic testing and pharmacy access under one roof.",
              },
            ].map((p) => (
              <div key={p.step} className="rounded-2xl bg-white p-6 border border-border/80 shadow-sm relative">
                <div className="font-display text-3xl font-extrabold text-primary/20 absolute top-4 right-5">{p.step}</div>
                <h3 className="font-display font-bold text-lg text-foreground relative z-10">{p.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed relative z-10">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-24 mb-16">
        <div className="rounded-3xl overflow-hidden relative bg-gradient-brand p-10 sm:p-16 text-white shadow-3d">
          <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl float-slow" />
          <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-secondary/40 blur-3xl float-medium" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold">Need care today?</h2>
              <p className="mt-3 text-white/85 max-w-xl">Request an appointment or chat with us on WhatsApp — our team responds quickly, 24×7 for emergencies.</p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <AppointmentDialog>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8 shadow-lg">Book Appointment</Button>
              </AppointmentDialog>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold shadow-lg px-8 border-0">
                  WhatsApp Us
                </Button>
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
