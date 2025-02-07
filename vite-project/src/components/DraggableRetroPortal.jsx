import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//add z index sorting, add sizes as parameters

const DraggableWindow =({ LinkedPage = "https://censored.tv/"}) => {
  const [count, setCount] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Start dragging
  const handleMouseDown = (e) => {
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  // Stop dragging
  const handleMouseUp = () => {
    setDragging(false);
  };

  // Update position while dragging
  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y
    });
  };

  // Add and clean up event listeners
  useEffect(() => {
    if (dragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, offset, position]);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/98.css';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <div
        style={{ width: 700, position: 'absolute', top: position.y, left: position.x }}
        className="window"
        onMouseDown={handleMouseDown}
      >
        <div className="title-bar">
          <div className="title-bar-text">JungleVoyage.exe</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>

        <div className="window-body">
          <iframe
            style={{ height: '600px', width: '680px' }}
            src={LinkedPage}
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default DraggableWindow;
