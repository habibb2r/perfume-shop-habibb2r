import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useGetProducts = ({category}) => {
    console.log(category)
    const axiosSecure = useAxiosSecure()

    const {data: products, isLoading, refetch} = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allProducts/${category}`)
            return res.data
        }
    })

    return [products, isLoading, refetch]
};

export default useGetProducts;