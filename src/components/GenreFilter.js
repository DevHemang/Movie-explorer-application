import styles from '../styles/GenreFilter.module.css';

const GenreFilter = ({ genres = [], onGenreSelect, selectedGenre }) => {
  if (!Array.isArray(genres)) {
    console.error('Genres prop is not an array:', genres);
    return null;
  }

  return (
    <div className={styles.genre_filter}>
      {genres.map((genre) => (
        <button
          key={genre.id}
          onClick={() => onGenreSelect(selectedGenre === genre.id ? '' : genre.id)}
          className={`${styles.genre_button} ${
            selectedGenre === genre.id ? styles.selected : ''
          }`}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;
