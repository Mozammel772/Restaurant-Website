import React, { useEffect, useState } from "react";
import SectionTittle from "../../../../Components/SectionTittle/SectionTittle";
import MenuIteam from "../../../Shared/MenuIteam/MenuIteam";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularIteams = data.filter(
          (item) => item.category === "popular"
        );
        setMenu(popularIteams);
      });
  }, []);
  return (
    <div className="my-10">
      <SectionTittle
        subHeading={"Popular Menu"}
        heading={"From Our Menu"}
      ></SectionTittle>
      <div className="grid md:grid-cols-2 gap-10 ">
        {menu.map((item) => (
          <MenuIteam item={item} key={item._id}></MenuIteam>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
