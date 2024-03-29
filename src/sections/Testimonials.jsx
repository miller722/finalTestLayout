import React from "react";
import SliderTestimonials from "../components/SliderTestimonials";

export default function Testimonials() {
  return (
    <div className="section-testimonials wrapper--grey wrapper--gap">
      <div className="heading-primary d-flex align-items-center">
        <img src="images/double-quote.png" alt="image" />
        <p>TESTIMONIALS</p>
      </div>
      <div>
        <SliderTestimonials />
      </div>
    </div>
  );
}
