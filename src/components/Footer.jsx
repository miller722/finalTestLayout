import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function () {
  return (
    <div className="footer wrapper--grey wrapper--gap">
      <Container fluid className="reset-margin">
        <Row className="d-flex align-items-center">
          <Col xxl={{ span: 3 }}>
            <h5 className="copyright font-size--default">PIPI-POOPOO® ©2022</h5>
          </Col>
          <Col xxl={{ span: 5, offset: 4 }}>
            <div className="social-media">
              <a className="font-size--default" href="">
                LinkedIn
              </a>
              <a className="font-size--default middle-social-link" href="">
                Instagram
              </a>
              <div className="link ">
                <span className="font-size--default">Back to top</span>
                <div className="circle-btn"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
