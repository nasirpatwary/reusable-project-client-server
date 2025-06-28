import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useAxiosPublic from "./useAxiosPublic";

const usePatchCart = () => {
  const queryClient = useQueryClient();
  const axiosPublic = useAxiosPublic();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (updateData) => {
      const { id, ...body } = updateData;
      const { data } = await axiosPublic.patch(`/patch-cart/${id}`, body);
      return data;
    },
    onSuccess: () => {
      toast.success("Cart item updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["carts"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return [mutateAsync, isPending];
};

export default usePatchCart;
