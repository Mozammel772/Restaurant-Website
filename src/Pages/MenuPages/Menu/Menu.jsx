import React from "react";
import { Helmet } from "react-helmet-async";
import menuImage from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../HomePages/PopularMenu/PopularMenu";
import CoverSection from "../../Shared/CoverSection/CoverSection";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <CoverSection img={menuImage} tittle={"Our Menu"} />
      <PopularMenu></PopularMenu>
      <CoverSection img={menuImage} tittle={"Our Menu"} />
      <PopularMenu></PopularMenu>
      <CoverSection img={menuImage} tittle={"Our Menu"} />
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
