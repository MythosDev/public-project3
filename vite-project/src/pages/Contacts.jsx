import { Link } from 'react-router-dom';
import BottomBar from '../components/BottomBar';
import DitherOverlay from '../components/DitherOverlay';
import BlackAndWhiteOverlay from '../components/BlackAndWhiteOverlay';
import BackgroundText from "../components/BackgroundText";
import DVDLogo from '../components/DVDLogo';

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
    };

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
            <BackgroundText text="William Busch" startX={-2500} startY={-200} endX={2500} endY={-200} duration={12} />
            <BackgroundText text="William Busch" startX={-2500} startY={100} endX={2500} endY={100} duration={8} />
            <BackgroundText text="William Busch" startX={-2500} startY={300} endX={2300} endY={300} duration={15} />
            <DVDLogo width={window.innerWidth} height={window.innerHeight}/>

            <BottomBar/>
            {/* <DitherOverlay /> */}
            {/* <BlackAndWhiteOverlay /> */}
        </>
    )
}