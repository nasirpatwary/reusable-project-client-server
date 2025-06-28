import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../components/hooks/useAuth";
import useGetAdmin from "../components/hooks/useGetAdmin";
import LoadingSpinner from "../components/shard/LoadingSpinner";

const PrivateAdmin = ({children}) => {
    const location = useLocation()
    const {user, loading} = useAuth()
    const [isAdmin, isLoading] = useGetAdmin()
    if(loading || isLoading) return <LoadingSpinner />
    if(user && isAdmin) return children
    return <Navigate state={location.pathname} to="/login" />
};

export default PrivateAdmin;