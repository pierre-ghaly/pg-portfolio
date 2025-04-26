import "../styles/Skills.css";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "C#", "Java", "Solidity"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "React", "Next.js", "Angular"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", ".NET"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Sequelize"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "Docker"],
  },
  {
    title: "Cloud Services",
    skills: ["AWS", "Azure", "Firebase"],
  },
  {
    title: "Web Services & APIs",
    skills: ["RESTful APIs", "GraphQL"],
  },
  {
    title: "Blockchain Development",
    skills: ["Solidity", "Web3.js"],
  },
  {
    title: "CMS Platforms",
    skills: ["WordPress", "Shopify", "Payload"],
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
