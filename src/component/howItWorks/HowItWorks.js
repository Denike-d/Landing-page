import React from "react";
import "./HowItWorks.scss";
import Document from "./Document.png";
import Energy from "./Energy.png";
import Dollar from "./Dollar.png";
import Arrow from "./Arrow.png";
import Building from "./Building.png";

export default function HowItWorks() {
  return (
    <>
      <div className="how-it-works">
        <div className="left">
          <p>
            <strong>How It Works</strong>
          </p>
          <p>
            Use this section to describe your company and the products you
            offer. You could share your company’s story and details about why
            you are in business.{" "}
          </p>
          <div>
            <img src={Building} width={400} />
          </div>
        </div>
        <div className="right">
          <div className="steps">
            <img src={Document} width={45} />
            <div>
              <h4>Ideation</h4>
              <p className="text">
                Use this section to describe your company and the products you
                offer. You could share your company’s
              </p>
            </div>
          </div>

          <div className="steps">
            <img src={Energy} width={45} />
            <div>
              <h4>Speed</h4>
              <p className="text">
                Use this section to describe your company and the products you
                offer. You could share your company’s
              </p>
            </div>
          </div>

          <div className="steps">
            <img src={Dollar} width={45} />
            <div>
              <h4>Budget</h4>
              <p className="text">
                Use this section to describe your company and the products you
                offer. You could share your company’s
              </p>
            </div>
          </div>

          <div className="steps">
            <img src={Arrow} width={45} />
            <div>
              <h4>Performance</h4>
              <p className="text">
                Use this section to describe your company and the products you
                offer. You could share your company’s
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
