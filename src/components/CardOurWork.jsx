import React from "react";
import { Card, Button } from "react-bootstrap";
import ButtonPrimary from "./ButtonPrimary";

export default function CardOurWork({ cardTitle, cardDescription, cardImg }) {
  return (
    <div className="card__container">
      <Card>
        <Card.Body className="text-center wrapper--grey">
          <Card.Title className="card__title">{cardTitle}</Card.Title>
          <Card.Text className="card__description">{cardDescription}</Card.Text>
          <Card.Img className="card__img" src={cardImg} />
          <div className="card__btn">
            <ButtonPrimary description="TELL ME MORE" />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
