import React from "react";
import Description from "./Sections/Description/Description";
import HotelOverview from "./Sections/HotelOverView/HotelOverview";

const Content = () => {
  return (
    <main>
      <HotelOverview />
      <Description />
    </main>
  );
};

export default Content;
