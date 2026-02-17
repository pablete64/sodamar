import { motion } from "framer-motion";

const ProjectsSection = () => {
  return (
    <section id="proyectos" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-primary text-[13px] font-semibold tracking-[0.25em] uppercase mb-6"
        >
          Proyecto destacado
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-12 max-w-4xl"
        >
          Capacidad técnica aplicada a proyectos reales.
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-border/50 rounded-sm flex items-center justify-center mb-6 relative overflow-hidden group">
              {/* Animated gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="text-center px-8 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-16 h-16 mx-auto mb-4 border-2 border-primary/30 rounded-full flex items-center justify-center"
                >
                  <span className="text-primary font-bold text-xl">S</span>
                </motion.div>
                <p className="text-sm text-muted-foreground tracking-wider uppercase">
                  Ingeniería aplicada
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <blockquote className="text-lg text-muted-foreground leading-relaxed border-l-2 border-primary/30 pl-6">
              Cada proyecto que ejecutamos combina ingeniería de detalle,
              tecnología de vanguardia e integración precisa — desde la
              automatización de líneas de envasado hasta la optimización completa
              de centros de distribución.
            </blockquote>

            <div className="space-y-6">
              {[
                {
                  label: "Automatización de líneas de envasado",
                  sector: "Agroalimentario",
                },
                {
                  label: "Centro de distribución automatizado",
                  sector: "Logística",
                },
                {
                  label: "Optimización de planta de transformación",
                  sector: "Industria",
                },
              ].map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="group flex items-center justify-between py-4 border-b border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div>
                    <p className="text-foreground font-medium">{p.label}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {p.sector}
                    </p>
                  </div>
                  <span className="text-muted-foreground/40 text-lg">
                    ·
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
