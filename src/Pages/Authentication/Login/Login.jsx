import Lottie from "lottie-react";
import loginAnimation from "../../../assets/Lottie/login.json";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    console.log(email, password);
  };
  return (
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-14">
          <div className="text-center lg:text-left w-full lg:w-1/2">
            <Lottie animationData={loginAnimation}></Lottie>
          </div>
          <div className="card bg-base-100  max-w-xl shrink-0 shadow-md w-full lg:w-1/2">
            <h1 className="text-2xl lg:text-4xl font-bold text-center py-4">
              Login now!
            </h1>
            <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
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
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
