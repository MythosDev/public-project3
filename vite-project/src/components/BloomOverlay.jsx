import React, { useEffect, useState } from "react";

export default function BloomOverlay({ intensity = 1, flickerIntensity = 0.1, flickerSpeed = 2 }) {
  const [flicker, setFlicker] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlicker(1 + (Math.random() - 0.5) * flickerIntensity);
    }, 1000 / flickerSpeed);

    return () => clearInterval(interval);
  }, [flickerIntensity, flickerSpeed]);

  return (
    <>
      <div className="bloom-overlay" style={{ opacity: flicker }}></div>

      <style>{`
        /* Overlay covering the entire screen */
        .bloom-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          z-index: 9999;
          background: transparent;
          backdrop-filter: blur(${intensity * 2}px) brightness(${1.05 + flickerIntensity / 5});
          transition: opacity 0.1s ease-in-out;
        }

        /* Glow effect applied to everything */
        body * {
          filter: drop-shadow(0 0 ${2 * intensity}px currentColor)
                  drop-shadow(0 0 ${4 * intensity}px currentColor)
                  drop-shadow(0 0 ${8 * intensity}px currentColor);
        }
      `}</style>
    </>
  );
}
