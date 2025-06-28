import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useGetUser = () => {
  const axiosPublic = useAxiosPublic();
  const {data: users = [], isError, isLoading} = useQuery({
    queryKey: ["users"], 
    queryFn: async () => {
      const { data } = await axiosPublic.get("/users");
      return data;
    },
  });
  return [users , isError, isLoading];
};

export default useGetUser;
