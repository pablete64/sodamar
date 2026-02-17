import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("sodamar-cookie-consent");
        if (!consent) {
            // Show after a short delay so it doesn't compete with hero animations
            const timer = setTimeout(() => setIsVisible(true), 2500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("sodamar-cookie-consent", "accepted");
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem("sodamar-cookie-consent", "rejected");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-50"
                >
                    <div className="bg-foreground/95 backdrop-blur-xl text-background rounded-2xl p-6 shadow-2xl border border-white/10">
                        <div className="flex items-start gap-4">
                            <div className="text-2xl mt-0.5">🍪</div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-sm mb-1.5">
                                    Este sitio utiliza cookies
                                </h3>
                                <p className="text-xs text-background/70 leading-relaxed mb-4">
                                    Utilizamos cookies para mejorar tu experiencia de navegación,
                                    analizar el tráfico del sitio y personalizar el contenido.
                                </p>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={handleAccept}
                                        className="px-5 py-2 bg-primary text-white text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-primary/90 transition-colors duration-200"
                                    >
                                        Aceptar
                                    </button>
                                    <button
                                        onClick={handleReject}
                                        className="px-5 py-2 bg-transparent text-background/60 text-xs font-semibold tracking-wider uppercase rounded-lg border border-background/20 hover:border-background/40 hover:text-background/80 transition-all duration-200"
                                    >
                                        Rechazar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
