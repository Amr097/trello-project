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
        <div className="review">
          <img src="" alt="" />
          <p></p>
          <div>
            <img src="" alt="" />
            <div>
              <h2></h2>
              <p></p>
            </div>
            <p></p>
          </div>
        </div>
        <div className="review"></div>
        <button className="btn__inline"></button>
      </div>
    </section>
  );
};

export default Description;
