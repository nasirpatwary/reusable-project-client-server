import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useAxiosPublic from "./useAxiosPublic";

const useDeleteCart = () => {
  const queryClient = useQueryClient()
  const axiosPublic = useAxiosPublic();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (id) => {
      await axiosPublic.delete(`/delete-cart/${id}`);
    },
    onSuccess: () => {
      toast.success("Cart item deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["carts"] });
    },
    onError: (error) => {
      toast.error(`Delete failed: ${error.message}`);
    },
  });
  return [isPending, mutateAsync];
};

export default useDeleteCart;
