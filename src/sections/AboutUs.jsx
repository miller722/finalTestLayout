import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ButtonPrimary from "../components/ButtonPrimary";

export default function AboutUs() {
  return (
    <>
      <div className="section-about wrapper--grey wrapper--gap">
        <h1 className="section-about-heading">YOU HAVE a lot GOING ON.</h1>
        <Container fluid>
          <Row>
            <Col className="reset-padding" xxl={{ span: 1 }}>
              <div className="section-about__label d-flex align-items-center">
                <img src="square-marker.png" alt="#" />
                <p>About us</p>
              </div>
            </Col>
            <Col xxl={{ span: 8, offset: 3 }}>
              <div className="section-about__title">
                <h2 className="d-flex justify-content-start">
                  Running a business means
                </h2>
                <h2 className="d-flex justify-content-end">
                  wearing a lot of hats.
                </h2>
              </div>
              <Row className="d-flex section-about__description">
                <Col className="section-about__description--mr">
                  <p className="font-size--default section-about__description-p">
                    Do you have a million ideas for growth, but don’t have the
                    bandwidth to turn them into a reality?
                  </p>
                  <ButtonPrimary description="CONTACT US" />
                </Col>
                <Col>
                  <p className="font-size--default">
                    That’s where we come in. We want to create a strategic
                    communication plan and save you time by executing it for
                    you. You need to do what you do best: focus on the parts of
                    your entrepreneurial journey that inspire you. Leave the
                    rest to us.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
