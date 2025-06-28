import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Home from "../components/pages/Home";
import Services from "../components/pages/Services";
import About from "../components/pages/About";
import Dashboard from "../components/pages/Dashboard/Dashboard";
import Register from "../components/pages/forms/Register";
import Login from "../components/pages/forms/Login";
import ProductForm from "../components/pages/forms/ProductForm";
import ErrorPage from "../components/pages/ErrorPage";
import DetailsPage from "../components/pages/Details/DetailsPage";
import Orders from "../components/pages/Dashboard/DashboardLeft/Orders";
import Profile from "../components/pages/forms/Profile";
import AllUser from "../components/pages/Users/AllUser";
import Checkout from "../components/pages/Stripe/Checkout";
import PrivateRoute from "../private/PrivateRoute";
import DashboardAdmin from "../components/pages/Dashboard/DashboardAdmin";
import DashboardUser from "../components/pages/Dashboard/DashboardUser";
import PrivateAdmin from "../private/PrivateAdmin";
import PaymentHistory from "../components/pages/Dashboard/PaymentHistory";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="details-page/:id" element={<DetailsPage />} />
      </Route>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      {/* Dashboar default */}
      <Route
        path="/dashboard"
        element={<Navigate to="/dashboard/users" replace />}
      />
      {/* Dashboard Layout with nested routes */}
      <Route path="/dashboard/*" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
        <Route path="users" element={<AllUser />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
        <Route path="userHome" element={<DashboardUser />}></Route>
        <Route path="product-form" element={<ProductForm />}></Route>
        <Route path="orders" element={<Orders />}></Route>
        <Route path="profile" element={<PrivateRoute><Profile /></PrivateRoute>}></Route>
        <Route path="history" element={<PrivateAdmin><PaymentHistory /></PrivateAdmin>}></Route>
        <Route path="adminHome" element={<PrivateAdmin><DashboardAdmin /></PrivateAdmin>}></Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
