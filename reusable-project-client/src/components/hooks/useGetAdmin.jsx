import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
const useGetAdmin = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: isAdmin = false,
    isLoading,
  } = useQuery({
    queryKey: ["admin", user?.email],
    enabled: !!user?.email && !loading,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/admin-user/${user.email}`);
      return data.admin;
    }
  });

  return [isAdmin, isLoading];
};

export default useGetAdmin