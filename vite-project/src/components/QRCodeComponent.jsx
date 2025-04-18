import React from "react";
import ReactQRCode from "react-qr-code";

const QRCodeComponent = ({ url }) => {
  if (!url) return null;

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-2">Scan to Visit</h2>
      <ReactQRCode value={url} size={200} />
      <p className="mt-2 text-gray-500 text-sm">{url}</p>
    </div>
  );
};

export default QRCodeComponent;
