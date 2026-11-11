import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS, CONTACT, IMAGES, waLink, WA_MESSAGES } from "@/data/content";
import PageHeader from "@/components/PageHeader";
import { FadeUp } from "@/components/Reveal";
import { ButtonGold, ButtonGhost } from "@/components/Buttons";

function FaqItem({ item, index, open, onToggle }) {
  return (
    <FadeUp delay={0.05 * index}>
      <div
        className="border-b border-gold/25"
        data-testid={`faq-item-${index + 1}`}
      >
        <button
          onClick={onToggle}
          data-testid={`faq-toggle-${index + 1}`}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-6 py-7 text-left"
        >
          <span className="font-serif text-xl font-medium leading-snug text-navy sm:text-2xl">
            {item.q}
          </span>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
              open ? "border-gold bg-gold text-navy" : "border-gold/40 text-gold-deep"
            }`}
          >
            <Plus className="h-4 w-4" />
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="max-w-3xl pb-7 leading-relaxed text-slate-600">{item.a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeUp>
  );
}

export default function PreguntasFrecuentes() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <>
      <PageHeader
        eyebrow="D&R Global Services"
        title="Preguntas frecuentes"
        image={IMAGES.clientes}
      />
      <section className="bg-beige py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6">
          {FAQS.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              index={i}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>
      </section>
      <section className="nav-noise bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeUp>
            <p className="font-serif text-3xl italic leading-snug text-beige sm:text-4xl">{CONTACT.intro}</p>
          </FadeUp>
          <FadeUp delay={0.2} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ButtonGold href={waLink(WA_MESSAGES.informacion)} external testid="faq-whatsapp-button">
              Escríbenos por WhatsApp
            </ButtonGold>
            <ButtonGhost to="/contacto" testid="faq-contact-button">
              Ir a contacto
            </ButtonGhost>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
