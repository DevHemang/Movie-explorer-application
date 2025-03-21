import Image from 'next/image';
import Link from 'next/link';
import { getImageUrl } from '../utils/api';
import styles from '../styles/MovieGrid.module.css';

const MovieGrid = ({ movies = [], loading = false, error = null }) => {
  if (loading) {
    return <div className={styles.loading}>Loading movies...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!movies?.length) {
    return <div className={styles.empty}>No movies found</div>;
  }

  return (
    <div className={styles.grid}>
      {movies.map((movie) => (
        <Link href={`/movie/${movie.id}`} key={movie.id} className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src={getImageUrl(movie.poster_path, 'w500')}
              alt={movie.title}
              width={500}
              height={750}
              className={styles.image}
              priority={false}
              loading="lazy"
            />
          </div>
          <div className={styles.info}>
            <h3 className={styles.title}>{movie.title}</h3>
            <div className={styles.details}>
              <p className={styles.year}>
                {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
              </p>
              <div className={styles.rating}>
                {movie.vote_average > 0 ? (
                  <>★ {movie.vote_average.toFixed(1)}</>
                ) : (
                  <span className={styles.pendingReview}>Review Pending</span>
                )}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieGrid;
