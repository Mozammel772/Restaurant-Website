import React from "react";

const MenuIteam = ({ item }) => {
  // console.log(item);
  const { category, image, name, price, _id, recipe } = item;
  return (
    <div className="flex">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[120px] "
        src={image}
        alt=""
      />
      <div className="ml-3">
        <h3 className="uppercase text-xl font-mono font-medium">{name} -----</h3>
        <p className="w-[70%]">{recipe}</p>
      </div>
      <p className="text-orange-600 font-mono font-bold text-xl w-[20%]">$ {price}</p>
    </div>
  );
};

export default MenuIteam;
