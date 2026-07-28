import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { FAQS } from "@/lib/site-data";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Gravity Hospital & Research Centre" },
      { name: "description", content: "Answers to common questions about services, OPD/IPD process, billing, insurance, ambulance and CT scan at Gravity Hospital." },
      { property: "og:title", content: "FAQs — Gravity Hospital" },
      { property: "og:description", content: "Searchable FAQ covering services, OPD/IPD, billing, ambulance and CT scan." },
    ],
  }),
  component: FAQ,
});

const CATS = ["All", "Services", "OPD / IPD", "Billing", "Ambulance", "CT Scan"];

function FAQ() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return FAQS.filter((f) => (cat === "All" || f.category === cat) &&
      (!query || f.q.toLowerCase().includes(query) || f.a.toLowerCase().includes(query)));
  }, [q, cat]);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Help Centre"
        title={"Frequently asked questions" as unknown as string}
        subtitle="Everything you need to know about services, OPD/IPD, billing, ambulance and CT scan. Can't find an answer? WhatsApp us — we're happy to help."
        image="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 mt-12">
        <div className="rounded-2xl border bg-card p-4 shadow-soft flex items-center gap-3">
          <Search className="h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search FAQs..." value={q} onChange={(e) => setQ(e.target.value)} className="border-0 focus-visible:ring-0 shadow-none" />
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-1.5 text-sm border transition-colors ${cat === c ? "bg-gradient-brand text-white border-transparent shadow-elegant" : "hover:bg-primary/10 border-border"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border bg-card p-8 text-center text-muted-foreground">
              No results. Try a different search or category.
            </div>
          ) : (
            <Accordion type="single" collapsible className="rounded-2xl border bg-card shadow-soft divide-y">
              {filtered.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="px-4">
                  <AccordionTrigger className="text-left">
                    <span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary mr-2">{f.category}</span>
                      <span className="font-medium">{f.q}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
