import React from "react";
import PosterImage from '../assets/202648-ki-or-breathing-0-1000-0-1500-crop.jpg';

// MovieRow Component
const MovieRow = () => {
  // Sample movie data (replace with an API fetch if needed)
  const movies = [
    { id: 1, title: "Inception", poster: PosterImage },
    { id: 2, title: "Interstellar", poster: PosterImage },
    { id: 3, title: "The Dark Knight", poster: PosterImage },
    { id: 4, title: "The Dark Knight", poster: PosterImage },
    { id: 5, title: "The Dark Knight", poster: PosterImage },
    { id: 6, title: "The Dark Knight", poster: PosterImage },
  ];

  // Component Render
  return (
    <div style={styles.movieRow}>
      {movies.map((movie) => (
        <div key={movie.id} style={styles.movie}>
          <img src={movie.poster} alt={movie.title} style={styles.poster} />
          <p style={styles.title}>{movie.title}</p>
        </div>
      ))}
    </div>
  );
};

// Inline Styles
const styles = {
  movieRow: {
    display: "flex",
    gap: "16px",
    overflow: "hidden",
    overflowX: "scroll", // Horizontal scroll for smaller screens
    padding: "16px",
  },
  movie: {
    minWidth: "150px",
    textAlign: "center",
  },
  poster: {
    width: "100%",
    borderRadius: "8px",
  },
  title: {
    marginTop: "8px",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default MovieRow;