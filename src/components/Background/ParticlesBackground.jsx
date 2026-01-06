import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadImageShape } from "@tsparticles/shape-image";

export function ParticlesBg() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadImageShape(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      background: { color: { value: "#fffff" } },
      fpsLimit: 60,
      detectRetina: true,
      interactivity: { events: { onHover: { enable: true, mode: "repulse" } } },
      particles: {
        number: { value: 8, density: { enable: true, area: 1200 } },
        move: {
          enable: true,
          speed: 4,
          random: true,
          outModes: { default: "out" },
        },
        opacity: { value: 1 },
        size: { value: 40, random: { enable: true, minimumValue: 20 } },
        shape: {
          type: "image",
          options: {
            image: [
              {
                src: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/bgElements/charry-bgremover.png",
                width: 200,
                height: 200,
              },
              {
                src: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/bgElements/choko-bgremover.png",
                width: 200,
                height: 200,
              },
              {
                src: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/bgElements/cupcake_green-bgremover.png",
                width: 200,
                height: 240,
              },
              {
                src: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/bgElements/cupcake_yellow-bgremover.png",
                width: 200,
                height: 240,
              },
              {
                src: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/bgElements/makaron_green-bgremover.png",
                width: 200,
                height: 240,
              },
              {
                src: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/bgElements/makaron_pink-bgremover.png",
                width: 200,
                height: 240,
              },
              {
                src: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/bgElements/makaron_yellow-bgremover.png",
                width: 200,
                height: 240,
              },
              {
                src: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/bgElements/strawberry-bgremover.png",
                width: 200,
                height: 200,
              },
            ],
          },
        },
      },
    }),
    []
  );

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0, // canvas над фоном body
        pointerEvents: "none", // не блокує кліки
      }}
    />
  );
}
