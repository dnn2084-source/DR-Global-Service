import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { KineticWords, Eyebrow, FadeUp } from "@/components/Reveal";

export default function PageHeader({ eyebrow, title, intro, image }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <header ref={ref} className="nav-noise relative overflow-hidden bg-navy pb-20 pt-40 sm:pb-24 sm:pt-48">
      {image && (
        <motion.div style={{ y }} className="absolute inset-0">
          <img src={image} alt="" className="h-[120%] w-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/70 to-navy" />
        </motion.div>
      )}
      <div className="relative mx-auto max-w-7xl px-6">
        <FadeUp>
          <Eyebrow>{eyebrow}</Eyebrow>
        </FadeUp>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl font-semibold leading-[1.05] text-beige sm:text-6xl">
          <KineticWords text={title} delay={0.15} />
        </h1>
        {intro && (
          <FadeUp delay={0.35} className="mt-8 max-w-2xl">
            <p className="text-base leading-relaxed text-slate-300/90 sm:text-lg">{intro}</p>
          </FadeUp>
        )}
        <div className="gold-rule mt-10" />
      </div>
    </header>
  );
}
