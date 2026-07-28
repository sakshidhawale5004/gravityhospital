import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
const logo = { url: "/logo.png" };
import { SERVICES, FACILITIES, HOSPITAL } from "@/lib/site-data";
import { AppointmentDialog } from "./AppointmentDialog";
import { Button } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [facilitiesOpen, setFacilitiesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-border/80 shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo.url} alt="Gravity Hospital" className="h-12 w-12 object-contain transition-transform group-hover:scale-105" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-lg font-bold text-foreground">Gravity Hospital</div>
            <div className="text-[11px] uppercase tracking-widest text-primary">& Research Centre</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <Dropdown
            label="Services"
            open={servicesOpen}
            setOpen={setServicesOpen}
            baseHref="/services"
            items={SERVICES.map((s) => ({ href: `/services/${s.slug}`, label: s.name }))}
          />
          <Dropdown
            label="Facilities"
            open={facilitiesOpen}
            setOpen={setFacilitiesOpen}
            baseHref="/facilities"
            items={FACILITIES.map((f) => ({ href: `/facilities/${f.slug}`, label: f.name }))}
          />
          <NavLink to="/doctors">Doctors</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${HOSPITAL.phones[0].replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary">
            <Phone className="h-4 w-4" /> {HOSPITAL.phones[0]}
          </a>
          <AppointmentDialog>
            <Button className="bg-gradient-brand text-white shadow-elegant hover:opacity-95 btn-3d font-semibold">Book Appointment</Button>
          </AppointmentDialog>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-white shadow-md">
          <div className="mx-auto max-w-7xl px-4 py-4 grid gap-1 text-sm">
            <MobileLink to="/" onClick={() => setOpen(false)}>Home</MobileLink>
            <MobileLink to="/about" onClick={() => setOpen(false)}>About</MobileLink>
            <details className="rounded-md">
              <summary className="cursor-pointer px-3 py-2 font-medium">Services</summary>
              <div className="pl-4 grid">
                <MobileLink to="/services" onClick={() => setOpen(false)}>All services</MobileLink>
                {SERVICES.map((s) => (
                  <MobileLink key={s.slug} to={`/services/${s.slug}`} onClick={() => setOpen(false)}>
                    {s.name}
                  </MobileLink>
                ))}
              </div>
            </details>
            <details className="rounded-md">
              <summary className="cursor-pointer px-3 py-2 font-medium">Facilities</summary>
              <div className="pl-4 grid">
                <MobileLink to="/facilities" onClick={() => setOpen(false)}>All facilities</MobileLink>
                {FACILITIES.map((f) => (
                  <MobileLink key={f.slug} to={`/facilities/${f.slug}`} onClick={() => setOpen(false)}>
                    {f.name}
                  </MobileLink>
                ))}
              </div>
            </details>
            <MobileLink to="/doctors" onClick={() => setOpen(false)}>Doctors</MobileLink>
            <MobileLink to="/gallery" onClick={() => setOpen(false)}>Gallery</MobileLink>
            <MobileLink to="/faq" onClick={() => setOpen(false)}>FAQ</MobileLink>
            <MobileLink to="/contact" onClick={() => setOpen(false)}>Contact</MobileLink>
            <MobileLink to="/appointment" onClick={() => setOpen(false)}>Book Appointment</MobileLink>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
      activeProps={{ className: "text-primary bg-primary/10" }}
    >
      {children}
    </Link>
  );
}

function MobileLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link to={to} onClick={onClick} className="px-3 py-2 rounded-md hover:bg-primary/10">
      {children}
    </Link>
  );
}

function Dropdown({
  label,
  open,
  setOpen,
  baseHref,
  items,
}: {
  label: string;
  open: boolean;
  setOpen: (v: boolean) => void;
  baseHref: string;
  items: { href: string; label: string }[];
}) {
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link
        to={baseHref}
        className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5"
      >
        {label} <ChevronDown className="h-4 w-4" />
      </Link>
      {open && (
        <div className="absolute left-0 top-full pt-2 w-[520px] animate-fade-in-up">
          <div className="rounded-2xl border border-border/80 bg-white p-3 shadow-3d grid grid-cols-2 gap-1.5">
            {items.map((it) => (
              <Link
                key={it.href}
                to={it.href}
                className="group flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-125 transition-all" />
                <span>{it.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
