import Lottie from "lottie-react";
import loginAnimation from "../../../assets/Lottie/login.json";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
const Login = () => {
  const { signInUser, signInGoogle, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  if (user) {
    // const redirect = location.state || "/";
    return <Navigate to={location.state || "/"}></Navigate>;
  }
  const handleLogin = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    signInUser(email, password)
      .then((result) => {
        toast.success("Login successful");
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Invalid credentials email/password");
      });
  };
  const handleSignInGoogle = () => {
    signInGoogle().then(() => {
      toast.success("Login successful with Google");
    });
  };
  return (
    <div className="py-20">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-14">
          <div className="text-center lg:text-left w-full lg:w-1/2 ">
            <div className="">
              <Lottie animationData={loginAnimation}></Lottie>
            </div>
          </div>
          <div className="card max-w-xl shrink-0 shadow-md w-full lg:w-1/2 ">
            <h1 className="text-2xl lg:text-4xl font-semibold text-center py-4">
              Login now!
            </h1>
            <form className="card-body " onSubmit={handleSubmit(handleLogin)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email*</span>
                </label>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                  })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                <span className="text-xs text-red-500 font-semibold mt-1">
                  {errors.email?.message}
                </span>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password*</span>
                </label>
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                  })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <span className="text-xs text-red-500 font-semibold mt-1">
                  {errors.password?.message}
                </span>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-indigo-600 hover:bg-indigo-600 text-white">
                  Login
                </button>
              </div>
              <div className="divider text-black pb-0">OR</div>
            </form>
            <button
              onClick={handleSignInGoogle}
              className="border border-indigo-600 mt-0 px-4 py-2 rounded-full mx-8 font-semibold mb-8"
            >
              Login Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
