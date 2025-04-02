import R3fGlobe from 'r3f-globe';
import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';

const Tile = (ptProps) => {
  const { camera } = useThree();
  const globeRef = useRef();
  const [tiles, setTiles] = useState([]);
  const [zoomLevel, setZoomLevel] = useState(2);
  const lastCenter = useRef({ lat: 0, lng: 0 });

  // Convert lat/lng to tile coordinates
  const latLngToTile = (lat, lng, zoom) => {
    const x = ((lng + 180) / 360) * Math.pow(2, zoom);
    const y = ((1 - Math.log(Math.tan(lat * Math.PI / 180) + 
              1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2) * Math.pow(2, zoom);
    return { x: Math.floor(x), y: Math.floor(y), z: zoom };
  };

  // Generate tiles for current view
  const generateTiles = (lat, lng, zoom) => {
    const centerTile = latLngToTile(lat, lng, zoom);
    const tilesToLoad = [];
    const radius = 2; // Number of surrounding tiles to load

    for (let x = centerTile.x - radius; x <= centerTile.x + radius; x++) {
      for (let y = centerTile.y - radius; y <= centerTile.y + radius; y++) {
        const wrappedX = (x + Math.pow(2, zoom)) % Math.pow(2, zoom);
        
        // Calculate approximate lat/lng for tile center
        const tileLng = (wrappedX / Math.pow(2, zoom)) * 360 - 180;
        const tileLat = Math.atan(Math.sinh(Math.PI * (1 - 2 * y / Math.pow(2, zoom)))) * 180 / Math.PI;
        
        tilesToLoad.push({
          id: `${zoom}-${wrappedX}-${y}`,
          lat: tileLat,
          lng: tileLng,
          z: zoom,
          x: wrappedX,
          y: y,
          width: 360 / Math.pow(2, zoom),
          height: 170 / Math.pow(2, zoom)
        });
      }
    }
    return tilesToLoad;
  };

  // Update tiles based on current view
  const updateTiles = (lat, lng, zoom) => {
    const newTiles = generateTiles(lat, lng, zoom);
    setTiles(newTiles);
    lastCenter.current = { lat, lng };
    setZoomLevel(zoom);
  };

  // Set up camera tracking
  useEffect(() => {
    if (!globeRef.current || !camera) return;

    const checkCameraPosition = () => {
      const cameraDirection = new THREE.Vector3();
      camera.getWorldDirection(cameraDirection);
      
      // Simple intersection with globe (radius = 1)
      const rayOrigin = camera.position.clone();
      const b = rayOrigin.dot(cameraDirection);
      const c = rayOrigin.dot(rayOrigin) - 1;
      const h = b * b - c;
      
      if (h >= 0) {
        const distance = -b - Math.sqrt(h);
        const intersection = rayOrigin.clone().add(cameraDirection.multiplyScalar(distance));
        
        // Convert to lat/lng
        const lat = 90 - (Math.acos(intersection.y) * (180 / Math.PI));
        const lng = (Math.atan2(intersection.z, intersection.x)) * (180 / Math.PI);
        
        // Calculate zoom based on distance
        const zoom = Math.min(8, Math.max(1, Math.floor(5 - Math.log2(distance))));
        
        // Update if significant movement
        if (Math.abs(lat - lastCenter.current.lat) > 5 || 
            Math.abs(lng - lastCenter.current.lng) > 5 ||
            zoom !== zoomLevel) {
          updateTiles(lat, lng, zoom);
        }
      }
      
      requestAnimationFrame(checkCameraPosition);
    };

    const animationFrame = requestAnimationFrame(checkCameraPosition);
    return () => cancelAnimationFrame(animationFrame);
  }, [camera, zoomLevel]);

  return (
    <R3fGlobe
      {...ptProps}
      ref={globeRef}
      tilesData={tiles}
      tileLat="lat"
      tileLng="lng"
      tileAltitude={0.005}
      tileWidth="width"
      tileHeight="height"
      tileUseGlobeProjection={true}
      tileMaterial={() => new THREE.MeshStandardMaterial({
        side: THREE.DoubleSide,
        roughness: 0.7,
        metalness: 0.1
      })}
      tileTexture={(d) => `https://tile.openstreetmap.org/${d.z}/${d.x}/${d.y}.png`}
      tileCurvatureResolution={3}
      tilesTransitionDuration={500}
    />
  );
};

export default Tile;