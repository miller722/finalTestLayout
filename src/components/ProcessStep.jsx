import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";

export default function ProcessStep({
  stepNum,
  stepTitle,
  stepHeading,
  stepDescription,
}) {
  return (
    <div className="process-step">
      <h5 className="process-step__num">{stepNum}</h5>
      {/* <div className="d-flex align-items-center justify-content-between">
        <h5 className="font-size--default">{stepTitle}</h5>
        <div className="process-step__toggle">
          <div className="inner-circle"></div>
          <div className="inner-circle"></div>
          <div className="inner-circle"></div>
        </div>
      </div> */}
      <h5 className="font-size--default">{stepTitle}</h5>
      <div className="wrapper__toggle">
        <div className="process-step__toggle">
          <div className="inner-circle"></div>
          <div className="inner-circle"></div>
          <div className="inner-circle"></div>
        </div>
      </div>
      <h3 className="process-step__heading">{stepHeading}</h3>
      <div className="process-step__description">
        <p className="font-size--default">{stepDescription}</p>
        <ButtonPrimary description="TRY OUT OUR TEAM" />
      </div>
    </div>
  );
}
