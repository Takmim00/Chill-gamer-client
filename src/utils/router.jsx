import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../components/Home";
import AllReviews from "../components/AllReviews";
import AddReview from "../components/AddReview";
import MyReview from "../components/MyReview";
import GameWatchList from "../components/GameWatchlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/allReviews',
        element:<AllReviews></AllReviews>
      },
      {
        path:'/addReview',
        element:<AddReview></AddReview>
      },
      {
        path:'/myReview',
        element:<MyReview></MyReview>
      },
      {
        path:'/watchList',
        element:<GameWatchList></GameWatchList>
      }
    ],
  },
]);

export default router;
