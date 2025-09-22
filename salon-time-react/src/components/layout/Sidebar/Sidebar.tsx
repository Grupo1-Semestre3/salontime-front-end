import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import Button from '../../common/Button/Button';
import './Sidebar.css';

interface SidebarItem {
  label: string;
  path: string;
  icon: string;
}

const sidebarItems: SidebarItem[] = [
  {
    label: 'Calendário',
    path: '/admin/calendario',
    icon: '/assets/svg/nav_dash/icon_house_outline.svg'
  },
  {
    label: 'Serviços',
    path: '/admin/servicos',
    icon: '/assets/svg/nav_dash/icon_tesoura_outline.svg'
  },
  {
    label: 'Usuários',
    path: '/admin/usuarios',
    icon: '/assets/svg/nav_dash/icon_user_outline.svg'
  },
  {
    label: 'Controle Mensal',
    path: '/admin/controle',
    icon: '/assets/svg/nav_dash/icon_doc_outline.svg'
  },
  {
    label: 'Perfil',
    path: '/admin/perfil',
    icon: '/assets/svg/nav_dash/icon_smile_outline.svg'
  }
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="dash_navbar_pai">
      <div className="dash_navbar_filho">
        <img 
          src="/assets/svg/logo_black.svg" 
          alt="logo" 
          style={{ maxWidth: '169px' }} 
        />
        <p className="paragrafo-e bold">Bem vinda {user?.nome || 'Marina'}!</p>
        
        <div className="dash_navbar_column">
          {sidebarItems.map((item) => (
            <Button
              key={item.path}
              variant={isActive(item.path) ? 'navbar-ativo' : 'navbar'}
              onClick={() => handleNavigation(item.path)}
            >
              <img
                style={{ maxWidth: '24px' }}
                src={item.icon}
                alt={item.label}
              />
              {item.label}
            </Button>
          ))}
        </div>
        
        <Button variant="sair" onClick={handleLogout}>
          <img
            style={{ maxWidth: '24px' }}
            src="/assets/svg/nav_config/icon_exit.svg"
            alt="sair"
          />
          Sair
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;