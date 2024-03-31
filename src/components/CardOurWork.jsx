import React from "react";
import { Card } from "react-bootstrap";
import ButtonPrimary from "./ButtonPrimary";

export default function CardOurWork({
  cardTitle,
  cardDescription,
  cardImg,
  cardHiddenImg,
}) {
  return (
    <div className="card__container">
      <Card>
        <Card.Body className="text-center wrapper--grey">
          <Card.Title className="card__title">{cardTitle}</Card.Title>
          <Card.Text className="card__description">{cardDescription}</Card.Text>
          <div className="card__wrapper">
            <Card.Img className="card__img" src={cardImg} />
            <Card.Img className="card__img--hidden" src={cardHiddenImg} />
          </div>
          <div className="card__btn">
            <ButtonPrimary description="TELL ME MORE" />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
