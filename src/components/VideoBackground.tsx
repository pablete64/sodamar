import { useRef, useEffect, useState } from "react";

interface VideoBackgroundProps {
    src: string;
    className?: string;
    opacity?: number;
}

const VideoBackground = ({ src, className = "", opacity = 0.08 }: VideoBackgroundProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    // Clean up the src path to handle the base URL correctly
    // If base is "/sodamar/" and src is "/videos/...", we want "/sodamar/videos/..."
    // import.meta.env.BASE_URL includes the trailing slash
    const videoSrc = src.startsWith("/")
        ? `${import.meta.env.BASE_URL}${src.slice(1)}`
        : src;

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleLoaded = () => setIsLoaded(true);
        video.addEventListener("loadeddata", handleLoaded);

        // Attempt to play (may fail on some browsers without interaction)
        video.play().catch(() => { });

        return () => {
            video.removeEventListener("loadeddata", handleLoaded);
        };
    }, []);

    return (
        <div
            className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
            style={{ opacity: isLoaded ? opacity : 0, transition: "opacity 1.5s ease-in-out" }}
        >
            <video
                ref={videoRef}
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={videoSrc} type="video/mp4" />
            </video>
            {/* Gradient overlay to blend video edges */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        </div>
    );
};

export default VideoBackground;
