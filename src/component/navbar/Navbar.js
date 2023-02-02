import React, { useState } from "react";

export default function Navbar() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  return (
    <>
      <nav className="home-nav">
        <div className={`nav__item--mobile ${isShowMenu ? "show" : ""}`}>
          <div
            className="nav__cancel"
            onClick={() => setIsShowMenu(!isShowMenu)}
          >
            <CloseIcon
              style={{
                color: "white",
                fontSize: "5rem",
              }}
            />
          </div>

          <ul onClick={() => setIsShowMenu(!isShowMenu)}>
            <li className="nav__item nav__item--active">
              <a href="#">Home</a>
            </li>
            <li className="nav__item">
              <a href="#howItWorks">How it Works</a>
            </li>
            <li className="nav__item">
              <a href="#ourWork">Our Work</a>
            </li>
            <li className="nav__item">
              <a href="#aboutUs">About us</a>
            </li>
          </ul>
        </div>

        <div className="main-container">
          <div
            className="menu-button"
            onClick={() => setIsShowMenu(!isShowMenu)}
          >
            <svg
              width="45"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7H21"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M3 12H15"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M3 17H7"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>

          <ul className="nav__items">
            <li className="nav__item">
              <a href="#">Home</a>
            </li>
            <li className="nav__item">
              <a href="#howItWorks">How it works</a>
            </li>
            <li className="nav__item">
              <a href="#ourWork">Our Work</a>
            </li>
            <li className="nav__item">
              <a href="#aboutUs">About us</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
