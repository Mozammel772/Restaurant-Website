import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../Pages/HomePages/Home/Home";
import MenuCategory from "../Pages/MenuPages/MenuCategory/MenuCategory";

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
    ],
  },
]);
