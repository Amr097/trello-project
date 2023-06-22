import React from "react";
import Header from "@/Partials/Header/Header";
import Content from "@/Container/Content";
import Navigation from "@/Partials/Navigation/Navigation";

const Home = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="content">
          <Navigation />
          <Content />
        </div>
      </div>
    </>
  );
};

export default Home;
