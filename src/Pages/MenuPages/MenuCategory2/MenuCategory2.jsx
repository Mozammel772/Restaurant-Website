import React from "react";
import CoverSection from "../../Shared/CoverSection/CoverSection";
import MenuIteam from "../../Shared/MenuIteam/MenuIteam";
const MenuCategory2 = ({ item, tittle, img }) => {
  return (
    <div>
      {tittle && (
        <CoverSection img={img} tittle={tittle}></CoverSection>
      )}
      <div className="grid md:grid-cols-2 gap-10 my-20">
        {item.map((item) => (
          <MenuIteam item={item} key={item._id}></MenuIteam>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory2;
