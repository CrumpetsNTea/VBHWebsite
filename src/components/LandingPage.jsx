import VBH from "../images/VBHLanding.png";
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
          ,<br></br>{" "}
          <strong>
            <u>develop</u>
          </strong>
          , and <br></br>
          <strong>
            <u>deploy</u>
          </strong>{" "}
          intuitive <br></br> web solutions <br></br> that improve <br></br>
          your business.
        </p>
      </div>
      <div id="logo-landing">
        <img src={VBH} alt="logo" id="logo"></img>
      </div>
    </div>
  );
};

export default LandingPage;
