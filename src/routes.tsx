import Layout from './components/Layout';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserListPage from './pages/UserListPage';
import CategoryListPage from './pages/CategoryListPage';
import CategoryNewPage from './pages/CategoryNewPage';
import CategoryEditPage from './pages/CategoryEditPage';
import OrderListPage from './pages/OrderListPage';
import OrderDetailPage from './pages/OrderDetailPage';
import OrderEditPage from './pages/OrderEditPage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductNewPage from './pages/ProductNewPage';
import ProductEditPage from './pages/ProductEditPage';

const routes = [
  { path: '/login', element: <LoginPage /> },
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/users', element: <UserListPage /> },
      { path: '/categories', element: <CategoryListPage /> },
      { path: '/categories/new', element: <CategoryNewPage /> },
      { path: '/categories/:id/edit', element: <CategoryEditPage /> },
      { path: '/orders', element: <OrderListPage /> },
      { path: '/orders/:id', element: <OrderDetailPage /> },
      { path: '/orders/:id/edit', element: <OrderEditPage /> },
      { path: '/products', element: <ProductListPage /> },
      { path: '/products/:id', element: <ProductDetailPage /> },
      { path: '/products/new', element: <ProductNewPage /> },
      { path: '/products/:id/edit', element: <ProductEditPage /> },
    ],
  },
];

export default routes;
