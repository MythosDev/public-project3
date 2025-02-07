
import demoPic from "../assets/BannerImage.png";

const back = {
    goback: "<",
    forwards: ">",
};

const Card = ({  }) => {

    const styles = {
        basic: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
            height: "200px",
            // margin: "0 auto",
            fontSize: "36px",
            fontWeight: "900",
            // color: "rgba(181,181,181,1)",
            // borderRadius: '50px',
            // backgroundColor: "grey",
            position: "relative",
            gap: "2px"
        },
        button: {
            width: "50px",
            height: "50px",
            borderRadius: "100%", 
            padding: "0px",
            zIndex: "2",
        },
        img: {
            maxWidth: "100%",  
            maxHeight: "100%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "15px",
        },
        button_contain: {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "10px",
            marginRight: "10px",
        },
        tiny_icon: {
            width: "20px",
            height: "20px",
            display: "flex",
            backgroundColor: "white",
            borderRadius: "50%",
            zIndex: "2",
        },
        tiny_contain: {
            position: "absolute",  // Makes it relative to the card
            bottom: "10px",        // Places it at the bottom
            left: "50%",           // Moves it to the center
            transform: "translateX(-50%)", // Centers it properly
            display: "flex",
            gap: "8px",            // Spaces the dots evenly
            marginBottom: "10px"
        },
        
    };

    return (
        <div style={styles.basic}>
            <div style={styles.button_contain}>
                <button style={styles.button}></button>
                {/* <button style={styles.button}>{back.goback}</button>
                <button style={styles.button}>{back.forwards}</button> */}
                <button style={styles.button}></button>
            </div>
            <img style={styles.img} src={demoPic} alt="" />
            <div style={styles.tiny_contain}>
                <div style={styles.tiny_icon}></div>
                <div style={styles.tiny_icon}></div>
                <div style={styles.tiny_icon}></div>
            </div>
        </div>
    );

};

export default Card;