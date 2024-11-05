import React, { useEffect, useState } from "react";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import MenuIteam from "../../Shared/MenuIteam/MenuIteam";

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
        subHeading={"Check it out"}
        heading={"From Our Menu"}
      ></SectionTittle>
      <div className="grid md:grid-cols-2 gap-10 my-20">
        {menu.map((item) => (
          <MenuIteam item={item} key={item._id}></MenuIteam>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button className="btn btn-outline mt-2 border-0 border-b-4 px-20 py-5">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
