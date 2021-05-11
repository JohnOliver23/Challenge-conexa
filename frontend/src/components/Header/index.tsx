import React from 'react';
import logo from '../../assets/img/logo.png';
import { Container, BtnLogout } from './styles';
import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <Container hasUser={!!user}>
      <img src={logo} alt="logo" />
      {user ? (
        <BtnLogout type="button" onClick={signOut}>
          Sair
        </BtnLogout>
      ) : (
        ''
      )}
    </Container>
  );
};

export default Header;
