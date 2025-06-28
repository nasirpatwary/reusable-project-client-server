import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Outlet, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import DashboardCalendar from "./DashboardRight/DashboardCalendar";
import DashboardRoute from "./DashboardLeft/DashboardRoute";
import PaymentButton from "./DashboardRight/PaymentButton";
const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const { user } = useAuth();
  const loaction = useLocation();
  const userHome = loaction.pathname.includes("/dashboard/userHome");
  const adminHome = loaction.pathname.includes("/dashboard/adminHome");
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Overlay for mobile sidebar (left) */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          sidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setSidebarOpen(false)}
      />
      {/* Overlay for mobile right sidebar */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          rightSidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setRightSidebarOpen(false)}
      />

      {/* Left Sidebar */}
      <aside
        className={`fixed z-50 inset-y-0 left-0 w-full max-w-64 p-4 border bg-white transform transition-transform duration-300 lg:relative lg:translate-x-0 lg:block ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6 lg:hidden">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setSidebarOpen(false)}>
            <X />
          </button>
        </div>
        <div className="text-center space-y-4">
          <img
            className="w-8 h-8 logo cursor-pointer rounded-full mx-auto shadow-lg shadow-cyan-500/50 bg-cyan-500 scale-125 ring-2 ring-cyan-500"
            referrerPolicy="no-referrer"
            src={
              user?.photoURL ||
              "https://i.ibb.co/H83Tqhy/student-profile-fimale.png"
            }
            alt={user?.displayName}
          />
          <div>
            <h2 className="text-xl font-semibold hidden lg:block">
              {user?.displayName}
            </h2>
            <p className="text-sm">{user?.email}</p>
          </div>
        </div>
        {/* Dashboard Left Side */}
        <div className="mt-10">
          <DashboardRoute />
        </div>
      </aside>

      {/* Right Sidebar (Mobile Only) */}
      <aside
        className={`fixed z-50 inset-y-0 right-0 w-full max-w-64 border bg-white transform transition-transform duration-300 lg:hidden ${
          rightSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Right Menu</h2>
          <button onClick={() => setRightSidebarOpen(false)}>
            <X />
          </button>
        </div>
        <DashboardCalendar />
        <PaymentButton />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar for mobile */}
        <header className="flex items-center justify-between shadow px-4 py-2 lg:hidden">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu className="text-gray-800" />
          </button>
          <button onClick={() => setRightSidebarOpen(true)}>
            <Menu className="text-gray-800" />
          </button>
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto p-4">
            <Outlet />
          </main>

          {/* Right Sidebar (Desktop Only) */}
          {!userHome && !adminHome && (
            <div className="w-full max-w-64 hidden lg:block border">
              <>
                <DashboardCalendar />
                <PaymentButton />
              </>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
