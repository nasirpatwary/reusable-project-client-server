import { NavLink } from "react-router-dom";
import Dropdown from "../Dropdown.jsx/Dropdown";
import useGetCart from "../../../hooks/useGetCart";
import { FaUsers } from "react-icons/fa6";
import { TbHistory } from "react-icons/tb";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import useGetAdmin from "../../../hooks/useGetAdmin";
const DashboardRoute = () => {
  const [carts] = useGetCart();
  const [admin] = useGetAdmin();
  return (
    <div className="space-y-2">
      {admin ? (
        <>
          <NavLink
            to="/dashboard/adminHome"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive
                  ? "border-b transform duration-700 animate__animated animate__fadeInLeft border-indigo-300"
                  : ""
              }`
            }
          >
            <MdOutlineAdminPanelSettings /> Admin Home
          </NavLink>
          <NavLink
            to="/dashboard/history"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive
                  ? "border-b transform duration-700 animate__animated animate__fadeInLeft border-indigo-300"
                  : ""
              }`
            }
          >
            <TbHistory /> Payment History
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            to="/dashboard/users"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive
                  ? "border-b transform duration-700 animate__animated animate__fadeInLeft border-indigo-300"
                  : ""
              }`
            }
          >
            <FaUsers /> All User
          </NavLink>
          <NavLink
            to="/dashboard/userHome"
            className={({ isActive }) =>
              `block ${
                isActive
                  ? "border-b transform duration-700 animate__animated animate__fadeInLeft border-indigo-300"
                  : ""
              }`
            }
          >
            🏠 User Home
          </NavLink>
          <NavLink
            to="/dashboard/product-form"
            className={({ isActive }) =>
              `block ${
                isActive
                  ? "border-b transform duration-700 animate__animated animate__fadeInLeft border-indigo-300"
                  : ""
              }`
            }
          >
            📦 Add Products
          </NavLink>
        </>
      )}
          <NavLink
            to="/dashboard/orders"
            className={({ isActive }) =>
              `block ${
                isActive
                  ? "border-b transform duration-700 animate__animated animate__fadeInLeft border-indigo-300"
                  : ""
              }`
            }
          >
            🧾 Orders <span className="text-indigo-500">({carts.length})</span>
          </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `block ${
            isActive
              ? "border-b transform duration-700 animate__animated animate__fadeInLeft border-indigo-300"
              : ""
          }`
        }
      >
        🏠 Home
      </NavLink>
      <Dropdown />
    </div>
  );
};

export default DashboardRoute;
