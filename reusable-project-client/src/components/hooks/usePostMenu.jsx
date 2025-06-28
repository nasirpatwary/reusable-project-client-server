import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
const usePostMenu = () => {
  const queryClient = useQueryClient();
  const axiosPublic = useAxiosPublic();
  const { isSuccess, isError, mutateAsync} = useMutation({
    mutationFn: (newTodo) => axiosPublic.post("/products", newTodo),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["products"] }),
  });
  return [isError, isSuccess, mutateAsync];
};

export default usePostMenu;
