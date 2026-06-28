import profile from "../assets/my-headshot.jpg";

function About() {
  return (
    <section id="about" className="fade-in">
      <div className="about-container">
        
        <img
          src={profile}
          alt="Ohenewaa Darko"
          className="profile-img"
        />

        <div className="about-text">
          <h2>About Me</h2>

          <p>👋 Hi, I'm Ohenewaa.</p>

          <p>
            I'm a Computer Science graduate from California State University, East Bay 
            with Summa Cum Laude honors and a passion for building scalable and impactful technology.
          </p>

          <p>
            I specialize in full-stack development using React, Node.js, and MongoDB, 
            and have built projects ranging from e-commerce platforms to analytics dashboards.
          </p>

          <p>
            As an intern at Lawrence Berkeley National Labs, I gained hands-on experience in software development 
            and collaborated with cross-functional teams to deliver high-quality solutions.
          </p>

          <p>
            I'm interested in software engineering, machine learning, and building 
            data-driven applications that solve real-world problems.
          </p>

                  <div className="skills">
          <p><strong>Languages:</strong> Python, JavaScript, C++, Java</p>
          <p><strong>Frontend:</strong> React, HTML, CSS</p>
          <p><strong>Backend:</strong> Node.js, MongoDB</p>
          <p><strong>ML:</strong> PyTorch, scikit-learn</p>
        </div>
        </div>

      </div>
    </section>
  );
}

export default About;