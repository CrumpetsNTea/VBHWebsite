import "./Team.css";
import Tobias from "../images/headshotbw.jpeg";
import Iouri from "../images/iouribw.png";
import Connor from "../images/connor.jpeg";
import ReactRoundedImage from "react-rounded-image";

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
        <ReactRoundedImage
          image={Iouri}
          roundedColor="#321124"
          imageWidth="300"
          imageHeight="300"
          roundedSize="0"
        />
        <ReactRoundedImage
          image={Tobias}
          roundedColor="#321124"
          imageWidth="300"
          imageHeight="300"
          roundedSize="0"
        />
        <ReactRoundedImage
          image={Connor}
          roundedColor="#321124"
          imageWidth="300"
          imageHeight="300"
          roundedSize="0"
        />
      </div>
    </>
  );
};

export default Team;
