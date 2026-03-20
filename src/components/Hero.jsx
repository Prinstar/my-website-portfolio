import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="overlay">
        <div className="hero-content">
          <h1>
            Hi, I'm{" "}
            <span className="gradient-text">Ohenewaa Darko</span>
          </h1>

          <p className="subtitle">
            Computer Science Graduate | Full-Stack Developer | ML Researcher
          </p>

          <ReactTyped
            strings={[
              "I build full-stack web applications.",
              "I develop data-driven systems.",
              "I create impactful user experiences."
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
            className="typed"
          />

          <div className="hero-buttons">
            <a href="#projects" className="btn">
              View Projects
            </a>

            <a href="/resume.pdf" download className="btn-outline">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;