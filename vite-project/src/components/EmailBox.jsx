import React, { useState } from 'react';

const EmailBox = ({  }) => {
    // Use state to handle input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSend = () => {
        // Handle send functionality here (e.g., send email)
        console.log({ name, email, message });
    };

    return (
        <div className="w-80 bg-gray-800 rounded-xl shadow-xl p-8 flex flex-col items-center">
            <h3 className="text-slate-400 w-full">Name</h3>
            <input
                type="email"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-slate-400 m-2 p-4 rounded-lg w-full"
                placeholder="name"
            />
            <h3 className="text-slate-400 w-full">Email</h3>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-400 m-2 p-4 rounded-lg w-full"
                placeholder="email"
            />
            <h3 className="text-slate-400 w-full">Message</h3>
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-slate-400 m-2 p-4 rounded-lg w-full"
                placeholder="Message"
            />
            <button
                className="bg-yellow-300 m-2 p-4 rounded-lg w-full font-bold"
                onClick={handleSend}
            >
                Contact Us
            </button>
        </div>
    );
};

export default EmailBox;
