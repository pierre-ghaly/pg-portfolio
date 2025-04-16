import "../styles/Projects.css";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl: string;
  sourceUrl: string;
  isPrivate: boolean;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Reservation-Link Dashboard",
    description:
      "Reservation-Link, the ultimate reservation management solution designed to simplify and enhance the way businesses handle guest reservations, events, payments, and seating arrangements.",
    technologies: [
      "Next.js",
      "Sequelize",
      "GraphQL",
      "Node.js",
      "Web Development",
    ],
    imageUrl: "reservation-link.jpg",
    liveUrl: "",
    sourceUrl: "",
    isPrivate: true,
  },
  {
    id: 2,
    title: "ElMaestro Code",
    description:
      "ElMaestro Code is a software development company dedicated to empowering businesses of all sizes in the digital era.",
    technologies: ["React", "Node.js", "AWS", "Web Development"],
    imageUrl: "elmaestro-code.png",
    liveUrl: "https://elmaestrocode.com",
    sourceUrl: "",
    isPrivate: true,
  },
  {
    id: 3,
    title: "Khulud Durri",
    description:
      "​Khulud Durri is a consciousness coach and researcher dedicated to helping individuals discover their true selves and expand their worlds. She offers workshops and sessions aimed at personal transformation and self-awareness.",
    technologies: [
      "WordPress",
      "Divi",
      "WooCommerce",
      "Zoom Integration",
      "Stripe Integration",
      "Web Development",
    ],
    imageUrl: "khulud-durri.png",
    liveUrl: "https://khuluddurri.com",
    sourceUrl: "",
    isPrivate: true,
  },
  {
    id: 4,
    title: "Ikigai Team",
    description:
      "Ikigai Team is a network marketing group founded in 2019, focused on empowering and educating individuals—regardless of age, background, or experience—to increase their cash flow and explore entrepreneurial opportunities.",
    technologies: ["WordPress", "Divi", "Web Development"],
    imageUrl: "ikigai.png",
    liveUrl: "https://ikigaifamily.com",
    sourceUrl: "",
    isPrivate: true,
  },
  {
    id: 5,
    title: "Gates Hub",
    description:
      "Gates Hub is a platform that provides a comprehensive range of investment and education opportunities, empowering individuals to achieve financial freedom and secure their future. It also provides the investors with a dashboard to manage their investments and track their progress.",
    technologies: ["Angular", "Node.js", "AWS", "Web Development"],
    imageUrl: "gates-hub.png",
    liveUrl: "https://gateshub.com",
    sourceUrl: "",
    isPrivate: true,
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
              </div>
              <div className="project-links">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn small"
                  >
                    View Live
                  </a>
                )}
                {project.isPrivate ? (
                  <div className="private-project-button">
                    <span className="btn small secondary disabled">
                      Source Code
                    </span>
                    <div className="private-badge">
                      <span className="lock-icon">🔒</span>
                      <span className="private-text">Private Repository</span>
                    </div>
                  </div>
                ) : (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn small secondary"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
