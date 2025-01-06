import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import bgImage from "../assets/authentication.png";
import loginImage from "../assets/authentication2.png";
import { authContext } from "../providers/AuthProvider";

const Login = () => {
  const { userLogin, handleGoogleLogin, handleGithubLogin } =
    useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((res) => {
        const redirectTo = location.state?.from || "/";
        navigate(redirectTo);
        toast.success("Login successful!");
      })
      .catch((err) => {
        if (err.code) {
          toast.error("No account found with this email. Please register.");
        }
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
  const handleForgotPassword = () => {
    const email = document.querySelector("input[name='email']").value;
    navigate("/forgetPassword", { state: { email } });
  };
  return (
    <div>
      <ToastContainer />
      
      <div
        className="flex h-screen items-center justify-center bg-gray-100"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="flex flex-col lg:flex-row bg-white shadow-2xl rounded-lg w-4/5 py-6 max-w-4xl"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Left Section - Image */}
          <div className="md:w-1/2  flex items-center justify-center rounded-l-lg">
            <img
              src={loginImage}
              alt="Cafe Illustration"
              className="w-3/4  rounded-lg"
            />
          </div>

          {/* Right Section - Form */}
          <div className="md:w-1/2 p-8">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 text-center">
              Login
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="mb-4">
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
              <div className="mb-4 relative">
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
                {/* <label className="label">
                  <Link
                    to="/forgetPassword"
                    onClick={handleForgotPassword}
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </Link>
                </label> */}
              </div>

              <input
                type="submit"
                value="Sign In"
                className="w-full btn bg-[#D1A054B3] text-white py-2 rounded-md hover:bg-yellow-600"
              />
            </form>

            {/* Create Account */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                New here?{" "}
                <Link
                  to="/register"
                  className="text-yellow-500 font-bold hover:underline"
                >
                  Create a New Account
                </Link>
                <a href="#" className="text-yellow-500 hover:underline"></a>
              </p>
            </div>

            {/* Social Sign-In */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">Or sign in with</p>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
