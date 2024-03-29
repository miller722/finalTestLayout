import React from "react";
import ButtonPrimary from "./ButtonPrimary";

export default function Header() {
  return (
    <>
      <div className="header wrapper--white wrapper--gap">
        <h1 className="logo">PIPI-POOPOO</h1>
        <ul className="navbar">
          <li className="navbar-link">
            <a href="#">About us</a>
          </li>
          <li className="navbar-link">
            <a href="#">Services</a>
          </li>
          <li className="navbar-link">
            <a href="#">Our work</a>
          </li>
          <li className="navbar-link">
            <a href="#">Blog</a>
          </li>
        </ul>
        <div className="social-media">
          <img
            className="instagram__icon"
            src="images/icon-instagram.png"
            alt="instagram"
          />
          <ButtonPrimary description="LET'S CHAT" />
        </div>
      </div>
    </>
  );
}
