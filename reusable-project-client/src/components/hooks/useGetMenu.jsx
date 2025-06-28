// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "./useAxiosPublic";

// const useGetMenu = (sortOption, search) => {
//   const axiosPublic = useAxiosPublic();

//   const fetchProducts = async () => {
//     const { data } = await axiosPublic.get("/products", {
//       params: {
//         sort: sortOption,
//         search
//       },
//     });
//     return data;
//   };

//   const {
//     data: products = [],
//     isLoading,
//     isError,
//   } = useQuery({
//     queryKey: ["products",  sortOption, search ],
//     queryFn: fetchProducts
//   });

//   return [isLoading, isError, products];
// };

// export default useGetMenu;

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
const useGetMenu = (sortOption) => {
  const axiosPublic = useAxiosPublic();

  const fetchProducts = async () => {
    const { data } = await axiosPublic.get("/products", {
      params: {
        sort: sortOption,
      },
    });
    return data;
  };

  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products", sortOption],
    queryFn: fetchProducts,
  });

  return [isLoading, isError, products];
};

export default useGetMenu;
