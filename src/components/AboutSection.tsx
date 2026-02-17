import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import VideoBackground from "./VideoBackground";

const values = [
  "Precisión",
  "Innovación",
  "Eficiencia",
  "Fiabilidad",
  "Precisión",
  "Innovación",
  "Eficiencia",
  "Fiabilidad",
  "Precisión",
  "Innovación",
  "Eficiencia",
  "Fiabilidad",
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="bg-background overflow-hidden relative">
      <VideoBackground src="/videos/456385_Science_Scientist_1920x1080.mp4" opacity={0.15} />
      {/* Main about block */}
      <div className="section-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-primary text-[13px] font-semibold tracking-[0.25em] uppercase mb-6"
          >
            Visión & Misión
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-12 max-w-4xl"
          >
            Automatización diseñada para la industria real.
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg leading-[1.8]"
            >
              Creemos que el próximo salto tecnológico en la industria no vendrá
              de soluciones genéricas, sino de la integración precisa de
              automatización, robótica y control de procesos en cada planta, cada
              línea y cada operación. Nuestra misión es llevar inteligencia
              técnica a los procesos productivos de forma natural, eficiente y
              perfectamente integrada.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-lg leading-[1.8]"
            >
              En SODAMAR, imaginamos una industria donde la tecnología se adapta
              a las personas y los procesos, donde la automatización funciona en
              silencio para multiplicar resultados. Damos a cada proyecto la
              capacidad de entender, ejecutar y optimizar con propósito, haciendo
              la producción más simple, precisa y rentable.
            </motion.p>
          </div>

          {/* Animated counters */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-border/50"
          >
            <AnimatedCounter end={15} suffix="+" label="Años de experiencia" />
            <AnimatedCounter end={120} suffix="+" label="Proyectos ejecutados" />
            <AnimatedCounter end={40} suffix="+" label="Clientes industriales" />
            <AnimatedCounter end={98} suffix="%" label="Satisfacción cliente" />
          </motion.div>
        </div>
      </div>

      {/* Values marquee */}
      <div className="py-8 border-y border-border/50 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {values.map((v, i) => (
            <span
              key={i}
              className="mx-10 text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground/60"
            >
              {v}
            </span>
          ))}
          {values.map((v, i) => (
            <span
              key={`dup-${i}`}
              className="mx-10 text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground/60"
            >
              {v}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
