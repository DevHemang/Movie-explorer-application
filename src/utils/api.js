import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

// Create axios instance with default config
const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

// Format movie data consistently
const formatMovie = (movie, includeDetails = false) => {
  const formatted = {
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    poster_path: movie.poster_path ? `${IMAGE_BASE_URL}/w500${movie.poster_path}` : 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="750" viewBox="0 0 500 750"%3E%3Crect width="100%25" height="100%25" fill="%23000000"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="24" fill="%23666"%3ENo Image Available%3C/text%3E%3C/svg%3E',
    backdrop_path: movie.backdrop_path ? `${IMAGE_BASE_URL}/original${movie.backdrop_path}` : null,
    release_date: movie.release_date,
    vote_average: movie.vote_average,
    genre_ids: movie.genre_ids || [],
    original_language: movie.original_language,
  };

  // Include additional details for movie detail page
  if (includeDetails) {
    formatted.genres = movie.genres || [];
    formatted.runtime = movie.runtime;
    formatted.status = movie.status;
    formatted.tagline = movie.tagline;
    formatted.production_companies = movie.production_companies;
  }

  return formatted;
};

// Get popular movies
export const getPopularMovies = async (params = {}) => {
  try {
    // Use discover endpoint for better filtering
    const endpoint = params.with_genres ? '/discover/movie' : '/movie/popular';
    
    const response = await api.get(endpoint, {
      params: {
        page: params.page || 1,
        with_genres: params.with_genres,
        sort_by: 'popularity.desc',
        include_adult: false,
        include_video: false,
        language: 'en-US'
      },
    });

    return {
      movies: response.data.results.map(formatMovie),
      totalPages: response.data.total_pages,
      totalResults: response.data.total_results,
    };
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw new Error('Failed to fetch popular movies');
  }
};

// Search movies with genre filter
export const searchMovies = async (query, params = {}) => {
  try {
    let endpoint = '/search/movie';
    let searchParams = {
      query,
      page: params.page || 1,
      include_adult: false,
      language: 'en-US'
    };

    // If genre is selected, use discover endpoint with additional search params
    if (params.with_genres) {
      endpoint = '/discover/movie';
      searchParams = {
        ...searchParams,
        with_genres: params.with_genres,
        sort_by: 'popularity.desc'
      };
    }

    const response = await api.get(endpoint, { params: searchParams });

    let movies = response.data.results;
    if (params.with_genres && query) {
      // Filter results by search query when using discover endpoint
      movies = movies.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        (movie.overview && movie.overview.toLowerCase().includes(query.toLowerCase()))
      );
    }

    return {
      movies: movies.map(formatMovie),
      totalPages: response.data.total_pages,
      totalResults: movies.length,
    };
  } catch (error) {
    console.error('Error searching movies:', error);
    throw new Error('Failed to search movies');
  }
};

// Get movie genres
export const getGenres = async () => {
  try {
    const response = await api.get('/genre/movie/list');
    return response.data.genres;
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw new Error('Failed to fetch genres');
  }
};

// Get movie details
export const getMovieDetails = async (movieId) => {
  try {
    const response = await api.get(`/movie/${movieId}`);
    return formatMovie(response.data, true);
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw new Error('Failed to fetch movie details');
  }
};

// Get trending movies
export const getTrendingMovies = async (timeWindow = 'day') => {
  try {
    const response = await api.get(`/trending/movie/${timeWindow}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw new Error('Failed to fetch trending movies');
  }
};

// Get movie recommendations
export const getMovieRecommendations = async (movieId, page = 1) => {
  try {
    const response = await api.get(`/movie/${movieId}/recommendations`, {
      params: { page }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie recommendations:', error);
    throw new Error('Failed to fetch movie recommendations');
  }
};

// Get movie videos (trailers, teasers, etc.)
export const getMovieVideos = async (movieId) => {
  try {
    const response = await api.get(`/movie/${movieId}/videos`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movie videos:', error);
    throw new Error('Failed to fetch movie videos');
  }
};

// Get movies by genre with pagination
export const getMoviesByGenre = async (genreId, page = 1) => {
  try {
    const response = await api.get('/discover/movie', {
      params: {
        with_genres: genreId,
        page,
        sort_by: 'popularity.desc'
      }
    });

    return {
      movies: response.data.results || [],
      totalPages: response.data.total_pages || 1,
      totalResults: response.data.total_results || 0
    };
  } catch (error) {
    console.error('Error fetching movies by genre:', error);
    throw new Error('Failed to fetch movies by genre');
  }
};

// Helper function to get image URL with size
export const getImageUrl = (path, size = 'original') => {
  if (!path) {
    return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="750" viewBox="0 0 500 750"%3E%3Crect width="100%25" height="100%25" fill="%23000000"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="24" fill="%23666"%3ENo Image Available%3C/text%3E%3C/svg%3E';
  }
  return `${IMAGE_BASE_URL}/${size}${path}`;
};

// Get poster image URL with appropriate size
export const getPosterUrl = (path, isMobile = false) => {
  const size = isMobile ? 'w342' : 'w500';
  return getImageUrl(path, size);
};

// Get backdrop image URL
export const getBackdropUrl = (path, isMobile = false) => {
  const size = isMobile ? 'w780' : 'original';
  return getImageUrl(path, size);
};

// Local storage functions for favorites
export const getFavorites = () => {
  if (typeof window === 'undefined') return [];
  const favorites = localStorage.getItem('favorites');
  return favorites ? JSON.parse(favorites) : [];
};

export const toggleFavorite = (movie) => {
  const favorites = getFavorites();
  const isFavorite = favorites.some(fav => fav.id === movie.id);
  
  let newFavorites;
  if (isFavorite) {
    newFavorites = favorites.filter(fav => fav.id !== movie.id);
  } else {
    newFavorites = [...favorites, {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average,
      release_date: movie.release_date,
      added_at: new Date().toISOString()
    }];
  }
  
  localStorage.setItem('favorites', JSON.stringify(newFavorites));
  return newFavorites;
};

export const isFavorite = (movieId) => {
  const favorites = getFavorites();
  return favorites.some(fav => fav.id === movieId);
};
