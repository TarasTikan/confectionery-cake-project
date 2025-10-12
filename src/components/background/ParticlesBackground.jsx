import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import { loadImageShape } from "@tsparticles/shape-image"; 
import charryBg from "../../img/charry-bgremover.png";
import chokoBg from "../../img/choko-bgremover.png";
import cupcakeGreenBg from "../../img/cupcake_green-bgremover.png";
import cupcakeYellowBg from "../../img/cupcake_yellow-bgremover.png";
import makaronGreenBg from "../../img/makaron_green-bgremover.png";
import makaronPinkBg from "../../img/makaron_pink-bgremover.png";
import makaronYelowBg from "../../img/makaron_yellow-bgremover.png";
import strawbarryBg from "../../img/strawberry-bgremover.png";
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
      background: { color: { value: "#fff8f2" } },
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
              // Шлях з public/
              { src: charryBg, width: 200, height: 200 },
              { src: chokoBg, width: 200, height: 200 },
              { src: cupcakeGreenBg, width: 200, height: 240 },
              { src: cupcakeYellowBg, width: 200, height: 240 },
              { src: makaronGreenBg, width: 200, height: 240 },
              { src: makaronPinkBg, width: 200, height: 240 },
              { src: makaronYelowBg, width: 200, height: 240 },
              { src: strawbarryBg, width: 200, height: 200 },

              // додай інші PNG
            ],
          },
        }, // або type: "image" + options.image
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
