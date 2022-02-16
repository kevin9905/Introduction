import React from "react";
import author from "../Capture.PNG";
const AboutMe = () => {
  return (
    <div id="about_me" className="container py-5">
      <div class="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author.." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About me</h1>
          <p>
            I graduated from Algonquin College in Computer Engineering
            Technology with a GPA of 3.9 with a Dean's honour list, and dream to
            become a Web developer. Beside that, I used to play Piano at home,
            it makes me feel less frustrated.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
