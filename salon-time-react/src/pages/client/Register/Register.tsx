import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import Button from '../../../components/common/Button/Button';
import { showErrorMessage, showSuccessMessage } from '../../../utils/notifications';
import { validateRegistrationFields } from '../../../utils/helpers';
import { authApi } from '../../../services/api';
import './Register.css';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    nome_usuario: '',
    email_usuario: '',
    senha_usuario: '',
    confirmar_senha: '',
    nome_empresa: '',
    cnpj: ''
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
    
    const { nome_usuario, email_usuario, senha_usuario, confirmar_senha, nome_empresa, cnpj } = formData;

    // Validate required fields
    if (!nome_usuario || !email_usuario || !senha_usuario || !nome_empresa || !cnpj) {
      showErrorMessage('Preencha todos os campos!');
      return;
    }

    // Validate password confirmation
    if (senha_usuario !== confirmar_senha) {
      showErrorMessage('As senhas não coincidem!');
      return;
    }

    // Additional validation
    const validation = validateRegistrationFields(nome_usuario, '', email_usuario, senha_usuario, confirmar_senha);
    if (validation !== true) {
      showErrorMessage(validation);
      return;
    }

    setLoading(true);
    
    try {
      // Register user
      await authApi.register(formData);
      showSuccessMessage('Cadastro realizado com sucesso!');
      
      // Auto login after registration
      await login({
        email: email_usuario,
        senha: senha_usuario
      });
      
      navigate('/admin/calendario');
    } catch (error: any) {
      console.error('Registration error:', error);
      showErrorMessage('Houve um erro ao tentar realizar o cadastro!');
    } finally {
      setLoading(false);
    }
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="cadastro">
      {/* Left column */}
      <div className="cadastro__imagem">
        <img src="/assets/img/logincadastro.png" className="cadastro__img" alt="Cadastro" />
      </div>

      {/* Right column (form) */}
      <div className="cadastro__form">
        <div className="cadastro__form__header">
          <p className="titulo-1">Cadastrar</p>
          <p className="paragrafo-2">
            Já tem uma conta? {' '}
            <span 
              className="cadastro__form__link" 
              onClick={() => handleNavigation('/login')}
            >
              Faça login
            </span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="cadastro__form__container">
          <div className="cadastro__form__group">
            <label htmlFor="nome_usuario" className="cadastro__form__label">
              Nome do Usuário
            </label>
            <input
              type="text"
              id="nome_usuario"
              name="nome_usuario"
              value={formData.nome_usuario}
              onChange={handleInputChange}
              placeholder="Digite seu nome"
              className="cadastro__form__input"
              required
            />
          </div>

          <div className="cadastro__form__group">
            <label htmlFor="email_usuario" className="cadastro__form__label">
              E-mail
            </label>
            <input
              type="email"
              id="email_usuario"
              name="email_usuario"
              value={formData.email_usuario}
              onChange={handleInputChange}
              placeholder="Digite seu e-mail"
              className="cadastro__form__input"
              required
            />
          </div>

          <div className="cadastro__form__group">
            <label htmlFor="senha_usuario" className="cadastro__form__label">
              Senha
            </label>
            <input
              type="password"
              id="senha_usuario"
              name="senha_usuario"
              value={formData.senha_usuario}
              onChange={handleInputChange}
              placeholder="Digite sua senha"
              className="cadastro__form__input"
              required
            />
          </div>

          <div className="cadastro__form__group">
            <label htmlFor="confirmar_senha" className="cadastro__form__label">
              Confirmar Senha
            </label>
            <input
              type="password"
              id="confirmar_senha"
              name="confirmar_senha"
              value={formData.confirmar_senha}
              onChange={handleInputChange}
              placeholder="Confirme sua senha"
              className="cadastro__form__input"
              required
            />
          </div>

          <div className="cadastro__form__group">
            <label htmlFor="nome_empresa" className="cadastro__form__label">
              Nome da Empresa
            </label>
            <input
              type="text"
              id="nome_empresa"
              name="nome_empresa"
              value={formData.nome_empresa}
              onChange={handleInputChange}
              placeholder="Digite o nome da empresa"
              className="cadastro__form__input"
              required
            />
          </div>

          <div className="cadastro__form__group">
            <label htmlFor="cnpj" className="cadastro__form__label">
              CNPJ
            </label>
            <input
              type="text"
              id="cnpj"
              name="cnpj"
              value={formData.cnpj}
              onChange={handleInputChange}
              placeholder="Digite o CNPJ"
              className="cadastro__form__input"
              required
            />
          </div>

          <Button 
            type="submit" 
            variant="rosa" 
            disabled={loading}
            className="cadastro__form__button"
          >
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;