import React from "react";

import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import useMenu from "../../../hooks/useMenu";
import ChefDisplay from "./ChefDisplay";

const ChefSection = () => {
  const [menu] = useMenu();
  const chef = menu.filter((item) => item.name === "Escalope de Veau");
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
