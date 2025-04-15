import "../styles/Skills.css";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "SASS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "Django",
      "RESTful APIs",
      "GraphQL",
    ],
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    title: "Tools & Others",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "CI/CD",
      "Webpack",
      "Vite",
      "Jest",
      "Figma",
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {skillsData.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3>{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, i) => (
                  <div className="skill-item" key={i}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
