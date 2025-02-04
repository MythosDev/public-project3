import React, { useState, useEffect, useRef } from "react";

const widthDVDLogo = 200;
const heightDVDLogo = 97.45;

const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

const DVDLogo = ({ width, height }) => {
  const [position, setPosition] = useState({
    x: getRandomNumber(0, width - widthDVDLogo),
    y: getRandomNumber(0, height - heightDVDLogo),
    xSpeed: 4,
    ySpeed: 4,
    r: getRandomNumber(100, 256),
    g: getRandomNumber(100, 256),
    b: getRandomNumber(100, 256),
  });

  const requestRef = useRef();

  const setRandomColors = () => ({
    r: getRandomNumber(100, 256),
    g: getRandomNumber(100, 256),
    b: getRandomNumber(100, 256),
  });

  const moveDVDLogo = () => {
    setPosition((prev) => {
      let { x, y, xSpeed, ySpeed, r, g, b } = prev;

      if (x + widthDVDLogo >= width || x <= 0) {
        xSpeed = -xSpeed;
        ({ r, g, b } = setRandomColors());
      }

      if (y + heightDVDLogo >= height || y <= 0) {
        ySpeed = -ySpeed;
        ({ r, g, b } = setRandomColors());
      }

      return { x: x + xSpeed, y: y + ySpeed, xSpeed, ySpeed, r, g, b };
    });

    requestRef.current = requestAnimationFrame(moveDVDLogo);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(moveDVDLogo);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <svg
      width={width}
      height={height}
      style={{
        position: "fixed",  // Make it fixed over the entire screen
        top: 0,
        left: 0,
        zIndex: -1,  // Ensure it stays on top of other elements
        pointerEvents: "none",  // Prevent it from blocking clicks
      }}
    >
      <g
        fill={`rgb(${position.r}, ${position.g}, ${position.b})`}
        transform={`translate(${position.x}, ${position.y})`}
      >
        <rect width={widthDVDLogo} height={heightDVDLogo} />
      </g>
    </svg>
  );
};

export default DVDLogo;
