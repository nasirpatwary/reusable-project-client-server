import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import NavMenu from "./shard/NavMenu";
import NavCenter from "./shard/NavCenter";
import useAuth from "./hooks/useAuth";
import useGetAdmin from "./hooks/useGetAdmin";
const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const [isAdmin] = useGetAdmin();
  return (
    <div className="navbar shadow-sm p-0 lg:px-14 fixed z-50 bg-white/30 backdrop-blur-sm">
      <div className="navbar-start">
        <Link to="/">
          <img src={logo} alt="brand logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <NavCenter />
          {user && (
          <NavLink
            to={isAdmin ? "/dashboard/adminHome" : "/dashboard/userHome"}
          >
            Dashboard
          </NavLink>
        )}
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex space-x-3">
          {user && user.email ? (
            <>
              <img
                referrerPolicy="no-referrer"
                className="size-8 rounded-full logo cursor-pointer"
                src={
                  user.photoURL ||
                  "https://i.ibb.co/H83Tqhy/student-profile-fimale.png"
                }
                alt=""
              />
              <button onClick={signOutUser} className="cursor-pointer">
                Logout
              </button>
            </>
          ) : (
            <>
              <button>
                <Link to="/register">Register</Link>
              </button>
              <button>
                <Link to="/login">Login</Link>
              </button>
            </>
          )}
        </div>
        <NavMenu isAdmin={isAdmin} />
      </div>
    </div>
  );
};

export default Navbar;
