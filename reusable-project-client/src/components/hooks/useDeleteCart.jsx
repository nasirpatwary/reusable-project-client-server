import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useAxiosPublic from "./useAxiosPublic";

const useDeleteCart = () => {
  const queryClient = useQueryClient()
  const axiosPublic = useAxiosPublic();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosPublic.delete(`/delete-cart/${id}`);
      return data;
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
