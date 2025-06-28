import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const tabs = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/services", name: "Services" },
  // { path: "/dashboard/profile", name: "Profile" },
];
const NavCenter = () => {
  const [hoverHome, setHoverHome] = useState(false);
  return (
    <div className="menu space-x-5 items-center menu-horizontal px-1">
      <div className="navbar-center hidden lg:flex">
        <div className="relative flex p-1 items-center rounded-xl w-fit mx-auto">
          {tabs.map((tab) =>
            tab.name === "Home" ? (
              <div
                key={tab.name}
                className="relative"
                onMouseEnter={() => setHoverHome(true)}
                onMouseLeave={() => setHoverHome(false)}
              >
                {/* Home Main NavLink */}
                <NavLink
                  to={tab.path}
                  className="relative px-4 py-2 text-sm font-medium text-black"
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.div
                          layoutId="active-pill"
                          className="absolute inset-0 border-b border-indigo-500 z-0"
                          transition={{
                            type: "tween",
                            ease: "easeInOut",
                            duration: 0.5,
                          }}
                        />
                      )}
                      <span className="relative z-10">{tab.name}</span>
                    </>
                  )}
                </NavLink>
                {/* Home Dropdown */}
                <AnimatePresence>
                  {hoverHome && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                      className="absolute top-11 left-0 bg-white border-t border-indigo-500 shadow-lg w-40 z-50"
                    >
                      <NavLink
                        to="/home1"
                        className="block px-4 py-2 text-sm text-black hover:bg-orange-100"
                      >
                        Home1
                      </NavLink>
                      <NavLink
                        to="/home2"
                        className="block px-4 py-2 text-sm text-black hover:bg-orange-100"
                      >
                        Home2
                      </NavLink>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={tab.name}
                to={tab.path}
                className="relative px-4 py-2 text-sm font-medium text-black"
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 border-b border-indigo-500 z-0"
                        transition={{
                          type: "tween",
                          ease: "easeInOut",
                          duration: 0.5,
                        }}
                      />
                    )}
                    <span className="relative z-10">{tab.name}</span>
                  </>
                )}
              </NavLink>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default NavCenter;
