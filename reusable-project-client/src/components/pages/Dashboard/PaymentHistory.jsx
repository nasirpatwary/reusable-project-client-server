import useGetHistory from "../../hooks/useGetHistory";
import LoadingSpinner from "../../shard/LoadingSpinner";
import ErrorPage from "../ErrorPage";
import TableHistory from "./TableHistory";
const PaymentHistory = () => {
  const [histories, isError, isLoading] = useGetHistory();
  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorPage />;
  return (
    <>
      {histories.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Email</th>
                <th className="text-nowrap">Category</th>
                <th>Price</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {histories.map((cart) => (
                <TableHistory key={cart._id} {...cart} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

export default PaymentHistory;
