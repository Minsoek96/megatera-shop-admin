import Layout from './components/Layout';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserListPage from './pages/UserListPage';
import CategoryListPage from './pages/CategoryListPage';
import CategoryNewPage from './pages/CategoryNewPage';
import CategoryEditPage from './pages/CategoryEditPage';

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
    ],
  },
];

export default routes;
