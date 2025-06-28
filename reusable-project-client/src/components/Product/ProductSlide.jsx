import useGetMenu from "../hooks/useGetMenu";
import ErrorPage from "../pages/ErrorPage";
import LoadingSpinner from "../shard/LoadingSpinner";
import ProductSlideCard from "./ProductSlideCard";
const ProductSlide = () => {
  const [isLoading, isError, products] = useGetMenu()
  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorPage />;
  const vegetables = products.filter(p => p.category === "vegetables").slice(0, 3);
  const mics = products.filter(p => p.category === "mics items").slice(0, 3);
  const fruits = products.filter(p => p.category === "fresh fruits").slice(0, 3);
    return (
        <div>
           <ProductSlideCard fruits={fruits} mics={mics} vegetables={vegetables}  /> 
        </div>
    );
};

export default ProductSlide;