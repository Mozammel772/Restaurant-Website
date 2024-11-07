import React from "react";
import { Link } from "react-router-dom";
import CoverSection from "../../Shared/CoverSection/CoverSection";
import MenuIteam from "../../Shared/MenuIteam/MenuIteam";
const MenuCategory2 = ({ item, tittle, img }) => {
  return (
    <div>
      {tittle && <CoverSection img={img} tittle={tittle}></CoverSection>}
      <div className="grid md:grid-cols-2 gap-10 my-20">
        {item.map((item) => (
          <MenuIteam item={item} key={item._id}></MenuIteam>
        ))}
      </div>
      <Link to={`/order-food-item/${tittle}`}>
        <div className="w-full flex justify-center items-center gap-2 py-5">
          <button className="btn btn-outline w-72 border-0 border-b-4  ">
            Order Our Favaout Food
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MenuCategory2;
