import { useState } from "react";
import { motion } from "framer-motion";
import TikTokComments from "./TikTokComments";

const videos = [
  {
    id: 1,
    src: "/Candela Gallo (German-Argentinian).mp4",
    likes: 120,
    comments: ["Awesome!", "Nice video!"],
  },
  {
    id: 2,
    src: "/cutebaby.mp4",
    likes: 95,
    comments: ["Wow!", "Cool content!"],
  },
];

const styles = {
  container: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor: "black",
    color: "white",
    overflowY: "scroll",
    gap: "20px",
  },
  videoContainer: {
    position: "relative",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  videoWrapper: {
    width: "600px",
    height: "1050px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "black",
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    borderRadius: "15px",
  },
  controls: {
    position: "absolute",
    right: "16px",
    bottom: "80px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  button: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    fontSize: "36px",
  },
};

export default function TikTokScreen() {
    const [liked, setLiked] = useState(Array(videos.length).fill(false));
    const [commentsVisible, setCommentsVisible] = useState(null); // Store the index of the video whose comments are being shown
  
    const toggleLike = (index) => {
      setLiked((prev) => {
        const newLikes = [...prev];
        newLikes[index] = !newLikes[index];
        return newLikes;
      });
    };
  
    const toggleComments = (index) => {
      setCommentsVisible((prev) => (prev === index ? null : index)); // Toggle visibility of comments
    };
  
    const closeComments = () => {
      setCommentsVisible(null); // Close comments section
    };
  
    return (
      <div style={styles.container}>
        {videos.map((video, index) => (
          <div key={video.id} style={styles.videoContainer}>
            <div style={styles.videoWrapper}>
              <video
                src={video.src}
                controls
                loop
                style={styles.video}
              />
            </div>
            <div style={styles.controls}>
              <motion.button
                whileTap={{ scale: 1.2 }}
                onClick={() => toggleLike(index)}
                style={styles.button}
              >
                <div
                  style={{
                    ...styles.icon,
                    color: liked[index] ? "red" : "white",
                  }}
                >
                  ♥
                </div>
                <span>{video.likes + (liked[index] ? 1 : 0)}</span>
              </motion.button>
              <motion.button
                whileTap={{ scale: 1.2 }}
                onClick={() => toggleComments(index)}
                style={styles.button}
              >
                <div style={styles.icon}>💬</div>
                <span>{video.comments.length}</span>
              </motion.button>
            </div>
            {commentsVisible === index && (
              <TikTokComments
                comments={video.comments}
                closeComments={closeComments}
              />
            )}
          </div>
        ))}
      </div>
    );
  }