import useGetMenu from "../hooks/useGetMenu";
import ErrorPage from "../pages/ErrorPage";
import TrandingItem from "../Product/TrandingItem";
import LoadingSpinner from "./LoadingSpinner";
const TrandingPropes = () => {
  const [isLoading, isError, products] = useGetMenu();
  const micsProducts = products.filter(
    (product) => product.category === "mics items"
  );
  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorPage />;

  return <TrandingItem micsProducts={micsProducts} />;
};

export default TrandingPropes;
