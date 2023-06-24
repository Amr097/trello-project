import React from "react";
import "./Description.scss";

const Description = () => {
  return (
    <section className="detail">
      <div className="description">
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          deleniti modi odit nostrum reprehenderit voluptatum quo assumenda
          corrupti quam. Esse ex nisi omnis tempore,
        </p>
        <p className="paragraph">
          alias quia maiores repudiandae officia aspernatur. alias quia maiores
          repudiandae officia aspernatur.
        </p>

        <ul className="list">
          <li className="list__item">Close to the beach.</li>
          <li className="list__item">Breakfast included.</li>
          <li className="list__item">Free airport shuttle.</li>
          <li className="list__item">Free wifi in all rooms.</li>
          <li className="list__item">Air conditioning and heating.</li>
          <li className="list__item">Pets allowed.</li>
          <li className="list__item">We speak all languages.</li>
          <li className="list__item">Perfect for families.</li>
        </ul>

        <div className="recommend">
          <p className="recommend__count">
            Lucy and 3 other friends recommend this hotel.
          </p>
          <div className="recommend__friends">
            <img
              className="recommend__photo"
              src="images/user-2.webp"
              alt="Reviewer photo"
            />
            <img
              className="recommend__photo"
              src="images/user-3.webp"
              alt="Reviewer photo"
            />
            <img
              className="recommend__photo"
              src="images/user-4.webp"
              alt="Reviewer photo"
            />
            <img
              className="recommend__photo"
              src="images/user-5.webp"
              alt="Reviewer photo"
            />
          </div>
        </div>
      </div>
      <div className="user-reviews">
        <figure className="review">
          <blockquote className="review__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium eveniet rem nesciunt dicta itaque beatae ut tempora
          </blockquote>
          <figcaption className="review__user">
            <img
              src="/images/user-3.webp"
              alt="User Photo"
              className="review__photo"
            />
            <div className="review__user-box">
              <h2 className="review__user-name">Jack Daniel</h2>
              <p className="time">23 May 2023</p>
            </div>
            <p className="review__rate">7.8</p>
          </figcaption>
        </figure>

        <figure className="review">
          <blockquote className="review__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium eveniet rem nesciunt dicta itaque beatae ut tempora
          </blockquote>
          <figcaption className="review__user">
            <img
              src="/images/user-2.webp"
              alt="User Photo"
              className="review__photo"
            />
            <div className="review__user-box">
              <h2 className="review__user-name">Anna Carol</h2>
              <p className="time">23 May 2023</p>
            </div>
            <p className="review__rate">9.8</p>
          </figcaption>
        </figure>

        <button className="btn__inline el--center el-fontsize btn__inline--hover1">
          Show all <span>&rarr;</span>
        </button>
      </div>
    </section>
  );
};

export default Description;
