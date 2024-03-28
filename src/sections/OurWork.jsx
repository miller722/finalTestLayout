import React from "react";
import Card from "../components/CardOurWork";

export default function OurWork() {
  return (
    <>
      <div className="section-ourwork wrapper--white wrapper--gap">
        <div className="d-flex align-items-center flex-column">
          <div className="circle-marker">
            <img src="circle-marker.png" alt="#" />
          </div>
          <p className="heading-primary mt-3">HOW WE WORK</p>
          <h1 className="section-ourwork__title">
            YOUR BUSINESS NEEDS <span className="italic-400">a strategic </span>
            PLAN, <span className="circled-ourwork"> creative </span>
            EXECUTION, <span className="italic-400">& steady</span> SUPPORT TO
            GROW.
          </h1>
        </div>
      </div>
      <div>
        <img className="section-ourwork--bg" src="ourwork-bg.png" alt="" />
      </div>
      <div className="section-ourwork__cards wrapper--grey">
        <Card
          cardTitle="Our 1-day design services"
          cardDescription="I NEED A VISUAL REVAMP ASAP"
          cardImg="card-img-1.png"
        />
        <Card
          cardTitle="Our retainer services"
          cardDescription="I NEED AN EXTERNAL MARKETING TEAM"
          cardImg="card-img-2.png"
        />
        <Card
          cardTitle="Let’s work together"
          cardDescription="I NEED TO INCREASE ONLINE PRESENCE"
          cardImg="card-img-3.png"
        />
      </div>
    </>
  );
}