import { motion } from "framer-motion";
import VideoBackground from "./VideoBackground";
import {
    Beef,
    Truck,
    Car,
    FlaskConical,
    Settings,
    Factory
} from "lucide-react";

const sectors = [
    {
        icon: <Beef className="w-12 h-12" />,
        title: "Agroalimentario",
        desc: "Automatización de procesos de transformación, envasado y trazabilidad para la industria alimentaria.",
    },
    {
        icon: <Truck className="w-12 h-12" />,
        title: "Logística",
        desc: "Sistemas inteligentes de clasificación, almacenamiento automatizado y optimización de flujos.",
    },
    {
        icon: <Car className="w-12 h-12" />,
        title: "Automoción",
        desc: "Integración de células robotizadas y control de calidad para líneas de montaje de alta cadencia.",
    },
    {
        icon: <FlaskConical className="w-12 h-12" />,
        title: "Farma & Química",
        desc: "Soluciones de control precisas para entornos críticos con estrictas normativas de seguridad.",
    },
    {
        icon: <Factory className="w-12 h-12" />,
        title: "Industria Pesada",
        desc: "Mecanización y automatización de procesos robustos para la siderurgia y construcción.",
    },
    {
        icon: <Settings className="w-12 h-12" />,
        title: "Manufactura",
        desc: "Digitalización y conectividad para fábricas del futuro bajo el modelo Industria 4.0.",
    },
];

const SectorsSection = () => {
    return (
        <section id="sectores" className="section-padding bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/[0.01] -skew-x-12 translate-x-1/2 pointer-events-none" />
            <VideoBackground src="/videos/0_Agricultural_Land_Greenhouse_3840x2160.mp4" opacity={0.18} />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-primary text-[13px] font-semibold tracking-[0.25em] uppercase mb-6"
                >
                    Sectores de Actuación
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-16 max-w-4xl"
                >
                    Soluciones transversales para la industria moderna.
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
                    {sectors.map((sector, i) => (
                        <motion.div
                            key={sector.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group"
                        >
                            <div className="flex flex-col gap-6 p-10 border border-border/40 bg-secondary/20 hover:bg-secondary/40 hover:border-primary/30 transition-all duration-500 h-full relative overflow-hidden bracket-box">
                                {/* Corner brackets */}
                                <img src="/angle-vector.svg" alt="" className="select-button-vector is-top-left" />
                                <img src="/angle-vector.svg" alt="" className="select-button-vector is-top-right" />
                                <img src="/angle-vector.svg" alt="" className="select-button-vector is-bottom-left" />
                                <img src="/angle-vector.svg" alt="" className="select-button-vector is-bottom-right" />

                                {/* Visual accent */}
                                <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500" />

                                <motion.div
                                    className="text-primary icon-container relative"
                                    animate={{
                                        y: [0, -6, 0, 4, 0],
                                        rotate: [0, -2, 0, 2, 0]
                                    }}
                                    transition={{
                                        duration: 4 + i * 0.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <img src="/angle-vector.svg" alt="" className="select-button-vector is-top-left" />
                                    <img src="/angle-vector.svg" alt="" className="select-button-vector is-top-right" />
                                    <img src="/angle-vector.svg" alt="" className="select-button-vector is-bottom-left" />
                                    <img src="/angle-vector.svg" alt="" className="select-button-vector is-bottom-right" />
                                    {sector.icon}
                                </motion.div>

                                <div>
                                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {sector.title}
                                    </h3>
                                    <p className="text-muted-foreground text-base leading-relaxed">
                                        {sector.desc}
                                    </p>
                                </div>

                                <div className="mt-auto pt-6 flex items-center gap-2 text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <span className="text-xs uppercase tracking-widest">Ver más</span>
                                    <span className="text-lg">›</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectorsSection;
