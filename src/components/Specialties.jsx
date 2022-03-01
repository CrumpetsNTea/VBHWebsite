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

      <div className="slideshow">
        <Carousel
          showStatus={false}
          useKeyboardArrows={true}
          stopOnHover={false}
          // autoPlay={true}
          infiniteLoop={true}
          // interval={3000}
          centerMode={true}
          centerSlidePercentage={40}
          showThumbs={false}
          width={"90%"}>
          <div>
            <img src={NFTs} alt="NFTs" />
            <h1 className="text">NFTs</h1>
          </div>
          <div>
            <img src={WebDev} alt="Web Development" />
            <h1 className="web">
              Web<br></br>Development
            </h1>
          </div>
          <div>
            <img src={Marketing} alt="Marketing" />
            <h1 className="text">Marketing</h1>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Specialties;
