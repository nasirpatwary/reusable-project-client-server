import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
const usePostCart = () => {
  const queryClient = useQueryClient();
  const axiosPublic = useAxiosPublic();
  const { isSuccess, isError, mutateAsync } = useMutation({
    mutationFn: async (newTodo) => await axiosPublic.post(`/cart`, newTodo),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
  });
  return [isError, isSuccess, mutateAsync];
};
export default usePostCart;
