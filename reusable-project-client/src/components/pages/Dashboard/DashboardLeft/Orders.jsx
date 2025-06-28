import useGetCart from "../../../hooks/useGetCart";
import LoadingSpinner from "../../../shard/LoadingSpinner";
import ErrorPage from "../../ErrorPage";
import TableCart from "./TableCart";
const MyCarts = () => {
  const [carts, isLoading, isError] = useGetCart();
  if(isLoading) return <LoadingSpinner />
  if(isError) return <ErrorPage />
  return (
    <>
    {
      carts.length > 0 ?
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th className="text-nowrap">Price</th>
            <th className="text-nowrap">Quantity</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { carts.map(cart => (
            <TableCart key={cart._id} {...cart} />
          ))}
        </tbody>
      </table>
    </div>
    : 
    <ErrorPage />
    }
    </>
  );
};

export default MyCarts;
