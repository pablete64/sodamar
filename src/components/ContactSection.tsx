import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast({
        title: "Campos requeridos",
        description: "Por favor, complete nombre, email y mensaje.",
        variant: "destructive",
      });
      return;
    }

    // Show success feedback
    setSubmitted(true);
    toast({
      title: "Solicitud enviada ✓",
      description:
        "Gracias por contactarnos. Nos pondremos en contacto con usted a la brevedad.",
    });

    // Reset form after a brief delay
    setTimeout(() => {
      setForm({ name: "", company: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contacto" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-primary text-[13px] font-semibold tracking-[0.25em] uppercase mb-6"
        >
          Contacto
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8 max-w-4xl"
        >
          Construyamos el futuro juntos.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-3xl mb-16 leading-relaxed"
        >
          Si tiene un proyecto industrial, una necesidad de automatización o una
          idea que quiere transformar en realidad, nos encantará escucharle.
          Contacte con nuestro equipo técnico y exploremos cómo podemos
          ayudarle.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl space-y-8"
          onSubmit={handleSubmit}
        >
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label className="block text-xs font-medium text-muted-foreground tracking-wider uppercase mb-2">
                Nombre *
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-border text-foreground text-lg placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                placeholder="Su nombre"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground tracking-wider uppercase mb-2">
                Empresa
              </label>
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground text-base placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                placeholder="Su empresa"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground tracking-wider uppercase mb-2">
              Email *
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground text-base placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
              placeholder="email@empresa.com"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground tracking-wider uppercase mb-2">
              Mensaje *
            </label>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-4 bg-transparent border-0 border-b-2 border-l-2 border-border text-foreground text-lg placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Describa brevemente su proyecto o necesidad..."
              required
            />
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-primary text-primary-foreground text-sm font-medium tracking-wider uppercase mt-4"
            >
              <span>✓</span> Enviado correctamente
            </motion.div>
          ) : (
            <button
              type="submit"
              className="group relative inline-flex items-center gap-3 px-10 py-4 bg-foreground text-background text-sm font-medium tracking-[0.12em] uppercase hover:bg-primary transition-colors duration-300 mt-4"
            >
              <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary/60 group-hover:border-primary transition-colors duration-300" />
              <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary/60 group-hover:border-primary transition-colors duration-300" />
              <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary/60 group-hover:border-primary transition-colors duration-300" />
              <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary/60 group-hover:border-primary transition-colors duration-300" />
              Enviar solicitud
              <span className="text-lg leading-none group-hover:translate-x-1 transition-transform duration-300">
                ›
              </span>
            </button>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
