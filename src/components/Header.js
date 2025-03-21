import Link from 'next/link';
import { FaFilm } from 'react-icons/fa';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <FaFilm className={styles.icon} />
          <span>Movie Explorer</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/favorites" className={styles.navLink}>Favorites</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 