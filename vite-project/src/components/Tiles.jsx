import R3fGlobe from 'r3f-globe';
import { useMemo } from 'react';
import * as THREE from 'three';
import { createElement } from 'react';

const Tiles = (ptProps) => {
  const TILE_MARGIN = 0.35; // degrees
  const zoomLevel = 2; // Zoom level for tile loading

  // Configuration - smaller grid for better performance
  const GRID_SIZE = useMemo(() => [24, 12], []); // Reduced from [60,20]

  // Calculate tile dimensions
  const tileWidth = 360 / GRID_SIZE[0];
  const tileHeight = 180 / GRID_SIZE[1];

  // Generate tile data with proper Leaflet tile URLs
  const tilesData = useMemo(() => {
    const tiles = [];
    const tileCount = Math.pow(2, zoomLevel);
    
    for (let lngIdx = 0; lngIdx < GRID_SIZE[0]; lngIdx++) {
      for (let latIdx = 0; latIdx < GRID_SIZE[1]; latIdx++) {
        // Calculate proper tile coordinates
        const x = Math.floor((lngIdx / GRID_SIZE[0]) * tileCount);
        const y = Math.floor((latIdx / GRID_SIZE[1]) * tileCount);
        
        tiles.push({
          lng: -180 + lngIdx * tileWidth,
          lat: -90 + (latIdx + 0.5) * tileHeight,
          // Proper Leaflet tile URL
          //   url: `https://tile.openstreetmap.org/${zoomLevel}/${x}/${y}.png`,
          url: `https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/BlueMarble_ShadedRelief_Bathymetry/default//EPSG4326_500m/${zoomLevel}/${y}/${x}.jpg`,
          width: tileWidth - TILE_MARGIN,
          height: tileHeight - TILE_MARGIN
        });
      }
    }
    return tiles;
  }, [GRID_SIZE, tileWidth, tileHeight]);

  return createElement(R3fGlobe, {
    ...ptProps,
    tilesData,
    tileWidth: 'width',
    tileHeight: 'height',
    tileTexture: 'url', // Use the URL property for textures
    tileUseGlobeProjection: true,
    tileCurvatureResolution: 5,
    tileAltitude: 0.01,
    tileMaterial: () => new THREE.MeshStandardMaterial({
      side: THREE.DoubleSide,
      roughness: 0.7,
      metalness: 0.1,
      transparent: false
    })
  });
};

export default Tiles;