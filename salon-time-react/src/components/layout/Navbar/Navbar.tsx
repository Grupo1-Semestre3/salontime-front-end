import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import Button from '../../common/Button/Button';
import './Navbar.css';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <nav className="nav_institucional_pai">
      <div className="nav_institucional_coluna">
        <p className="paragrafo-2 underline" onClick={() => handleNavigation('/')}>
          Página Inicial
        </p>
        <p className="paragrafo-2 underline-hover" onClick={() => handleNavigation('/servicos')}>
          Serviços
        </p>
      </div>
      
      <div className="nav_institucional_coluna">
        <img src="/assets/svg/logo_black.svg" alt="logo" style={{ height: '50px' }} />
      </div>
      
      <div className="nav_institucional_coluna">
        {!isLoggedIn ? (
          <>
            <Button variant="branco" onClick={() => handleNavigation('/login')}>
              Entrar
            </Button>
            <Button variant="rosa" onClick={() => handleNavigation('/cadastro')}>
              Cadastre-se
            </Button>
          </>
        ) : (
          <Button variant="rosa" onClick={() => handleNavigation('/perfil')}>
            Configurações
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;