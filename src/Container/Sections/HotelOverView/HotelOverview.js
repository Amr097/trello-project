import React from "react";
import "./HotelOverview.scss";
const HotelOverview = () => {
  return (
    <div className="hotel-view">
      <div className="gallery">
        <figure className="gallery__item">
          {" "}
          <img src="images/hotel-1.webp" alt="Hotel Picture" />
        </figure>
        <figure className="gallery__item">
          {" "}
          <img src="images/hotel-2.webp" alt="Hotel Picture" />
        </figure>
        <figure className="gallery__item">
          {" "}
          <img src="images/hotel-3.webp" alt="Hotel Picture" />
        </figure>
      </div>
      <div className="overview">
        <div className="overview__rate">
          <h1>Hotel Las Palmas</h1>
          <div className="overview__stars">
            <svg className="star__icon">
              <use xlinkHref="images/sprite.svg#icon-star"></use>
            </svg>{" "}
            <svg className="star__icon">
              <use xlinkHref="images/sprite.svg#icon-star"></use>
            </svg>{" "}
            <svg className="star__icon">
              <use xlinkHref="images/sprite.svg#icon-star"></use>
            </svg>{" "}
            <svg className="star__icon">
              <use xlinkHref="images/sprite.svg#icon-star"></use>
            </svg>{" "}
            <svg className="star__icon">
              <use xlinkHref="images/sprite.svg#icon-star"></use>
            </svg>
          </div>
        </div>

        <div className="overview__location">
          <svg className="location__icon">
            <use xlinkHref="images/sprite.svg#icon-location-pin"></use>
          </svg>
          <button className="btn__inline">Albufiera, Portugal</button>

          <div className="overview__rating">
            <span className="overview__rating-average">8.6</span>
            <span className="overview__rating-count">429 votes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelOverview;
