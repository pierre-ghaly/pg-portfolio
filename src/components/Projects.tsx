import "../styles/Projects.css";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl: string;
  sourceUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "A responsive web application with modern UI/UX principles.",
    technologies: ["React", "TypeScript", "CSS"],
    imageUrl: "/project1.jpg",
    liveUrl: "https://example.com/project1",
    sourceUrl: "https://github.com/username/project1",
  },
  {
    id: 2,
    title: "Project Two",
    description:
      "Full-stack application with user authentication and database.",
    technologies: ["Node.js", "Express", "MongoDB", "React"],
    imageUrl: "/project2.jpg",
    liveUrl: "https://example.com/project2",
    sourceUrl: "https://github.com/username/project2",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Mobile-first web application with offline capabilities.",
    technologies: ["React", "PWA", "Firebase"],
    imageUrl: "/project3.jpg",
    liveUrl: "https://example.com/project3",
    sourceUrl: "https://github.com/username/project3",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.imageUrl} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn small"
                  >
                    View Live
                  </a>
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn small secondary"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
