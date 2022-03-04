import "./Specialties.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import NFTs from "../images/NFT.png";
import WebDev from "../images/web.png";
import Marketing from "../images/market.png";

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
            // autoPlay={true}
            infiniteLoop={true}
            // interval={3000}
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
              <img src={Marketing} alt="Marketing" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Specialties;
