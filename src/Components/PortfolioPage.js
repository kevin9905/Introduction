import React, { useState } from "react";
import PortfolioData from "../Data/PortfolioData";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const PortfolioPage = () => {
  const [modalShow, setModalShow] = useState(false);
  const [tempData, setTempData] = useState({});
  function createModal(data) {
    return (
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        arial-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="modal-header">
          <Modal.Title id="contained-modal-title-vcenter">
            {data.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{data.summary}</p>
          <Image src={data.image} style={{ width: "500px" }} />
        </Modal.Body>
        <div id="portfolio_modal_link">
          <p>
            <b> Github link: </b>
            <a
              className="hyper-link"
              onClick={() => window.open(`${data.link}`)}
            >
              {data.link}
            </a>
          </p>
          <p>
            <b> Demo link: </b>
            <a
              className="hyper-link"
              onClick={() => window.open(`${data.demo_link}`)}
            >
              {data.demo_link}
            </a>
          </p>
          <p>
            <b>Technology Used: </b>
            {data.technology}
          </p>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  const mapped = PortfolioData.map((e, idx) => {
    return (
      <Card key={idx} id="portfolio_card_container">
        <Image
          className="portfolio_image"
          onClick={() => {
            setTempData({
              image: e.image,
              link: e.link,
              demo_link: e.demo_link,
              title: e.title,
              summary: e.summary,
              technology: e.technology,
            });
            setModalShow(true);
          }}
          src={e.image}
        />
        <div className="portfolio-icon">
          <b>Click here</b>
        </div>
        {createModal(tempData)}
      </Card>
    );
  });
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <Container fluid="lg" style={{ padding: "2rem 0" }}>
        <Row>{mapped}</Row>
      </Container>
    </div>
  );
};

export default PortfolioPage;
