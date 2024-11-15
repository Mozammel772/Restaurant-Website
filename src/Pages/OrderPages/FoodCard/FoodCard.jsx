import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxioSecure from "../../../hooks/useAxioSecure";
import useCart from "../../../hooks/useCart";
import { AuthContext } from "../../LoginPages/AuthProvider/AuthProvider";

const FoodCard = ({ item }) => {
  const { name, price, image, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axioSecures = useAxioSecure();
  const [, refetch] = useCart();

  const handleAddToCard = () => {
    if (user && user.email) {
      // TODO :
      const cardItem = {
        menuID: _id,
        email: user.email,
        name,
        price,
        image,
      };
      axioSecures.post("/cards ", cardItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You Are Not Logged In",
        text: "Please Log In Add to Card",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
    // Add logic to add food to the cart here
  };
  return (
    <div>
      <div className="card bg-base-200 w-96 shadow-xl">
        <figure>
          <img className="w-72 rounded-md" src={image} alt="Shoes" />
        </figure>
        <p className="absolute right-0 mr-12 p-2 rounded-md bg-slate-900 text-white font-mono text-xl">
          ${price}
        </p>
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="text-2xl font-bold font-mono py-2">{name}!</h2>
          <p className="text-center px-5 text-md">{recipe}</p>
          <div className="w-full flex justify-center items-center gap-2 py-5">
            <button
              onClick={handleAddToCard}
              className="btn btn-outline w-72 border-0 border-b-4  "
            >
              Add To Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
