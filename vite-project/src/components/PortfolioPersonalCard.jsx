import IconImg from "../assets/mypic.png"
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const styles = {
    imageContainer: {
      width: "100%", // Full width
      height: '250px', // Half of original height
      maxWidth: '250px', // Half of original max width
      overflow: "hidden", // Ensures cropping of the image
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: '0 auto',
    },
    img: {
      width: "50px", // Half of original width
      height: "50px", // Half of original height
      objectFit: "cover", // Ensures it maintains aspect ratio while cropping top and bottom
      objectPosition: 'center center', // Adjusts for cropping
      borderRadius: "100%",
    },
    container: {
      width: "510px", // Half of original width
      height: "151.5px", // Half of original height
      position: "relative",
      background: "white",
    },
    profileImage: {
      width: "121px", // Half of original width
      height: "121px", // Half of original height
      position: "absolute",
      left: "13px", // Half of original left
      top: "11px", // Half of original top
      background: "#D9D9D9",
      borderRadius: "9999px",
    },
    name: {
      width: "291px", // Half of original width
      height: "50px", // Half of original height
      position: "absolute",
      left: "134px", // Half of original left
      top: "11px", // Half of original top
      color: "#2C2C2C",
      fontSize: "37px", // Half of original font size
      fontFamily: "Inter, sans-serif",
      fontWeight: "700",
      wordWrap: "break-word",
    },
    location: {
      width: "291px", // Half of original width
      height: "37px", // Half of original height
      position: "absolute",
      left: "70px", // Half of original left
      top: "52px", // Half of original top
      color: "#666666",
      fontSize: "25px", // Half of original font size
      fontFamily: "Inter, sans-serif",
      fontWeight: "500",
      wordWrap: "break-word",
    },
    buttonGroup: {
      position: "absolute",
      left: "144px", // Half of original left
      top: "96px", // Half of original top
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: "13px", // Half of original gap
    },
    button: {
      width: "39px", // Half of original width
      height: "37px", // Half of original height
      borderRadius: "12px", // Half of original border radius
    },
  };
  

export default function () {

    return(
        <>
            <div style={styles.container}>
                <img src={IconImg} alt="" style={styles.profileImage} />
                <div style={styles.name}>William Busch</div>
                <div style={styles.location}>Victoria, BC</div>
                <div style={styles.buttonGroup}>
                    <Link to="/Home">
                        <MdEmail style={styles.button}/>
                    </Link>
                    <Link to="/Home">
                        <FaLinkedin style={styles.button}/>
                    </Link>
                    <a href="https://github.com/MythosDev?tab=repositories">
                        <FaGithub style={styles.button}/>
                    </a>
                    <a href="https://x.com/home">
                        <FaTwitter style={styles.button}/>
                    </a>
                    <Link to="/Home">
                        <FaSquareXTwitter style={styles.button}/>
                    </Link>
                </div>
            </div>
        </>
    )

}