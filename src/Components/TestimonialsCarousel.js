import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pic2 from "../pic2.jpeg";
import nat from "../nature-logo.png";
import pic3 from "../pic3.png";
import pic4 from "../pic4.PNG";

const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <img src={pic2} alt="John Doe1" />
        <div className="myCarousel">
          <h3>John Doe1</h3>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before the final copy is available
          </p>
        </div>
      </>
      <>
        <img src={pic3} alt="John Doe2" />
        <div className="myCarousel">
          <h3>John Doe2</h3>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before the final copy is available
          </p>
        </div>
      </>
      <>
        <img src={pic4} alt="John Doe3" />
        <div className="myCarousel">
          <h3>John Doe3</h3>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before the final copy is available
          </p>
        </div>
      </>
      <>
        <img src={nat} alt="John Doe4" />
        <div className="myCarousel">
          <h3>John Doe4</h3>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before the final copy is available
          </p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
