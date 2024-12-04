import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../components/Home";
import AllReviews from "../components/AllReviews";
import AddReview from "../components/AddReview";
import MyReview from "../components/MyReview";
import GameWatchList from "../components/GameWatchlist";
import Login from "../components/Login";
import Register from "../components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/review')
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
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ],
  },
]);

export default router;
