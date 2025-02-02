import React, { useState, useEffect } from "react";
import demoPic from '../assets/demo_pic.png'; // Import the image file

const PinterestGrid = () => {
  const [posts, setPosts] = useState([]);

  // Function to simulate fetching posts (with random sizes for demonstration)
  const fetchPosts = () => {
    const postSizes = [
      { id: 1, width: 1, height: 1 },
      { id: 2, width: 2, height: 1 },
      { id: 3, width: 1, height: 2 },
      { id: 4, width: 2, height: 2 },
      { id: 5, width: 1, height: 1 },
      { id: 6, width: 1, height: 2 },
      { id: 7, width: 2, height: 1 },
    ];

    const posts = postSizes.map((size, index) => ({
      id: index + 1,
      image: demoPic, //`https://picsum.photos/500/300?random=${index + 1}`, // Example random image
      ...size,
    }));

    setPosts(posts);
  };

  useEffect(() => {
    fetchPosts(); // Fetch posts when the component mounts
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "10px",
        padding: "10px",
      }}
    >
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            gridColumn: `span ${post.width}`,
            gridRow: `span ${post.height}`,
            position: "relative",
            backgroundColor: "#f0f0f0",
            overflow: "hidden",
            borderRadius: "8px",
          }}
        >
          <img
            src={post.image}
            alt={`Post ${post.id}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default PinterestGrid;
