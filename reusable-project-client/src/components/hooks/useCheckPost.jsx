import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { toast } from "react-toastify";

const useCheckPost = () => {
    const queryClient = useQueryClient()
    const axiosSecure = useAxiosSecure()
    const {mutateAsync} = useMutation({
        mutationFn: async (payment) => {
        await axiosSecure.post("/payment", payment) 
        },
        onSuccess: () =>{
            toast.success("payment successfully!")
            queryClient.invalidateQueries({queryKey: ["carts"]})
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })
    return [mutateAsync]
};

export default useCheckPost;