import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/nirjhala-mohapatra"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — nirjhala-mohapatra
              </a>
            </p>
            <p>
              <a
                href="https://github.com/mohapatranirjhala-stack"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                GitHub — mohapatranirjhala-stack
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Education</h4>
            <p>
              Bachelor of Technology in Computer Science Engineering
              <br />
              VIT Bhopal University — 2023 – 2027
            </p>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Nirjhala Mohapatra</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;