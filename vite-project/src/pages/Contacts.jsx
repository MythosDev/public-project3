import { Link } from 'react-router-dom';
import BottomBar from '../components/BottomBar';

export default function () {

    const styles = {
        CornerText: {
            fontSize: "36px",
            fontWeight: "800",
            fontFamily: "'Eurostile', sans-serif",
            position: "fixed",
            // transform: "scaleX(1.5)"
            transform: "translate(-500px, 100px)"
        },
        BGText: {
            fontSize: "36px",
            fontWeight: "800",
            fontFamily: "'Eurostile', sans-serif",
            position: "fixed",
            color: "lightgrey", // Light grey color for BGText
            transform: "translate(-900px, -200px)", // Initial position
            animation: "moveRight 10s linear infinite", // Apply the animation to BGText
            zIndex: "-5",
            whiteSpace: "nowrap"
        }
    };

    // Keyframes for moving text
    const keyframes = `
    @keyframes moveRight {
        0% {
            transform: translate(-100vw, -200px); /* Initial position */
        }
        100% {
            transform: translate(100vw, -200px); /* End position (move to the right of the screen) */
        }
    }
    `;

    // Inject the keyframes into the document
    const insertKeyframes = document.createElement('style');
    insertKeyframes.innerHTML = keyframes;
    document.head.appendChild(insertKeyframes);

    return(
        <>
            <div>
                <h2>Contacts</h2>
                <p>Email: ___</p>
                <p>Phone Number: ___</p>
                <p>Twitter (X): ___</p>
                <p>Youtube: ___</p>
                <Link to="/Home">Home</Link>
            </div>
            <div style={styles.CornerText}>
                <h2>Welcome</h2>
            </div>
            <div style={styles.BGText}>
                <h2>William Busch   
                    William Busch   
                    William Busch   
                    William Busch
                    William Busch   
                    William Busch   
                    William Busch
                    William Busch   
                    William Busch   
                    William Busch
                </h2>
            </div>
            <BottomBar/>

        </>
    )
}