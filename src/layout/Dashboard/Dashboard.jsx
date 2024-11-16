import React from "react";
import {
  FaAd,
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex p-4">
      <div className="w-64 min-h-screen bg-orange-400 rounded-md">
        <ul className="menu p-4 font-medium text-xl">
          <li>
            <NavLink to={"/dashboard/userHome"}>
              <FaHome></FaHome> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/reservation"}>
              <FaCalendar></FaCalendar> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}>
              <FaShoppingCart></FaShoppingCart> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/add-review"}>
              <FaAd></FaAd>Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/booking"}>
              <FaList></FaList> My Booking
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FaHome></FaHome> Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
