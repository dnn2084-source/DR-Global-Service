import { motion } from "framer-motion";
import { CONTACT, IMAGES, waLink, WA_MESSAGES, WHATSAPP_DISPLAY } from "@/data/content";
import PageHeader from "@/components/PageHeader";
import { FadeUp } from "@/components/Reveal";
import { ButtonGold, ButtonGhost } from "@/components/Buttons";
import { WhatsAppGlyph } from "@/components/WhatsAppFloat";

export default function Contacto() {
  return (
    <>
      <PageHeader
        eyebrow={CONTACT.eyebrow}
        title={CONTACT.title}
        intro={CONTACT.intro}
        image={IMAGES.madrid}
      />
      <section className="bg-beige py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <div>
            <FadeUp>
              <p className="font-serif text-2xl leading-snug text-navy sm:text-3xl">{CONTACT.identity}</p>
            </FadeUp>
            <FadeUp delay={0.12}>
              <p className="mt-6 leading-relaxed text-slate-600">{CONTACT.attention}</p>
            </FadeUp>
            <FadeUp delay={0.2} className="mt-10">
              <a
                href={waLink(WA_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp-button"
                className="group flex items-center gap-5 rounded-2xl border border-gold/40 bg-beige-card p-7 transition-all duration-300 hover:border-gold hover:shadow-[0_20px_48px_rgba(11,19,43,0.1)] sm:p-8"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#25D366]/15 text-[#1DA851] transition-colors duration-300 group-hover:bg-[#25D366] group-hover:text-white">
                  <WhatsAppGlyph className="h-7 w-7" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">
                    {CONTACT.whatsappLabel}
                  </span>
                  <span className="mt-1.5 block font-serif text-2xl font-semibold text-navy sm:text-3xl">
                    {WHATSAPP_DISPLAY}
                  </span>
                </span>
              </a>
            </FadeUp>
            <FadeUp delay={0.3} className="mt-8 flex flex-wrap gap-4">
              <ButtonGold href={waLink(WA_MESSAGES.informacion)} external testid="contact-info-button">
                {CONTACT.ctaInfo}
              </ButtonGold>
              <ButtonGhost href={waLink(WA_MESSAGES.presupuesto)} external dark testid="contact-presupuesto-button">
                {CONTACT.ctaPresupuesto}
              </ButtonGhost>
            </FadeUp>
          </div>
          <FadeUp delay={0.2} className="relative">
            <div className="absolute -inset-3 rounded-2xl border border-gold/40" />
            <div className="overflow-hidden rounded-xl">
              <motion.img
                src={IMAGES.madrid}
                alt="España, sede de D&R Global Services"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </FadeUp>
        </div>
      </section>
      <section className="nav-noise relative overflow-hidden bg-navy py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeUp>
            <span className="mx-auto block h-1.5 w-1.5 rotate-45 bg-gold" />
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-8 font-serif text-3xl italic leading-snug text-beige sm:text-4xl lg:text-[2.75rem]">
              {CONTACT.closing}
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
