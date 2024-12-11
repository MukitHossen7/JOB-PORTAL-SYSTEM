import Lottie from "lottie-react";
import animationRegister from "../../../assets/Lottie/register.json";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { createUsers, signInGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegister = (data) => {
    console.log(data);
    const name = data.name;
    const photo = data.photo;
    const email = data.email;
    const password = data.password;
    console.log(name, photo, email, password);
    createUsers(email, password)
      .then((result) => {
        toast.success("Registration successfully");
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error creating user: ", error);
        toast.error("Already use this email address");
      });
  };
  const handleRegisterGoogle = () => {
    signInGoogle().then(() => {
      toast.success("Register in Google successful");
    });
  };
  return (
    <div className="py-20">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-full lg:w-1/2">
            <Lottie animationData={animationRegister}></Lottie>
          </div>
          <div className="card  w-full max-w-xl shrink-0 shadow-md lg:w-1/2">
            <h1 className="text-4xl font-semibold text-center py-4">
              Register now!
            </h1>
            <form className="card-body" onSubmit={handleSubmit(handleRegister)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name*</span>
                </label>
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Please enter your name",
                    },
                  })}
                  placeholder="full name"
                  className="input input-bordered"
                />
                <span className="text-xs text-red-500 font-semibold mt-1">
                  {errors.name?.message}
                </span>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL*</span>
                </label>
                <input
                  {...register("photo", {
                    required: {
                      value: true,
                      message: "Please enter a photo URL",
                    },
                  })}
                  placeholder="photo URL"
                  className="input input-bordered"
                />
                <span className="text-xs text-red-500 font-semibold mt-1">
                  {errors.photo?.message}
                </span>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email*</span>
                </label>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Please enter a valid email address",
                    },
                  })}
                  placeholder="email"
                  type="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-xs text-red-500 font-semibold mt-1">
                    {errors.email?.message}
                  </span>
                )}
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
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z]).{2,}$/,
                      message:
                        "Password must contain at least one uppercase letter, one lowercase letter",
                    },
                  })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <span className="text-xs text-red-500 font-semibold mt-1">
                  {errors.password?.message}
                </span>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-indigo-600 hover:bg-indigo-600 text-white">
                  Register
                </button>
              </div>
              <div className="divider text-black pb-0">OR</div>
            </form>
            <button
              onClick={handleRegisterGoogle}
              className="border border-indigo-600 mt-0 px-4 py-2 rounded-full mx-8 font-semibold mb-8"
            >
              Register in Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
