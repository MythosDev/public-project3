import { Link } from 'react-router-dom';
import React from 'react';
import TopBar from '../components/TopBar';
import { useEffect } from 'react';
import DraggableWindow from '../components/DraggableRetroPortal';
import ditherImg from '../assets/ditherimg.png'

// https://codesandbox.io/p/sandbox/objective-chandrasekhar-t5t6h?file=%2Fsrc%2Findex.js%3A6%2C1-6%2C47
// https://jdan.github.io/98.css/

export default function () {

    useEffect(() => {
        // Create a link tag dynamically
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/98.css';
        
        // Append the link to the document head
        document.head.appendChild(link);
    
        // Cleanup to remove the stylesheet when the component is unmounted
        return () => {
          document.head.removeChild(link);
        };
      }, []);

      const [count, setCount] = React.useState(0);

    return(
        <>
            {/* <TopBar /> */}
            <div style={{ width: 400 }} className="window">
                <div className="title-bar">
                    <div className="title-bar-text">JungleVoyage.exe</div>
                    <div className="title-bar-controls">
                    <button aria-label="Minimize" />
                    <button aria-label="Maximize" />
                    <button aria-label="Close" />
                    </div>
                </div>

                <div className="window-body">
                    <img style={{height: "340px", width: "380px"}} src={ditherImg}></img>
                </div>
            </div>
            <DraggableWindow LinkedPage='/Home' />
            {/* <DraggableWindow LinkedPage='https://censored.tv/' />
            <DraggableWindow LinkedPage='https://www.slightlyoffensive.com/top-political-podcasts/'/> */}
            <div>
                <h2>Contacts</h2>
                <p>Email: ___</p>
                <p>Phone Number: ___</p>
                <p>Twitter (X): ___</p>
                <p>Youtube: ___</p>
                <Link to="/Home">Home</Link>
            </div>
        </>
    )
}