import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { HOSPITAL, whatsappLink } from "@/lib/site-data";
import { Phone, Mail, MapPin, MessageCircle, Instagram } from "lucide-react";
import { AppointmentForm } from "@/components/site/AppointmentDialog";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Gravity Hospital & Research Centre" },
      { name: "description", content: "Contact Gravity Hospital & Research Centre, Nigdi, PCMC, Pune. Phone, email, address and WhatsApp." },
      { property: "og:title", content: "Contact Gravity Hospital" },
      { property: "og:description", content: "Reach us by phone, email or WhatsApp for appointments and enquiries." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Get in touch"
        title={"We're here to help — 24×7" as unknown as string}
        subtitle="Call us, WhatsApp us, or drop by our reception. For emergencies, come directly to the Emergency OPD."
        image="/contactimageforheerosection.jpg"
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-14 grid lg:grid-cols-2 gap-10">
        <div className="grid gap-4">
          <ContactCard icon={MapPin} title="Address" body={HOSPITAL.address} />
          {HOSPITAL.phones.map((p) => (
            <ContactCard key={p} icon={Phone} title="Phone" body={p} href={`tel:${p.replace(/\s/g, "")}`} />
          ))}
          <ContactCard icon={Mail} title="Email" body={HOSPITAL.email} href={`mailto:${HOSPITAL.email}`} />
          <ContactCard icon={MessageCircle} title="WhatsApp" body="Chat with us on WhatsApp" href={whatsappLink()} external />
          {HOSPITAL.instagram && (
            <ContactCard icon={Instagram} title="Instagram" body="@gravityhospital_pcmc" href={HOSPITAL.instagram} external />
          )}

          <div className="mt-4 rounded-3xl overflow-hidden border shadow-soft">
            <iframe
              title="Gravity Hospital location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(HOSPITAL.address)}&output=embed`}
              className="w-full h-72 border-0"
              loading="lazy"
            />
          </div>
        </div>

        <div className="rounded-3xl border bg-card p-6 sm:p-8 shadow-3d">
          <h2 className="font-display text-2xl font-bold">Send us a request</h2>
          <p className="text-sm text-muted-foreground mt-1">We'll respond on WhatsApp for the fastest confirmation.</p>
          <div className="mt-5">
            <AppointmentForm />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactCard({ icon: Icon, title, body, href, external }: any) {
  const content = (
    <div className="card-3d rounded-2xl border bg-card p-5 shadow-soft flex items-start gap-4">
      <div className="rounded-xl bg-primary/10 p-3 text-primary"><Icon className="h-5 w-5" /></div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-primary">{title}</div>
        <div className="mt-1 text-foreground">{body}</div>
      </div>
    </div>
  );
  if (href) return <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>{content}</a>;
  return content;
}
