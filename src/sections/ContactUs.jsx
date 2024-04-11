import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ButtonPrimary from "../components/ButtonPrimary";

export default function ContactUs() {
  return (
    <div className="wrapper--grey wrapper--gap">
      <Container fluid>
        <Row className="section-contact">
          <Col xxl={{ span: 5 }}>
            <div className="heading-primary d-flex align-items-center">
              <img src="images/section-contact-marker.png" alt="image" />
              <p>CONTACT US</p>
            </div>
            <h1 className="contact__title">
              LET’S WORK{" "}
              <span className="circled-contact italic-400"> together </span>
            </h1>
            <ButtonPrimary description="CONTACT US" />
          </Col>
          <Col xxl={{ span: 5, offset: 2 }}>
            <div className="contact__item">
              <p className="heading-primary">PHONE</p>
              <h4 className="contact__description">123 456 7890</h4>
            </div>
            <div className="contact__item">
              <p className="heading-primary">EMAIL</p>
              <h4 className="contact__description">HELLO@PIPI-POOPOO.COM</h4>
            </div>
            <div className="contact__item">
              <p className="heading-primary">OFFICE HOURS</p>
              <h4 className="contact__description">
                MONDAY - FRIDAY: 9AM - 5PM EST
              </h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
