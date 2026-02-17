import { useRef, useEffect } from "react";

interface Particle {
    baseX: number;
    baseY: number;
    baseZ: number;
    x: number;
    y: number;
    z: number;
    vx: number;
    vy: number;
    vz: number;
    size: number;
    alpha: number;
}

interface Config {
    particleCount: number;
    baseRadius: number;
    rotationSpeed: number;
    interactionRadius: number;
    warpStrength: number;
    disableInteractions: boolean;
}

export default function Interactive3DSphere() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const config: Config = {
            particleCount: 2000,
            baseRadius: 600,
            rotationSpeed: 0.06,
            interactionRadius: 250,
            warpStrength: 20,
            disableInteractions: false,
        };

        const SPRING = 0.03;
        const FRICTION = 0.85;
        const Z_PERSPECTIVE = 800;

        const particles: Particle[] = [];
        const mouse = { x: 0, y: 0, isActive: false };
        let isReady = false;

        // Resize with guards
        const resize = (): boolean => {
            const parent = canvas.parentElement;
            if (!parent) return false;

            const width = parent.clientWidth;
            const height = parent.clientHeight;

            if (!width || !height) return false;

            const dpr = Math.min(window.devicePixelRatio || 1, 2);

            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = width + "px";
            canvas.style.height = height + "px";

            return true;
        };

        // Initialize particles using Fibonacci sphere distribution
        const initParticles = () => {
            particles.length = 0;
            const { particleCount, baseRadius } = config;

            for (let i = 0; i < particleCount; i++) {
                const phi = Math.acos(1 - (2 * (i + 0.5)) / particleCount);
                const theta = Math.PI * (1 + Math.sqrt(5)) * i;

                const x = baseRadius * Math.sin(phi) * Math.cos(theta);
                const y = baseRadius * Math.sin(phi) * Math.sin(theta);
                const z = baseRadius * Math.cos(phi);

                particles.push({
                    baseX: x,
                    baseY: y,
                    baseZ: z,
                    x: x,
                    y: y,
                    z: z,
                    vx: 0,
                    vy: 0,
                    vz: 0,
                    size: Math.random() * 3.5 + 0.5,
                    alpha: Math.random() * 0.5 + 0.5,
                });
            }
        };

        // Animation loop
        const animate = () => {
            if (!isReady) return;

            const width = canvas.width;
            const height = canvas.height;
            const cx = width / 2;

            let cy: number;
            if (window.innerWidth > 991) {
                cy = height * 0.65;
            } else {
                cy = height * 0.7;
            }

            ctx.clearRect(0, 0, width, height);

            const time = Date.now() * 0.001 * config.rotationSpeed;

            particles.forEach((p) => {
                // Base rotation
                let tx = p.baseX * Math.cos(time) - p.baseZ * Math.sin(time);
                let tz = p.baseX * Math.sin(time) + p.baseZ * Math.cos(time);
                let ty = p.baseY;

                // Mouse interaction
                if (mouse.isActive && !config.disableInteractions) {
                    const mouseRelX = mouse.x * (width / canvas.offsetWidth) - cx;
                    const mouseRelY = mouse.y * (height / canvas.offsetHeight) - cy;

                    const rotX = mouseRelY * 0.0001;
                    const rotY = mouseRelX * 0.0001;

                    let mx = tx * Math.cos(rotY) - tz * Math.sin(rotY);
                    let mz = tx * Math.sin(rotY) + tz * Math.cos(rotY);
                    tx = mx;
                    tz = mz;

                    let my = ty * Math.cos(rotX) - tz * Math.sin(rotX);
                    mz = ty * Math.sin(rotX) + tz * Math.cos(rotX);
                    ty = my;
                    tz = mz;
                }

                // Spring physics
                p.vx += (tx - p.x) * SPRING;
                p.vy += (ty - p.y) * SPRING;
                p.vz += (tz - p.z) * SPRING;

                // Calculate screen position
                const scale = Z_PERSPECTIVE / (Z_PERSPECTIVE + p.z);
                const sx = cx + p.x * scale;
                const sy = cy + p.y * scale;

                // Warp effect on mouse proximity
                if (mouse.isActive && !config.disableInteractions) {
                    const dx = sx - mouse.x * (width / canvas.offsetWidth);
                    const dy = sy - mouse.y * (height / canvas.offsetHeight);
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < config.interactionRadius) {
                        const force = (config.interactionRadius - dist) / config.interactionRadius;
                        const angle = Math.atan2(dy, dx);
                        const str = config.warpStrength;

                        p.vx += Math.cos(angle) * force * str;
                        p.vy += Math.sin(angle) * force * str;
                        p.vz -= force * str * 0.5;
                    }
                }

                // Update position
                p.x += p.vx;
                p.y += p.vy;
                p.z += p.vz;
                p.vx *= FRICTION;
                p.vy *= FRICTION;
                p.vz *= FRICTION;

                // Draw particle - dark dots (Botronics style)
                const finalScale = Z_PERSPECTIVE / (Z_PERSPECTIVE + p.z);
                if (finalScale > 0) {
                    const alpha = Math.min(1, Math.max(0.15, finalScale * p.alpha));
                    const radius = p.size * finalScale;

                    ctx.beginPath();
                    ctx.arc(sx, sy, radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(20, 25, 35, ${alpha * 0.85})`;
                    ctx.fill();
                }
            });

            requestAnimationFrame(animate);
        };

        // Event handlers
        const onMove = (e: MouseEvent | TouchEvent) => {
            if (!isReady) return;

            const rect = canvas.getBoundingClientRect();
            const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
            const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

            mouse.x = clientX - rect.left;
            mouse.y = clientY - rect.top;
            mouse.isActive = true;
        };

        const onLeave = () => {
            mouse.isActive = false;
        };

        const onResize = () => {
            if (!isReady) return;
            resize();
        };

        // Safe init with retry
        const safeInit = () => {
            if (!resize()) {
                setTimeout(safeInit, 100);
                return;
            }

            isReady = true;
            initParticles();
            animate();
        };

        // Bind events
        canvas.addEventListener("mousemove", onMove);
        canvas.addEventListener("touchmove", onMove, { passive: false });
        canvas.addEventListener("mouseleave", onLeave);
        canvas.addEventListener("touchend", onLeave);
        window.addEventListener("resize", onResize);

        // Initialize
        safeInit();

        // Cleanup
        return () => {
            canvas.removeEventListener("mousemove", onMove);
            canvas.removeEventListener("touchmove", onMove);
            canvas.removeEventListener("mouseleave", onLeave);
            canvas.removeEventListener("touchend", onLeave);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-auto">
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{ touchAction: "none" }}
            />
        </div>
    );
}
