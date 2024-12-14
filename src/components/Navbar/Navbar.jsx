import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../../Firebase/firebase.init";
import toast from "react-hot-toast";
import navIcon from "../../assets/icon/icons8-job-application-48.png";
import { ThemeContext } from "../../Provider/ThemeProvider";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { toggle } = useContext(ThemeContext);
  const handleLogOut = () => {
    signOut(auth).then(() => {
      toast.success("Successfully logged out");
    });
  };
  return (
    <div className="pt-4 pb-2 sticky top-0 z-40 bg-base-100 dark:bg-gray-800 dark:text-white/80">
      <div className="navbar  w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto ">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-5 font-semibold"
            >
              <NavLink to="/">Home</NavLink>
              {user && (
                <div className="flex flex-col gap-5 ">
                  <NavLink to="/myApplications">My Application</NavLink>
                  <NavLink to="/addJob">Add Job</NavLink>
                  <NavLink to="/myPostedJob">My Posted Job</NavLink>
                </div>
              )}
            </ul>
          </div>
          <Link
            to="/"
            className="text-xl font-semibold bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 text-transparent bg-clip-text flex "
          >
            <img
              src={navIcon}
              alt="Job Portal Logo"
              className="h-8 w-8 ml-2 rounded-md"
            />
            JOB_PORTAL
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10 font-semibold">
            <NavLink to="/">Home</NavLink>
            {user && (
              <div className="flex items-center gap-10 ">
                <NavLink to="/myApplications">My Application</NavLink>
                <NavLink to="/addJob">Add Job</NavLink>
                <NavLink to="/myPostedJob">My Posted Job</NavLink>
              </div>
            )}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <input
            type="checkbox"
            className="toggle"
            onClick={() => toggle()}
            defaultChecked
          />
          {user?.email ? (
            <button onClick={handleLogOut} className="btn btn-primary">
              LogOut
            </button>
          ) : (
            <div>
              <Link to="/login">
                <button className="btn bg-indigo-600 hover:bg-indigo-600 text-white">
                  Login
                </button>
              </Link>
              <Link to="/register">
                {" "}
                <button className="btn bg-indigo-600 hover:bg-indigo-600 text-white">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
