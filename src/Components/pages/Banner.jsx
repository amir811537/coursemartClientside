import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/digitalmarkatingcoures.jpg"
import img2 from "../../assets/mechanic learning.jpg"
import img3 from "../../assets/web dev card.jpg"
import img4 from "../../assets/indiaflag.jpg"
const Banner = () => {
  const imageStyle = {
    width: "100%", 
    height: "auto", 
    maxHeight: "500px",
  }

  return (
    <div className="relative">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
      >
        <div className="relative">
          <img
            src={img1}
            alt="Image 1"
            style={imageStyle}
          />
          <p className="absolute inset-0 flex items-center justify-center text-white text-2xl bg-black bg-opacity-0">
            <span className="text-xl md:text-3xl lg:text-5xl font-bold">
            </span>
          </p>
        </div>
        <div className="relative">
          <img
            src={img2}
            alt="Image 1"
            style={imageStyle}
          />
          <p className="absolute inset-0 flex items-center justify-center text-white text-2xl bg-black bg-opacity-0">
            <span className="text-xl md:text-3xl lg:text-5xl font-bold">
            </span>
          </p>
        </div>
        <div className="relative">
          <img
            src={img3}
            alt="Image 1"
            style={imageStyle}
          />
          <p className="absolute inset-0 flex items-center justify-center text-white text-2xl bg-black bg-opacity-0">
            <span className="text-xl md:text-3xl lg:text-5xl font-bold">
            </span>
          </p>
        </div>
        <div className="relative">
          <img
            src={img4}
            alt="Image 1"
            style={imageStyle}
          />
          <p className="absolute inset-0 flex items-center justify-center text-white text-2xl bg-black bg-opacity-0">
            <span className="text-xl md:text-3xl lg:text-5xl font-bold">
            </span>
          </p>
        </div>
        
      </Carousel>
    </div>
  );
};

export default Banner;
