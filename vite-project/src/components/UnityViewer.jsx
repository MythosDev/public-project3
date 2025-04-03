import React from "react";

const UnityViewer = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="/unity/index.html"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="Unity Game"
      ></iframe>
    </div>
  );
};

export default UnityViewer;