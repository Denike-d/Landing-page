import React from "react";
import "./HeroSection.scss";
import Profiles from "./Profiles.png";

export default function HeroSection() {
  return (
    <>
      <div className="hero-section">
        <div className="right">
          <p>
            <strong>
              We Take <br />
              Care of <br />
              Your Brand
            </strong>
            <br />
            <p>
              Use this section to describe your company and the <br />
              products you offer. You could share your company’s
              <br /> story and details about why you are in business.{" "}
            </p>
          </p>
        </div>
        <div className="left">
          <img src={Profiles} width={500} />
        </div>
      </div>
    </>
  );
}
