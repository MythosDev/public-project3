import React, { useState } from 'react';
import { FaCopy, FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Default_Picture = 'ProfilePicture.png'

const PersonalCard = ({ screenImage = Default_Picture }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else if (type === 'phone') {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    });
  };

  const handleSend = () => {
    console.log({ name, email, message });
  };

  return (
    <div className="w-80 bg-white rounded-xl shadow-xl p-8 flex flex-col items-center">
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
        {screenImage ? (
          <img src={screenImage} alt="Profile" className="object-cover w-full h-full" />
        ) : (
          <span className="text-gray-500">Image Placeholder</span>
        )}
      </div>

      {/* Contact Information */}
      <div className="mt-4 w-full">
        <div className="flex justify-between items-center">
          <div className="text-black text-md">
            <span className="font-bold">Email:</span> wbusch866@gmail.com
          </div>
          <button
            onClick={() => copyToClipboard('wbusch866@gmail.com', 'email')}
            className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
          >
            <FaCopy />
          </button>
        </div>
        {copiedEmail && <span className="text-green-500 text-sm">Copied!</span>}
      </div>

      <div className="mt-2 w-full">
        <div className="flex justify-between items-center">
          <div className="text-black text-md">
            <span className="font-bold">Phone:</span> 250-507-4549
          </div>
          <button
            onClick={() => copyToClipboard('250-507-4549', 'phone')}
            className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
          >
            <FaCopy />
          </button>
        </div>
        {copiedPhone && <span className="text-green-500 text-sm">Copied!</span>}
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white p-3 rounded-full hover:bg-blue-700"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://x.com/Amica_Nemo"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-800 text-white p-3 rounded-full hover:bg-blue-900"
        >
          <FaLinkedin size={24} />
        </a>
      </div>

      {/* Contact Form */}
      <div className="mt-4 w-full">
        <h3 className="text-black text-lg font-bold text-center">Contact</h3>
        <div className="mt-2">
          <label className="text-black text-md">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-gray-200 p-2 rounded-md mt-1 focus:outline-none"
            placeholder="Name"
          />
        </div>
        <div className="mt-2">
          <label className="text-black text-md">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-200 p-2 rounded-md mt-1 focus:outline-none"
            placeholder="Email"
          />
        </div>
        <div className="mt-2">
          <label className="text-black text-md">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-gray-200 p-2 rounded-md mt-1 h-24 focus:outline-none"
            placeholder="Message"
          />
        </div>
        <button
          onClick={handleSend}
          className="w-full bg-gray-500 text-white p-3 rounded-md mt-4 hover:bg-gray-600"
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default PersonalCard;