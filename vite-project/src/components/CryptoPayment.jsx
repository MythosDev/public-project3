import React, { useState } from 'react';
import { ethers } from 'ethers';

const CryptoPayment = ({ recipientAddress, amountInEth = "0.01" }) => {
  const [status, setStatus] = useState("idle");
  const [txHash, setTxHash] = useState(null);
  const [error, setError] = useState(null);

  const sendPayment = async () => {
    if (!window.ethereum) {
      setError("MetaMask is not installed.");
      return;
    }

    try {
      setStatus("pending");
      setError(null);
      setTxHash(null);

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const tx = await signer.sendTransaction({
        to: recipientAddress,
        value: ethers.parseEther(amountInEth),
      });

      setStatus("confirming");
      await tx.wait(); // wait for confirmation

      setTxHash(tx.hash);
      setStatus("confirmed");
    } catch (err) {
      console.error(err);
      setError(err.message || "Transaction failed.");
      setStatus("failed");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto border rounded-xl shadow-md space-y-4 bg-white">
      <h2 className="text-xl font-bold">Pay with Crypto</h2>
      <p>Send {amountInEth} ETH to <span className="font-mono">{recipientAddress}</span></p>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={sendPayment}
        disabled={status === "pending" || status === "confirming"}
      >
        {status === "pending" ? "Waiting for Wallet..." :
         status === "confirming" ? "Confirming..." :
         "Send Payment"}
      </button>

      {txHash && (
        <p className="text-green-600">
          ✅ Payment confirmed. TX: <a
            href={`https://etherscan.io/tx/${txHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >{txHash.slice(0, 10)}...</a>
        </p>
      )}
      {error && <p className="text-red-500">⚠️ {error}</p>}
    </div>
  );
};

export default CryptoPayment;
