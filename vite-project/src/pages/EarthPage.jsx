import { Link } from 'react-router-dom';
import '../Global.module.css'
import { useState, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import {Environment, OrbitControls } from '@react-three/drei'
import Earth from '../../public/Earth.jsx'
import TopBar from '../components/TopBar.jsx';
import PanelOverlay from '../components/PanelOverlay.jsx';
// import { ambientLight } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import LinesOnGlobe from '../components/LinesOnGlobe.jsx';
import R3fGlobe from 'r3f-globe';
import { FaPlay, FaPause, FaFastForward, FaFastBackward } from 'react-icons/fa'; // React Icons
// import * as R3fGlobe from 'r3f-globe';
// import Globe from 'r3f-globe';


// import { Globe } from 'r3f-globe';
import EarthImg from '../assets/Blue_Marble_2002.png';
import EarthBump from '../assets/World_elevation_map.png';
// import { Population } from '../components/Population.jsx';
import Population from '../components/Population.jsx';
import EarthDemographics from '../components/EarthDemographics.jsx';
import Tile from '../components/Tile.jsx';
import Tiles from '../components/Tiles.jsx';
import GlobeMap from '../components/GlobeComponent.jsx';
import PopulationPyramid from '../components/PopulationPyramid.jsx';


function EarthPage () {

    const [isPlaying, setIsPlaying] = useState(false);
    const [day, setDay] = useState(1); // Current day
    const [speed, setSpeed] = useState(1); // Speed multiplier (x1, x2, x3, x4)
  
    // Increment day based on speed when playing
    useEffect(() => {
        let interval;
        if (isPlaying) {
          interval = setInterval(() => {
            setDay((prevDay) => prevDay + Math.sign(speed)); // +1 or -1 based on speed sign
          }, 1000 / Math.abs(speed)); // Interval based on absolute speed
        }
        return () => clearInterval(interval);
      }, [isPlaying, speed]);
  
    // Toggle play/pause
    const togglePlayPause = () => {
        if (isPlaying) {
          setSpeed(1); // Reset speed to 1 when pausing
        }
        setIsPlaying(!isPlaying);
      };
  
    // Fast forward: increase speed positively
    const handleFastForward = () => {
        setSpeed((prevSpeed) => {
        if (prevSpeed < 0) return 1; // If rewinding, jump to x1 forward
        return prevSpeed < 4 ? prevSpeed + 1 : 1; // Cycle: 1 -> 2 -> 3 -> 4 -> 1
        });
    };
  
    // Rewind: increase speed negatively
    const handleRewind = () => {
        setSpeed((prevSpeed) => {
        if (prevSpeed > 0) return -1; // If forwarding, jump to -x1 rewind
        return prevSpeed > -4 ? prevSpeed - 1 : -1; // Cycle: -1 -> -2 -> -3 -> -4 -> -1
        });
    };
  
    // Handle user input for day
    const handleDayInput = (e) => {
      const value = parseInt(e.target.value, 10);
      if (!isNaN(value) && value >= 1) {
        setDay(value);
      }
    };

    const styles = {
        body: {
            width: '100vw',
            height: '100vh',
            backgroundColor: 'slategray',
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'flex', // Center content
            justifyContent: 'center', // Center horizontally
            alignItems: 'center', // Center vertically
        },

        GlobeContainer: {
            width: '100vw',
            height: '750px',
        },

        demographics: {
            position: 'absolute',
            top: '20px', // Adjust position as needed
            left: '20px',
            width: '400px', // Reduce size to fit alongside globe
            height: '400px',
            zIndex: 20, // Higher than Canvas and other elements
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: semi-transparent bg
            padding: '10px',
            borderRadius: '8px',
          },
        
    };
    

    return (
        <>
            {/* <Link to="/Home">Home</Link> */}
            <TopBar />
            <PanelOverlay />
            {/* Centered, scrollable container for charts */}
            <div className="fixed inset-0 flex items-center justify-end z-20 pointer-events-none">
                    <div className="bg-gray-700 rounded-lg shadow-lg w-[650px] h-[1080px] overflow-y-auto pointer-events-auto m-4">
                    <div className="p-4">
                        {/* Stack charts here */}
                        <div className="mb-4">
                        <h1 className='flex justify-center font-bold text-4xl'>Religion</h1>
                        <EarthDemographics csvFilePath="/simple_religions.csv" />
                        <h1 className='flex justify-center font-bold text-4xl'>Ethnicity</h1>
                        <EarthDemographics csvFilePath="/simple_ethnicities.csv" />
                        <h1 className='flex justify-center font-bold text-4xl'>Age</h1>
                        <PopulationPyramid csvFilePath="/age_pyramid.csv"/>
                        </div>
                        {/* Add more charts as needed */}
                        {/* Example: <EarthDemographics /> */}
                    </div>
                </div>
            </div>
            {/* Play bar */}
            <div className="fixed bottom-32 w-full z-20 flex justify-center pointer-events-none">
                <div className="bg-gray-800 bg-opacity-90 text-white rounded-lg p-2 flex items-center space-x-4 pointer-events-auto">
                {/* Day input */}
                <input
                    type="number"
                    value={day}
                    onChange={handleDayInput}
                    className="w-20 p-1 text-center bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="1"
                />
                {/* Rewind */}
                <button onClick={handleRewind} className="p-2 hover:bg-gray-600 rounded">
                    <FaFastBackward />
                </button>
                {/* Play/Pause */}
                <button onClick={togglePlayPause} className="p-2 hover:bg-gray-600 rounded">
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                {/* Fast Forward */}
                <button onClick={handleFastForward} className="p-2 hover:bg-gray-600 rounded">
                    <FaFastForward />
                </button>
                {/* Speed Display */}
                <span className="text-sm">x{speed}</span>
                </div>
            </div>
            <div className="fixed bottom-0 w-full z-10 justify-center flex mb-8">
                <ul className="steps">
                    <li className="step step-primary">Prehistory</li>
                    <li className="step step-primary">Classical</li>
                    <li className="step step-primary">Medieval</li>
                    <li className="step">Colonization</li>
                    <li className="step">Modern</li>
                </ul>
            </div>
            {/* <div style={styles.body}> */}
                <Canvas style={styles.body}>
                    <ambientLight intensity={2}/>
                    <OrbitControls />
                    <Suspense fallback={null}>
                        <Tiles />
                        {/* <Tile /> */}
                        {/* <Population/> */}
                    </Suspense>
                    <Environment preset='sunset' />
                </Canvas>
            {/* </div> */}
        </>
    );
}

export default EarthPage;