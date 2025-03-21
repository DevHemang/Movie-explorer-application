import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import MovieGrid from '../components/MovieGrid';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import { getPopularMovies, searchMovies, getGenres } from '../utils/api';
import styles from '../styles/Home.module.css';

export default function Home() {
  // State management
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  // Fetch genres on mount
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genreList = await getGenres();
        setGenres(genreList);
      } catch (err) {
        console.error('Error fetching genres:', err);
        setError('Failed to fetch genres. Please try again later.');
      }
    };
    fetchGenres();
  }, []);

  // Fetch movies when filters change
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchMovies();
    }, 300); // Add small delay to prevent too many API calls

    return () => clearTimeout(timer);
  }, [searchQuery, selectedGenre, currentPage]);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      setError(null);

      const params = {
        page: currentPage,
        with_genres: selectedGenre || undefined
      };

      let result;
      if (searchQuery) {
        result = await searchMovies(searchQuery, params);
      } else {
        result = await getPopularMovies(params);
      }

      if (!result.movies.length && selectedGenre) {
        setError('No movies found for the selected genre. Try a different genre.');
      } else {
        setMovies(result.movies);
        setTotalPages(result.totalPages);
      }
    } catch (err) {
      console.error('Error fetching movies:', err);
      setError('Failed to fetch movies. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleFilterChange = (type, value) => {
    if (type === 'genre') {
      setSelectedGenre(value);
      setCurrentPage(1);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Discover the movies</h1>
      
      <div className={styles.controls}>
        <SearchBar onSearch={handleSearch} />
        <FilterBar
          genres={genres}
          selectedGenre={selectedGenre}
          onFilterChange={handleFilterChange}
        />
      </div>

      {error ? (
        <div className={styles.error}>{error}</div>
      ) : (
        <>
          <MovieGrid 
            movies={movies}
            loading={loading}
          />

          {totalPages > 1 && !loading && (
            <div className={styles.pagination}>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={styles.pageButton}
              >
                Previous
              </button>
              <span className={styles.pageInfo}>
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={styles.pageButton}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
