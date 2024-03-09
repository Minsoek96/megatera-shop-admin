import { container } from 'tsyringe';

import { useStore } from 'usestore-ts';

import ProdcutFormStore from '../stores/ProductFormStore';

export default function useProductFormStore() {
  const store = container.resolve(ProdcutFormStore);
  return useStore(store);
}
