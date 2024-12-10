import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../../Firebase/firebase.init";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const handleLogOut = () => {
    signOut(auth).then(() => {
      toast.success("Successfully logged out");
    });
  };
  return (
    <div className="pt-8">
      <div className="navbar bg-base-100">
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
              <NavLink to="/">Home</NavLink>
            </ul>
          </div>
          <Link to="/" className="text-xl font-semibold">
            JOB_PORTAL
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink to="/">Home</NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          {user?.email ? (
            <button onClick={handleLogOut} className="btn btn-primary">
              LogOut
            </button>
          ) : (
            <div>
              <Link to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
              <Link to="/register">
                {" "}
                <button className="btn btn-primary">Register</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
