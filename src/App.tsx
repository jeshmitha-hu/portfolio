import Navbar from "./components/layout/Navbar";

import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Certifications from "./components/certifications/Certifications";
import Contact from "./components/contact/Contact";

import Footer from "./components/layout/Footer";
import Spotlight from "./components/common/Spotlight";
import ScrollProgress from "./components/common/ScrollProgress";

import "./styles/global.css";
import "./styles/variables.css";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>

        <Hero />

        <About />

        <Skills />

        <Projects />

      <Education /> 
      
        <Experience />

        <Certifications />

        <Contact />

      </main>

      <Footer />

      <Spotlight />

      <Navbar />

      <ScrollProgress />

    </div>
  );
}

export default App;