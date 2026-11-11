import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300";

export function ButtonGold({ to, href, external = false, testid, className = "", children }) {
  const cls = `${base} bg-gold text-navy hover:bg-gold-bright hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(197,160,89,0.35)] ${className}`;
  if (to) {
    return (
      <Link to={to} className={cls} data-testid={testid}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cls}
      data-testid={testid}
    >
      {children}
    </a>
  );
}

export function ButtonGhost({ to, href, external = false, testid, dark = false, className = "", children }) {
  const cls = `${base} border ${
    dark
      ? "border-navy/25 text-navy hover:border-gold-deep hover:text-gold-deep"
      : "border-gold/50 text-gold hover:bg-gold/10 hover:border-gold"
  } hover:-translate-y-0.5 ${className}`;
  if (to) {
    return (
      <Link to={to} className={cls} data-testid={testid}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cls}
      data-testid={testid}
    >
      {children}
    </a>
  );
}
