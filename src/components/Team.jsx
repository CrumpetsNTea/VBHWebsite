import "./Team.css";
import Tobias from "../images/headshotbw.jpeg";
import Iouri from "../images/iouribw.png";
import Connor from "../images/connor.jpeg";

const Team = () => {
  return (
    <>
      <div id="text">
        <p>
          Our{" "}
          <strong>
            <u>team</u>
          </strong>
          :{" "}
        </p>
      </div>
      <div id="team-photos">
        <div className="container">
          <img src={Iouri} alt="Iouri" id="iouri"></img>
          <div className="overlay"></div>
          <p className="text">
            Iuori Volkov <br></br>Co-Founder | CEO
            <br></br>Full-Stack Dev
          </p>
        </div>
        <div className="container">
          <img src={Tobias} alt="Tobias" id="tobias"></img>
          <p className="text">
            Tobias Botell <br></br>Co-Founder | CMO
            <br></br>Full-Stack Dev
          </p>
        </div>

        <div className="container">
          <img src={Connor} alt="Connor" id="connor"></img>
          <p className="text">
            Connor Hughes <br></br>Co-Founder | CTO
            <br></br>Full-Stack Dev
          </p>
        </div>
      </div>
    </>
  );
};

export default Team;
