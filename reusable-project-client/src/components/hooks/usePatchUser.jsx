import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { toast } from "react-toastify";
const usePatchUser = () => {
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: async ({id, ...updateDoc}) => {
      await axiosPublic.patch(`/user-update/${id}`, updateDoc);
    },
    onSuccess: () => {
      toast.success("status update successfully!");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return [mutateAsync];
};

export default usePatchUser;
