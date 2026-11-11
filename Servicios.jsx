import { Check } from "lucide-react";
import { SERVICES, SERVICES_CTA, IMAGES, waLink, WA_MESSAGES } from "@/data/content";
import PageHeader from "@/components/PageHeader";
import { FadeUp, Eyebrow } from "@/components/Reveal";
import { ButtonGold, ButtonGhost } from "@/components/Buttons";

function ServiceCard({ service, index }) {
  const Icon = service.icon;
  const featured = index === 0;
  return (
    <FadeUp delay={0.05 * index} className="h-full">
      <article
        data-testid={`service-card-${service.id}`}
        className={`group flex h-full flex-col rounded-2xl border border-beige-border bg-beige-card p-8 transition-all duration-300 hover:border-gold/60 hover:shadow-[0_22px_54px_rgba(11,19,43,0.09)] sm:p-10 ${
          featured ? "lg:col-span-2" : ""
        }`}
      >
        <div className="flex items-start justify-between gap-6">
          <span className="grid h-12 w-12 place-items-center rounded-xl border border-gold/40 bg-beige text-gold-deep transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
            <Icon className="h-5 w-5" />
          </span>
          <span className="font-serif text-4xl font-semibold text-gold/40">0{index + 1}</span>
        </div>
        <h2 className="mt-6 font-serif text-2xl font-semibold text-navy sm:text-3xl">{service.title}</h2>
        <ul className={`mt-7 grid gap-3.5 ${featured ? "sm:grid-cols-2" : ""}`}>
          {service.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-slate-600">
              <Check className="mt-1 h-4 w-4 shrink-0 text-gold-deep" />
              {b}
            </li>
          ))}
        </ul>
      </article>
    </FadeUp>
  );
}

export default function Servicios() {
  return (
    <>
      <PageHeader
        eyebrow="Qué ofrecemos"
        title="Servicios"
        intro="Ponemos a tu disposición una amplia variedad de servicios administrativos y documentales."
        image={IMAGES.documentos}
      />
      <section className="bg-beige py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>
      <section className="nav-noise bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeUp>
            <Eyebrow>Estamos para ayudarte</Eyebrow>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-6 font-serif text-3xl italic leading-snug text-beige sm:text-4xl">{SERVICES_CTA}</p>
          </FadeUp>
          <FadeUp delay={0.25} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ButtonGold href={waLink(WA_MESSAGES.general)} external testid="services-whatsapp-button">
              Escríbenos por WhatsApp
            </ButtonGold>
            <ButtonGhost to="/contacto" testid="services-contact-button">
              Ir a contacto
            </ButtonGhost>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
