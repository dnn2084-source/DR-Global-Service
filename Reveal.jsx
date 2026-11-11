import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export function FadeUp({ children, delay = 0, className = "", y = 36 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function KineticLines({ lines, className = "", delay = 0.1, stagger = 0.14 }) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block"
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: delay + i * stagger, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function KineticWords({ text, className = "", delay = 0.1, stagger = 0.07 }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, delay: delay + i * stagger, ease: EASE }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function Eyebrow({ children, dark = false, className = "" }) {
  return (
    <p
      className={`text-xs font-bold uppercase tracking-[0.22em] ${
        dark ? "text-gold-deep" : "text-gold"
      } ${className}`}
    >
      {children}
    </p>
  );
}

export function Marquee({ items }) {
  const track = (hidden) => (
    <div aria-hidden={hidden || undefined} className="flex w-max shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="whitespace-nowrap px-8 font-serif text-2xl italic tracking-wide text-navy sm:text-3xl">
            {item}
          </span>
          <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
        </span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden border-y border-gold/25 bg-beige-card py-7">
      <div className="flex w-max animate-marquee">
        {track(false)}
        {track(true)}
      </div>
    </div>
  );
}
