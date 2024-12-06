import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { authContext } from "../providers/AuthProvider";

const Register = () => {
  const { setUser, createNewUser, handleGoogleLogin } =
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

  return (
    <div className="flex justify-center items-center">
      <ToastContainer />
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-md p-10 border-2 ">
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
            <button className="btn btn-neutral rounded-sm">Register</button>
          </div>
        </form>
        <div className=" items-center flex justify-center mb-4">
          <button
            onClick={googleLogIngHandler}
            className="btn text-xl  rounded-lg w-[80%]"
          >
            <FaGoogle />
            Google
          </button>
        </div>
        <p className="text-center font-semibold">
          Already you have an account?{" "}
          <Link to="/login" className="text-red-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
