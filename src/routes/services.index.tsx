import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SERVICES, ServiceCategory, whatsappLink, HOSPITAL } from "@/lib/site-data";
import {
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Activity,
  HeartPulse,
  Clock,
  PhoneCall,
  MessageCircle,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppointmentDialog } from "@/components/site/AppointmentDialog";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services & Specialities — Gravity Hospital & Research Centre" },
      {
        name: "description",
        content:
          "Explore all 12+ medical and surgical specialities at Gravity Hospital, Nigdi, PCMC, Pune. Experienced specialists, 24×7 ICU, modular OTs, and advanced diagnostics.",
      },
      { property: "og:title", content: "Services & Specialities — Gravity Hospital" },
      {
        property: "og:description",
        content: "12+ specialities under one roof with in-house CT scan, 24×7 Emergency, and ICU support.",
      },
    ],
  }),
  component: ServicesIndex,
});

const CATEGORIES: ServiceCategory[] = [
  "All",
  "Medicine & Critical Care",
  "Surgical & Orthopaedics",
  "Women & Eye/Skin",
];

const CLINICAL_PILLARS = [
  {
    icon: Stethoscope,
    title: "Multi-Disciplinary Expertise",
    desc: "Our physicians, surgeons, and critical care specialists collaborate closely on complex cases for holistic, accurate diagnosis and seamless treatment.",
  },
  {
    icon: Activity,
    title: "24×7 In-House Diagnostics",
    desc: "Instant access to CT Scan, Digital X-Ray, 2D-Echocardiography, Ultrasound, and automated Pathology lab under one roof without third-party delays.",
  },
  {
    icon: ShieldCheck,
    title: "Modular Operation Theatres",
    desc: "International infection-control standards with HEPA laminar airflow, advanced laparoscopic towers, and modern anesthesia workstations.",
  },
  {
    icon: Clock,
    title: "Round-the-Clock Critical Cover",
    desc: "Immediate consultant response for cardiac emergencies, acute stroke, trauma, and severe infections supported by our 24×7 ICU and Emergency OPD.",
  },
];

const CARE_STEPS = [
  {
    step: "01",
    title: "Appointment or Walk-In",
    desc: "Book your consultation instantly via WhatsApp or phone call. For emergencies and acute symptoms, visit our 24×7 Emergency OPD immediately.",
  },
  {
    step: "02",
    title: "Comprehensive Evaluation",
    desc: "Thorough physical check-up by specialist doctors supported by rapid in-house laboratory and radiological investigations.",
  },
  {
    step: "03",
    title: "Transparent Counseling",
    desc: "Clear explanation of diagnosis, treatment options, estimated recovery timelines, and complete guidance on cashless insurance and TPA processing.",
  },
  {
    step: "04",
    title: "Continuity & Rehabilitation",
    desc: "Dedicated post-procedure follow-up schedules, physiotherapy rehabilitation, and continuous medical counseling for long-term health.",
  },
];

const SERVICES_FAQS = [
  {
    q: "Do I need an appointment for OPD consultations?",
    a: "While walk-ins are always welcome during OPD hours, we recommend booking in advance via WhatsApp or phone to minimize wait times and confirm specialist availability. For emergencies, our Emergency OPD is open 24×7 without prior appointment.",
  },
  {
    q: "Are cashless insurance and corporate TPA supported across specialities?",
    a: "Yes, Gravity Hospital is empanelled with major health insurance companies and TPA networks for cashless surgeries, inpatient care, and day-care procedures. Our insurance desk assists with authorization and documentation.",
  },
  {
    q: "What diagnostic tests are available in-house?",
    a: "Our hospital houses a 24×7 diagnostic center including CT Scan, Digital X-Ray, Ultrasound (USG), 2D Echocardiography, Treadmill Test (TMT), ECG, and a fully automated Pathology lab.",
  },
  {
    q: "Can I seek a second opinion for surgeries or complex treatments?",
    a: "Absolutely. Our department heads welcome patients seeking second opinions for surgeries, cardiac procedures, orthopaedic replacements, and chronic illness management.",
  },
];

