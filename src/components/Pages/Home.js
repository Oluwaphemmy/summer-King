import React from "react";
import Announce from "../Announce";
import Categories from "../Categories";
import Navbar from "../Navbar";
import NewsLetter from "../NewsLetter";
import Products from "../Products";
import Slider from "../Slider";

const Home = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
    </div>
  );
};

export default Home;
