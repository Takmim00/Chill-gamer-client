import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import bgImage from "../assets/authentication.png";
import loginImage from "../assets/authentication2.png";
import { authContext } from "../providers/AuthProvider";

const Register = () => {
  const { setUser, createNewUser, handleGoogleLogin, handleGithubLogin } =
    useContext(authContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    if (password.length < 6) {
      toast.error("Password must contain at least 6 characters");
      return;
    }

    if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
      toast.error(
        "Password must contain at least one lowercase and one uppercase letter."
      );
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = { ...result.user, displayName: name, photoURL: photo };
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message || "An error occurred";
        toast.error(errorMessage);
      });
  };

  const googleLogIngHandler = () => {
    handleGoogleLogin().then((res) => {
      const redirectTo = location.state?.from || "/";
      navigate(redirectTo);
    });
  };
  const githubLogIngHandler = () => {
    handleGithubLogin().then((res) => {
      const redirectTo = location.state?.from || "/";
      navigate(redirectTo);
    });
  };

  return (
    <div className="flex justify-center items-center">
      <ToastContainer />
      {/* <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-md p-10 border-2 ">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="password"
              className="input input-bordered"
              required
            />
            <Link
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-xs absolute right-3 bottom-3"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </Link>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary font-semibold text-xl rounded-md">Register</button>
          </div>
        </form>
        <div className="flex justify-center gap-2 mb-4">
          <button
            onClick={googleLogIngHandler}
            className="btn text-xl  rounded-lg"
          >
            <FaGoogle />
            Google
          </button>
          <button
            onClick={githubLogIngHandler}
            className="btn text-xl  rounded-lg "
          >
            <FaGithub />
            GitHub
          </button>
        </div>
        <p className="text-center font-semibold">
          Already you have an account?{" "}
          <Link to="/login" className="text-red-500">
            Login
          </Link>
        </p>
      </div> */}
      <div
        className="flex max-h-screen  w-full items-center justify-center bg-gray-100"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="flex flex-col lg:flex-row bg-white shadow-2xl rounded-lg w-4/5 my-60  max-w-4xl"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Left Section - Form */}
          <div className="md:w-1/2 p-8">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 text-center">
              Register
            </h2>

            <form onSubmit={handleSubmit} className="card-body">
              {/* Email Input */}
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  placeholder="Type here"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
              <div className="">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Photo URL
                </label>
                <input
                  type="text"
                  id="photo"
                  name="photo"
                  placeholder="Type here"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
              <div className="">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Type here"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              {/* Password Input */}
              <div className=" relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <Link
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn btn-xs absolute right-3 bottom-2"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </Link>
              </div>

              <input
                type="submit"
                value="Register"
                className="w-full btn bg-[#D1A054B3] text-white py-2 rounded-md hover:bg-yellow-600"
              />
            </form>

            {/* Create Account */}
            <div className=" text-center">
              <p className="text-sm text-gray-600">
                Already registered?{" "}
                <Link
                  to="/login"
                  className="text-yellow-500 font-bold hover:underline"
                >
                  Go to log in
                </Link>
              </p>
            </div>

            {/* Social Sign-In */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">Or sign up with</p>
              <div className="flex justify-center mt-2 space-x-4">
                <button
                  onClick={googleLogIngHandler}
                  className="p-2 rounded-full bg-gray-100 text-2xl hover:bg-gray-200"
                >
                  <FaGoogle />
                </button>
                <button
                  onClick={githubLogIngHandler}
                  className="p-2 rounded-full bg-gray-100 text-2xl hover:bg-gray-200"
                >
                  <FaGithub />
                </button>
                
              </div>
            </div>
          </div>
          {/* Right Section - Image */}
          <div className="md:w-1/2  flex items-center justify-center rounded-l-lg">
            <img
              src={loginImage}
              alt="Cafe Illustration"
              className="w-3/4  rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