function ServicesIndex() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>("All");

  const filteredServices =
    selectedCategory === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Scope of Services"
        title="Care across 12+ specialities"
        subtitle="From routine OPD to advanced surgical procedures — our departments work together for precise diagnosis, timely intervention, and compassionate recovery."
        image="https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Main Specialities Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 my-6 sm:my-12">
        {/* Category Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-border/60">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10">
              <Filter className="h-3.5 w-3.5" />
              Speciality Directory
            </div>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-foreground">
              Explore Our Medical & Surgical Departments
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {cat}{" "}
                <span className="ml-1 text-xs opacity-75">
                  ({cat === "All" ? SERVICES.length : SERVICES.filter((s) => s.category === cat).length})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-7 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group card-3d flex flex-col rounded-2xl overflow-hidden border border-border/80 bg-card shadow-soft hover:shadow-3d hover:border-primary/40 transition-all duration-300 h-full"
            >
              <div className="relative h-56 overflow-hidden bg-muted">
                <img
                  src={s.image}
                  alt={s.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xl shadow-sm">
                  {s.icon}
                </div>
                <div className="absolute bottom-3 left-4 text-xs font-semibold text-white/90 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md">
                  {s.category}
                </div>
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {s.name}
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3">
                    {s.short}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {s.highlights.slice(0, 2).map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1 rounded-md bg-primary/5 px-2 py-0.5 text-xs font-medium text-primary/90"
                      >
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-sm font-semibold text-primary group-hover:text-primary transition-colors">
                  <span>View department details</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Our Specialities — Clinical Excellence */}
      <section className="bg-muted/40 border-y border-border/60 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10">
              <Sparkles className="h-3.5 w-3.5" />
              Clinical Standard
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground">
              Why Patients Trust Gravity Specialities
            </h2>
            <p className="mt-2.5 text-muted-foreground text-base sm:text-lg leading-relaxed">
              Every speciality is equipped with international-grade instrumentation, diagnostic support, and 24×7 emergency backup.
            </p>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {CLINICAL_PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="card-3d rounded-2xl border border-border/80 bg-card p-6 sm:p-7 shadow-soft flex flex-col justify-between"
                >
                  <div>
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Consult Our Specialists (Patient Guide) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10">
            <HeartPulse className="h-3.5 w-3.5" />
            Patient Pathway
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground">
            Your Consultation Journey
          </h2>
          <p className="mt-2.5 text-muted-foreground text-base sm:text-lg">
            Simple, transparent, and compassionate care from your first check-up to full recovery.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CARE_STEPS.map((step) => (
            <div
              key={step.step}
              className="relative rounded-2xl border border-border/80 bg-card p-7 shadow-soft flex flex-col justify-between"
            >
              <div>
                <span className="font-display text-4xl font-extrabold text-primary/20">
                  {step.step}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 border-t border-border/60 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10">
              <HelpCircle className="h-3.5 w-3.5" />
              Patient Questions
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="mt-2.5 text-muted-foreground text-base">
              Everything you need to know about consulting our specialities, appointments, and insurance.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {SERVICES_FAQS.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-border/80 bg-card p-6 sm:p-7 shadow-soft"
              >
                <h3 className="font-display text-lg font-bold text-foreground flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Strip */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 my-6">
        <div className="rounded-3xl bg-gradient-brand text-white p-8 sm:p-12 shadow-3d grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider mb-3">
              24×7 Hospital Reception
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Need Help Choosing the Right Specialist?
            </h2>
            <p className="mt-3 text-white/85 text-base sm:text-lg leading-relaxed max-w-lg">
              Contact our patient care coordinators for immediate guidance, OPD schedules, or emergency admission support.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <AppointmentDialog>
              <Button size="lg" className="bg-white text-primary hover:bg-white/95 font-semibold px-7 shadow-lg">
                Book Appointment
              </Button>
            </AppointmentDialog>
            <a
              href={whatsappLink("Hi Gravity Hospital, I'd like help choosing the right specialist.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold px-7"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
            </a>
            <a href={`tel:${HOSPITAL.phones[0].replace(/\s/g, "")}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold px-7"
              >
                <PhoneCall className="mr-2 h-5 w-5" />
                Call Reception
              </Button>
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

