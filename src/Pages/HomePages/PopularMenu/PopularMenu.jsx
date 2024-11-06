import React from "react";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import useMenu from "../../../hooks/useMenu";
import MenuIteam from "../../Shared/MenuIteam/MenuIteam";

const PopularMenu = () => {
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularIteams = data.filter(
  //         (item) => item.category === "popular"
  //       );
  //       setMenu(popularIteams);
  //     });
  // }, []);
  const [menu] = useMenu();
  const popularIteams = menu.filter((item) => item.category === "popular");

  return (
    <div className="my-10">
      <SectionTittle
        subHeading={"Check it out"}
        heading={"From Our Menu"}
      ></SectionTittle>
      <div className="grid md:grid-cols-2 gap-10 my-20">
        {popularIteams.map((item) => (
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
