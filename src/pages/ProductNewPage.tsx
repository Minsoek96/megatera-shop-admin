import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import useProductFormStore from '../hooks/useProductFormStore';
import useFetchProducts from '../hooks/useFetchProducts';
import useFetchCategories from '../hooks/useFetchCategories';

export default function ProductNewPage() {
  const navige = useNavigate();

  const { refresh } = useFetchProducts();
  const { categories } = useFetchCategories();

  const [_, store] = useProductFormStore();

  useEffect(() => {
    if (!categories.length) {
      return;
    }

    store.reset();
    store.changeCateogry(categories[0]);
  });

  const handleComplete = () => {
    refresh();
    navige('/products');
  };

  if (!categories.length) {
    return null;
  }

  return (
    <ProductNewForm
      categories={categories}
      onComplete={handleComplete}
    />
  );
}
