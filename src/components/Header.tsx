import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/sodamar-logo.png";

const navItems = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Visión", href: "#nosotros" },
  { label: "Tecnología", href: "#servicios" },
  { label: "Sectores", href: "#sectores" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Equipo", href: "#equipo" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        const headerHeight = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
      setOpen(false);
    },
    []
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-background/80 backdrop-blur-xl border-b border-border/20 shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center gap-2"
        >
          <img src={logo} alt="SODAMAR" className="h-32 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`relative text-[13px] font-medium transition-colors tracking-[0.08em] uppercase ${activeSection === item.href
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {item.label}
              {activeSection === item.href && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          onClick={(e) => handleNavClick(e, "#contacto")}
          className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-none border border-foreground text-foreground text-[13px] font-medium tracking-[0.08em] uppercase hover:bg-foreground hover:text-background transition-all duration-300 relative group"
        >
          {/* Bracket corners on contact button */}
          <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/50 group-hover:border-primary transition-colors" />
          <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/50 group-hover:border-primary transition-colors" />
          <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/50 group-hover:border-primary transition-colors" />
          <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/50 group-hover:border-primary transition-colors" />
          Contacto
          <span className="text-xs">›</span>
        </a>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border px-8 py-6 space-y-4"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`block text-sm font-medium transition-colors uppercase tracking-wider ${activeSection === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {item.label}
              </motion.a>
            ))}
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, "#contacto")}
              className="block mt-4 text-center px-5 py-3 border border-foreground text-foreground text-sm font-medium uppercase tracking-wider hover:bg-foreground hover:text-background transition-all"
            >
              Contacto
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
