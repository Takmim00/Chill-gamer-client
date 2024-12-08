import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../providers/AuthProvider";
import { useState, useEffect } from "react";
import "./home.css";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import { GrGamepad } from "react-icons/gr";

const Navbar = () => {
  const { user, logout } = useContext(authContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-theme" : "light-theme";
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="navbar py-4 md:w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/" className="flex items-center">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/allReviews" className="flex items-center">
                All Reviews
              </NavLink>
            </li>
            <li>
              <NavLink to="/addReview" className="flex items-center">
                Add Review
              </NavLink>
            </li>
            <li>
              <NavLink to="/myReview" className="flex items-center">
                My Reviews
              </NavLink>
            </li>
            <li>
              <NavLink to="/watchList" className="flex items-center">
                Game WatchList
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="md:text-2xl gap-2  font-bold flex items-center">
        <GrGamepad className="text-3xl text-green-400" /> <p>Ga<span className="text-green-400">meX</span></p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4 px-1">
          <li>
            <NavLink to="/" className="flex items-center">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/allReviews" className="flex items-center">
              All Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to="/addReview" className="flex items-center">
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/myReview" className="flex items-center">
              My Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to="/watchList" className="flex items-center">
              Game WatchList
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <>
            <NavLink to="/login">
              <button className="btn bg-green-400 text-white">Login</button>
            </NavLink>
            <NavLink to="/register">
              <button className="btn bg-green-400 text-white">
                Registration
              </button>
            </NavLink>
          </>
        ) : (
          <div className="flex items-center space-x-4">
            <div
              className="my-anchor-element"
              data-tip={user?.displayName || "User"}
            >
              <img
                src={user?.photoURL}
                alt=""
                className="w-10 h-10 rounded-full object-cover border-2 border-green-400"
              />
              <Tooltip anchorSelect=".my-anchor-element" place="bottom">
                {user?.displayName || "User"}
              </Tooltip>
            </div>
            <button
              onClick={logout}
              className="px-4 py-2 bg-green-400 text-white rounded hover:bg-green-600 transition"
            >
              Log Out
            </button>
          </div>
        )}
        <div className="flex justify-end p-4">
          <button
            onClick={toggleTheme}
            className="px-3 py-3 rounded-full bg-gray-800 text-white dark:bg-gray-300 dark:text-black transition-colors"
          >
            {theme === "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
