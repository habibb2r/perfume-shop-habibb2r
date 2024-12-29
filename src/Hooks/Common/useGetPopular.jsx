import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useGetPopular = () => {
    const axiosSecure = useAxiosSecure()
    const{data: popularPerfumes, isLoading, refetch} = useQuery({
        queryKey: ['popularPerfumes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/popular')
            return res.data
        }
    })
    return [popularPerfumes, isLoading, refetch]
};

export default useGetPopular;