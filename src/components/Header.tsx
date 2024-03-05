import { Link, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import Button from './ui/Buttton';

import useAccessToken from '../hooks/useAccessToken';

import { apiService } from '../services/ApiService';

const Container = styled.div`
  margin-bottom: 1rem;

  h1 {
    font-size: 2rem;
  }

  ul {
    display: flex;
    padding-block: 1rem;

    li {
    height: 4rem;
    line-height: 4rem;
    margin-right: 1rem;
  }
}
`;

export default function Header() {
  const navigate = useNavigate();

  const { setAccessToken } = useAccessToken();

  const handleClickLogout = async () => {
    await apiService.logout();
    setAccessToken('');
    navigate('/login');
  };

  return (
    <Container>
      <h1>Shop Administrator</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Button onClick={handleClickLogout}>
              Logout
            </Button>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
