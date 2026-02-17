import { motion } from "framer-motion";

interface BracketButtonProps {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "outline";
}

const BracketButton = ({ href, children, variant = "primary" }: BracketButtonProps) => {
    const base =
        variant === "primary"
            ? "bg-foreground text-background hover:bg-primary"
            : "border border-foreground text-foreground hover:bg-foreground hover:text-background";

    return (
        <motion.a
            href={href}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`group relative inline-flex items-center gap-3 px-10 py-4 text-sm font-medium tracking-[0.12em] uppercase transition-colors duration-300 ${base}`}
        >
            {/* Corner brackets */}
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary/60 group-hover:border-primary transition-colors duration-300" />
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary/60 group-hover:border-primary transition-colors duration-300" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary/60 group-hover:border-primary transition-colors duration-300" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary/60 group-hover:border-primary transition-colors duration-300" />

            {children}
            <span className="text-lg leading-none group-hover:translate-x-1 transition-transform duration-300">
                ›
            </span>
        </motion.a>
    );
};

export default BracketButton;
