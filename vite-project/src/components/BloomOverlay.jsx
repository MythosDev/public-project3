import React from "react";
import "@fontsource/noto-sans-display";
import { Link } from "react-router-dom";
import demoPic from '../assets/react.png'

const OverlayStyles = () => {
  return (
    <style>
      {`
        @font-face {
          font-family: 'Noto Sans Display';
          font-style: normal;
          font-weight: 400;
          src: url(../assets/NotoSansDisplay-Regular.ttf);
        }

        .overlay-wrapper {
          all: unset;
        }

        .overlay-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          // background: rgba(17, 17, 17, 0.8);
          background: rgba(10, 10, 10);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #eee;
          font-family: 'Noto Sans Display', sans-serif;
          font-size: 1em;
          letter-spacing: 0.125em;
          text-shadow: 0.06rem 0 0.06rem #ea36af, -0.125rem 0 0.06rem #75fa69;
          animation: textflicker 0.01s infinite alternate;
          text-align: center;
        }

        .overlay-heading {
          font-size: 5em;
        }

        .overlay-link {
          color: white;
          text-decoration: none;
          margin-top: 10px;
        }

        @keyframes textflicker {
          from {
            text-shadow: 1px 0 0 #ea36af, -2px 0 0 #75fa69;
          }
          to {
            text-shadow: 2px 0.5px 2px #ea36af, -1px -0.5px 2px #75fa69;
          }
        }
      `}
    </style>
  );
};

const BloomOverlay = () => {
  return (
    <div className="overlay-wrapper">
      <OverlayStyles />
      <div className="overlay-container">
        <h1 className="overlay-heading">Welcome</h1>
        <p>This is an example of text with a flickering neon shadow effect.</p>
        <Link className="overlay-link" to="/Home">Click Here</Link>
        {/* <img src={demoPic} alt="" /> */}
      </div>
    </div>
  );
};

export default BloomOverlay;
