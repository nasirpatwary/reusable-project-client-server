import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useGetStatus = () => {
  const axiosSecure = useAxiosSecure();
  const {data: status = {}, isError, isLoading } = useQuery({ queryKey: ["status"], queryFn: async () => {
    const {data} = await axiosSecure.get("/admin-status")
    return data
  } });
  return [status, isError, isLoading];
};

export default useGetStatus;
