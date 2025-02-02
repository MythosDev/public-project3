import React, { useState, useEffect, useRef } from 'react';
import demoPic from '../assets/demo_pic.png'; // Import the image file

// Simulating API call for fetching posts
const fetchPosts = (startIndex, count) => {
  const posts = [];
  for (let i = startIndex; i < startIndex + count; i++) {
    posts.push({
      id: `${i}-${Date.now()}`,
      image: demoPic, //`${demoPic}?random=${i}`,
      caption: `This is post number ${i}. #example #post`,
    });
  }
  return posts;
};

const InfiniteScrollFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const containerRef = useRef(null);

  const loadMorePosts = () => {
    if (loading || !hasMore) return;
    setLoading(true);

    // Simulate an API call
    setTimeout(() => {
      const newPosts = fetchPosts(posts.length, 10);
      if (newPosts.length < 10) {
        setHasMore(false); // No more posts to load
      }
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setLoading(false);
    }, 1000);
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (
      container.scrollHeight - container.scrollTop === container.clientHeight &&
      hasMore
    ) {
      loadMorePosts();
    }
  };

  useEffect(() => {
    loadMorePosts(); // Load initial posts
    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [posts, hasMore]);

  return (
    <div
      ref={containerRef}
      style={{
        maxHeight: '80vh',
        overflowY: 'auto',
        border: '1px solid #ccc',
        padding: '10px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              marginBottom: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              backgroundColor: '#fff',
              padding: '10px',
            }}
          >
            <img
              src={post.image}
              alt={`Post ${post.id}`}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '14px' }}>{post.caption}</p>
          </div>
        ))}
        {loading && (
          <div style={{ textAlign: 'center', padding: '10px' }}>
            <span>Loading...</span>
          </div>
        )}
        {!hasMore && (
          <div style={{ textAlign: 'center', padding: '10px', color: '#888' }}>
            <span>No more posts to load.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfiniteScrollFeed;
