import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ButtonPrimary from "../components/ButtonPrimary";

export default function Welcome() {
  return (
    <>
      <div className="wrapper--white wrapper--gap">
        <Container fluid className="section-welcome">
          <Row className="section-welcome__row">
            <Col
              className="d-flex flex-column justify-content-between"
              xxl={{ span: 3 }}
            >
              <h5 className="font-size--default">
                a full-service design & <br /> marketing agency.
              </h5>
              <ButtonPrimary description="TALK TO AN EXPERT" />
            </Col>
            <Col xxl={{ span: 8, offset: 1 }}>
              <div className="d-flex justify-content-between">
                <p className="section-welcome__capslock">CHECK</p>

                <h5 className="section-welcome__label font-size--default">
                  Grow your business without adding more to your plate.
                  <br />
                  <span className="italic">You deserve support.</span>
                </h5>
              </div>
              <p className="section-welcome__capslock text-right">MARKETING</p>
              <p className="section-welcome__capslock">OFF YOUR LIST.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-welcome__design wrapper--grey wrapper--gap section-welcome__design--pb">
        <div>
          <img className="design-bgc" src="design-bgc.png" alt="#" />
        </div>
        <div className="d-flex justify-content-between align-items-start mt-3 pb-5">
          <p className="heading-primary d-flex align-items-center">
            <img src="star.png" alt="" /> FEATURED PROJECT
          </p>
          <p className="heading-primary">KATE ECKSTEIN DESIGN</p>
          <p className="heading-primary">
            STRATEGY, CONTENT, DESIGN, <br /> DEVELOPMENT
          </p>
        </div>
      </div>
    </>
  );
}
