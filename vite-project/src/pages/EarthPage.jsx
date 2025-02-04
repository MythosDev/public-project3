import { Link } from 'react-router-dom';
import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {Environment, OrbitControls } from '@react-three/drei'
import Earth from '../../public/Earth.jsx'
import TopBar from '../components/TopBar.jsx';
// import { ambientLight } from '@react-three/fiber';

export default function () {

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
        
    };
    

    return (
        <>
            {/* <Link to="/Home">Home</Link> */}
            <TopBar />
            <div style={styles.body}>
                <Canvas>
                    <ambientLight intensity={1.5}/>
                    {/* <ambientLight intensity={0.5} /> */}
                    <OrbitControls minDistance={2.33} />
                    <Suspense fallback={null}>
                        <Earth/>
                    </Suspense>
                    <Environment preset='sunset' />
                </Canvas>
            </div>
        </>
    );
}