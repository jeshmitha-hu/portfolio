import "./projects.css";
import { useState, useEffect } from "react";
import FadeIn from "../common/FadeIn";
import { projects } from "../../data/projects";
import { ChevronLeft, ChevronRight } from "lucide-react";

const VISIBLE_COUNT = 4;

const sections = [
  "overview",
  "problem",
  "solution",
  "role",
  "features",
  "technologies",
  "challenges"
];

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(0);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const project = projects[selectedProject];

  /* ================= SLIDER ================= */

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      (prev - 1 + projects.length) % projects.length
    );
  };

  const visibleProjects = [];
  for (let i = 0; i < VISIBLE_COUNT; i++) {
    visibleProjects.push(projects[(startIndex + i) % projects.length]);
  }

  const handleSelect = (id: number) => {
    const index = projects.findIndex((p) => p.id === id);
    setSelectedProject(index);
    setSectionIndex(0);
    setImageIndex(0);
  };

  /* ================= IMAGE SLIDESHOW ================= */

  useEffect(() => {
    if (!project || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % project.images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [project]);

  const nextImage = () => {
    setImageIndex((prev) =>
      (prev + 1) % project.images.length
    );
  };

  const prevImage = () => {
    setImageIndex((prev) =>
      (prev - 1 + project.images.length) % project.images.length
    );
  };

  /* ================= SECTION ================= */

  const nextSection = () => {
    setSectionIndex((prev) => (prev + 1) % sections.length);
  };

  const prevSection = () => {
    setSectionIndex((prev) =>
      (prev - 1 + sections.length) % sections.length
    );
  };

  const current = sections[sectionIndex];

  /* ================= CONTENT ================= */

  const renderContent = () => {
    switch (current) {
      case "overview":
        return <p>{project.overview.description}</p>;

      case "problem":
        return <p>{project.problem}</p>;

      case "solution":
        return <p>{project.solution}</p>;

      case "role":
        return (
          <ul>
            {project.role.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );

      case "features":
        return (
          <ul>
            {project.features.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );

      case "technologies":
        return (
          <div className="tech-stack">
            {project.technologies.map((tech, i) => (
              <span key={i}>{tech}</span>
            ))}
          </div>
        );

      case "challenges":
        return (
          <ul>
            {project.challenges.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );

      default:
        return null;
    }
  };

  return (
    <FadeIn>
      <section id="projects" className="projects-section">
        <div className="projects-container">

          {/* HEADER */}
          <div className="projects-heading">
            <h2>Featured Projects</h2>
          </div>

          {/* SLIDER */}
          <div className="projects-slider-wrapper">

            <button className="slider-arrow left" onClick={prevSlide}>
              <ChevronLeft size={22} />
            </button>

            <div className="projects-slider">
              {visibleProjects.map((proj) => (
                <div
                  key={proj.id}
                  className={`project-card-small ${
                    selectedProject ===
                    projects.findIndex((p) => p.id === proj.id)
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSelect(proj.id)}
                >
                  <img src={proj.cover} />
                </div>
              ))}
            </div>

            <button className="slider-arrow right" onClick={nextSlide}>
              <ChevronRight size={22} />
            </button>

          </div>

          {/* CENTER TITLE */}
          <h2 className="project-center-heading">
            {project.heading}
          </h2>

          {/* DETAIL */}
          <div className="project-detail">

            {/* LEFT */}
            <div className="project-left">

              <div className="project-image">
                <img
                  key={project.images[imageIndex]}
                  className="fade-image"
                  src={project.images[imageIndex]}
                />

                {project.images.length > 1 && (
                  <>
                    <button className="image-arrow left" onClick={prevImage}>
                      <ChevronLeft size={18} />
                    </button>

                    <button className="image-arrow right" onClick={nextImage}>
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}
              </div>

            </div>

            {/* RIGHT */}
            <div className="project-right-card">

              <p className="section-title">
                {current.toUpperCase()}
              </p>

              <div className="tab-content">
                {renderContent()}
              </div>

              {project.github && project.github.trim() !== "" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-btn"
                >
                  View Repository
                </a>
              )}

              <div className="project-bottom-nav">

                <button onClick={prevSection} className="nav-btn">
                  <ChevronLeft size={14} /> Previous
                </button>

                <span className="nav-count">
                  {sectionIndex + 1} / {sections.length}
                </span>

                <button onClick={nextSection} className="nav-btn">
                  Next <ChevronRight size={14} />
                </button>

              </div>

            </div>
          </div>

        </div>
      </section>
    </FadeIn>
  );
};

export default Projects;