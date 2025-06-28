import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        // Do something with response data
        return res;
      },
      async (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          await signOutUser();
          navigate("/login")
        }
        // Do something with response error
        return Promise.reject(error);
      }
    );
  }, [signOutUser,navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
