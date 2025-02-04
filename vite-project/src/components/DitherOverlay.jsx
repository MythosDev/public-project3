import React from "react";

const DitherOverlay = () => {
  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      pointerEvents: "none",
      zIndex: 50,
      border: "2px solid red",
    //   backgroundColor: "red",
    },
    svg: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
    },
  };

  return (
    <div style={styles.overlay}>
      <svg style={styles.svg}>
        <filter id="dither" x="0" y="0" width="100%" height="100%" styles={styles.svg}>
          <feTurbulence type="fractalNoise" baseFrequency="5" numOctaves="1" stitchTiles="stitch" />
          <feComponentTransfer>
            <feFuncA type="discrete" tableValues="0 0.5 100" />
          </feComponentTransfer>
        </filter>
        <rect width="100%" height="100%" filter="url(#dither)" opacity="0.2" />
      </svg>
    </div>
  );
};

export default DitherOverlay;
