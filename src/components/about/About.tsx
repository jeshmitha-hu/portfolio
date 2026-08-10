import "./about.css";
import FadeIn from "../common/FadeIn";

import {
  Download,
  Mail,
  MapPin,
  GraduationCap,
  Briefcase,
  BarChart3,
  BrainCircuit,
  Database
} from "lucide-react";

const About = () => {
  return (
    <FadeIn>
      <section id="about" className="about">

        {/* HEADER */}
        <div className="about-header">
          <h2>
            Know Me Beyond My{" "}
            <span className="gradient-text">Resume</span>
          </h2>

          <p>
            Passionate about transforming data into meaningful business insights
            through analytics, visualization and AI-driven solutions.
          </p>
        </div>

        {/* MAIN CONTAINER */}
        <div className="about-container">

          {/* LEFT SIDE */}
          <div className="about-description glass-card">

            <h3>Professional Summary</h3>

            <p>
              Hello, I'm <strong>Jeshmitha S</strong>, and welcome to my portfolio.
            </p>

            <p>
              I recently completed my <strong>MCA from Dayananda Sagar College of Engineering</strong>.
              During my academic journey, I developed a strong interest in using data to solve
              real-world business problems, which led me to build my career in
              <strong> Data Analytics and Business Intelligence</strong>.
            </p>

            <p>
              To gain practical experience, I completed a
              <strong> Data Analyst Internship at KaroStartup Technology India Pvt. Ltd.</strong>,
              where I worked on real-world projects, analyzed business data, built
              interactive dashboards, and developed AI-assisted solutions for
              data-driven decision-making.
            </p>

            <p>
              Beyond my internship, I have built projects such as an
              <strong> AI-Powered Business Intelligence Platform</strong> and a
              <strong> Road Accident Intelligence & Safety Analytics Dashboard</strong>,
              along with other analytics solutions that showcase my technical
              and problem-solving skills.
            </p>

            {/* SKILLS */}
            <div className="about-highlights">

              <div>
                <Database size={18} />
                <span>SQL • Python • Power BI • Tableau • Excel</span>
              </div>

              <div>
                <BarChart3 size={18} />
                <span>Dashboard Development • BI • Visualization</span>
              </div>

              <div>
                <BrainCircuit size={18} />
                <span>AI Solutions • Analytics • Problem Solving</span>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="about-content">

            <div className="profile-header">
              <h3>Jeshmitha S</h3>
              <span>Data Analyst • Power BI • SQL • Python</span>
            </div>

            <div className="profile-info">

              <div className="info-item">
                <MapPin size={18} />
                <span>Bengaluru, Karnataka</span>
              </div>

              <div className="info-item">
                <GraduationCap size={18} />
                <span>MCA | Dayananda Sagar College</span>
              </div>

              <div className="info-item">
                <Briefcase size={18} />
                <span>Open to Data Analyst & BI Roles</span>
              </div>

            </div>

            {/* STRENGTHS */}
            <div className="profile-strengths">
              <h4>Core Strengths</h4>

              <ul>
                <li>Analytical Thinking & Problem Solving</li>
                <li>Quick Learner & Adaptable</li>
                <li>Attention to Detail</li>
                <li>Data-Driven Decision Making</li>
              </ul>
            </div>

            {/* ACTION BUTTONS */}
            <div className="profile-actions">

              <a href="#contact" className="contact-btn">
                <Mail size={18} />
                Contact Me
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

        </div>

      </section>
    </FadeIn>
  );
};

export default About;