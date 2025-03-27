import { Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import SocialMediaLinks from './SocialMediaLinks';

const ContactCard = ({ screenImage, name, children }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };  
  
  return (
      <div className="w-80 bg-gray-600 rounded-xl shadow-xl p-8 flex flex-col items-center">
        <div className="w-full h-2/3 bg-black rounded-lg overflow-hidden flex items-center justify-center">
          {screenImage ? (
            <img src={screenImage} alt="Game Cover" className="object-cover w-full h-full" />
          ) : (
            <span className="text-white">Insert Game Here</span>
          )}
        </div>
        <div className="mt-4 text-white text-lg font-bold">{name}</div>
        <div className="mt-4 text-white text-2xl font-bold">Contact</div>
        <div className="mt-2 text-white text-md ">
          willbusch@gmail.com
          <button
          onClick={() => copyToClipboard('willbusch@gmail.com')}
          className="ml-2 p-2 align-middle bg-gray-800 text-white hover:text-gray-300 focus:outline-none active:bg-green-400"
          >
            <FaCopy />
          </button>
          {copied && <span className="ml-2 text-green-400 justify-center flex">Copied!</span>}
        </div>
        <div className="mt-2 text-white text-md font-normal">@Willbusch</div>
        <div className="mt-2 text-white text-md font-normal">250-588-2989</div>
        <SocialMediaLinks />
        <div className="m-4 w-full object-cover">{children}</div>
      </div>
    );
  };

export default ContactCard;