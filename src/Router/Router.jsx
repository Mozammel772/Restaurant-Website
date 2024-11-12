import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../Pages/HomePages/Home/Home";
import LoginPage from "../Pages/LoginPages/LoginPage/LoginPage";
import MenuCategory from "../Pages/MenuPages/MenuCategory/MenuCategory";
import Order from "../Pages/OrderPages/Order/Order";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-menu-item",
        element: <MenuCategory />,
      },
      {
        path: "/order-food-item/:category",
        element: <Order />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);
