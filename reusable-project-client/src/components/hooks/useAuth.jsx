import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const useAuth = () => {
    return useContext(AuthContext)
};

export default useAuth;