// src/components/LinesOnGlobe.jsx
import React from 'react';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

// Function to convert lat/lon to 3D coordinates on the sphere
const latLonTo3D = (lat, lon, radius = 1) => {
    const latRad = lat * (Math.PI / 180); // Convert lat to radians
    const lonRad = lon * (Math.PI / 180); // Convert lon to radians
    const x = radius * Math.cos(latRad) * Math.cos(lonRad);
    const y = radius * Math.cos(latRad) * Math.sin(lonRad);
    const z = radius * Math.sin(latRad);
    return new THREE.Vector3(x, y, z);
};

// Function to create a curved line using CatmullRomCurve3 in 3D space, which bends around the sphere
const createCurvedLine = (start, end, control, radius = 1, steps = 100) => {
    // Create a CatmullRom curve in 3D space using start, control, and end points
    const curve = new THREE.CatmullRomCurve3([start, control, end]);

    // Generate the points along the curve
    const curvePoints = curve.getPoints(steps);

    // Project the curve points onto the sphere (ensure they stay on the surface of the sphere)
    const spherePoints = curvePoints.map(point => point.normalize().multiplyScalar(radius));

    return spherePoints;
};

// Lines data (pairs of latitude/longitude with control points for curvature)
const linesData = [
    { 
        from: { lat: 37.7749, lon: -122.4194 }, // San Francisco
        to: { lat: 51.5074, lon: -0.1278 },    // London
        control: { lat: 20, lon: -60 }         // Control point to bend the line
    },
    { 
        from: { lat: 48.8566, lon: 2.3522 },   // Paris
        to: { lat: -33.8688, lon: 151.2093 },  // Sydney
        control: { lat: 30, lon: 10 }          // Control point for curvature
    },
];

function LinesOnGlobe() {
    return (
        <>
            {linesData.map((line, index) => {
                const start = latLonTo3D(line.from.lat, line.from.lon);
                const end = latLonTo3D(line.to.lat, line.to.lon);
                const control = latLonTo3D(line.control.lat, line.control.lon);

                // Generate the curved line points
                const curvePoints = createCurvedLine(start, end, control, 1, 100);

                // Convert the curve points to an array of positions (for rendering)
                const positions = curvePoints.map(point => [point.x, point.y, point.z]);

                return (
                    <Line
                        key={index}
                        points={positions}   // Pass the calculated curve points
                        color="red"          // Line color
                        lineWidth={3}        // Line width
                        opacity={1}          // Full opacity
                    />
                );
            })}
        </>
    );
}

export default LinesOnGlobe;
