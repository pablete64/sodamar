import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import BracketButton from "./BracketButton";
import Interactive3DSphere from "./Interactive3DSphere";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-gradient-to-b from-background to-secondary/20 pt-28"
    >
      {/* 3D Interactive Particle Sphere */}
      <div className="absolute inset-0 z-[1]">
        <Interactive3DSphere />
      </div>

      {/* Animated dot grid (constellation style) */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(160 60% 42%) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Subtle animated gradient orb */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 20, -30, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-[100px]"
      />

      <motion.div
        style={{ opacity, y, scale }}
        className="relative z-10 max-w-7xl mx-auto px-8 text-center mt-[8vh]"
      >
        {/* Subtitle badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-[0.2em] uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Ingeniería Industrial Avanzada
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-foreground mb-4"
        >
          Convertimos procesos
          <br />
          en{" "}
          <motion.span
            className="heading-style-pixel"
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.4, delay: 1.2 }}
          >
            inteligencia
          </motion.span>{" "}
          industrial.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-muted-foreground leading-relaxed"
        >
          La industria avanza. Nosotros diseñamos, integramos y automatizamos
          las soluciones que la impulsan — desde la logística hasta el sector
          agroalimentario.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <BracketButton href="#nosotros" variant="primary">
            Descubrir más
          </BracketButton>
          <BracketButton href="#contacto" variant="outline">
            Contacto
          </BracketButton>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default HeroSection;
