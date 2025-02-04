import { Link } from 'react-router-dom';
import BottomBar from '../components/BottomBar';
import DitherOverlay from '../components/DitherOverlay';
import BlackAndWhiteOverlay from '../components/BlackAndWhiteOverlay';
import BackgroundText from "../components/BackgroundText";
import DVDLogo from '../components/DVDLogo';
import BlackEagleIcon from '../assets/BlackEagleIcon.png'

export default function () {

    const styles = {
        CornerText: {
            fontSize: "36px",
            fontWeight: "800",
            fontFamily: "'Eurostile', sans-serif",
            position: "fixed",
            // transform: "scaleX(1.5)"
            transform: "translate(-750px, 100px)"
        },
        SmallWatermark:{
            position: "fixed",
            transform: "translate(-915px, -575px)",
            width: '100px',
            zIndex: '5',
            opacity: '0.05',
        },
        BigWatermark:{
            position: "fixed",
            transform: "translate(0px, -900px)",
            width: '1250px',
            zIndex: '-5',
            opacity: '0.05',
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
            <img style={styles.SmallWatermark} src={BlackEagleIcon}/>
            <img style={styles.BigWatermark} src={BlackEagleIcon}/>
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