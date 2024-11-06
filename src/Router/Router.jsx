import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../Pages/HomePages/Home/Home";
import AllMenuItem from "../Pages/MenuPages/AllMenuItem/AllMenuItem";

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
        element: <AllMenuItem />,
      },
    ],
  },
]);
