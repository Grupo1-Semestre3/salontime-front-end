import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'rosa' | 'branco' | 'navbar' | 'navbar-ativo' | 'sair';
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'rosa',
  disabled = false,
  className = '',
  style,
}) => {
  const getButtonClass = () => {
    switch (variant) {
      case 'rosa':
        return 'btn-rosa';
      case 'branco':
        return 'btn-branco';
      case 'navbar':
        return 'btn-navbar';
      case 'navbar-ativo':
        return 'btn-navbar-ativo';
      case 'sair':
        return 'btn-sair';
      default:
        return 'btn-rosa';
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${getButtonClass()} ${className}`}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;