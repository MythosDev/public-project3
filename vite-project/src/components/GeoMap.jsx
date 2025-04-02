import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// A helper component to handle map invalidation
const MapInvalidator = () => {
  const map = useMap();

  useEffect(() => {
    // Wait for the map to fully render, then invalidate its size
    setTimeout(() => {
      map.invalidateSize();
    }, 100); // Small delay to ensure the DOM is ready
  }, [map]);

  return null;
};

const GeoMap = ({ geoJsonUrl, center = [51.505, -0.09], zoom = 5 }) => {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    if (geoJsonUrl) {
      fetch(geoJsonUrl)
        .then((response) => response.json())
        .then((data) => setGeoData(data))
        .catch((error) => console.error('Error loading GeoJSON:', error));
    }
  }, [geoJsonUrl]);

  return (
    <div className="w-full min-w-[400px] max-w-[1080px] min-h-[400px] max-h-[1080px] rounded-xl overflow-hidden">
      <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        {geoData && <GeoJSON data={geoData} />}
        <MapInvalidator />
      </MapContainer>
    </div>
  );
};

export default GeoMap;