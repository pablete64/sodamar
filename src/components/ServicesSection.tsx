import { motion } from "framer-motion";
import VideoBackground from "./VideoBackground";

const services = [
  {
    num: "01",
    title: "Automatización industrial",
    desc: "Diseño e implementación de sistemas automatizados para líneas de producción, embalaje y manipulación. Control total del proceso productivo.",
  },
  {
    num: "02",
    title: "Robótica y sistemas inteligentes",
    desc: "Integración de robots industriales, cobots y sistemas de visión artificial para procesos de alta precisión y rendimiento.",
  },
  {
    num: "03",
    title: "PLC y control de procesos",
    desc: "Programación de PLC, SCADA y sistemas de supervisión para el control total de operaciones industriales en tiempo real.",
  },
  {
    num: "04",
    title: "Optimización logística",
    desc: "Análisis y rediseño de flujos, trazabilidad y rendimiento en centros de producción, transformación y distribución.",
  },
  {
    num: "05",
    title: "Soluciones agroalimentarias",
    desc: "Ingeniería específica para plantas de transformación, envasado y procesamiento del sector agroalimentario con normativa sanitaria.",
  },
  {
    num: "06",
    title: "Proyectos llave en mano",
    desc: "Integración completa de sistemas: desde la ingeniería conceptual hasta la puesta en marcha, validación y soporte continuo.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding bg-secondary/50 relative overflow-hidden">
      <VideoBackground src="/videos/0_Robot_Robotic_Arm_3840x2160.mov" opacity={0.15} />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-primary text-[13px] font-semibold tracking-[0.25em] uppercase mb-6"
        >
          Tecnología Escalable
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8 max-w-4xl"
        >
          Inteligencia integrada.{" "}
          <br className="hidden md:block" />
          Tecnología que escala.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-2xl mb-20 leading-relaxed"
        >
          Nuestra tecnología es la base de cada proyecto. Transformamos cualquier
          proceso en un sistema más inteligente, eficiente y autónomo.
        </motion.p>

        <div className="space-y-0 border-t border-border/50">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 py-8 border-b border-border/50 items-start hover:bg-accent/30 transition-colors duration-300 px-4 -mx-4"
            >
              <span className="md:col-span-1 text-sm font-medium text-muted-foreground/50 pt-1">
                {s.num}
              </span>
              <h3 className="md:col-span-4 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="md:col-span-7 text-muted-foreground text-base leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
