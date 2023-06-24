import React from "react";
import CTA from "./Sections/CTA/CTA";
import Description from "./Sections/Description/Description";
import HotelOverview from "./Sections/HotelOverView/HotelOverview";

const Content = () => {
  return (
    <main>
      <HotelOverview />
      <Description />
      <CTA />
    </main>
  );
};

export default Content;
