import "./Specialties.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import NFTs from "../images/NFT.png";
import WebDev from "../images/web.png";
import Smart from "../images/Smart.png";
import UI from "../images/UI.png";

const Specialties = () => {
  return (
    <div className="specialty-container">
      <div>
        <p className="specialize">
          We{" "}
          <strong>
            <u>specialize</u>
          </strong>{" "}
          in:
        </p>
      </div>
      <div className="sw-container">
        <div className="slideshow">
          <Carousel
            className="carousel"
            showStatus={false}
            useKeyboardArrows={true}
            stopOnHover={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={5000}
            centerMode={true}
            centerSlidePercentage={40}
            showThumbs={false}
            width={"100%"}>
            <div>
              <img src={NFTs} alt="NFTs" />
            </div>
            <div>
              <img src={WebDev} alt="Web Development" />
            </div>
            <div>
              <img src={Smart} alt="Smart Contracts" />
            </div>
            <div>
              <img src={UI} alt="UI" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Specialties;
