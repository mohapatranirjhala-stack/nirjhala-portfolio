import "./styles/EngineeringFocus.css";

const focusAreas = [
  {
    title: "AI Engineering",
    description:
      "Designing and deploying intelligent systems that automate complex tasks and enhance decision-making.",
  },
  {
    title: "Full Stack Development",
    description:
      "Building end‑to‑end web applications with scalable architectures, leveraging React, Next.js, and backend services.",
  },
  {
    title: "Android Development",
    description:
      "Creating performant, user‑centric mobile applications using Kotlin and modern Android frameworks.",
  },
  {
    title: "Cloud Applications",
    description:
      "Designing resilient, distributed cloud solutions with serverless functions, CI/CD pipelines, and monitorable services.",
  },
  {
    title: "Scalable Backend Systems",
    description:
      "Architecting high‑throughput APIs, data pipelines, and microservices that grow with user demand.",
  },
];

const EngineeringFocus = () => {
  return (
    <section id="engineering-focus" className="engineering-focus-section section-container">
      <h2 className="section-title">Engineering Focus</h2>
      <div className="focus-grid">
        {focusAreas.map((area, index) => (
          <div key={index} className="focus-card">
            <h3>{area.title}</h3>
            <p>{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EngineeringFocus;