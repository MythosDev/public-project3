
import { Link } from "react-router-dom";

export default function PanelOverlay() {

    const styles = {
        overlay: {
            position: 'absolute',  // Positioning relative to the screen
            top: '50%',  // Position vertically at the center
            left: '0',  // Align to the left of the screen
            transform: 'translate(50px, -50%)',  // Adjust for exact centering
            width: '300px',  // Set the panel width
            height: '400px',  // Set the panel height
            backgroundColor: '#333',  // Dark transparent background
            color: 'white',  // Text color
            padding: '20px',  // Padding inside the panel
            boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)',  // Optional shadow for depth
            zIndex: 999,  // Ensure it's on top of other content
        },
    };
    

    return (
        
        <div style={styles.overlay}>
            <h2>Panel Title</h2>
            <p>This is an example of a panel overlay at the center-left of the screen.</p>
            <Link to="/Home">Home</Link>
        </div>
    );
}
