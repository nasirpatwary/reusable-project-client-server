import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { toast } from "react-toastify";
const usePatchUser = () => {
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async ({id, ...updateDoc}) => {
      const { data } = await axiosPublic.patch(`/user-update/${id}`, updateDoc);
      return data;
    },
    onSuccess: () => {
      toast.success("status update successfully!");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return [mutateAsync, isPending];
};

export default usePatchUser;
