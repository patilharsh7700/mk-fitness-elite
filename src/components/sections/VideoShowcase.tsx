import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import poster from "@/assets/interior.jpg";
import { SectionHeading } from "@/components/site/ui-bits";

// Set to the generated clip path once available, e.g.:
// import showcase from "@/assets/videos/gym-showcase.mp4";
const VIDEO_SRC: string | undefined = undefined;

export function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const toggle = () => {
    const v = videoRef.current;
    if (!v || !VIDEO_SRC) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[180px]" />
      <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Inside The Club"
          title={
            <>
              FEEL THE <span className="text-gradient">ENERGY.</span>
            </>
          }
          subtitle="Step inside M.K Fitness Club — the lights, the iron, the atmosphere that keeps you coming back."
        />

        <div data-reveal="up" className="group relative mt-16">
          <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-r from-primary/40 via-primary/10 to-primary/40 opacity-60 blur-md transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative aspect-video w-full overflow-hidden rounded-[2rem] border border-border">
            <video
              ref={videoRef}
              src={VIDEO_SRC}
              poster={poster}
              muted={muted}
              loop
              playsInline
              preload="metadata"
              onClick={toggle}
              className="h-full w-full cursor-pointer object-cover"
            />

            {/* Center play button */}
            {!playing && (
              <button
                onClick={toggle}
                aria-label="Play video"
                className="absolute inset-0 grid place-items-center bg-black/40 transition-colors duration-300 hover:bg-black/30"
              >
                <span className="relative grid h-20 w-20 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_0_50px_hsl(var(--primary)/0.6)] transition-transform duration-300 hover:scale-110 lg:h-24 lg:w-24">
                  <span className="absolute inset-0 animate-ping rounded-full bg-primary/40" />
                  <Play className="relative h-8 w-8 fill-current lg:h-10 lg:w-10" />
                </span>
              </button>
            )}

            {/* Controls */}
            {VIDEO_SRC && playing && (
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  onClick={toggleMute}
                  aria-label={muted ? "Unmute" : "Mute"}
                  className="glass grid h-11 w-11 place-items-center rounded-full text-foreground transition-transform hover:scale-105"
                >
                  {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </button>
                <button
                  onClick={toggle}
                  aria-label="Pause video"
                  className="glass grid h-11 w-11 place-items-center rounded-full text-foreground transition-transform hover:scale-105"
                >
                  <Pause className="h-5 w-5" />
                </button>
              </div>
            )}

            {!VIDEO_SRC && (
              <span className="glass absolute bottom-4 left-4 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                Video coming soon
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
