import ProjectCard from "./ProjectCard";

function Projects() {
  const projectList = [
    {
      title: "E-Commerce Tech Store",
      description:
        "Full-stack e-commerce platform with product listings, cart, checkout, and payment integration.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      link: "https://github.com/Prinstar/prinstar.github.io",
      tech: ["   JavaScript ", "HTML ", "CSS "]
    },
    {
      title: "Social Media Analytics Dashboard",
      description:
        "Analytics platform visualizing engagement metrics with React, Node.js, and MongoDB.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      link: "https://github.com/Prinstar/SocialMediaAnalytics",
      tech: ["     React ", " Node.js ", " MongoDB "]
    },
    {
      title: "Food Ordering App",
      description:
        "Android app built in Kotlin that lets users browse food, manage a cart, and view order summaries.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      link: "https://github.com/Prinstar/NewaBites",
      tech: ["    Kotlin ", " Android ", " XML "]
    }
  ];

  return (
    <section id="projects" className="fade-in">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;