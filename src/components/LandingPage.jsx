import VBH from "../images/VBHLanding1.jpeg";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div id="landing-container">
      <div id="copy">
        <p>
          We{" "}
          <strong>
            <u>design</u>
          </strong>
          ,{" "}
          <strong>
            <u>develop</u>
          </strong>
          , and{" "}
          <strong>
            <u>deploy</u>
          </strong>{" "}
          intuitive web solutions that improve your business.
        </p>
      </div>
      <div id="logo-landing">
        <img src={VBH} alt="logo" id="logo"></img>
      </div>
    </div>
  );
};

export default LandingPage;
