import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import Experience from "./components/Experience";
import GithubStats from "./components/GithubStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";
import Certifications from "./components/Certifications";

function App() {
  // ✅ Default = Dark Mode, Toggle = High Contrast
  const [contrastMode, setContrastMode] = useState(false);

  return (
    <div className={contrastMode ? "contrast-mode" : "dark-mode"}>
      <ScrollProgress />
      <CursorGlow />

      {/* Background */}
      <div className="gradient-bg pointer-events-none"></div>

      {/* Navbar */}
      <Navbar
        contrastMode={contrastMode}
        setContrastMode={setContrastMode}
      />

      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      {/* <Experience /> */}
      <GithubStats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;