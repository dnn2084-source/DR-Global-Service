import { motion } from "framer-motion";
import { SERVICES_CTA, IMAGES, waLink, WA_MESSAGES } from "@/data/content";
import PageHeader from "@/components/PageHeader";
import { FadeUp, Eyebrow } from "@/components/Reveal";
import { ButtonGold, ButtonGhost } from "@/components/Buttons";

function Timeline() {
  return (
    <ol className="relative ml-3 space-y-14 border-l border-gold/35 pl-8 sm:pl-12">
      {PROCESS_STEPS.map((step, i) => (
        <motion.li
          key={step.step}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, delay: 0.04 * i, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
          data-testid={`timeline-step-${step.step}`}
        >
          <span className="absolute -left-[41px] top-0 grid h-6 w-6 place-items-center rounded-full bg-gold font-sans text-[11px] font-bold text-navy ring-4 ring-beige sm:-left-[57px]">
            {step.step}
          </span>
          <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
            <span className="font-serif text-5xl font-semibold text-gold/25">0{step.step}</span>
            <h3 className="font-serif text-2xl font-semibold text-navy sm:text-3xl">{step.title}</h3>
          </div>
          <p className="mt-4 max-w-xl leading-relaxed text-slate-600">{step.text}</p>
        </motion.li>
      ))}
    </ol>
  );
}

const PROCESS_STEPS = [
  { step: 1, title: "Contacto inicial", text: "Nos explicas qué trámite necesitas y conocemos tu situación." },
  { step: 2, title: "Evaluación del caso", text: "Revisamos la información y te orientamos sobre requisitos y opciones disponibles." },
  { step: 3, title: "Presupuesto y documentación", text: "Te informamos del coste de nuestros servicios y de los documentos necesarios." },
  { step: 4, title: "Preparación y presentación", text: "Organizamos la documentación y realizamos las gestiones administrativas contratadas." },
  { step: 5, title: "Seguimiento del expediente", text: "Te acompañamos durante el procedimiento y gestionamos los requerimientos incluidos en el servicio." },
  { step: 6, title: "Finalización del trámite", text: "Te comunicamos el resultado y te orientamos sobre los siguientes pasos." },
];

export default function ComoTrabajamos() {
  return (
    <>
      <PageHeader
        eyebrow="Nuestro proceso"
        title="Cómo trabajamos"
        image={IMAGES.firma}
      />
      <section className="bg-beige py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <FadeUp className="relative lg:sticky lg:top-28">
              <Eyebrow dark>Seis pasos</Eyebrow>
              <p className="mt-6 font-serif text-2xl leading-snug text-navy sm:text-3xl">
                Te acompañamos en cada etapa de tus gestiones.
              </p>
              <div className="gold-rule mt-8" />
              <div className="relative mt-10">
                <div className="absolute -inset-3 rounded-2xl border border-gold/40" />
                <div className="overflow-hidden rounded-xl">
                  <motion.img
                    src={IMAGES.clientes}
                    alt="Atención personalizada a un cliente"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-10">
                <ButtonGhost to="/contacto" dark testid="process-contact-button">
                  Contacto
                </ButtonGhost>
              </div>
            </FadeUp>
          </div>
          <div className="lg:col-span-7">
            <Timeline />
          </div>
        </div>
      </section>
      <section className="nav-noise bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeUp>
            <Eyebrow>Da el primer paso</Eyebrow>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-6 font-serif text-3xl italic leading-snug text-beige sm:text-4xl">{SERVICES_CTA}</p>
          </FadeUp>
          <FadeUp delay={0.25} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ButtonGold href={waLink(WA_MESSAGES.asesoramiento)} external testid="process-whatsapp-button">
              Solicita tu asesoramiento.
            </ButtonGold>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
