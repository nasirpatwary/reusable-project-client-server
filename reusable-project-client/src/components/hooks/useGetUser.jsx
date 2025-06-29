import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useGetUser = () => {
  const axiosSecure = useAxiosSecure()
  const {user} = useAuth()
  const {data: users = [], isError, isLoading} = useQuery({
    queryKey: ["users", user.email], 
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/${user?.email}`);
      return data;
    },
  });
  return [users , isError, isLoading];
};

export default useGetUser;
