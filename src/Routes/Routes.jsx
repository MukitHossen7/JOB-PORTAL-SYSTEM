import { createBrowserRouter } from "react-router-dom";
import MainComponents from "../Main/MainComponents";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainComponents></MainComponents>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
