import Layout from '../components/Layout';
import Image from 'next/image';

const About = () => {
  return (
    <Layout title="About - Movie Database Explorer">
      <div className="about-container">
        <section className="personal-info">
          <h1>About Me</h1>
          <div className="profile">
            <div className="profile-content">
              <h2>Hemang Gehlot</h2>
              <p className="education">B.E. in Electronics and Communication Engineering (2021-2025)</p>
              <p className="institution">T John Institute of Technology, Bangalore</p>
              <div className="skills">
                <h3>Technical Skills</h3>
                <ul>
                  <li>Frontend: React.js, Next.js, HTML5, CSS3, JavaScript</li>
                  <li>Backend: Node.js, Express.js</li>
                  <li>Database: MongoDB, MySQL</li>
                  <li>Tools: Git, VS Code, Postman</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="project-info">
          <h2>About This Project</h2>
          <div className="project-details">
            <h3>Movie Database Explorer</h3>
            <p>This project is a modern web application built with Next.js that allows users to explore movies, search for their favorites, and save them for later viewing. It demonstrates my ability to:</p>
            <ul>
              <li>Build responsive and user-friendly interfaces</li>
              <li>Integrate with external APIs (TMDB)</li>
              <li>Implement search and filtering functionality</li>
              <li>Manage application state and user preferences</li>
              <li>Write clean, maintainable, and well-documented code</li>
            </ul>

            <h3>Key Features</h3>
            <ul>
              <li>Browse popular movies with infinite scrolling</li>
              <li>Search movies by title</li>
              <li>Filter movies by genre</li>
              <li>View detailed movie information</li>
              <li>Save favorite movies locally</li>
              <li>Responsive design for all devices</li>
            </ul>
          </div>
        </section>
      </div>

      <style jsx>{`
        .about-container {
          max-width: 800px;
          margin: 0 auto;
        }

        section {
          margin-bottom: 3rem;
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        h1 {
          color: #1a1a1a;
          margin-bottom: 2rem;
          font-size: 2.5rem;
        }

        h2 {
          color: #2c3e50;
          margin-bottom: 1rem;
          font-size: 2rem;
        }

        h3 {
          color: #34495e;
          margin: 1.5rem 0 1rem;
          font-size: 1.5rem;
        }

        .profile-content {
          margin-top: 1rem;
        }

        .education, .institution {
          color: #666;
          margin: 0.5rem 0;
          font-size: 1.1rem;
        }

        .skills {
          margin-top: 2rem;
        }

        ul {
          list-style-type: none;
          padding: 0;
        }

        li {
          margin: 0.5rem 0;
          padding-left: 1.5rem;
          position: relative;
        }

        li:before {
          content: "•";
          color: #e50914;
          position: absolute;
          left: 0;
        }

        .project-details p {
          line-height: 1.6;
          color: #444;
          margin: 1rem 0;
        }
      `}</style>
    </Layout>
  );
};

export default About; 