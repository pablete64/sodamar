import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
    end: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    label: string;
}

const AnimatedCounter = ({
    end,
    suffix = "",
    prefix = "",
    duration = 2,
    label,
}: AnimatedCounterProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [isInView, end, duration]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
        >
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2 tabular-nums">
                {prefix}
                {count}
                {suffix}
            </p>
            <p className="text-sm text-muted-foreground tracking-wider uppercase font-medium">
                {label}
            </p>
        </motion.div>
    );
};

export default AnimatedCounter;
