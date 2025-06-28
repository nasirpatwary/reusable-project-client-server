import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useGetHistory = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: histories = [], isError, isLoading} = useQuery({
        queryKey: ["history", user?.email],
        queryFn: async () => {
            const {data} = await axiosSecure.get(`/payment-history/${user?.email}`)
            return data
        }
    })
    return [histories, isError, isLoading]
};

export default useGetHistory;