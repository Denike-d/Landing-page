import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <hr width={700} style={{ backgroundColor: "blue" }} />
          <div className="text">
            <p>© 2022 Embrace, Inc. - All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}
