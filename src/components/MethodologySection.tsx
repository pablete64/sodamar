import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Análisis técnico",
    desc: "Estudio en profundidad de procesos, necesidades y objetivos del proyecto. Definición del alcance y los requisitos funcionales.",
  },
  {
    num: "02",
    title: "Diseño de ingeniería",
    desc: "Ingeniería conceptual, básica y de detalle adaptada a cada caso. Planos, simulaciones y especificaciones técnicas completas.",
  },
  {
    num: "03",
    title: "Integración tecnológica",
    desc: "Selección, programación e integración de equipos, sensórica y sistemas de control. Desarrollo de software a medida.",
  },
  {
    num: "04",
    title: "Puesta en marcha",
    desc: "Instalación en planta, pruebas funcionales, validación de rendimiento y formación del equipo operativo.",
  },
  {
    num: "05",
    title: "Soporte y optimización",
    desc: "Mantenimiento preventivo, monitorización, mejora continua y escalabilidad del sistema implementado.",
  },
];

const MethodologySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 60%", "end 80%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="metodologia"
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-primary text-[13px] font-semibold tracking-[0.25em] uppercase mb-6"
        >
          Metodología
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-20 max-w-4xl"
        >
          Inteligencia integrada sin fisuras.
          <br className="hidden md:block" />
          Tecnología construida para escalar.
        </motion.h2>

        {/* Timeline with animated line */}
        <div className="relative">
          {/* Background line */}
          <div className="absolute left-[23px] md:left-[31px] top-0 bottom-0 w-[3px] bg-border/40" />
          {/* Animated foreground line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[23px] md:left-[31px] top-0 w-[3px] bg-primary/70 origin-top"
          />

          <div className="space-y-12">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="grid grid-cols-[48px_1fr] md:grid-cols-[64px_1fr_1fr] gap-6 md:gap-8 items-start relative"
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex items-center justify-center">
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="w-[16px] h-[16px] rounded-full bg-primary border-4 border-background shadow-[0_0_0_3px_hsl(160_60%_42%/0.3),0_0_12px_hsl(160_60%_42%/0.15)]"
                  />
                </div>

                <div>
                  <span className="text-sm font-bold tracking-[0.2em] uppercase text-primary/70 mb-1 block">
                    Paso {s.num}
                  </span>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {s.title}
                  </h3>
                </div>

                <div className="col-span-full md:col-span-1 pl-[48px] md:pl-0">
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
