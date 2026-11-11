import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { HOME, SERVICES, SERVICES_CTA, PROCESS, ABOUT, IMAGES, waLink, WA_MESSAGES } from "@/data/content";
import { KineticLines, FadeUp, Eyebrow, Marquee } from "@/components/Reveal";
import { ButtonGold, ButtonGhost } from "@/components/Buttons";

function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 70]);

  return (
    <section ref={ref} className="nav-noise relative overflow-hidden bg-navy">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 pb-20 pt-32 lg:grid-cols-12 lg:pt-36">
        <div className="lg:col-span-7">
          <FadeUp y={20}>
            <Eyebrow>{HOME.eyebrow}</Eyebrow>
          </FadeUp>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] text-beige sm:text-6xl lg:text-[4.2rem]">
            <KineticLines lines={HOME.welcome} />
          </h1>
          <FadeUp delay={0.55} className="mt-8 max-w-xl">
            <p className="text-base leading-relaxed text-slate-300/90 sm:text-lg">{HOME.lead}</p>
          </FadeUp>
          <FadeUp delay={0.7} className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonGold href={waLink(WA_MESSAGES.asesoramiento)} external testid="hero-cta-whatsapp-button">
              {HOME.ctaAdvisory}
            </ButtonGold>
            <ButtonGhost to="/servicios" testid="hero-cta-servicios-button">
              {HOME.ctaServices}
            </ButtonGhost>
          </FadeUp>
          <FadeUp delay={0.85} className="mt-14 flex items-center gap-5">
            <span className="gold-rule" />
            <p className="font-serif text-xl italic text-gold-bright sm:text-2xl">{HOME.promise}</p>
          </FadeUp>
        </div>
        <div className="lg:col-span-5">
          <motion.div style={{ y }} className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-3 rounded-2xl border border-gold/30" />
            <div className="relative overflow-hidden rounded-xl">
              <motion.img
                src={IMAGES.hero}
                alt="Atención personalizada de D&R Global Services"
                initial={{ scale: 1.12, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-xl border border-gold/30 bg-navy-800/90 px-5 py-4 backdrop-blur-md sm:flex"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gold/15">
                <Check className="h-4 w-4 text-gold-bright" />
              </span>
              <p className="font-serif text-base italic text-beige">Acompañamos proyectos de vida</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Editorial() {
  return (
    <section className="bg-beige py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <FadeUp>
            <Eyebrow dark>D&amp;R Global Services</Eyebrow>
          </FadeUp>
          <div className="mt-8 space-y-7">
            {HOME.paragraphs.map((p, i) => (
              <FadeUp key={i} delay={0.1 + i * 0.12}>
                <p className={`leading-relaxed text-slate-700 ${i === 0 ? "text-xl sm:text-2xl font-serif text-navy" : "text-base"}`}>
                  {p}
                </p>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.5} className="mt-10">
            <ButtonGhost to="/sobre-nosotros" dark testid="home-about-link">
              Sobre nosotros
              <ArrowRight className="h-4 w-4" />
            </ButtonGhost>
          </FadeUp>
        </div>
        <FadeUp delay={0.2} className="relative">
          <div className="absolute -inset-3 rounded-2xl border border-gold/40" />
          <div className="overflow-hidden rounded-xl">
            <motion.img
              src={IMAGES.editorial}
              alt="Equipo de D&R Global Services en reunión de trabajo"
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
  );
}

function ServicesPreview() {
  return (
    <section className="nav-noise bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <FadeUp>
              <Eyebrow>Qué ofrecemos</Eyebrow>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="mt-5 font-serif text-4xl font-semibold text-beige sm:text-5xl">Servicios</h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-5 leading-relaxed text-slate-300/90">
                Ponemos a tu disposición una amplia variedad de servicios administrativos y documentales.
              </p>
            </FadeUp>
          </div>
          <FadeUp delay={0.25}>
            <ButtonGhost to="/servicios" testid="home-services-link">
              Ver todos los servicios
              <ArrowRight className="h-4 w-4" />
            </ButtonGhost>
          </FadeUp>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <FadeUp key={s.id} delay={0.06 * i} className="h-full">
              <Link
                to="/servicios"
                data-testid={`home-service-card-${s.id}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-gold/15 bg-navy-800/60 p-8 transition-all duration-300 hover:border-gold/50 hover:bg-navy-800"
              >
                <div>
                  <span className="font-serif text-sm italic text-gold">0{i + 1}</span>
                  <h3 className="mt-4 font-serif text-2xl font-medium leading-snug text-beige">{s.title}</h3>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  Ver servicio
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </FadeUp>
          ))}
          <FadeUp delay={0.45} className="h-full">
            <div className="flex h-full flex-col items-start justify-between rounded-2xl border border-gold/40 bg-gold/10 p-8">
              <p className="font-serif text-2xl italic leading-snug text-gold-bright">{HOME.promise}</p>
              <a
                href={waLink(WA_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="home-services-whatsapp-link"
                className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold transition-colors hover:text-gold-bright"
              >
                Escríbenos
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function ProcessPreview() {
  return (
    <section className="bg-beige py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <FadeUp>
            <Eyebrow dark>Nuestro proceso</Eyebrow>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="mt-5 font-serif text-4xl font-semibold text-navy sm:text-5xl">Cómo trabajamos</h2>
          </FadeUp>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((step, i) => (
            <FadeUp key={step.step} delay={0.06 * i} className="h-full">
              <Link
                to="/como-trabajamos"
                data-testid={`home-process-step-${step.step}`}
                className="group block h-full rounded-2xl border border-beige-border bg-beige-card p-8 transition-all duration-300 hover:border-gold/60 hover:shadow-[0_18px_44px_rgba(11,19,43,0.08)]"
              >
                <span className="font-serif text-4xl font-semibold text-gold/50 transition-colors duration-300 group-hover:text-gold">
                  0{step.step}
                </span>
                <h3 className="mt-5 font-serif text-xl font-medium text-navy">{step.title}</h3>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteBand() {
  return (
    <section className="nav-noise relative overflow-hidden bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <FadeUp>
          <span className="mx-auto block h-1.5 w-1.5 rotate-45 bg-gold" />
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="mt-8 font-serif text-3xl italic leading-snug text-beige sm:text-4xl lg:text-[2.75rem]">
            {ABOUT.closing}
          </p>
        </FadeUp>
        <FadeUp delay={0.25} className="mt-10">
          <ButtonGold href={waLink(WA_MESSAGES.asesoramiento)} external testid="home-quote-whatsapp-button">
            {SERVICES_CTA}
          </ButtonGold>
        </FadeUp>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={SERVICES.map((s) => s.title)} />
      <Editorial />
      <ServicesPreview />
      <ProcessPreview />
      <QuoteBand />
    </>
  );
}
