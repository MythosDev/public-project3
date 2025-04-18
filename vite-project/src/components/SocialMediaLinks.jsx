import React from 'react';

// You can use these libraries for social media icons or your own images
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function SocialMediaLinks() {
    return (
        <div className="flex justify-center space-x-4 mt-4">
            <a
                href="https://www.Github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white p-3 rounded-full hover:bg-blue-700"
            >
                <FaGithub size={24} />
            </a>
            <a
                href="https://x.com/home"
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
    );
}
