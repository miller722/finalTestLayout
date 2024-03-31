import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import { useState } from "react";

export default function ProcessStep({
  stepNum,
  stepTitle,
  stepHeading,
  stepDescription,
}) {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(true);
  const [isToggled, setIsToggled] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
    setIsToggled(!isToggled);
  };
  return (
    <div className="process-step">
      <h5 className="process-step__num">{stepNum}</h5>
      <h5 className="font-size--default">{stepTitle}</h5>
      <div className="wrapper__toggle" onClick={toggleDescription}>
        <div
          className={`process-step__toggle ${
            isToggled ? "rotate change-background" : ""
          }`}
        >
          <div className="inner-circle"></div>
          <div className="inner-circle"></div>
          <div className="inner-circle"></div>
        </div>
      </div>
      <h3 className="process-step__heading">{stepHeading}</h3>
      {isDescriptionVisible && (
        <div className="process-step__description">
          <p className="font-size--default">{stepDescription}</p>
          <ButtonPrimary description="TRY OUT OUR TEAM" />
        </div>
      )}
    </div>
  );
}
