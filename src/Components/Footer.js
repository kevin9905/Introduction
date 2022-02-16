import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Email: kevinphamcao@gmail.com</p>
            </div>
            <div className="d-flex">
              <p>Phone Number: (343)-999-3465</p>
            </div>
            <div className="d-flex">
              <p>Address: Kanata, Ontario, Canada</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About me</a>
                <br />
                <a className="footer-nav">Services</a>
                <br />
              </div>
              <div className="col">
                <a className="footer-nav">Experience</a>
                <br />
                <a className="footer-nav">Portfolio</a>
                <br />
                <a className="footer-nav">Contacts</a>
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.youtube.com/watch?v=7CqJlxBYj-M"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://www.youtube.com/watch?v=7CqJlxBYj-M"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <LinkedinShareButton
                url={"https://www.youtube.com/watch?v=7CqJlxBYj-M"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
              <EmailShareButton
                url={"https://www.youtube.com/watch?v=7CqJlxBYj-M"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <EmailIcon className="mx-3" size={36} />
              </EmailShareButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
