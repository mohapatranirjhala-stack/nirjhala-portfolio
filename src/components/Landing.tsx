import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              NIRJHALA
              <br />
              <span>MOHAPATRA</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Full Stack Developer | AI Engineer | Android Developer</h3>
            <p>
              Final-year Computer Science Engineering student passionate about
              Full Stack Development, Artificial Intelligence, Cloud-connected
              Applications, scalable backend systems, and modern software engineering.
            </p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;