import React from "react";

const FoodCard = ({ item }) => {
  const { name, price, image, recipe } = item;
  return (
    <div>
      <div className="card bg-base-200 w-96 shadow-xl">
        <figure>
          <img className="w-72 rounded-md" src={image} alt="Shoes" />
        </figure>
        <p className="absolute right-0 mr-12 p-2 rounded-md bg-slate-900 text-white font-mono text-xl">${price}</p>
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="text-2xl font-bold font-mono py-2">{name}!</h2>
          <p className="text-center px-5 text-md">{recipe}</p>
          <div className="w-full flex justify-center items-center gap-2 py-5">
            <button className="btn btn-outline w-72 border-0 border-b-4  ">
             Add To Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
