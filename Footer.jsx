import { Link } from "react-router-dom";
import {
  NAV,
  DESCRIPTOR,
  WHATSAPP_DISPLAY,
  waLink,
  WA_MESSAGES,
  FOOTER,
} from "@/data/content";
import Logo from "@/components/Logo";
import { WhatsAppGlyph } from "@/components/WhatsAppFloat";

export default function Footer() {
  return (
    <footer className="nav-noise border-t border-gold/20 bg-navy">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo light tagline="Global Services" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-300/80">
              {DESCRIPTOR}
            </p>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Navegación</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {NAV.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    data-testid={`footer-nav-${item.testid.replace("nav-link-", "")}`}
                    className="text-sm text-slate-300/80 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Contacto</p>
            <a
              href={waLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-whatsapp-link"
              className="mt-5 inline-flex items-center gap-3 text-sm text-slate-300/80 transition-colors hover:text-gold"
            >
              <WhatsAppGlyph className="h-4 w-4 text-[#25D366]" />
              {WHATSAPP_DISPLAY}
            </a>
            <p className="mt-4 text-sm text-slate-300/60">
              Atención presencial según disponibilidad y atención online.
            </p>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-gold/15 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs tracking-wide text-slate-400/70">{FOOTER.copyright}</p>
          <p className="font-serif text-sm italic text-gold/80">
            D&amp;R Global Services: conectamos personas, soluciones y oportunidades.
          </p>
        </div>
      </div>
    </footer>
  );
}
