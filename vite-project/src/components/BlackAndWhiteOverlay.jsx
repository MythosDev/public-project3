import React, { useEffect } from "react";

const BlackAndWhiteOverlay = () => {
  useEffect(() => {
    // Apply grayscale effect to the entire body when the component mounts
    document.body.style.filter = "grayscale(100%)";

    // Cleanup: reset the filter when the component unmounts
    return () => {
      document.body.style.filter = "none";
    };
  }, []);

  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
    //   backgroundColor: "rgba(0, 0, 0, 0.5)", // Black with transparency
      zIndex: 50, // Ensure the overlay is on top
      pointerEvents: "none", // Ensure it doesn't block interactions
    },
  };

  return <div style={styles.overlay} />;
};

export default BlackAndWhiteOverlay;
