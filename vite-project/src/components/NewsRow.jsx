import React from "react";
import Ad1 from "../assets/AdAreusPress.png"
import Ad2 from "../assets/StrengthUnity.png"
import BannerImage from "../assets/BannerImage.png"

const NewsRow = () => {
  return (
    <div className="newrow-container">
      <img src={Ad1} className="ad" alt="Left Ad" />
      
      <img src={BannerImage} className="banner" alt="Banner" />
      
      <img src={Ad2} className="ad" alt="Right Ad" />

      <style jsx>{`
        .newrow-container {
          display: flex;
          justify-content: space-between;
          align-items: stretch;
        //   padding: 10px;
          gap: 30px;
          height: auto;
        }

        .ad, .banner {
          flex-grow: 1;
          height: auto;
          max-height: 1250px;
          object-fit: cover;
          margin: 0;
          border: 0;
          padding: 0;
        }

        .ad {
          width: 16%;
          background-color: blueviolet;
        }

        .banner {
          width: 60%;
        }
      `}</style>
    </div>
  );
};

export default NewsRow;
