import useGetUser from "../../hooks/useGetUser";
import LoadingSpinner from "../../shard/LoadingSpinner";
import ErrorPage from "../ErrorPage";
import TableUser from "./TableUser";

const AllUser = () => {
  const [users, isLoading, isError] = useGetUser();
  if(isLoading) return <LoadingSpinner />
  if(isError) return <ErrorPage />
  return (
    <>
    {
      users.length > 0 ?
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th className="text-nowrap">Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { users.map(cart => (
            <TableUser key={cart._id} {...cart} />
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

export default AllUser;
