import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { getImageUrl } from '../utils/api';
import styles from '../styles/MovieCard.module.css';

const MovieCard = ({ movie }) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  if (!movie) return null;

  const imageUrl = getImageUrl(movie.poster_path, 'w500');
  const rating = movie.vote_average ? (movie.vote_average / 2).toFixed(1) : null;

  return (
    <div className={styles.movie_card}>
      <Link href={`/movie/${movie.id}`}>
        <div className={styles.movie_image_container}>
          {isLoading && (
            <div className={styles.loading_placeholder}>
              <div className={styles.loading_spinner} />
            </div>
          )}
          <Image
            src={imageUrl}
            alt={`${movie.title} poster`}
            width={500}
            height={750}
            className={`${styles.movie_image} ${imageError ? styles.no_image : ''}`}
            onError={() => {
              setImageError(true);
              setIsLoading(false);
            }}
            onLoad={() => setIsLoading(false)}
            priority={false}
            loading="lazy"
          />
          <div className={styles.movie_overlay}>
            <h3 className={styles.movie_title}>{movie.title}</h3>
            <div className={styles.movie_meta}>
              {rating && (
                <div className={styles.movie_rating}>
                  <div className={styles.rating_stars}>
                    <FaStar className={`${styles.star} ${styles.filled}`} />
                  </div>
                  <span className={styles.rating_value}>{rating}</span>
                </div>
              )}
              {movie.release_date && (
                <span className={styles.movie_year}>
                  {new Date(movie.release_date).getFullYear()}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
