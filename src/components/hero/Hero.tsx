import "./hero.css";

import FadeIn from "../common/FadeIn";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaChartLine,
  FaLightbulb,
  FaCogs,
  FaRocket,
} from "react-icons/fa";

import { Download } from "lucide-react";

import { TypeAnimation } from "react-type-animation";

const Hero = () =>
{
  return (
    <FadeIn>

      <section
        id="home"
        className="hero"
      >

        <div className="hero-wrapper">

          {/* ================= LEFT ================= */}

          <div className="hero-left">

            

            <h1>
              Jeshmitha S
            </h1>

            <h2>
              <span className="gradient-text">
                Transforming Data Into Business Decisions
              </span>
            </h2>

            {/* ================= TYPING ================= */}

            <div className="typing-container">

              <TypeAnimation
                sequence={[
                  "Data Analyst",
                  1800,
                  "Business Intelligence Analyst",
                  1800,
                  "Power BI Developer",
                  1800,
                  "SQL Developer",
                  1800,
                  "AI Analytics Enthusiast",
                  1800,
                ]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
                className="typing-role"
              />

            </div>

            <p>

              Passionate about turning raw data into meaningful business
              insights through interactive dashboards, SQL analytics,
              reporting automation, and AI-powered solutions using
              Power BI, Python and modern Business Intelligence tools.

            </p>

            {/* ================= BUTTONS ================= */}

            <div className="hero-buttons">

              <a
                href="#projects"
                className="primary-btn"
              >
                View Projects
                <FaArrowRight />
              </a>

<a
  href="/images/Jeshmitha%20S%20Resume.pdf"
  download="Jeshmitha S Resume.pdf"
  className="secondary-btn"
>
  <Download size={18} />
  Download Resume
</a>

            </div>

          </div>

          {/* ================= RIGHT ================= */}

          <div className="hero-right">

            <div className="hero-image">

              <div className="hero-image-glow"></div>

              <img
                src="/images/profile.png"
                alt="Jeshmitha S"
              />

            </div>

          </div>

        </div>

        {/* ================= FEATURE CARDS ================= */}

        <div className="hero-features">

          <div className="feature-card">

            <div className="feature-icon">
              <FaChartLine />
            </div>

            <h3>Data Storytelling</h3>

            <p>
              Transforming complex datasets into clear,
              actionable business insights.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              <FaLightbulb />
            </div>

            <h3>Analytical Thinking</h3>

            <p>
              Identifying trends, solving business
              problems and supporting better decisions.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              <FaCogs />
            </div>

            <h3>Automation</h3>

            <p>
              Streamlining reporting workflows
              using Python, SQL and Power BI.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              <FaRocket />
            </div>

            <h3>Continuous Learning</h3>

            <p>
              Constantly exploring modern analytics,
              AI technologies and industry best practices.
            </p>

          </div>

        </div>

        {/* ================= SOCIAL ================= */}

        <div className="hero-social">

          <a
            href="https://github.com/jeshmitha-hu"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/jeshmitha-s-77747034a"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a href="mailto:jeshmithasrinivas@gmail.com">
            <FaEnvelope />
            Email
          </a>

        </div>

      </section>

    </FadeIn>
  );
};

export default Hero;