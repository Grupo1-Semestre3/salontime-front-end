import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import Button from '../../../components/common/Button/Button';
import { showErrorMessage, showSuccessMessage } from '../../../utils/notifications';
import './Login.css';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.senha) {
      showErrorMessage('Preencha todos os campos!');
      return;
    }

    setLoading(true);
    
    try {
      await login(formData);
      showSuccessMessage('Login realizado com sucesso!');
      
      // Redirect based on user type (assuming admin vs client logic)
      const user = JSON.parse(localStorage.getItem('usuario') || '{}');
      if (user.tipo === 'admin') {
        navigate('/admin/calendario');
      } else {
        navigate('/servicos');
      }
    } catch (error) {
      console.error('Login error:', error);
      showErrorMessage('Email ou senha incorretos!');
    } finally {
      setLoading(false);
    }
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="login">
      {/* Left column */}
      <div className="login__imagem">
        <img src="/assets/img/logincadastro.png" className="login__img" alt="Login" />
      </div>

      {/* Right column (form) */}
      <div className="login__form">
        <div className="login__form__header">
          <p className="titulo-1">Entrar</p>
          <p className="paragrafo-2">
            Não tem uma conta? {' '}
            <span 
              className="login__form__link" 
              onClick={() => handleNavigation('/cadastro')}
            >
              Cadastre-se
            </span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="login__form__container">
          <div className="login__form__group">
            <label htmlFor="email" className="login__form__label">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Digite seu e-mail"
              className="login__form__input"
              required
            />
          </div>

          <div className="login__form__group">
            <label htmlFor="senha" className="login__form__label">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleInputChange}
              placeholder="Digite sua senha"
              className="login__form__input"
              required
            />
          </div>

          <Button 
            type="submit" 
            variant="rosa" 
            disabled={loading}
            className="login__form__button"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </Button>
        </form>

        <div className="login__form__footer">
          <p className="paragrafo-2">
            Esqueceu sua senha? {' '}
            <span className="login__form__link">
              Clique aqui
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;