import { Link } from "react-router-dom";

export default function Logo({ light = true, tagline = null }) {
  return (
    <Link to="/" data-testid="navbar-brand-logo" className="group flex items-center gap-3">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-gold/60 bg-navy-800/50 shadow-[inset_0_1px_0_rgba(229,193,88,0.25)] transition-colors duration-300 group-hover:border-gold">
        <span className="font-serif text-lg font-bold leading-none tracking-tight text-gold">
          D<span className="text-gold-bright">&amp;</span>R
        </span>
      </span>
      <span className="flex flex-col">
        <span
          className={`font-serif text-xl font-semibold leading-none tracking-wide ${
            light ? "text-beige" : "text-navy"
          }`}
        >
          D&amp;R Global Services
        </span>
        {tagline && (
          <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
            {tagline}
          </span>
        )}
      </span>
    </Link>
  );
}
