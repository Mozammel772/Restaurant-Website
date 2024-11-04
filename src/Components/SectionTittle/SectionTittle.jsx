import React from "react";

const SectionTittle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mx-auto">
      <p className="text-yellow-400 text-xl ">---   {subHeading} ---</p>
      <div className="divider w-4/12 mx-auto"></div>
      <h3 className="text-4xl uppercase py-3">{heading}</h3>
      <div className="divider w-4/12 mx-auto"></div>
    </div>
  );
};

export default SectionTittle;
