import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const team = [
  {
    name: "Dirección técnica",
    role: "Ingeniería & Estrategia",
    quote:
      "Cada proyecto comienza con un análisis técnico riguroso. Definimos la estrategia, los objetivos y la arquitectura de la solución antes de ejecutar.",
  },
  {
    name: "Ingeniería de automatización",
    role: "PLC, SCADA & Control",
    quote:
      "Programamos, integramos y validamos sistemas de control que garantizan fiabilidad, seguridad y rendimiento en entornos productivos reales.",
  },
  {
    name: "Robótica aplicada",
    role: "Integración & Visión artificial",
    quote:
      "Diseñamos células robotizadas y sistemas de visión que optimizan procesos de manipulación, inspección y envasado con máxima precisión.",
  },
  {
    name: "Ingeniería de procesos",
    role: "Optimización & Logística",
    quote:
      "Analizamos y rediseñamos flujos productivos para maximizar eficiencia, trazabilidad y rendimiento en centros de producción y distribución.",
  },
  {
    name: "Ingeniería eléctrica",
    role: "Potencia & Instrumentación",
    quote:
      "Diseñamos e implementamos sistemas eléctricos industriales, cuadros de control y redes de instrumentación con los más altos estándares de seguridad.",
  },
  {
    name: "Soporte y mantenimiento",
    role: "Operaciones & Mejora continua",
    quote:
      "Garantizamos la continuidad operativa de cada instalación mediante mantenimiento preventivo, monitorización remota y optimización constante.",
  },
];

const INITIAL_VISIBLE = 4;

const TeamSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleTeam = showAll ? team : team.slice(0, INITIAL_VISIBLE);

  return (
    <section id="equipo" className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-primary text-[13px] font-semibold tracking-[0.25em] uppercase mb-6"
        >
          Nuestro equipo
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8 max-w-4xl"
        >
          Las personas detrás de la ingeniería.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-3xl mb-20 leading-relaxed"
        >
          Nuestro equipo está formado por ingenieros, integradores e innovadores
          que creen que la tecnología debe funcionar de forma invisible.
          Combinamos experiencia profunda en automatización, robótica y sistemas
          de control con la ambición de hacer cada proceso más inteligente y
          eficiente.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleTeam.map((member, i) => (
              <motion.div
                key={member.name}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-card border border-border/50 p-10 hover:border-primary/30 transition-all duration-500 overflow-hidden"
              >
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.04] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-1">
                      {/* Small decorative icon */}
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary text-xs font-bold">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {member.name}
                      </h3>
                    </div>
                    <p className="text-sm text-primary font-medium tracking-wider uppercase ml-11">
                      {member.role}
                    </p>
                  </div>
                  <blockquote className="text-muted-foreground text-base leading-relaxed italic">
                    "{member.quote}"
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show more / Show less button */}
        {team.length > INITIAL_VISIBLE && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3 border border-border text-foreground text-sm font-medium tracking-wider uppercase hover:border-primary hover:text-primary transition-all duration-300 group"
            >
              {showAll ? "Mostrar menos" : "Mostrar más"}
              <motion.span
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-lg leading-none"
              >
                ↓
              </motion.span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
