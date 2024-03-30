import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ButtonPrimary from "../components/ButtonPrimary";

export default function BrandReview() {
  return (
    <div className="section-brand-review wrapper--gap">
      <Container fluid>
        <Row>
          <Col className="d-flex flex-column justify-content-between">
            <div>
              <div className="heading-primary d-flex align-items-center">
                <img src="images/star-img.png" alt="image" />
                <p>GET IN TOUCH</p>
              </div>
              <h1 className="brand-review__title">
                SCHEDULE
                <span className="circled-brand-review italic-400">
                  {" "}
                  a free{" "}
                </span>
                <br />
                BRAND AUDIT
              </h1>
            </div>
            <div>
              <p className="font-size--default brand-review__description">
                Get expert eyes on your brand + website. One of our creative
                strategies will take a look at your brand and give you your best
                next steps to improve your online presence to increase
                conversions. From there, we will offer you the next steps on how
                to engage our team, or you can take our free advice and grow
                your business yourself.
              </p>
              <div className="input-form">
                <p className="font-size--default input-email">Email</p>
                <ButtonPrimary description="SUBMIT" />
              </div>
            </div>
          </Col>
          <Col className="d-flex justify-content-end">
            <img
              className="brand-review-img"
              src="images/brand-review-img.png"
              alt="image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
