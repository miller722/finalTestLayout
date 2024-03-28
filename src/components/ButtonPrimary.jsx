import React from "react";

export default function ButtonPrimary({ description }) {
  return (
    <div>
      <button className="btn" type="button">
        <span>{description}</span>
        <div className="circle-btn"></div>
      </button>
    </div>
  );
}
