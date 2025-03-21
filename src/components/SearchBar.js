import { useState, useEffect, useCallback } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from '../styles/SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (debouncedQuery !== '') {
      onSearch(debouncedQuery);
    }
  }, [debouncedQuery, onSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className={styles.search_container}>
      <form onSubmit={handleSubmit} className={styles.search_bar}>
        <div className={styles.search_input_container}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search films..."
            className={styles.search_input}
            aria-label="Search movies"
          />
          <div className={styles.search_icon_container}>
            <FaSearch className={styles.search_icon} aria-hidden="true" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
