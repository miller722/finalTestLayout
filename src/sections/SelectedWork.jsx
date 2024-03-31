import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ButtonPrimary from "../components/ButtonPrimary";

export default function SelectedWork() {
  return (
    <div className="section-selected-work wrapper--gap">
      <Container fluid>
        <Row className="selected-work-row">
          <Col xxl={{ span: 5 }}>
            <div className="selected-work__item">
              <div className="image-wrapper">
                <img src="images/selected-work__img-1.png" alt="image" />
              </div>
              <p className="pt-4">STRATEGY</p>
              <h5 className="font-size--default pt-2">AER Media</h5>
            </div>
          </Col>
          <Col xxl={{ span: 6, offset: 1 }}>
            <div className="d-flex align-items-center heading-primary">
              <img src="images/star.png" alt="image" />
              <p>SELECTED WOKR</p>
            </div>
            <h1 className="selected-work__title">
              Sit nam egestas nullam nulla. Sed nisi arcu et blandit.
            </h1>
            <div className="selected-work__item d-flex justify-content-center">
              <div>
                <div className="image-wrapper">
                  <img src="images/selected-work__img-2.png" alt="image" />
                </div>
                <p className="pt-4">DESIGN</p>
                <h5 className="font-size--default pt-2">Valerie Wheeler</h5>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="selected-work-row">
          <Col xxl={{ span: 8 }}>
            <div className="selected-work__item">
              <div className="image-wrapper">
                <img src="images/selected-work__img-3.png" alt="image" />
              </div>
              <p className="pt-4">STRATEGY</p>
              <h5 className="font-size--default pt-2">Luneer MGMT</h5>
            </div>
          </Col>
          <Col className="d-flex align-items-end" xxl={{ span: 3, offset: 1 }}>
            <div className="selected-work__item">
              <div className="image-wrapper">
                <img src="images/selected-work__img-4.png" alt="image" />
              </div>
              <p className="pt-4">CONTENT</p>
              <h5 className="font-size--default pt-2">Social Blue Print</h5>
            </div>
          </Col>
        </Row>
        <Row className="selected-work-row">
          <Col className="d-flex">
            <div className="d-flex flex-column justify-content-between">
              <div className="selected-work__item">
                <div className="image-wrapper">
                  <img src="images/selected-work__img-5.png" alt="image" />
                </div>
                <p className="pt-4">STRATEGY</p>
                <h5 className="font-size--default pt-2">Luneer MGMT</h5>
              </div>

              <div className="more-work-wrapper">
                <p className="more-work__description">
                  Facilisis gravida pharetra, risus vel in. Mauris in lacus
                  condimentum feugiat.
                </p>
                <ButtonPrimary description=" VIEW MORE WORK" />
              </div>
            </div>
          </Col>
          <Col className="d-flex align-items-end">
            <div className="selected-work__item">
              <div className="image-wrapper">
                <img src="images/selected-work__img-6.png" alt="image" />
              </div>
              <p className="pt-4">STRATEGY</p>
              <h5 className="font-size--default pt-2">Luneer MGMT</h5>
            </div>
          </Col>
          <Col>
            <div className="selected-work__item">
              <div className="image-wrapper">
                <img src="images/selected-work__img-7.png" alt="image" />
              </div>
              <p className="pt-4">DESIGN</p>
              <h5 className="font-size--default pt-2">Luneer MGMT</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
