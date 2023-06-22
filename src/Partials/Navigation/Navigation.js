import React from "react";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item ">
          <a href="#" className="side-nav__link">
            <svg>
              <use xlinkHref="images/sprite.svg#icon-home"></use>
            </svg>
            <span>Hotel</span>
          </a>
        </li>
        <li className="side-nav__item ">
          <a href="#" className="side-nav__link">
            {" "}
            <svg>
              <use xlinkHref="images/sprite.svg#icon-aircraft-take-off"></use>
            </svg>
            <span>Flight</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            {" "}
            <svg>
              <use xlinkHref="images/sprite.svg#icon-key"></use>
            </svg>
            <span>Car rental</span>
          </a>
        </li>
        <li className="side-nav__item side-nav__item--active">
          <a href="#" className="side-nav__link">
            <svg>
              <use xlinkHref="images/sprite.svg#icon-map"></use>
            </svg>
            <span>Tours</span>
          </a>
        </li>
      </ul>
      <div className="legal">
        <p>&copy; 2023 by trello, All rights reserved</p>
      </div>
    </nav>
  );
};

export default Navigation;
