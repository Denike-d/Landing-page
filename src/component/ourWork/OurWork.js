import React from "react";
import "./OurWork.scss";
import Apple from "./Apple.png";
import Nike from "./Nike.png";
import CocaCola from "./CocaCola.png";

export default function OurWork() {
  return (
    <>
      <div className="our-work">
        <div className="work">
          <div>
            <h3>Our Work</h3>
            <p className="text">
              Use this section to describe your company and the products you
              offer. You could share your company’s story and details about why
              you are in business.{" "}
            </p>
          </div>
        </div>
        <div className="companies">
          <div>
            <img src={Apple} width={300} />
            <div className="item">
              <div>
                <p>
                  <strong>Apple</strong>
                </p>
                <p>
                  Use this section to describe <br /> your with the company{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={CocaCola} width={300} />
            <div className="item">
              <div>
                <p>
                  <strong>CocaCola</strong>
                </p>
                <p>
                  Use this section to describe <br />
                  your work with this company{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={Nike} width={300} />
            <div className="item">
              <div>
                <p>
                  <strong>Nike</strong>
                </p>
                <p>
                  Use this section to describe <br />
                  your work with this company
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
