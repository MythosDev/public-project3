import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Mock data for games (replace with your actual data)
const gamesData = [
  { id: 1, title: 'Space Adventure', image: '/demo_pic.png' },
  { id: 2, title: 'Mystic Quest', image: '/demo_pic.png' },
  { id: 3, title: 'Racing Rivals', image: '/demo_pic.png' },
  { id: 4, title: 'Puzzle Mania', image: '/demo_pic.png' },
];

// Styles
const containerStyle = {
  width: '400px',
  height: '800px',
  backgroundColor: '#f5f5f5',
  borderRadius: '20px',
  padding: '20px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
};

const searchContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
};

const searchInputStyle = {
  flex: 1,
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  fontSize: '16px',
  backgroundColor: '#e0e0e0',
  marginRight: '10px',
};

const settingsButtonStyle = {
  background: 'none',
  border: 'none',
  fontSize: '24px',
  cursor: 'pointer',
  color: '#888',
};

const gamesListStyle = {
  flex: 1,
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const gameItemStyle = {
  textDecoration: 'none',
  color: 'inherit',
};

const gameImageStyle = {
  width: '100%',
  height: '200px',
  backgroundColor: '#e0e0e0',
  borderRadius: '10px',
  objectFit: 'cover',
};

const gameTitleStyle = {
  textAlign: 'center',
  marginTop: '5px',
  fontSize: '16px',
  color: '#333',
};

// Discover Component
const Discover = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter games based on search query
  const filteredGames = gamesData.filter((game) =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={containerStyle}>
      {/* Header with Search Bar and Settings Button */}
      <div style={headerStyle}>
        <div style={searchContainerStyle}>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={searchInputStyle}
          />
          <Link to="/settings">
            <button style={settingsButtonStyle}>⚙️</button>
          </Link>
        </div>
      </div>

      {/* Games List */}
      <div style={gamesListStyle}>
        {filteredGames.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#888', marginTop: '20px' }}>
            No games found
          </div>
        ) : (
          filteredGames.map((game) => (
            <Link to={`/game/${game.id}`} key={game.id} style={gameItemStyle}>
              <div>
                <img src={game.image} alt={game.title} style={gameImageStyle} />
                <div style={gameTitleStyle}>{game.title}</div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Discover;