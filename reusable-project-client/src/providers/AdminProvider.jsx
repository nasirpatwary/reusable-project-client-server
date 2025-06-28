import { createContext, useContext } from "react";
import useGetStatus from "../components/hooks/useGetStatus";
const AdminContext = createContext();
export const AdminProvider = ({ children }) => {
  const [status, isError, isLoading] = useGetStatus();
  return (
    <AdminContext.Provider value={{ status, isError, isLoading }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);
