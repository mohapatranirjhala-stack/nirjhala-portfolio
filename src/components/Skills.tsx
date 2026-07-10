import "./styles/Skills.css";

const skillsData = [
  {
    title: "Programming Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "Kotlin"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Firebase", "REST APIs"],
  },
  {
    title: "Artificial Intelligence",
    items: ["Large Language Models", "Prompt Engineering", "AI Integration"],
  },
  {
    title: "Databases",
    items: ["Cloud Firestore", "MySQL"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Android Studio", "VS Code", "Postman"],
  },
  {
    title: "Core Computer Science",
    items: ["Data Structures", "Algorithms", "Operating Systems", "DBMS", "Computer Networks"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section section-container">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.title}</h3>
            <div className="skill-tags">
              {category.items.map((item, idx) => (
                <span
                  key={idx}
                  className="skill-tag"
                  style={{
                    backgroundColor: idx % 2 === 0 ? "#4a90e2" : "#50C878",
                    color: "#fff",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;