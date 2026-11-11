import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV, waLink, WA_MESSAGES } from "@/data/content";
import Logo from "@/components/Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-gold/20 bg-navy/95 py-3 backdrop-blur-md"
            : "bg-navy/60 py-5 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Logo light />
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                data-testid={item.testid}
                className={({ isActive }) =>
                  `text-[13px] font-semibold tracking-wide transition-colors duration-200 ${
                    isActive ? "text-gold" : "text-beige/80 hover:text-gold"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={waLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-whatsapp-button"
              className="inline-flex items-center gap-2.5 rounded-full border border-gold/40 px-5 py-2.5 text-[13px] font-semibold text-gold transition-all duration-300 hover:border-gold hover:bg-gold/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#25D366]" />
              </span>
              WhatsApp
            </a>
          </nav>
          <button
            onClick={() => setOpen((v) => !v)}
            data-testid="nav-mobile-toggle"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 text-gold lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-navy lg:hidden"
          >
            <nav className="flex h-full flex-col justify-center gap-1 px-8 pb-16 pt-24">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                >
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    data-testid={item.testid}
                    className={({ isActive }) =>
                      `block border-b border-gold/10 py-4 font-serif text-3xl transition-colors ${
                        isActive ? "italic text-gold" : "text-beige"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                href={waLink(WA_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="nav-mobile-whatsapp-button"
                className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-navy"
              >
                Contactar por WhatsApp
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
