import { useParams } from "react-router-dom";
import useGetMenu from "../../hooks/useGetMenu";
import LoadingSpinner from "../../shard/LoadingSpinner";
import ErrorPage from "../ErrorPage";
import Details from "./Details";

const DetailsPage = () => {
  const [isLoading, isError, products] = useGetMenu();
  const { id } = useParams();
  const detailsProducts = products.filter((p) => p._id === id);
  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorPage />;
  return <div>{detailsProducts.map(p => (
    <Details key={p._id} {...p} />
  ))}</div>;
};
export default DetailsPage;
