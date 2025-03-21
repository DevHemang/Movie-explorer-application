import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getMovieDetails } from '../../utils/api';

export default function MovieDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      fetchMovie();
    }
  }, [id]);

  const fetchMovie = async () => {
    try {
      setLoading(true);
      const data = await getMovieDetails(id);
      setMovie(data);
    } catch (err) {
      setError('Failed to load movie details');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="container">Loading...</div>;
  if (error) return <div className="container error">{error}</div>;
  if (!movie) return <div className="container">Movie not found</div>;

  return (
    <div className="container">
      <div className="movie-details">
        <div className="movie-poster">
          <Image
            src={movie.poster_path}
            alt={movie.title}
            width={300}
            height={450}
            style={{ borderRadius: '8px' }}
          />
        </div>
        <div className="movie-content">
          <h1>{movie.title}</h1>
          <p className="movie-info">
            {movie.release_date && (
              <span>{new Date(movie.release_date).getFullYear()}</span>
            )}
            {movie.runtime && (
              <>
                <span> • </span>
                <span>{movie.runtime} minutes</span>
              </>
            )}
            {movie.vote_average > 0 && (
              <>
                <span> • </span>
                <span>Rating: {movie.vote_average.toFixed(1)}/10</span>
              </>
            )}
          </p>
          {movie.overview && (
            <div className="movie-overview">
              <h2>Overview</h2>
              <p>{movie.overview}</p>
            </div>
          )}
          {movie.genres && movie.genres.length > 0 && (
            <div className="movie-genres">
              {movie.genres.map(genre => (
                <span key={genre.id} className="genre-tag">
                  {genre.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 