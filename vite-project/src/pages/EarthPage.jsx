import { Link } from 'react-router-dom';
import '../index.css'
import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {Environment, OrbitControls } from '@react-three/drei'
import Earth from '../../public/Earth.jsx'
import TopBar from '../components/TopBar.jsx';
import PanelOverlay from '../components/PanelOverlay.jsx';
// import { ambientLight } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import LinesOnGlobe from '../components/LinesOnGlobe.jsx';
import R3fGlobe from 'r3f-globe';
// import * as R3fGlobe from 'r3f-globe';
// import Globe from 'r3f-globe';


// import { Globe } from 'r3f-globe';
import EarthImg from '../assets/Blue_Marble_2002.png';
import EarthBump from '../assets/World_elevation_map.png';
// import { Population } from '../components/Population.jsx';
import Population from '../components/Population.jsx';



function EarthPage () {

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
        }
        
    };
    

    return (
        <>
            {/* <Link to="/Home">Home</Link> */}
            <TopBar />
            <PanelOverlay />
            {/* <div style={styles.body}> */}
                <Canvas style={styles.body}>
                    <ambientLight intensity={2}/>
                    {/* <ambientLight intensity={0.5} /> */}
                    {/* <OrbitControls minDistance={1.25} /> */}
                    <OrbitControls />
                    {/* when size = 2, minDistance = 2.33 */}
                    {/* <Suspense fallback={null}>
                        <Earth/>
                    </Suspense>
                    <LinesOnGlobe /> */}
                    {/* <R3fGlobe /> */}
                    <Suspense fallback={null}>
                        {/* <R3fGlobe
                            scale={0.01}
                            width={600}
                            height={600}
                            globeImageUrl={EarthImg}
                            bumpImageUrl={EarthBump}
                            // bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        /> */}
                        <Population
                        />
                    </Suspense>
                    {/* <group scale={[0.5, 0.5, 0.5]}> //Correct way to scale
                        <Globe
                            globeImageUrl={EarthImg}
                            width={600}  // Controls canvas, not actual size
                            height={600}
                        />
                    </group> */}
                    <Environment preset='sunset' />
                </Canvas>
            {/* </div> */}
        </>
    );
}

export default EarthPage;