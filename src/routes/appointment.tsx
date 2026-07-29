import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { AppointmentForm } from "@/components/site/AppointmentDialog";
import { HOSPITAL, whatsappLink } from "@/lib/site-data";
import { Phone, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title: "Book Appointment — Gravity Hospital & Research Centre" },
      { name: "description", content: "Request an OPD appointment at Gravity Hospital with department, date and time." },
      { property: "og:title", content: "Book Appointment — Gravity Hospital" },
      { property: "og:description", content: "Request an appointment with your preferred department, date and time." },
    ],
  }),
  component: Appointment,
});

function Appointment() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Appointments"
        title={"Book an appointment" as unknown as string}
        subtitle="Choose a department, pick a preferred time, and we'll confirm on WhatsApp within business hours."
        image="/doctorpage-herosectioimage.png"
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-14 grid lg:grid-cols-[1fr_360px] gap-10">
        <div className="rounded-3xl border bg-card p-6 sm:p-10 shadow-3d">
          <AppointmentForm />
        </div>

        <aside className="grid gap-4">
          <div className="rounded-2xl bg-gradient-brand text-white p-6 shadow-3d">
            <div className="text-xs font-semibold uppercase tracking-widest text-white/80">Emergency? Call now</div>
            {HOSPITAL.phones.map((p) => (
              <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="mt-2 flex items-center gap-2 text-lg font-semibold">
                <Phone className="h-5 w-5" /> {p}
              </a>
            ))}
          </div>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="rounded-2xl border bg-card p-6 shadow-soft card-3d flex items-center gap-3">
            <MessageCircle className="h-6 w-6 text-primary" />
            <div>
              <div className="font-semibold">Chat on WhatsApp</div>
              <div className="text-sm text-muted-foreground">Fastest way to reach our team</div>
            </div>
          </a>
          <div className="rounded-2xl border bg-card p-6 shadow-soft">
            <div className="font-semibold">OPD timings</div>
            <p className="text-sm text-muted-foreground mt-1">
              OPD: 9 AM – 8 PM (department-wise variations may apply). Emergency, ICU, Pharmacy, Lab & Ambulance are 24×7.
            </p>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}
