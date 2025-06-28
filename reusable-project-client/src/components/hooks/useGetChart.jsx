import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useGetChart = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: charts = [],
    isError: chartErr,
    isLoading: chartLoading,
  } = useQuery({
    queryKey: ["chart"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/chart-status");
      return data;
    },
  });
  return [charts, chartErr, chartLoading];
};

export default useGetChart;
