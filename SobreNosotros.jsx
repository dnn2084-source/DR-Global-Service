import { motion } from "framer-motion";
import { ABOUT, IMAGES } from "@/data/content";
import PageHeader from "@/components/PageHeader";
import { FadeUp, Eyebrow } from "@/components/Reveal";

function Pillar({ title, text, index }) {
  return (
    <FadeUp delay={0.1 * index} className="h-full">
      <article className="flex h-full flex-col rounded-2xl border border-gold/15 bg-navy-800/60 p-8 transition-colors duration-300 hover:border-gold/45 sm:p-10">
        <span className="font-serif text-sm italic text-gold">0{index + 1}</span>
        <h3 className="mt-4 font-serif text-2xl font-medium text-gold-bright">{title}</h3>
        <p className="mt-5 leading-relaxed text-slate-300/90">{text}</p>
      </article>
    </FadeUp>
  );
}

export default function SobreNosotros() {
  return (
    <>
      <PageHeader
        eyebrow={ABOUT.eyebrow}
        title={ABOUT.title}
        image={IMAGES.asesor}
      />
      <section className="bg-beige py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-2">
          <div>
            <FadeUp>
              <p className="font-serif text-2xl leading-snug text-navy sm:text-3xl">
                {ABOUT.paragraphs[0]}
              </p>
            </FadeUp>
            <div className="mt-10 space-y-7">
              {ABOUT.paragraphs.slice(1).map((p, i) => (
                <FadeUp key={i} delay={0.12 + i * 0.12}>
                  <p className="leading-relaxed text-slate-700">{p}</p>
                </FadeUp>
              ))}
            </div>
          </div>
          <FadeUp delay={0.2} className="relative lg:sticky lg:top-28">
            <div className="absolute -inset-3 rounded-2xl border border-gold/40" />
            <div className="overflow-hidden rounded-xl">
              <motion.img
                src={IMAGES.equipo}
                alt="Equipo de D&R Global Services"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </FadeUp>
        </div>
      </section>
      <section className="nav-noise bg-navy py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeUp>
            <Eyebrow>Nuestra esencia</Eyebrow>
          </FadeUp>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Pillar index={0} title={ABOUT.mision.title} text={ABOUT.mision.text} />
            <Pillar index={1} title={ABOUT.vision.title} text={ABOUT.vision.text} />
            <Pillar index={2} title={ABOUT.valores.title} text={ABOUT.valores.text} />
          </div>
          <FadeUp delay={0.2} className="mt-20 text-center">
            <span className="mx-auto block h-1.5 w-1.5 rotate-45 bg-gold" />
            <p className="mx-auto mt-8 max-w-3xl font-serif text-3xl italic leading-snug text-beige sm:text-4xl">
              {ABOUT.closing}
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
