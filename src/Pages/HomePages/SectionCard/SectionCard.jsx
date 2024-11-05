import React from "react";
import "./sectionCard.css";

const SectionCard = () => {
  return (
    <div className="section-Card flex flex-col justify-center items-center bg-fixed ">
      <div className="text-white  ">
        <h1 className="text-3xl font-mono font-bold mb-3 text-center">Bistro Boss</h1>
        <p className="text-xs px-20 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default SectionCard;
