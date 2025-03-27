import { Link } from 'react-router-dom';
import React from 'react';

const ArcadeCabinet = ({ screenImage, name }) => {
  return (
    <Link to="/Home">
      <div className="w-80 h-[400px] relative">
        {/* Game screen container */}
        <div className="absolute top-[60px] left-[35px] w-[210px] h-[160px] bg-black overflow-hidden flex items-center justify-center z-0">
          {screenImage ? (
            <img
              src={screenImage}
              alt="Game Cover"
              className="object-cover w-full h-full"
              style={{
                imageRendering: 'pixelated',
                filter: 'contrast(1.2) brightness(0.9)'
              }}
            />
          ) : (
            <span className="text-white">Insert Game Here</span>
          )}
        </div>
        
        {/* Cabinet Image with Pixelated Effect */}
        <img
          src="/cabinet.png"
          alt="Arcade Cabinet"
          className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
          style={{
            imageRendering: 'pixelated',
            filter: 'contrast(1.2) brightness(0.9)'
          }}
        />

        {/* Game name */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-bold z-20">
          {name}
        </div>
      </div>
    </Link>
  );
};

export default ArcadeCabinet;