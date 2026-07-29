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
      {/* 24x7 Emergency & Announcement Ticker */}
      <div className="bg-gradient-brand text-white text-xs font-semibold py-2 overflow-hidden flex whitespace-nowrap border-b border-white/10">
        <div className="marquee inline-flex gap-8 items-center">
          <span>🚨 24×7 EMERGENCY & TRAUMA CARE OPEN · AMBULANCE: +91 77965 13130 · CASHLESS INSURANCE ACROSS ALL MAJOR TPAs · 12+ ADVANCED SPECIALITIES UNDER ONE ROOF · ICU & SURGICAL UNITS FULLY OPERATIONAL · CALL: +91 84462 44344</span>
          <span>🚨 24×7 EMERGENCY & TRAUMA CARE OPEN · AMBULANCE: +91 77965 13130 · CASHLESS INSURANCE ACROSS ALL MAJOR TPAs · 12+ ADVANCED SPECIALITIES UNDER ONE ROOF · ICU & SURGICAL UNITS FULLY OPERATIONAL · CALL: +91 84462 44344</span>
        </div>
      </div>

      <div className="mx-auto flex h-32 sm:h-36 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center shrink-0 group">
          <img
            src={logo.url}
            alt="Gravity Hospital"
            className="h-28 sm:h-32 w-auto max-w-[300px] sm:max-w-[380px] object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
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

        <div className="hidden lg:flex items-center gap-4">
          <a href={`tel:${HOSPITAL.phones[0].replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors">
            <Phone className="h-4 w-4 text-primary" /> {HOSPITAL.phones[0]}
          </a>
          <AppointmentDialog>
            <Button size="lg" className="bg-gradient-brand text-white shadow-elegant hover:opacity-95 btn-3d font-semibold px-6">Book Appointment</Button>
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
      className="rounded-lg px-3.5 py-2.5 text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
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
  const timerRef = useState<{ current: NodeJS.Timeout | null }>({ current: null })[0];

  const handleMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setOpen(false);
    }, 220);
  };

  return (
    <div
      className="relative py-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={baseHref}
        className="flex items-center gap-1 rounded-lg px-3.5 py-2.5 text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
      >
        {label} <ChevronDown className="h-4 w-4" />
      </Link>
      {open && (
        <div
          className="absolute left-0 top-[calc(100%-8px)] pt-3 w-[560px] z-50 animate-fade-in-up"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="rounded-3xl border border-border/80 bg-white p-3.5 shadow-3d grid grid-cols-2 gap-2">
            {items.map((it) => (
              <Link
                key={it.href}
                to={it.href}
                onClick={() => setOpen(false)}
                className="group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all duration-200"
              >
                <div className="h-2 w-2 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-125 transition-all" />
                <span className="font-semibold">{it.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
