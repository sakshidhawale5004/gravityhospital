import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
const logo = { url: "/logo.png" };
import { HOSPITAL, SERVICES, FACILITIES } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-24 bg-gradient-purple text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-white/10 p-2 backdrop-blur">
              <img src={logo.url} alt="Gravity Hospital" className="h-10 w-10 object-contain" />
            </div>
            <div>
              <div className="font-display font-bold text-lg">Gravity Hospital</div>
              <div className="text-xs uppercase tracking-widest text-white/70">& Research Centre</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/80 leading-relaxed">
            A modern multi-speciality hospital in Nigdi, PCMC, Pune — combining advanced medical technology with compassionate, family-like care.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Services</h4>
          <ul className="grid gap-2 text-sm text-white/80">
            {SERVICES.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="hover:text-white hover:underline">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">24×7 Facilities</h4>
          <ul className="grid gap-2 text-sm text-white/80">
            {FACILITIES.map((f) => (
              <li key={f.slug}>
                <Link to={`/facilities/${f.slug}`} className="hover:text-white hover:underline">{f.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Contact</h4>
          <ul className="grid gap-3 text-sm text-white/85">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> {HOSPITAL.address}</li>
            {HOSPITAL.phones.map((p) => (
              <li key={p} className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> <a href={`tel:${p.replace(/\s/g, "")}`}>{p}</a></li>
            ))}
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> <a href={`mailto:${HOSPITAL.email}`}>{HOSPITAL.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/70">
          <div>© {new Date().getFullYear()} Gravity Hospital & Research Centre. All rights reserved.</div>
          <div className="flex gap-4">
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/faq" className="hover:text-white">FAQ</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
