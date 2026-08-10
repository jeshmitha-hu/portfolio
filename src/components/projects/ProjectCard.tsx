import "./projects.css";
import { useState } from "react";
import FadeIn from "../common/FadeIn";
import { projects } from "../../data/projects";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

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
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

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

  /* ================= IMAGE ================= */

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % project.images.length);
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
          <ul>{project.role.map((r, i) => <li key={i}>{r}</li>)}</ul>
        );
      case "features":
        return (
          <ul>{project.features.map((f, i) => <li key={i}>{f}</li>)}</ul>
        );
      case "technologies":
        return (
          <div className="tech-stack">
            {project.technologies.map((t, i) => <span key={i}>{t}</span>)}
          </div>
        );
      case "challenges":
        return (
          <ul>{project.challenges.map((c, i) => <li key={i}>{c}</li>)}</ul>
        );
    }
  };

  return (
    <FadeIn>
      <section className="projects-section">
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
                  <h4>{proj.title}</h4>
                </div>
              ))}
            </div>

            <button className="slider-arrow right" onClick={nextSlide}>
              <ChevronRight size={22} />
            </button>
          </div>

          {/* 🔥 CENTER TITLE */}
          <h2 className="project-center-heading">
            {project.heading}
          </h2>

          {/* DETAIL */}
          <div className="project-detail">

            {/* LEFT */}
            <div className="project-left">

              <div className="project-image">
                <img
                  src={project.images[imageIndex]}
                  onClick={() =>
                    setFullscreenImage(project.images[imageIndex])
                  }
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

              {/* TITLE BELOW IMAGE */}
              <p className="project-image-title">
                {project.title}
              </p>
            </div>

            {/* RIGHT */}
            <div className="project-right-card">

              <button className="close-btn">
                <X size={16} />
              </button>

              <h3 className="section-title">
                {current.toUpperCase()}
              </h3>

              <div className="tab-content">
                {renderContent()}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
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

          {/* FULLSCREEN IMAGE */}
          {fullscreenImage && (
            <div
              className="fullscreen-overlay"
              onClick={() => setFullscreenImage(null)}
            >
              <img src={fullscreenImage} />
              <button className="fullscreen-close">
                <X size={20} />
              </button>
            </div>
          )}
        </div>
      </section>
    </FadeIn>
  );
};

export default Projects;