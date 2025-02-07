import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import BackBack from "../assets/Vector284.png"
import Back from "../assets/Vector285.png"

const ImageList = [
    Back, BackBack,
];

const DefSpeeds = [
    0.2, 0.5,
]

const ParallaxBackground = ({ images = ImageList, speeds = DefSpeeds, className = "h-screen" }) => {
const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  return (
    
    <div 
      ref={ref} 
      className={`relative overflow-hidden ${className}`} 
      style={{ all: "unset", position: "absolute", width: "100vw", height: "100vh", overflow: "hidden" }}
    >
      {images.map((image, index) => {
        const y = useTransform(scrollYProgress, [0, 1], [0, -speeds[index] * 100]);
        return (
          <motion.div
            key={index}
            style={{ 
              y, 
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1
            }}
          />
        );
      })}
      <div className="relative z-10 flex items-center justify-center text-white text-4xl" style={{ width: "100%", height: "100%" }}>
        <p>Parallax Effect</p>
      </div>
    </div>
  );
};

export default ParallaxBackground;
