import React, { useEffect } from "react";


//UPDATES:
//currently I have a rain effect
//Randomly spawn at locations to the left out of view at a fixed X position, 
//randomly spawn with time
//Have fixed list of Y positions

//UPDATE:
//consistent
//spawn text in a line from the left
//TimeToNextSpawn value
//set spawn X position, set death X position
//line up multiple and stagger

const BackgroundText = ({ text, startX, startY, endX, endY, duration = 10 }) => {
  const animationName = `moveText-${Math.random().toString(36).substring(7)}`;

  useEffect(() => {
    // Generate dynamic keyframes
    const keyframes = `
      @keyframes ${animationName} {
        0% {
          transform: translate(${startX}px, ${startY}px);
        }
        100% {
          transform: translate(${endX}px, ${endY}px);
        }
      }
    `;

    // Inject the keyframes into the document
    const styleSheet = document.createElement("style");
    styleSheet.innerHTML = keyframes;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, [animationName, startX, startY, endX, endY]);

  const styles = {
    position: "fixed",
    fontSize: "36px",
    fontWeight: "800",
    fontFamily: "'Eurostile', sans-serif",
    color: "lightgrey",
    whiteSpace: "nowrap",
    animation: `${animationName} ${duration}s linear infinite`,
    zIndex: "-5",
  };

  return <div style={styles}>{text}</div>;
};

export default BackgroundText;
