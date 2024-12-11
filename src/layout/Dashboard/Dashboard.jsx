import React from "react";
import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const isAdmin = true;
const Dashboard = () => {
  return (
    <div className="flex p-4">
      <div className="w-64 min-h-screen bg-orange-400 rounded-md">
        <ul className="menu p-4 font-medium text-xl">
          {isAdmin ? (
            <>
              <li>
                <NavLink to={"/dashboard/admin/home"}>
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/add/items"}>
                  <FaUtensils></FaUtensils> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manage/items"}>
                  <FaList></FaList> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manage/bookings"}>
                  <FaBook></FaBook>Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/allusers"}>
                  <FaUser></FaUser> All User
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <FaSearch></FaSearch> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <FaEnvelope></FaEnvelope> Contact
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
