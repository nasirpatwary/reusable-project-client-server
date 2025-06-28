import { useAdmin } from "../../../providers/AdminProvider";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../shard/LoadingSpinner";
import ErrorPage from "../ErrorPage";
import AdminChart from "./AdminChart";
const DashboardAdmin = () => {
    const {user} = useAuth()
  const {status, isError, isLoading} = useAdmin()
  if (isLoading) return <LoadingSpinner />
  if (isError) return <ErrorPage />
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4">
          <div className="border border-indigo-300 w-full flex gap-2">
            <div className="text-secondary">
              <div className="avatar avatar-online">
                <div className="w-14 rounded-full">
                  <img src={user && user?.photoURL} />
                </div>
              </div>
            </div>
            <div className="px-2">
              <div>
                <p>Total Price</p>
                <h2 className="">{status.revenue} </h2>
              </div>
            </div>
          </div>
        <div className="border border-indigo-300 w-full px-2">
          <div className="text-primary">{/* image or logo */}</div>
          <p>Total Products</p>
          <h2 className="text-primary">{status.products}</h2>
        </div>

        <div className="border border-indigo-300 w-full px-2">
          <p>Total Views</p>
          <h2 className="text-secondary">{status.users}</h2>
        </div>
        <div className="border border-indigo-300 w-full px-2">
          <p>Total Orders</p>
          <h2 className="text-secondary">{status.payments}</h2>
        </div>
      </div>
      <AdminChart />
    </div>
  );
};

export default DashboardAdmin;
