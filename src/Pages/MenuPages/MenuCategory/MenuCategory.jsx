import React from "react";
import { Helmet } from "react-helmet-async";
import CoverImage from "../../../assets/menu/banner3.jpg";
import img from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import useMenu from "../../../hooks/useMenu";
import CoverSection from "../../Shared/CoverSection/CoverSection";
import MenuCategory2 from "../MenuCategory2/MenuCategory2";

const MenuCategory = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <CoverSection img={CoverImage} tittle={"Our Menu"}></CoverSection>
      <SectionTittle subHeading={"Don't miss"} heading={"Today's Offer"} />
      <MenuCategory2 item={offered} />
      <MenuCategory2 item={dessert} tittle={"Dessert"} img={img} />
      <MenuCategory2 item={soup} tittle={"Soup"} img={soupImg} />
      <MenuCategory2 item={pizza} tittle={"pizza"} img={pizzaImg} />
      <MenuCategory2 item={salad} tittle={"salad"} img={saladImg} />
    </div>
  );
};

export default MenuCategory;
