import { motion } from "framer-motion";

const ScrollingBackground = ({ speed = 1, size = 10, angle = -45 }) => {
    return (
        <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            zIndex: -1,
            backgroundColor: "purple",
        }}>
            <motion.div
                animate={{ backgroundPosition: ["0% 0%", "200% 200%"] }}
                transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: `repeating-linear-gradient(${angle}deg, 
                        rgba(255,255,255,0.1) 0px, 
                        rgba(255,255,255,0.1) ${size}px, 
                        transparent ${size}px, 
                        transparent ${size * 2}px
                    )`,
                    backgroundSize: "200% 200%"
                }}
            />
        </div>
    );
};

export default ScrollingBackground;
