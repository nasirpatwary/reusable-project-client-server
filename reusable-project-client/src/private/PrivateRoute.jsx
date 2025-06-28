import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../components/hooks/useAuth";
import LoadingSpinner from "../components/shard/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) return <LoadingSpinner />;
  if (user) return children;
  return <Navigate state={location.pathname} to="/login" />;
};

export default PrivateRoute;
