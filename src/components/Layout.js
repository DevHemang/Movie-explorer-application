import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <Head>
        <title>Movie Explorer</title>
        <meta name="description" content="Explore movies from TMDB" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <header className="header">
        <div className="header-content">
          <Link href="/" className="logo">
            <span className="logo-emoji">🎬</span>
            <span className="logo-text">Movie Explorer</span>
          </Link>
        </div>
      </header>

      <main className="main">
        {children}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <Link href="/about" className="footer-link">About</Link>
            <Link href="/support" className="footer-link">Support</Link>
          </div>
          <div className="copyright">
            © {new Date().getFullYear()} Movie Explorer
          </div>
        </div>
      </footer>

      <style jsx>{`
        .layout-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .header {
          background-color: #1a1a1a;
          padding: 2rem 0;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        .logo {
          color: white;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .logo-emoji {
          font-size: 3.5rem;
          line-height: 1;
        }

        .logo-text {
          font-size: 3rem;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .logo:hover {
          color: #ffd700;
          transform: scale(1.05);
        }

        .main {
          margin-top: 7rem;
          min-height: calc(100vh - 9rem);
          max-width: 1200px;
          margin: 7rem auto 2rem;
          padding: 0 1.5rem;
          width: 100%;
        }

        .footer {
          background-color: #1a1a1a;
          color: white;
          padding: 1.5rem 0;
          margin-top: auto;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-links {
          display: flex;
          gap: 2rem;
        }

        .footer-link {
          color: white;
          text-decoration: none;
          transition: color 0.2s;
          font-size: 1rem;
        }

        .footer-link:hover {
          color: #ffd700;
        }

        .copyright {
          color: #666;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .header {
            padding: 1.5rem 0;
          }

          .header-content {
            padding: 0 1rem;
          }

          .logo-emoji {
            font-size: 2.5rem;
          }

          .logo-text {
            font-size: 2.25rem;
          }

          .main {
            padding: 0 1rem;
            margin-top: 6rem;
            margin: 6rem auto 1.5rem;
          }

          .footer {
            padding: 1.25rem 0;
          }

          .footer-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
            padding: 0 1rem;
          }

          .footer-links {
            gap: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .header {
            padding: 1.25rem 0;
          }

          .header-content {
            padding: 0 0.75rem;
          }

          .logo-emoji {
            font-size: 2rem;
          }

          .logo-text {
            font-size: 1.75rem;
          }

          .main {
            padding: 0 0.75rem;
            margin-top: 5rem;
            margin: 5rem auto 1rem;
          }

          .footer {
            padding: 1rem 0;
          }

          .footer-content {
            padding: 0 0.75rem;
          }

          .footer-links {
            gap: 1rem;
            flex-direction: column;
          }

          .footer-link {
            font-size: 0.9rem;
          }

          .copyright {
            font-size: 0.8rem;
            margin-top: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}
