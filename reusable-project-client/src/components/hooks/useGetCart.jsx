import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useGetCart = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const {
    data: carts = [],
    isLoading,
    isError
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/carts/${user?.email}`);
      return data;
      // spacific some data get
      // const carts = data.map((item) => ({
      //   id: item._id,
      //   productId: item.productId,
      //   email: item.email,
      //   userName: item.userName,
      //   userImg: item.userImg,
      //   price: item.price,
      //   date: item.date,
      //   quantity: item.quantity,
      //   kilo: item.kilo,
      // }));
      // return carts
    },
  });
  return [carts, isLoading, isError];
};

export default useGetCart;
