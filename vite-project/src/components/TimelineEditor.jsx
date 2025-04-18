import React, { useState } from 'react';
import { Rnd } from 'react-rnd';

const TRACK_HEIGHT = 60;
const ITEM_MIN_WIDTH = 50;

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '300px',
    background: '#1e1e1e',
    padding: '10px',
    boxSizing: 'border-box',
  },
  track: {
    position: 'relative',
    height: `${TRACK_HEIGHT}px`,
    borderBottom: '1px solid #333',
  },
  item: {
    height: '40px',
    background: '#3a86ff',
    borderRadius: '4px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'grab',
  },
};

function TimelineEditor() {
  const [tracks, setTracks] = useState([
    {
      id: 1,
      items: [
        { id: 'a', x: 100, width: 200 },
        { id: 'b', x: 350, width: 150 }
      ]
    },
    {
      id: 2,
      items: [
        { id: 'c', x: 200, width: 180 }
      ]
    }
  ]);

  const updateItem = (trackIdx, itemId, x, width) => {
    setTracks(prev => {
      const updated = [...prev];
      updated[trackIdx].items = updated[trackIdx].items.map(item =>
        item.id === itemId ? { ...item, x, width } : item
      );
      return updated;
    });
  };

  return (
    <div style={styles.container}>
      {tracks.map((track, trackIdx) => (
        <div key={track.id} style={styles.track}>
          {track.items.map(item => (
            <Rnd
              key={item.id}
              size={{ width: item.width, height: 40 }}
              position={{ x: item.x, y: 10 }}
              bounds="parent"
              minWidth={ITEM_MIN_WIDTH}
              onDragStop={(e, d) => {
                updateItem(trackIdx, item.id, d.x, item.width);
              }}
              onResizeStop={(e, direction, ref, delta, position) => {
                updateItem(trackIdx, item.id, position.x, parseInt(ref.style.width));
              }}
              style={styles.item}
            >
              <span>{item.id}</span>
            </Rnd>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TimelineEditor;
