import React from "react";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import feature from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item  bg-fixed">
      <SectionTittle
        subHeading={"Check in Out"}
        heading={"Featured Item"}
      ></SectionTittle>
      <div className="flex justify-center items-center py-10 px-20 gap-5 bg-opacity-40">
        <div>
          <img src={feature} alt="Featured Item" />
        </div>
        <div>
          <p>Aug 20, 2024</p>
          <p className="uppercase">Where Can i Get Some</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            asperiores explicabo deserunt hic facere maxime doloribus. Omnis a
            cupiditate beatae sit tenetur quae ex consequuntur, doloremque sint
            minus quo voluptatum?
          </p>
          <button className="btn btn-outline mt-2 border-0 border-b-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
