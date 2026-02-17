import { useEffect, useRef } from "react";

const AmbientGlow = () => {
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (glowRef.current) {
                glowRef.current.style.setProperty("--glow-x", `${e.clientX}px`);
                glowRef.current.style.setProperty("--glow-y", `${e.clientY}px`);
            }
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={glowRef}
            className="pointer-events-none fixed inset-0 z-[1] opacity-40 transition-opacity duration-700"
            style={{
                background:
                    "radial-gradient(800px circle at var(--glow-x, 50%) var(--glow-y, 50%), hsl(160 60% 42% / 0.07), transparent 50%)",
            }}
        />
    );
};

export default AmbientGlow;
