import React, { useState } from 'react';
import { FaThumbsUp, FaBookmark, FaShareAlt, FaCommentDots } from 'react-icons/fa';

const InteractionBar = () => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleLike = () => setLiked(prev => !prev);
  const handleSave = () => setSaved(prev => !prev);

  const handleShare = () => {
    alert('Share this content!');
    // Add share logic here
  };

  const handleComment = () => {
    alert('Open comment section!');
    // Add comment section functionality here
  };

  return (
    <div style={styles.bar}>
      <div style={styles.iconContainer}>
        <button onClick={handleLike} style={styles.iconButton}>
          <FaThumbsUp color={liked ? 'blue' : 'gray'} />
        </button>
        <button onClick={handleSave} style={styles.iconButton}>
          <FaBookmark color={saved ? 'yellow' : 'gray'} />
        </button>
        <button onClick={handleShare} style={styles.iconButton}>
          <FaShareAlt color="gray" />
        </button>
        <button onClick={handleComment} style={styles.iconButton}>
          <FaCommentDots color="gray" />
        </button>
      </div>
    </div>
  );
};

const styles = {
  bar: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
    width: '100%',
    maxWidth: '500px',
    margin: '0 auto',
    marginBottom: '100px',
    marginTop: '25px'
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  iconButton: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '5px',
    fontSize: '20px',
  },
};

export default InteractionBar;
