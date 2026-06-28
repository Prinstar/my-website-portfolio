import ProjectCard from "./ProjectCard";
import rockPaperScissorsImg from "../assets/rock-paper-scissors.png"; 
function Projects() {
  const projectList = [
    {
      title: "Card Deck Games Platform",
      description:
        "React and TypeScript web app featuring classic card games including Solitaire, Spades, Hearts, Spider Solitaire, and Poker.",
      image:
        "https://images.unsplash.com/photo-1606167668584-78701c57f13d",
      link: "https://github.com/Prinstar/card-deck-games",
      tech: ["React", "TypeScript", "Vite", "Material UI", "CSS"]
    },
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
  title: "Rock Paper Scissors App",
  description:
    "Android application built in Kotlin where users play Rock, Paper, Scissors against the computer with real-time score tracking and interactive gameplay.",
  image: rockPaperScissorsImg,
  link: "https://github.com/Prinstar/RockPaperScissorsApp",
  tech: ["Kotlin", "Android", "XML"]
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