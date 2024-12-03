import React from "react";

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const MovieItem = ({ item, category }) => {
  return (
    <div className="movie">
      <img src={IMG_PATH + item.poster_path} alt={item.title || item.name} />
      <div className="movie-info">
        <h3>{item.title || item.name}</h3>
      </div>
      <div>
        {/* Removed the Watch Trailer link */}
        <a
          href={`https://vidsrc.xyz/embed/movie?tmdb=${item.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="play-btn"
        >
          Play {category === 'movies' ? 'Movie' : category === 'tv' ? 'Show' : 'Movie'}
        </a>
      </div>
    </div>
  );
};

export default MovieItem;
