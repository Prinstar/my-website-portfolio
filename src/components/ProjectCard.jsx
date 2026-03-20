function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="tags">
        {project.tech.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>

      <div className="buttons">
        <a href={project.link} target="_blank">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;