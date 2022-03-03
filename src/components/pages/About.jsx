import Tobias from "../../images/headshotbw.jpeg";
import Iouri from "../../images/iouribw.png";
import Connor from "../../images/connor.jpeg";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <h1 className="title">About Us</h1>
      <div id="about-team-photos">
        <a href="https://www.linkedin.com/in/iourivolkov/">
          <div className="container">
            <img src={Iouri} alt="Iouri" id="iouri"></img>
            <div className="overlay"></div>
            <p className="text">
              Iuori Volkov <br></br>Co-Founder | CEO
              <br></br>Full-Stack Dev
            </p>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/tobiasbotell/">
          <div className="container">
            <img src={Tobias} alt="Tobias" id="tobias"></img>
            <p className="text">
              Tobias Botell <br></br>Co-Founder | CMO
              <br></br>Full-Stack Dev
            </p>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/connor-hughes-90970222b/">
          <div className="container">
            <img src={Connor} alt="Connor" id="connor"></img>
            <p className="text">
              Connor Hughes <br></br>Co-Founder | CTO
              <br></br>Full-Stack Dev
            </p>
          </div>
        </a>
      </div>

      <div className="about-body-container">
        <div className="about-body">
          <p>
            VB&H Consulting Co. was founded by three fellow friends and
            Full-Stack Developers. We offer consulting services for all of your
            wildest tech ideas. We can offer a full end-to-end consulting
            experience, where we design, develop, and deploy your website or web
            application. Reach out today to{" "}
            <Link to="/contact">book a consulting appointment</Link> with us! 😄
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
