


const Footer = ({ text = "William Busch" }) => {

    const styles = {
        basic: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
            margin: "0 auto",
            // width: "100%",
            fontSize: "36px",
            fontWeight: "900",
            color: "rgba(181,181,181,1)",
        }
    };

    return (
        <h1 style={styles.basic}>
            "{text}""
        </h1>
    );

};

export default Footer;