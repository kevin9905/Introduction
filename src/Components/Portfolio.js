import React from "react";
import Comic from "../images/Portfolio/XKCD_Comic.PNG";
import Color_Picker from "../images/Portfolio/color-picker.PNG";
import Book from "../images/Portfolio/Book_Rep_CRM.PNG";
import student_information from "../images/Portfolio/student_information.PNG";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
const Portfolio = () => {
  //first box
  const openPopupbox = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={Comic}
          alt="Netflix Clone Project..."
        />
        <p></p>
        <b>Github: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/kevin9905/Technical_case_study")
          }
        >
          https://github.com/kevin9905/Technical_case_study
        </a>
        <br />
        <b>Demo link: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://technical-xkcd-comic.herokuapp.com/")
          }
        >
          https://technical-xkcd-comic.herokuapp.com/
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };
  const popupboxConfigureNetflix = {
    titleBar: {
      enable: true,
      text: "XKCD Comic",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  //Second box
  const openPopupbox2 = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={Color_Picker}
          alt="Netflix Clone Project..."
        />
        <p></p>
        <b>Github: </b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/kevin9905/color_changing")
          }
        >
          https://github.com/kevin9905/color_changing
        </a>
        <br />
        <b>Demo link: </b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://my-color-picker.herokuapp.com/")}
        >
          https://my-color-picker.herokuapp.com/
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };
  const popupboxConfigureNetflix2 = {
    titleBar: {
      enable: true,
      text: "Color Picker",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  const openPopupbox3 = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={Book}
          alt="Netflix Clone Project..."
        />
        <p></p>
        <b>Github: </b>
        {""}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/kevin9905/BookREP_CRM")
          }
        >
          https://github.com/kevin9905/BookREP_CRM
        </a>
        <br />
        <b>Demo link: </b>
        {""}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://book-rep-crm.herokuapp.com/BookRepCRM.php")
          }
        >
          https://book-rep-crm.herokuapp.com/BookRepCRM.php
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };
  const popupboxConfigureNetflix3 = {
    titleBar: {
      enable: true,
      text: "Book Rep CRM",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  const openPopupbox4 = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={student_information}
          alt="Netflix Clone Project..."
        />
        <p></p>
        <b>Github: </b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/kevin9905/Student_Information")
          }
        >
          https://github.com/kevin9905/Student_Information
        </a>
        <br />
        <b>Demo link: </b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://student-information-app.herokuapp.com/")
          }
        >
          https://student-information-app.herokuapp.com/
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };
  const popupboxConfigureNetflix4 = {
    titleBar: {
      enable: true,
      text: "Student Information",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <div className="portfolio-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupbox}>
            <img
              className="portfolio-image"
              src={Comic}
              alt="Netflix Clone Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/**/}
          <div className="portfolio-image-box" onClick={openPopupbox2}>
            <img
              className="portfolio-image"
              src={Color_Picker}
              alt="Netflix Clone Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/**/}
          <div className="portfolio-image-box" onClick={openPopupbox3}>
            <img
              className="portfolio-image"
              src={Book}
              alt="Netflix Clone Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/**/}
          <div className="portfolio-image-box" onClick={openPopupbox4}>
            <img
              className="portfolio-image"
              src={student_information}
              alt="Netflix Clone Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigureNetflix} />
      <PopupboxContainer {...popupboxConfigureNetflix2} />
      <PopupboxContainer {...popupboxConfigureNetflix3} />
      <PopupboxContainer {...popupboxConfigureNetflix4} />
    </div>
  );
};

export default Portfolio;
