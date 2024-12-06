import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../components/Home";
import AllReviews from "../components/AllReviews";
import AddReview from "../components/AddReview";
import MyReview from "../components/MyReview";
import GameWatchList from "../components/GameWatchlist";
import Login from "../components/Login";
import Register from "../components/Register";
import ReviewDetails from "../components/ReviewDetails";
import UpdateReview from "../components/UpdateReview";
import PrivateRoute from "../components/private/PrivateRoute";
import ErrorPage from "../components/Errorpage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/review/limit')
      },
      {
        path:'/allReviews',
        element:
          <AllReviews></AllReviews>
        ,
        loader: ()=> fetch('http://localhost:5000/review/all')
      },
      {
        path:'/addReview',
        element:<PrivateRoute>
          <AddReview></AddReview>
        </PrivateRoute>
      },
      {
        path:'/reviewDetails/:id',
        element:<ReviewDetails></ReviewDetails>
      },
      {
        path:'/myReview',
        element:<PrivateRoute><MyReview></MyReview></PrivateRoute>
      },
      {
        path:'/watchList',
        element:<PrivateRoute><GameWatchList></GameWatchList></PrivateRoute>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/updateReview/:id',
        element:<UpdateReview></UpdateReview>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/review/${params.id}`
          ),
      }
    ],
  },
]);

export default router;
