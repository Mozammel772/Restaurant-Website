import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../layout/Main/Main";
import Home from "../Pages/HomePages/Home/Home";

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
        path: "/menu",
        element:<App></App>,
      },
    ],
  },
]);
