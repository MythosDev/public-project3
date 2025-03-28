import R3fGlobe from 'r3f-globe';
import { useState, useEffect } from 'react';

const Tile = (ptProps) => {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    // Generate tile coordinates for a specific zoom level
    const generateTiles = (zoom = 2) => {
      const tileCount = Math.pow(2, zoom);
      const newTiles = [];
      
      for (let x = 0; x < tileCount; x++) {
        for (let y = 0; y < tileCount; y++) {
          newTiles.push({
            id: `${zoom}-${x}-${y}`,
            x,
            y,
            z: zoom,
            lat: 0, // You might want to calculate actual lat/lng
            lng: 0,
            url: `https://tile.openstreetmap.org/${zoom}/${x}/${y}.png`
          });
        }
      }
      
      return newTiles;
    };

    setTiles(generateTiles(2)); // Start with zoom level 2
  }, []);

  return (
    <R3fGlobe
      {...ptProps}
      tilesData={tiles}
      tileWidth={45}
      tileHeight={45}
      tileAltitude={0.005}
      tileTexture={(d) => d.url}
      tileLabel={(d) => d.id}
      tileLat={(d) => d.lat}
      tileLng={(d) => d.lng}
      onTileHover={(tile) => console.log('Hovered tile:', tile)}
      onTileClick={(tile) => console.log('Clicked tile:', tile)}
    />
  );
};

export default Tile;