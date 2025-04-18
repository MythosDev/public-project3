import React, { useEffect, useRef } from 'react';
import * as Cesium from 'cesium';

const GlobeComponent = () => {
  const viewerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    Cesium.Ion.defaultAccessToken = '';

    if (containerRef.current) {
      const viewer = new Cesium.Viewer(containerRef.current, {
        animation: false,
        baseLayerPicker: false,
        fullscreenButton: false,
        geocoder: false,
        homeButton: false,
        infoBox: false,
        sceneModePicker: false,
        selectionIndicator: false,
        timeline: false,
        navigationHelpButton: false,
      });
      viewerRef.current = viewer;
      viewer.scene.globe.show = true;

      return () => {
        if (viewerRef.current) {
          viewerRef.current.destroy();
        }
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ height: '75vh', width: '50%', }}
    />
  );
};

export default GlobeComponent;