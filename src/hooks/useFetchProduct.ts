import useFetch from './useFetch';

import { ProductDetail } from '../types';

export default function useFetchProduct({ productId }:{productId:string}) {
  const {
    data, loading, error, mutate,
  } = useFetch<ProductDetail>(`/products/${productId}`);

  return {
    product: data,
    error,
    loading,
    async refresh() {
      mutate();
    },
  };
}
