import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayouts from "../Layouts/MainLayouts";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import PrivateRoute from "./PrivateRoute";
import ApplyForm from "../Pages/ApplyForm/ApplyForm";
import MyApplication from "../Pages/MyApplication/MyApplication";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJob from "../Pages/MyPostedJob/MyPostedJob";
import ViewApplication from "../Pages/ViewApplication/ViewApplication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <DetailsPage></DetailsPage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/applyForm/:id",
        element: (
          <PrivateRoute>
            <ApplyForm></ApplyForm>
          </PrivateRoute>
        ),
      },
      {
        path: "/myApplications",
        element: (
          <PrivateRoute>
            <MyApplication></MyApplication>
          </PrivateRoute>
        ),
      },
      {
        path: "/addJob",
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/myPostedJob",
        element: (
          <PrivateRoute>
            <MyPostedJob></MyPostedJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/viewApplication/:job_id",
        element: (
          <PrivateRoute>
            <ViewApplication></ViewApplication>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/apply_jobs/job/${params.job_id}`),
      },
    ],
  },
]);

export default router;
