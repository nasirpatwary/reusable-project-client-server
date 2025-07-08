import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { successToast, warningToast } from "../shard/Toastify";
const usePostMenu = () => {
  const queryClient = useQueryClient();
  const axiosPublic = useAxiosPublic();
  const { mutateAsync } = useMutation({
    mutationFn: (newTodo) => axiosPublic.post("/products", newTodo),
    onSuccess: () => {
      successToast("Add Product Successfully!");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error) => {
      warningToast(error.message);
    },
  });
  return [mutateAsync];
};

export default usePostMenu;
