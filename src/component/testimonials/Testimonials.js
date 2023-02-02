import React from "react";
import Amelia from "./Amelia.png";
import Jacob from "./Jacob.png";
import "./Testimonials.scss";

export default function Testimonials() {
  return (
    <>
      <div className="testimonials">
        <h3>What Our Client Said about us</h3>
        <div className="persons">
          <div className="person">
            <div className="profile">
              <img src={Amelia} width={50} height={50} />
              <p>
                <strong>Amelia Joseph</strong>
                <br />
                Chief Manager
              </p>
            </div>
            <p>
              Use this section to describe your company and the products you
              offer. You could share your company’s story and details about why
              you are in business.{" "}
            </p>
          </div>
          <div className="person">
            <div className="profile">
              <img src={Jacob} width={50} height={50} />
              <p>
                <strong>Jacob Joshua</strong>
                <br />
                Chief Manager
              </p>
            </div>
            <p>
              Use this section to describe your company and the products you
              offer. You could share your company’s story and details about why
              you are in business.{" "}
            </p>
          </div>
          <div className="person">
            <div className="profile">
              <img src={Amelia} width={50} height={50} />
              <p>
                <strong>Amelia Joseph</strong>
                <br />
                Chief Manager
              </p>
            </div>
            <p>
              Use this section to describe your company and the products you
              offer. You could share your company’s story and details about why
              you are in business.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
