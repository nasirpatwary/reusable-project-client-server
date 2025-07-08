import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { successToast, warningToast } from "../shard/Toastify";
const usePostCart = () => {
  const queryClient = useQueryClient();
  const axiosPublic = useAxiosPublic();
  const { mutateAsync } = useMutation({
    mutationFn: async (newTodo) => await axiosPublic.post(`/cart`, newTodo),
    onSuccess: () => {
      successToast("Post Successfully!");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error) => {
      warningToast(error.message);
    },
  });
  return [mutateAsync];
};
export default usePostCart;
