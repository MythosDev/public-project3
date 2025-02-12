import React from "react";

const styles = {
  container: {
    position: "absolute",
    top: "50%",
    right: "16px",
    transform: "translateY(-50%)",
    width: "300px",
    height: "80%",
    backgroundColor: "#1A1A1A",
    padding: "16px",
    borderRadius: "8px",
    overflowY: "auto",
    color: "white",
    fontSize: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  },
  comment: {
    marginBottom: "8px",
    fontWeight: "400",
  },
};

export default function TikTokComments({ comments, closeComments }) {
  return (
    <div style={styles.container}>
      <button
        onClick={closeComments}
        style={{
          backgroundColor: "transparent",
          color: "white",
          border: "none",
          fontSize: "20px",
          cursor: "pointer",
        }}
      >
        X
      </button>
      <h3>Comments</h3>
      <div>
        {comments.map((comment, index) => (
          <div key={index} style={styles.comment}>
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
}
