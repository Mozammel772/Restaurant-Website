import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import Cart from "../Pages/DashboardPages/Cart/Cart";
import Home from "../Pages/HomePages/Home/Home";
import LoginPage from "../Pages/LoginPages/LoginPage/LoginPage";
import Register from "../Pages/LoginPages/Register/Register";
import MenuCategory from "../Pages/MenuPages/MenuCategory/MenuCategory";
import Order from "../Pages/OrderPages/Order/Order";
import Secret from "../Pages/Secret/Secret";
import PrivateRouter from "./PrivateRouter";

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
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/secret",
        element: (
          <PrivateRouter>
            <Secret />
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
