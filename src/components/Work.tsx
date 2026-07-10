import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

type Project = {
  title: string;
  category: string;
  tools: string;
  image: string;
  link: string;
  features: string[];
  liveDemo?: string;
  apkLink?: string;
  isAndroid?: boolean;
};

const projects: Project[] = [
  {
    title: "AI Career Copilot",
    category: "AI-Powered Career Intelligence Platform",
    tools: "Next.js, TypeScript, Firebase, REST APIs, Groq LLM",
    image: "/images/preview1.png",
    link: "https://github.com/mohapatranirjhala-stack/AI-Career-Copilot",
    features: [
      "Resume Analyzer",
      "ATS Score",
      "AI Skill Extraction",
      "Interview Preparation",
    ],
    liveDemo: "https://ai-career-copilot-demo.vercel.app",
  },
  {
    title: "Smart Expense Tracker",
    category: "Cloud-Connected Android Financial Management",
    tools: "Kotlin, Firebase Authentication, Cloud Firestore, MPAndroidChart",
    image: "/images/placeholder.webp",
    link: "https://github.com/mohapatranirjhala-stack/Smart-Expense-Tracker",
    apkLink: "https://github.com/mohapatranirjhala-stack/Smart-Expense-Tracker/releases",
    isAndroid: true,
    features: [
      "Expense Tracking",
      "Budget Monitoring",
      "Category Analytics",
      "Charts",
    ],
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-features">
                          <h5>Features</h5>
                          <ul>
                            {project.features && project.features.map((feature: string, i: number) => <li key={i}>{feature}</li>)}
                          </ul>
                        </div>
                        <div className="carousel-tools">
                          <span className="tools-label">Tech Stack</span>
                          <p>{project.tools}</p>
                        </div>
                        <div className="carousel-buttons">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="project-btn github-btn"
                            data-cursor="disable"
                          >
                            GitHub
                          </a>
                          {project.liveDemo && (
                            <a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noreferrer"
                              className="project-btn live-btn"
                              data-cursor="disable"
                            >
                              Live Demo
                            </a>
                          )}
                          {project.isAndroid && (
                            <a
                              href={project.apkLink}
                              target="_blank"
                              rel="noreferrer"
                              className="project-btn apk-btn"
                              data-cursor="disable"
                            >
                              APK
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
