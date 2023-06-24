import React from "react";
import "./CTA.scss";

const CTA = () => {
  return (
    <section className="cta">
      <h2 className="cta__text">
        good news! we have 4 free rooms for your selected dates!
      </h2>
      <button className="slide__btn">
        <p className="slide__btn--text-1">book now</p>
        <p className="slide__btn--text-2">only 4 rooms left</p>
      </button>
    </section>
  );
};

export default CTA;
