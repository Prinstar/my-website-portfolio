import profile from "../assets/my-photo.jpg";

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
            I'm a fourth year Computer Science student at California State University, East Bay 
            with a 3.95 GPA and a passion for building scalable and impactful technology.
          </p>

          <p>
            I specialize in full-stack development using React, Node.js, and MongoDB, 
            and have built projects ranging from e-commerce platforms to analytics dashboards.
          </p>

          <p>
            As an Undergraduate Research Assistant, I apply machine learning techniques 
            using Python and scikit-learn to analyze and predict student success outcomes.
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