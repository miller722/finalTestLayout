import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProcessStep from "../components/ProcessStep";

export default function OurProcess() {
  return (
    <div className="section-our-process wrapper--grey wrapper--gap">
      <Container fluid>
        <Row>
          <Col xxl={{ span: 2 }}>
            <div className="d-flex align-items-center heading-primary pt-4">
              <img src="images/circle-marker.png" alt="image" />
              <p>OUR PROCESS</p>
            </div>
          </Col>

          <Col xxl={{ span: 8, offset: 2 }}>
            <ProcessStep
              stepNum="01"
              stepTitle="strategic PLANNING"
              stepHeading="Feeling overwhelmed, unsure where to begin, or indecisive about the next steps for your business? "
              stepDescription="Deep breaths. Feeling overwhelmed, unsure where to begin, or indecisive about the next steps for your business? Deep breaths. We’ve got you covered. Our process kicks off with research and concept development. We want to take a learning deep-dive when it comes to your company's history, goals, and dreams for the future. Then, our team will design a branding concept to take your business to the next level–and then craft a mastermind plan to roll it out. "
            />
            <ProcessStep
              stepNum="02"
              stepTitle="creative EXECUTION"
              stepHeading="We believe in the marketing trifecta: visuals, copy, and technology. "
              stepDescription="Deep breaths. Feeling overwhelmed, unsure where to begin, or indecisive about the next steps for your business? Deep breaths. We’ve got you covered. Our process kicks off with research and concept development. We want to take a learning deep-dive when it comes to your company's history, goals, and dreams for the future. Then, our team will design a branding concept to take your business to the next level–and then craft a mastermind plan to roll it out. "
            />
            <ProcessStep
              stepNum="03"
              stepTitle="strategic PLANNING"
              stepHeading="In this day and age, having a strong online presence is like getting a good night’s sleep–it’s just that important. "
              stepDescription="And whenever a business grows, its website and social media need to be updated. We know more than anyone that managing your online spaces can be onerous and overwhelming. Our team is here to support you throughout any and every stage of your business development. While other companies can be fragmented and slow-moving in their outsourcing offerings, you can trust us to do better. Our support is guaranteed to be personable, consistent, and efficient. "
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
