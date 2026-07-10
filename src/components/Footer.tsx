import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section section-container">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Nirjhala Mohapatra</h3>
          <p>Full Stack Developer | AI Engineer | Android Developer</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/mohapatranirjhala-stack">GitHub</a>
          <a href="https://linkedin.com/in/nirjhala-mohapatra">LinkedIn</a>
          <a href="mailto:mohapatranirjhala@gmail.com">Email</a>
        </div>
        <div className="footer-social-icons">
          <a href="https://github.com/mohapatranirjhala-stack"><svg className="github-icon"></svg></a>
          <a href="https://linkedin.com/in/nirjhala-mohapatra"><svg className="linkedin-icon"></svg></a>
        </div>
        <div className="footer-bottom">
          <p>Designed and Developed by Nirjhala Mohapatra © 2026</p>
          <a href="#" className="back-to-top"><svg className="back-to-top-icon"></svg></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;