import ProfileCard from "./ProfileCard";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="hero">

      <div className="container hero-container">

        {/* LEFT SIDE */}

        <div className="hero-left">

          <span className="hero-tag">
            DATA ANALYST • POWER BI • SQL • PYTHON
          </span>

          <h1>
            Hi, I'm
            <br />
            <span>Jeshmitha S</span>
          </h1>

          <h2>
            Building Intelligent
            <br />
            Analytics Experiences.
          </h2>

          <p>
            I transform raw data into meaningful business insights using
            <strong> Power BI</strong>,
            <strong> SQL</strong>,
            <strong> Python</strong> and
            <strong> AI</strong>.
            <br />
            <br />
            Passionate about building interactive dashboards,
            solving business problems and creating
            data-driven applications that make an impact.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Explore Projects
            </button>

            <button className="secondary-btn">

              <Download size={18} />

              <span>Download Resume</span>

            </button>

          </div>

          <div className="social-links">

            <a
              href="https://github.com/jeshmitha-hu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/jeshmitha-s-77747034a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:jeshmithasrinivas@gmail.com"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <ProfileCard />

      </div>

    </section>
  );
};

export default Hero;