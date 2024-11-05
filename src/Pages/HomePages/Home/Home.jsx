import React from "react";
import ChefSection from "../../ChefSection/ChefSection";
import Banner from "../Banner/Banner";
import CallSection from "../CallSection/CallSection";
import Catagory from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import SectionCard from "../SectionCard/SectionCard";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Catagory />
      <SectionCard />
      <PopularMenu />
      <CallSection />
      <ChefSection />
      <Featured />
      <Testimonial />
    </div>
  );
};

export default Home;
