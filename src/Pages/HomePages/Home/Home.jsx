import React from "react";
import Banner from "../Banner/Banner";
import Catagory from "../Category/Category";
import Featured from "../Featured/Featured";
import Testimonial from "../Testimonial/Testimonial";
import PopularMenu from "./PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner />
      <Catagory />
      <PopularMenu />
      <Featured />
      <Testimonial />
    </div>
  );
};

export default Home;
