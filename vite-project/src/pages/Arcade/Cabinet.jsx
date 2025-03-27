import { Link } from 'react-router-dom';
import React from 'react';

const Cabinet = ({ screenImage, name }) => {
    return (
      <Link to="/Home">
      <div className="w-80 h-[400px] bg-gray-800 rounded-lg shadow-xl p-8 flex flex-col items-center">
        <div className="w-full h-2/3 bg-black rounded-lg overflow-hidden flex items-center justify-center">
          {screenImage ? (
            <img src={screenImage} alt="Game Cover" className="object-cover w-full h-full" />
          ) : (
            <span className="text-white">Insert Game Here</span>
          )}
        </div>
        <div className="mt-4 text-white text-lg font-bold">{name}</div>
      </div>
      </Link>
    );
  };

export default Cabinet;
