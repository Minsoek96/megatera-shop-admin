import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

import Header from './Header';
import useCheckAcessToken from '../hooks/useCheckAcessToken';

const Container = styled.div`
  margin-inline: auto;
  width: 90%;
`;

export default function Layout() {
  const ready = useCheckAcessToken();

  if (!ready) {
    return null;
  }

  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}
