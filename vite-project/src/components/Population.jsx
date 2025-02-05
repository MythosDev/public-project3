import R3fGlobe from 'r3f-globe';
import { useState, useEffect } from 'react';
import Papa from 'papaparse';  // Import CSV parser
import EarthImg from '../assets/Blue_Marble_2002.png';
import EarthBump from '../assets/World_elevation_map.png';

const Population = (ptProps) => {
  const [popData, setPopData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch('/world_population.csv'); // Fetch from `public/`
          const csvText = await response.text();
      
          Papa.parse(csvText, {
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
            complete: (result) => setPopData(result.data),
            error: (error) => console.error("CSV Parsing Error:", error),
          });
        } catch (error) {
          console.error("Failed to load population data:", error);
        }
    };

    fetchData();
  }, []);

  // Interpolates Yellow-Orange-Red gradient
  const interpolateYlOrRd = (t) => {
    const colors = [
      [255, 255, 204], // Yellow
      [255, 237, 160],
      [254, 217, 118],
      [254, 178, 76],
      [253, 141, 60],
      [252, 78, 42],   // Orange-Red
      [227, 26, 28],
      [189, 0, 38],
      [128, 0, 38]     // Dark Red
    ];

    const i = Math.min(Math.floor(t * (colors.length - 1)), colors.length - 2);
    const frac = t * (colors.length - 1) - i;
    return `rgb(${colors[i].map((c, idx) => 
      Math.round(c + frac * (colors[i + 1][idx] - c))
    ).join(',')})`;
  };

  // Function for color scaling based on population weight
  const weightColor = (value) => {
    const normalized = Math.sqrt(value) / Math.sqrt(1e7); // Scale adjustment
    return interpolateYlOrRd(Math.min(normalized, 1)); // Ensure within [0,1]
  };

  return (
    <R3fGlobe
      {...ptProps}
      globeImageUrl={EarthImg}
      bumpImageUrl={EarthBump}
      hexBinPointsData={popData}
      hexBinPointWeight="pop"
      hexAltitude={(d) => Math.min(d.sumWeight * 6e-8, 0.5)} // Cap max altitude
      hexBinResolution={4}
      hexTopColor={(d) => weightColor(d.sumWeight)}
      hexSideColor={(d) => weightColor(d.sumWeight)}
      hexBinMerge={true}
      scale={0.05}
      width={600}
      height={600}
    />
  );
};

export default Population;
