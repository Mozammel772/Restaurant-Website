import React, { useEffect, useState } from "react";
import SectionTittle from "../../Components/SectionTittle/SectionTittle";
import ChefDisplay from "./ChefDisplay";

const ChefSection = () => {
  const [chef, setChef] = useState([]);
  useEffect(() => {
    fetch("chef.json")
      .then((res) => res.json())
      .then((data) => {
        const chefData = data.filter(
          (item) => item.name === "Escalope de Veau"
        );
        setChef(chefData);
      });
  }, []);
  return (
    <div className="my-10">
      <SectionTittle
        subHeading={"CHEF RECOMMENDS"}
        heading={"Should Try"}
      ></SectionTittle>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 ">
        {chef.map((chef) => (
          <ChefDisplay chef={chef} key={chef._id}></ChefDisplay>
        ))}
      </div>
    </div>
  );
};

export default ChefSection;
