import { motion } from "framer-motion";
import logo from "@/assets/sodamar-logo.png";

const footerNav = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Visión", href: "#nosotros" },
  { label: "Tecnología", href: "#servicios" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

const Footer = () => {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const headerHeight = 80;
      const top =
        el.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-foreground overflow-hidden">
      {/* Large watermark text (like botronics.be dramatic footer) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[12vw] md:text-[10vw] font-bold tracking-tight whitespace-nowrap"
          style={{ color: "hsl(220 10% 16%)" }}
        >
          SODAMAR™
        </motion.span>
      </div>

      <div className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-16">
            <div>
              <img
                src={logo}
                alt="SODAMAR"
                className="h-10 w-auto brightness-0 invert mb-4"
              />
              <p
                className="text-sm max-w-xs leading-relaxed"
                style={{ color: "hsl(220 10% 55%)" }}
              >
                Automatización diseñada para la industria real. Ingeniería
                industrial avanzada.
              </p>
            </div>
            <div className="flex gap-16">
              <div>
                <p
                  className="text-xs font-semibold tracking-[0.15em] uppercase mb-4"
                  style={{ color: "hsl(220 10% 45%)" }}
                >
                  Navegación
                </p>
                <div className="space-y-2">
                  {footerNav.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block text-sm transition-colors hover:opacity-80"
                      style={{ color: "hsl(220 10% 60%)" }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
            style={{ borderColor: "hsl(220 10% 20%)" }}
          >
            <p className="text-xs" style={{ color: "hsl(220 10% 40%)" }}>
              © {new Date().getFullYear()} SODAMAR™ — Ingeniería Industrial
              Avanzada. Todos los derechos reservados.
            </p>
            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="text-xs uppercase tracking-wider transition-colors hover:opacity-80 flex items-center gap-2"
              style={{ color: "hsl(220 10% 45%)" }}
            >
              Volver arriba
              <span className="text-base">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
