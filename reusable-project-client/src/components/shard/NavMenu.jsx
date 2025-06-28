import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const tabs = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/services", name: "Services" },
];
const NavMenu = ({isAdmin}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const { user, signOutUser } = useAuth();
  return (
    <div className="overflow-hidden lg:hidden">
      {/* Toggle Button */}
      <button onClick={toggleMenu} className="">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu Items */}
      <div
        className={`${
          isOpen ? "right-0" : "-right-[50%]"
        } w-1/3 md:w-1/4 absolute duration-1000 shadow border-t bg-white border-indigo-500 z-50 mt-4`}
      >
        <div className="flex flex-col p-1 rounded-xl w-fit mx-auto gap-2">
          {tabs.map((tab) => (
            <NavLink key={tab.name} to={tab.path}>
              {({ isActive }) => (
                <span
                  className={`text-sm text-black ${
                    isActive
                      ? "text-indigo-500 underline underline-offset-8"
                      : ""
                  }`}
                >
                  {tab.name}
                </span>
              )}
            </NavLink>
          ))}
          {user && (
            <NavLink
              to={isAdmin ? "/dashboard/adminHome" : "/dashboard/userHome"}
            >
              Dashboard
            </NavLink>
          )}
          <div>
            {user && user?.email ? (
              <>
                <div className="flex gap-2">
                  <img
                    className="w-8 h-8 border rounded-full"
                    src={user && user?.photoURL}
                    alt={user?.displayName}
                  />
                  <button
                    onClick={signOutUser}
                    className="animate__animated animate__fadeInUp text-black"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
            <div className="flex flex-col">
                  <NavLink to="/register">
              {({ isActive }) => (
                <span
                  className={`text-sm text-black ${
                    isActive
                      ? "text-indigo-500 underline underline-offset-8"
                      : ""
                  }`}
                >
                  Register
                </span>
              )}
            </NavLink>
                <NavLink to="/login">
              {({ isActive }) => (
                <span
                  className={`text-sm text-black ${
                    isActive
                      ? "text-indigo-500 underline underline-offset-8"
                      : ""
                  }`}
                >
                  Login
                </span>
              )}
            </NavLink>
            </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
