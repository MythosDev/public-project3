import { Link } from 'react-router-dom';
import BloomOverlay from '../components/BloomOverlay';



export default function () {

    const styles = {
        main: {
            color: "white",
            width: '100vw',
            height: '100vh',
        },
    };

    return(
        <>
            <BloomOverlay  intensity={0.1}>
                <Link to="/Home">Home</Link>
                <br />
                <div style={styles.main}>

                    <h1>80's Retro Effect</h1>
                    <br />
                    <h2>RETVRN   Blai;re</h2>
                </div>
            </BloomOverlay>
        </>
    )
}