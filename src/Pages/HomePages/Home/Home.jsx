import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CallSection from "../CallSection/CallSection";
import Catagory from "../Category/Category";
import ChefSection from "../ChefSection/ChefSection";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import SectionCard from "../SectionCard/SectionCard";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
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
