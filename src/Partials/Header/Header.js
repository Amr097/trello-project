import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <header className="header">
      <img className="logo" src="/images/logo.webp" alt="logo" />

      <form className="search">
        <input
          className="search__input"
          type="text"
          placeholder="Search hotels"
        ></input>
        <button className="search__button">
          {" "}
          <svg className="search__icon">
            <use xlinkHref="images/sprite.svg#icon-magnifying-glass"></use>
          </svg>
        </button>
      </form>

      <nav className="user-info">
        <div className="user-info__icon-box">
          <svg className="user-info__icon">
            <use xlinkHref="images/sprite.svg#icon-bookmark"></use>
          </svg>
          <span className="user-info__notification">13</span>
        </div>

        <div className="user-info__icon-box">
          <svg className="user-info__icon">
            <use xlinkHref="images/sprite.svg#icon-chat"></use>
          </svg>
          <span className="user-info__notification">8</span>
        </div>

        <button className="user-info__user">
          <img src="/images/pngwing.com.webp" alt="User photo" />
          <span className="user-info__username">Hedwig</span>
          <ul className="user-info__list">
            <li className="user-info__list--item">Lorem Ipsum</li>
            <li className="user-info__list--item">Lorem Ipsum</li>
            <li className="user-info__list--item">Lorem Ipsum</li>
            <li className="user-info__list--item">Lorem Ipsum</li>
          </ul>
        </button>
      </nav>
    </header>
  );
};

export default Header;
