import styles from '../styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.footer_section}>
          <nav className={styles.footer_nav}>
            <Link href="/about" className={styles.footer_link}>About</Link>
            <Link href="/privacy" className={styles.footer_link}>Privacy Policy</Link>
            <Link href="/terms" className={styles.footer_link}>Terms & Conditions</Link>
            <Link href="/support" className={styles.footer_link}>Support</Link>
          </nav>
        </div>
        <div className={styles.footer_bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Movie Explorer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 