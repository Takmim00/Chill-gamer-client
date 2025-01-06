import { createBrowserRouter } from "react-router-dom";
import AddReview from "../components/AddReview";
import AllReviews from "../components/AllReviews";
import ErrorPage from "../components/Errorpage";
import GameWatchList from "../components/GameWatchlist";
import Home from "../components/Home";
import Login from "../components/Login";
import MyReview from "../components/MyReview";
import Register from "../components/Register";
import ReviewDetails from "../components/ReviewDetails";
import UpdateReview from "../components/UpdateReview";
import PrivateRoute from "../components/private/PrivateRoute";
import MainLayout from "../mainLayout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/review/limit"),
      },
      {
        path: "/allReviews",
        element: <AllReviews></AllReviews>,
        loader: () => fetch("http://localhost:5000/review/all"),
      },
      {
        path: "/addReview",
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/reviewDetails/:id",
        element: (
          <PrivateRoute>
            <ReviewDetails></ReviewDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/myReview",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/watchList",
        element: (
          <PrivateRoute>
            <GameWatchList></GameWatchList>
          </PrivateRoute>
        ),
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
        path: "/updateReview/:id",
        element: <UpdateReview></UpdateReview>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/review/${params.id}`),
      },
    ],
  },
]);

export default router;
