import React from "react";
import PropTypes from "prop-types";
import PosterImage from '../assets/202648-ki-or-breathing-0-1000-0-1500-crop.jpg';

// MovieRow Component
const MovieRow = ({ movies }) => {
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

// Default Movies (used if no movies prop is passed)
MovieRow.defaultProps = {
  movies: [
    { id: 1, title: "Inception", poster: PosterImage },
    { id: 2, title: "Interstellar", poster: PosterImage },
    { id: 3, title: "The Dark Knight", poster: PosterImage },
    { id: 4, title: "Inception", poster: PosterImage },
    { id: 5, title: "Interstellar", poster: PosterImage },
    { id: 6, title: "The Dark Knight", poster: PosterImage },
  ],
};

// PropTypes for validation
MovieRow.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieRow;
