import styles from '../styles/FilterBar.module.css';

export default function FilterBar({ genres, selectedGenre, onFilterChange }) {
  const handleGenreChange = (e) => {
    onFilterChange('genre', e.target.value);
  };

  return (
    <div className={styles.filterBar}>
      <div className={styles.filterGroup}>
        <label htmlFor="genre">Genre:</label>
        <select
          id="genre"
          value={selectedGenre}
          onChange={handleGenreChange}
        >
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
} 