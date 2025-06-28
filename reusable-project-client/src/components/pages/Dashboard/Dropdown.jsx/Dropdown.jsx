import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import { IoSettingsOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { SiSimplelogin } from "react-icons/si";
import {
  SignalIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
const Dropdown = () => {
  const {signOutUser, user, signInGoogle} = useAuth()
  return (
    <div>
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 outline-0 cursor-pointer text-sm font-semibold">
          <IoSettingsOutline size={18} className="animate-spin" /> My Profile
        </MenuButton>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-in"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <MenuItems className="absolute mt-2 w-52 p-2  rounded text-sm shadow focus:outline-none">
            <MenuItem>
              {({ active }) => (
                <button
                  className={`group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 ${
                    active && "bg-black/10"
                  }`}
                >
                  <img className="size-4 rounded-full" src={user&& user?.photoURL || "https://i.ibb.co/H83Tqhy/student-profile-fimale.png"} alt={user?.displayName} />
                  <Link to="/dashboard/profile">Profile</Link>
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <button
                  onClick={signInGoogle}
                  className={`group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 ${
                    active && "bg-black/10"
                  }`}
                >
                  <FcGoogle className="size-4 fill-black/30" />
                  Google
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <button
                  className={`group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 ${
                    active && "bg-black/10"
                  }`}
                >
                  <SiSimplelogin className="size-4 fill-black/30" />
                  <Link to="/login">Login</Link>
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <button
                  className={`group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 ${
                    active && "bg-black/10"
                  }`}
                >
                  <SignalIcon className="size-4 fill-black/30" />
                  <Link to="/register">Register</Link>
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <button
                  onClick={signOutUser}
                  className={`group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 ${
                    active && "bg-black/10"
                  }`}
                >
                  <TrashIcon className="size-4 fill-black/30" />
                  Logout
                </button>
              )}
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
};

export default Dropdown;
